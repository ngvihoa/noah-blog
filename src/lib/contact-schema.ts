import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Please enter your name.')
    .max(100, 'Use at most 100 characters.')
    .regex(/^[^\r\n]+$/, 'Please use a single line.'),
  email: z
    .string()
    .trim()
    .max(254)
    .email('Please enter a valid email address.'),
  message: z
    .string()
    .trim()
    .min(10, 'Please write at least 10 characters.')
    .max(5000, 'Use at most 5,000 characters.'),
  website: z.string().max(200).optional().default(''),
})

export type ContactInput = z.input<typeof contactSchema>
export type ContactErrors = Partial<
  Record<'name' | 'email' | 'message', string>
>
export type ContactResult =
  { ok: true } | { ok: false; message: string; errors?: ContactErrors }

export function contactErrors(error: z.ZodError): ContactErrors {
  const errors: ContactErrors = {}
  for (const issue of error.issues) {
    const field = issue.path[0]
    if (field === 'name' || field === 'email' || field === 'message') {
      errors[field] ??= issue.message
    }
  }
  return errors
}
