import { Link } from '@tanstack/react-router'
import { BrandMark } from './brand-mark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <Link className="site-footer__brand" to="/" aria-label="Viết Hòa, home">
          <BrandMark />
          <span>Viết Hòa</span>
        </Link>
        <p>Building thoughtful interfaces, one iteration at a time.</p>
        <span>© 2026 Viết Hòa</span>
      </div>
    </footer>
  )
}
