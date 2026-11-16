/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'
import { siteHead } from '~/lib/seo'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Noah / Viết Hòa | Software Developer',
      },
      {
        name: 'description',
        content:
          'Noah, Nguyễn Viết Hòa, is a software developer with a strong frontend foundation, building web and mobile products and open to Software Developer and Frontend Developer roles.',
      },
      ...siteHead.meta,
    ],
    scripts: siteHead.scripts,
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/logo_main.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

function RootComponent() {
  return (
    <RootDocument>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </RootDocument>
  )
}

function NotFoundPage() {
  return (
    <main className="page-shell content-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="content-page__lead">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <a className="button button--primary" href="/">
        Back to home
      </a>
    </main>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
