import { Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export function ContactCtaSection() {
  return (
    <section
      className="flex min-h-[calc(100svh-6.5rem)] flex-col justify-center"
      aria-labelledby="contact-title"
    >
      <div className="contact-cta page-shell">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Looking for a frontend developer?</h2>
          <p>
            I’m looking for my next Frontend Developer role and open to onsite,
            hybrid, or remote work. Let’s talk about your team.
          </p>
        </div>
        <Link
          className="button button--primary whitespace-nowrap"
          to="/contact"
        >
          Contact me <ExternalLink aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
