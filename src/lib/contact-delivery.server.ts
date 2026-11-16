import {
  contactErrors,
  contactSchema,
  type ContactResult,
} from './contact-schema'

type DeliveryConfig = { apiKey?: string; from?: string; to?: string }

// Keep provider credentials and recipients entirely on the server.
export async function deliverContact(
  input: unknown,
  config: DeliveryConfig,
  send: typeof fetch = fetch,
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
  try {
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
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    })
    if (response.ok) {
      const receipt: unknown = await response.json()
      if (
        receipt &&
        typeof receipt === 'object' &&
        'id' in receipt &&
        typeof receipt.id === 'string' &&
        receipt.id
      )
        return { ok: true }
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
