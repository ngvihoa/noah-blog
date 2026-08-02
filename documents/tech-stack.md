# Portfolio Tech Stack

## Goal

Build a personal portfolio with strong SEO, responsive design, and a clear path toward becoming a blog. The initial version should prioritize static content, fast page loads, and low maintenance costs.

## Foundation

- TanStack Start as the full-stack React framework, with SSR and static prerendering support.
- React 19.
- TypeScript.
- Vite.

## User Interface

- Tailwind CSS v4.
- Motion for animations and page transitions when appropriate.
- Lucide React for icons.
- Responsive design, accessibility, and dark mode.

## Content

- MDX for managing articles and project case studies in Git.
- Frontmatter fields including `title`, `description`, `publishedAt`, `tags`, and `draft`.
- Shiki for code syntax highlighting.
- Pagefind for static content search when the blog grows.

## Blog and SEO

- Static prerendering for portfolio pages and articles.
- Page-specific metadata and Open Graph tags.
- Canonical URLs.
- `sitemap.xml`.
- `robots.txt`.
- RSS feed.
- JSON-LD for the personal profile and articles.

## Backend

The initial version does not require a database, CMS, or authentication.

- TanStack Start Server Functions for the contact form.
- Zod for data validation.
- Resend for email delivery.
- Rate limiting or Cloudflare Turnstile can be added if spam becomes a problem.

Content can later be moved to Sanity or Payload CMS if the site requires a visual editor, multiple authors, scheduled publishing, or advanced media management.

## Infrastructure

- Vercel or Cloudflare for deployment.
- GitHub Actions for linting, type-checking, and builds.
- Plausible, Umami, or Vercel Analytics for traffic analytics.
- Add Sentry only when the application contains enough dynamic logic to require error monitoring.

## Code Quality

- ESLint.
- Prettier.
- Vitest for logic that benefits from unit tests.
- Playwright for navigation, blog, and contact-form smoke tests.

## Planned Routes

Initial portfolio:

```text
/
/about
/projects
/contact
```

Future blog:

```text
/blog
/blog/$slug
/tags/$tag
/rss.xml
/sitemap.xml
```

## Final Stack

```text
TanStack Start + React 19 + TypeScript
Tailwind CSS v4 + Motion + Lucide React
MDX + Shiki + Pagefind
Zod + Resend
Vercel or Cloudflare
GitHub Actions + Vitest + Playwright
```

## MVP Scope

1. Portfolio and about pages.
2. Project listing and MDX-based project case studies.
3. An MDX foundation ready for future blog content.
4. SEO, responsive design, accessibility, and dark mode.
5. Contact form.

The first version does not need a CMS, database, authentication, Pagefind, Sentry, or an administration system.
