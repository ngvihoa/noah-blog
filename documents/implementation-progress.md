# Implementation Progress

Last updated: 2026-08-02

## Status Legend

- `[x]` Completed and verified.
- `[~]` Implemented but awaiting full verification or real content.
- `[ ]` Not implemented.

## Milestone 1: Walking Skeleton

- [x] Scaffold TanStack Start with React 19, TypeScript, and Vite.
- [x] Add Tailwind CSS v4 and core UI dependencies.
- [x] Configure formatting, linting, type-checking, and build scripts.
- [x] Create the root document and global application shell.
- [x] Add Cardfolio colors, typography, spacing, and surface styles.
- [x] Create `/`, `/projects`, `/about`, and `/contact` routes.
- [x] Implement responsive desktop and mobile navigation.
- [x] Verify local development, type-checking, and production build.

## Milestone 2: Homepage Foundation

- [~] Implement Hero copy for Viết Hòa. The current copy is intentional placeholder content pending the final professional title and introduction.
- [x] Implement the static workflow diagram.
- [~] Add workflow entrance and connector animations. Node entrance is implemented; connector drawing remains pending.
- [x] Add reduced-motion behavior.
- [~] Implement the Focus Strip. Layout is complete; final values require confirmation.
- [x] Add three featured project placeholders.
- [x] Add About preview, Contact CTA, and Footer.
- [~] Verify desktop, tablet, and mobile layouts. Desktop at 1440 px and mobile at 390 px are verified; a dedicated tablet pass remains pending.

## Milestone 3: Project Collection

- [ ] Define and validate the project content schema.
- [ ] Replace placeholders with real project content and screenshots.
- [ ] Build the complete `/projects` collection.
- [ ] Build `/projects/$slug` case-study routes.
- [ ] Complete at least one real project case study.
- [ ] Add repository and live-demo links.

## Milestone 4: MDX Content

- [ ] Configure MDX content loading.
- [ ] Add validated frontmatter for projects and articles.
- [ ] Add readable prose styles.
- [ ] Add Shiki syntax highlighting.
- [ ] Move project case studies into MDX.

## Milestone 5: About and Contact

- [ ] Replace About placeholders with final personal content.
- [ ] Add a factual Journey timeline.
- [ ] Add the real resume PDF, GitHub, LinkedIn, and email links.
- [ ] Implement the contact form with a server function.
- [ ] Add Zod validation and submission states.
- [ ] Connect email delivery through Resend.

## Milestone 6: Field Notes

- [ ] Build `/blog` and `/blog/$slug`.
- [ ] Publish the first Field Note.
- [ ] Reveal Field Notes in navigation after content exists.
- [ ] Add article metadata, tags, and draft filtering.
- [ ] Add RSS and sitemap generation.

## Milestone 7: Quality and Launch

- [ ] Add metadata, Open Graph, canonical URLs, and JSON-LD.
- [ ] Complete keyboard and accessibility testing.
- [ ] Add Vitest coverage for content logic.
- [ ] Add Playwright smoke tests for primary routes.
- [ ] Audit images, performance, and Core Web Vitals.
- [ ] Deploy to Vercel or Cloudflare.

## Explicitly Deferred

- [ ] CMS.
- [ ] Database and authentication.
- [ ] Project rarity taxonomy.
- [ ] Element filtering until enough projects exist.
- [ ] Card flip and 3D tilt effects.
- [ ] Achievement or EXP system.
- [ ] Pagefind until the article archive grows.
- [ ] Dark mode.
- [ ] Sentry.
- [ ] Complex page-transition animation.

## Required Real Content

- [ ] Final professional title and short introduction.
- [ ] Current `Building`, `Exploring`, and `Available For` values.
- [ ] Two or three project names, descriptions, roles, stacks, and dates.
- [ ] Project screenshots, repositories, and live demos.
- [ ] Biography and Journey milestones.
- [ ] GitHub, LinkedIn, email, and resume PDF.

## Verification Log

### 2026-08-02: Initial application milestone

- [x] `bun run build`
- [x] `bun run typecheck`
- [x] `bun run lint`
- [x] `bun run format:check`
- [x] Desktop browser QA at 1440 x 1000.
- [x] Mobile browser QA at 390 x 844.
- [x] Mobile navigation opens, closes after selection, and routes to `/projects`.
- [x] No application console errors were observed.
- [ ] Tablet browser QA.
- [ ] Real-device and cross-browser QA.
