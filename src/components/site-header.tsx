import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BrandMark } from './brand-mark'
import { profile } from '~/data/portfolio'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Link className="brand" to="/" aria-label="Noah, Viết Hòa, home">
          <BrandMark priority />
          <span className="brand__name">Noah</span>
          <span className="brand__role">{profile.role}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link
            className="nav-link"
            activeProps={{ className: 'nav-link nav-link--active' }}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="nav-link"
            activeProps={{ className: 'nav-link nav-link--active' }}
            to="/contact"
          >
            Contact
          </Link>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav page-shell"
          aria-label="Mobile navigation"
        >
          <Link
            className="mobile-nav__link"
            activeProps={{
              className: 'mobile-nav__link mobile-nav__link--active',
            }}
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="mobile-nav__link"
            activeProps={{
              className: 'mobile-nav__link mobile-nav__link--active',
            }}
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
