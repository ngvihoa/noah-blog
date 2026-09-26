import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '~/data/portfolio'
import { BrandMark } from './brand-mark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <Link
          className="site-footer__brand"
          to="/"
          aria-label="Noah, Viết Hòa, home"
        >
          <BrandMark />
          <span>Noah</span>
        </Link>
        <div className="site-footer__links" aria-label="Social links">
          <a href={`mailto:${profile.email}`} aria-label="Email Noah">
            <Mail aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Noah on GitHub"
          >
            <Github aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Noah on LinkedIn"
          >
            <Linkedin aria-hidden="true" />
          </a>
        </div>
        <span>© 2026 Noah / Viết Hòa</span>
      </div>
    </footer>
  )
}
