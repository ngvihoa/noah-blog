import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="page-shell content-page">
      <p className="eyebrow">Start a conversation</p>
      <h1>Contact</h1>
      <p className="content-page__lead">
        Email, GitHub, LinkedIn, résumé, and the contact form are pending real
        contact details.
      </p>
    </main>
  )
}
