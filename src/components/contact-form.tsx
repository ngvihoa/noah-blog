import { useRef, useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import {
  contactErrors,
  contactSchema,
  type ContactErrors,
} from '~/lib/contact-schema'
import { sendContact } from '~/lib/contact'

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle')
  const [feedback, setFeedback] = useState('')
  const sending = useRef(false)
  const statusRef = useRef<HTMLParagraphElement>(null)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current) return
    const form = event.currentTarget
    const input = Object.fromEntries(new FormData(form))
    const parsed = contactSchema.safeParse(input)
    setErrors({})
    if (!parsed.success) {
      const nextErrors = contactErrors(parsed.error)
      setErrors(nextErrors)
      setStatus('error')
      setFeedback('Please check the highlighted fields.')
      const field = Object.keys(nextErrors).find(
        (key) => nextErrors[key as keyof ContactErrors],
      )
      if (field) (form.elements.namedItem(field) as HTMLElement | null)?.focus()
      return
    }
    sending.current = true
    setStatus('pending')
    setFeedback('Sending your message…')
    try {
      const result = await sendContact({ data: parsed.data })
      if (result.ok) {
        form.reset()
        setStatus('success')
        setFeedback('Thanks for reaching out. Your message has been sent.')
      } else {
        setErrors(result.errors ?? {})
        setStatus('error')
        setFeedback(result.message)
      }
    } catch {
      setStatus('error')
      setFeedback(
        'I couldn’t confirm that your message was sent. Please try again or email me directly.',
      )
    } finally {
      sending.current = false
      statusRef.current?.focus()
    }
  }

  return (
    <form
      method="post"
      className="contact-form"
      onSubmit={submit}
      noValidate
      aria-label="Send a message"
      aria-busy={status === 'pending'}
    >
      <fieldset disabled={status === 'pending'}>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name ? (
              <p className="contact-form__error" id="contact-name-error">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? 'contact-email-error' : undefined
              }
            />
            {errors.email ? (
              <p className="contact-form__error" id="contact-email-error">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={5000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message
                ? 'contact-message-help contact-message-error'
                : 'contact-message-help'
            }
          />
          <p id="contact-message-help" className="contact-form__hint">
            10–5,000 characters.
          </p>
          {errors.message ? (
            <p className="contact-form__error" id="contact-message-error">
              {errors.message}
            </p>
          ) : null}
        </div>
        <div hidden aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="contact-form__actions">
          <button className="button button--primary" type="submit">
            {status === 'pending' ? 'Sending…' : 'Send message'}{' '}
            <Mail aria-hidden="true" />
          </button>
          <span className="contact-form__hint">All fields required</span>
        </div>
      </fieldset>
      <p
        ref={statusRef}
        tabIndex={-1}
        className={`contact-form__status ${status === 'error' ? 'contact-form__error' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {feedback}
      </p>
    </form>
  )
}
