import nodemailer from 'nodemailer'
import {
  contactErrors,
  contactSchema,
  type ContactResult,
} from './contact-schema'

import {
  renderContactConfirmationEmail,
  renderContactEmail,
} from './contact-email.server'

type DeliveryConfig = {
  apiKey?: string
  from?: string
  to?: string
  gmailUser?: string
  gmailAppPassword?: string
}

export type MailMessage = {
  from: string
  to: string
  replyTo: string
  subject: string
  text: string
  html: string
}

export type MailSender = (
  message: MailMessage,
) => Promise<{ messageId?: string }>

function hasReceiptId(receipt: unknown): receipt is { id: string } {
  return Boolean(
    receipt &&
    typeof receipt === 'object' &&
    'id' in receipt &&
    typeof receipt.id === 'string' &&
    receipt.id,
  )
}

function canSendGuestConfirmation(
  from: string,
  guestEmail: string,
  ownerEmail: string,
) {
  if (!from.toLowerCase().includes('@resend.dev')) return true
  return guestEmail.trim().toLowerCase() === ownerEmail.trim().toLowerCase()
}

function createGmailSender(user: string, appPassword: string): MailSender {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user.trim(),
      pass: appPassword.replace(/\s+/g, ''),
    },
  })
  return async (message) => transporter.sendMail(message)
}

// Keep provider credentials and recipients entirely on the server.
export async function deliverContact(
  input: unknown,
  config: DeliveryConfig,
  send: typeof fetch = fetch,
  sendMail?: MailSender,
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) {
    return {
      ok: false,
      message: 'Please check the highlighted fields.',
      errors: contactErrors(parsed.error),
    }
  }
  if (parsed.data.website)
    return {
      ok: false,
      message: 'Your message could not be sent. Please email me directly.',
    }
  if (!config.apiKey || !config.from || !config.to) {
    return {
      ok: false,
      message:
        'The contact form is temporarily unavailable. Please email me directly.',
    }
  }

  const { name, email, message } = parsed.data
  const ownerSubject = `Portfolio contact from ${name}`
  const ownerText = `Name: ${name}\nEmail: ${email}\n\n${message}`
  const ownerHtml = renderContactEmail({ name, email, message })
  const confirmationSubject = 'Thanks for reaching out — Noah / Nguyễn Viết Hòa'
  const confirmationText = `Hi ${name},\n\nThank you for getting in touch through my portfolio. I’ve received your message and will get back to you as soon as I can.\n\nYour message:\n${message}\n\nBest regards,\nNoah / Nguyễn Viết Hòa`

  try {
    // 1. Send notification to portfolio owner via Resend.
    const response = await send('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: email,
        subject: ownerSubject,
        text: ownerText,
        html: ownerHtml,
      }),
      signal: AbortSignal.timeout(10000),
    })
    if (response.ok) {
      const receipt: unknown = await response.json()
      if (hasReceiptId(receipt)) {
        // 2. Send automatic confirmation email to guest via Gmail SMTP (preferred) or verified Resend domain.
        const gmailUser = config.gmailUser?.trim()
        const gmailAppPassword = config.gmailAppPassword?.replace(/\s+/g, '')
        const confirmationHtml = renderContactConfirmationEmail({
          name,
          message,
          replyTo: config.to,
        })

        if (gmailUser && gmailAppPassword) {
          try {
            const mailer =
              sendMail ?? createGmailSender(gmailUser, gmailAppPassword)
            await mailer({
              from: `Noah / Viết Hòa <${gmailUser}>`,
              to: email,
              replyTo: config.to,
              subject: confirmationSubject,
              text: confirmationText,
              html: confirmationHtml,
            })
          } catch {
            // Best-effort guest confirmation; owner notification already succeeded.
          }
        } else if (canSendGuestConfirmation(config.from, email, config.to)) {
          try {
            await send('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${config.apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: config.from,
                to: [email],
                reply_to: config.to,
                subject: confirmationSubject,
                text: confirmationText,
                html: confirmationHtml,
              }),
              signal: AbortSignal.timeout(10000),
            })
          } catch {
            // Best-effort guest confirmation; owner notification already succeeded.
          }
        }
        return { ok: true }
      }
    }
  } catch {
    // Do not expose provider errors, credentials, or message content to logs/UI.
  }
  return {
    ok: false,
    message:
      'I couldn’t confirm that your message was sent. Please try again or email me directly.',
  }
}
