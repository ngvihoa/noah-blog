import { createServerFn } from '@tanstack/react-start'
import { deliverContact } from './contact-delivery.server'

export const sendContact = createServerFn({ method: 'POST' })
  .validator((input: unknown) => input)
  .handler(({ data }) =>
    deliverContact(data, {
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
    }),
  )
