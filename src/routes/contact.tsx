import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '~/data/portfolio'
import { seoHead } from '~/lib/seo'

export const Route = createFileRoute('/contact')({
  head: () =>
    seoHead({
      title: 'Contact | Noah / Viết Hòa',
      description:
        'Contact Nguyễn Viết Hòa (Noah) about Frontend Developer opportunities.',
      path: '/contact',
    }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <div className="contact-page__intro">
        <p className="eyebrow">Start a conversation</p>
        <h1>Let’s talk about your team.</h1>
        <p className="content-page__lead">
          I’m looking for my next Frontend Developer role, bringing hands-on
          experience with React, Next.js, and TypeScript. I’m based in Ho Chi
          Minh City and open to onsite, hybrid, or remote work. If you’re
          hiring, email me about your team, the role, and the product you’re
          building.
        </p>
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          Email me <Mail aria-hidden="true" />
        </a>
      </div>

      <address className="contact-list">
        <a href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          <span>
            <small>Email</small>
            {profile.email}
          </span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" />
          <span>
            <small>GitHub</small>
            @ngvihoa
          </span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" />
          <span>
            <small>LinkedIn</small>
            /in/nvhoa29b02
          </span>
        </a>
        <div>
          <MapPin aria-hidden="true" />
          <span>
            <small>Location</small>
            {profile.location}
          </span>
        </div>
      </address>
    </main>
  )
}
