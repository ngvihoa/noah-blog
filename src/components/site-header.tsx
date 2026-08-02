import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BrandMark } from './brand-mark'

const navigation = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Link className="brand" to="/" aria-label="Viết Hòa, home">
          <BrandMark />
          <span className="brand__name">Viết Hòa</span>
          <span className="brand__role">Developer</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              className="nav-link"
              activeProps={{ className: 'nav-link nav-link--active' }}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
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
          {navigation.map((item) => (
            <Link
              key={item.to}
              className="mobile-nav__link"
              activeProps={{
                className: 'mobile-nav__link mobile-nav__link--active',
              }}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
