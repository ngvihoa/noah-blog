import { Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export function ContactCtaSection() {
  return (
    <section
      className="section flex flex-col justify-center lg:min-h-[calc(100svh-6.5rem)]"
      aria-labelledby="contact-title"
    >
      <div className="contact-cta page-shell">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Looking for a developer?</h2>
          <p>
            I’m open to Software Developer and Frontend Developer roles —
            onsite, hybrid, or remote. Let’s talk about your team.
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
