import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '~/data/portfolio'
import { seoHead } from '~/lib/seo'
import { ContactForm } from '~/components/contact-form'
import { CvDownloads } from '~/components/cv-downloads'

export const Route = createFileRoute('/contact')({
  head: () =>
    seoHead({
      title: 'Contact | Noah / Viết Hòa',
      description:
        'Contact Nguyễn Viết Hòa (Noah) about Software Developer and Frontend Developer opportunities.',
      path: '/contact',
    }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <header className="contact-page__intro">
        <h1>Let’s work together.</h1>
        <p>
          I’m open to Software Developer and Frontend Developer roles.
          <br />
          Open to onsite, hybrid, or remote work.
        </p>
      </header>

      <div className="contact-page__layout">
        <aside
          className="contact-page__aside"
          aria-labelledby="contact-aside-title"
        >
          <h2 id="contact-aside-title">Have a role in mind?</h2>
          <p>Tell me about your team and the product you’re building.</p>
          <address className="contact-page__links">
            <a className="contact-method" href={`mailto:${profile.email}`}>
              <span className="contact-method__icon">
                <Mail aria-hidden="true" />
              </span>
              <span className="contact-method__copy">
                <span>Email</span>
                <strong>{profile.email}</strong>
              </span>
              <ArrowUpRight
                className="contact-method__arrow"
                aria-hidden="true"
              />
            </a>
            <a
              className="contact-method"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method__icon">
                <Github aria-hidden="true" />
              </span>
              <span className="contact-method__copy">
                <span>GitHub</span>
                <strong>@ngvihoa</strong>
              </span>
              <ArrowUpRight
                className="contact-method__arrow"
                aria-hidden="true"
              />
            </a>
            <a
              className="contact-method"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method__icon">
                <Linkedin aria-hidden="true" />
              </span>
              <span className="contact-method__copy">
                <span>LinkedIn</span>
                <strong>{profile.name}</strong>
              </span>
              <ArrowUpRight
                className="contact-method__arrow"
                aria-hidden="true"
              />
            </a>
          </address>
          <div className="contact-method contact-page__location">
            <span className="contact-method__icon">
              <MapPin aria-hidden="true" />
            </span>
            <p className="contact-method__copy">
              <span>Based in</span>
              <strong>{profile.location}</strong>
            </p>
          </div>
          <CvDownloads className="mt-7" />
        </aside>
        <ContactForm />
      </div>
    </main>
  )
}
