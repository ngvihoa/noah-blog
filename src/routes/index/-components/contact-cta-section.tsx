import { Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export function ContactCtaSection() {
  return (
    <section className="contact-cta page-shell" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Start a conversation</p>
        <h2 id="contact-title">Let’s build something useful together.</h2>
        <p>
          I’m open to junior developer opportunities and thoughtful
          collaborations.
        </p>
      </div>
      <Link className="button button--primary whitespace-nowrap" to="/contact">
        Contact me <ExternalLink aria-hidden="true" />
      </Link>
    </section>
  )
}
