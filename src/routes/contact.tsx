import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '~/data/portfolio'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | Viết Hòa' },
      {
        name: 'description',
        content: 'Get in touch with frontend developer Viết Hòa.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <div className="contact-page__intro">
        <p className="eyebrow">Start a conversation</p>
        <h1>Let’s make something useful.</h1>
        <p className="content-page__lead">
          The quickest way to reach me is by email. I’m happy to talk about
          frontend roles, product ideas, or a project that could use a
          thoughtful interface.
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
