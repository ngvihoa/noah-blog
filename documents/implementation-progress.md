# Implementation Progress

Last updated: 2026-11-16

## Current Snapshot (2026-11-16)

The core portfolio is implemented: homepage, two real projects (HouseNow and PakiSlot), project collection, contact links, and SEO metadata. Standalone case studies are temporarily hidden; known project detail URLs redirect to `/projects`, while unknown slugs return 404. Cards on the homepage and project collection reveal existing personal contributions inline instead of navigating to a detail page. Current header navigation is **Projects / Contact**; About remains on the homepage at `#about` and is linked from the hero. There is no standalone `/about` route.

The portfolio’s goal is finding a new Frontend Developer role (confirmed by the user on 2026-11-16). Work arrangement is flexible: onsite, hybrid, or remote. Availability and contact copy now target hiring conversations; the revised biography is pending final review. HouseNow remains a current role until the actual end date is confirmed; no immediate start date is claimed.

The next task is personal-content sign-off: review the biography, current career direction and availability, public contact details, education, interests, and resume. Existing professional experience and project content were confirmed on 2026-09-30; review time-sensitive statements before launch.

Remaining launch work includes the resume PDF, accessibility/keyboard QA, route smoke tests, image/performance audit, and production deployment with `VITE_SITE_URL`. The contact form and Resend integration are implemented; real email delivery is pending provider configuration and a live inbox test (see `contact-form-setup.md`). Field Notes remain unimplemented; MDX/Shiki are intentionally deferred. Deployment has not been verified in this audit.

Build (including TypeScript) and lint passed on 2026-11-16. Targeted headless Chromium checks cover inline project details at 1440px/390px and skill-group layout at 1440px/768px/390px. Full-page accessibility, real-device, and production checks remain outstanding; earlier verification entries below are historical evidence.

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
- [x] Create `/`, `/projects`, and `/contact` routes. The initial `/about` route was subsequently consolidated into homepage `#about`; project details use `/projects/$slug`.
- [x] Implement responsive desktop and mobile navigation.
- [x] Verify local development, type-checking, and production build.

## Milestone 2: Homepage Foundation

- [x] Implement Hero copy for Viết Hòa. Finalized on 2026-09-30: the role switcher alternates "Software Developer" / "Frontend Developer", the tagline and intro read as final, and no placeholder copy remains.
- [x] Implement the static workflow diagram.
- [x] Add workflow entrance and connector line-drawing animations with hover and keyboard-focus states.
- [x] Add reduced-motion behavior.
- [x] Implement the Focus Strip. Final values confirmed on 2026-09-30: "Building with — React, Next.js & TypeScript", "Growing toward — Full-stack development", "Open to — New opportunities & thoughtful collaborations" (updated with the HouseNow content).
- [x] Replace the initial featured project placeholders with HouseNow and PakiSlot cards.
- [x] Add About preview, Contact CTA, and Footer.
- [x] Verify desktop, tablet, and mobile layouts at 1440 px, 768 px, and 390 px respectively.

## Completed Task: Full-Viewport Homepage Sections

Status: Completed and verified on 2026-09-30. Motivated by sections looking sparse: their heights were content-driven while the stacked-scroll effect expects each pinned screen to fill the viewport.

- [x] Hero fills the first screen: `min-h-[calc(100svh-4.75rem)]` (minus the 76px sticky header) with grid centering; removed the fixed `min-height: 660px` and `padding-block` from the `.hero` CSS rule in favor of Tailwind utilities.
- [x] Featured projects, About, Career, and Skills sections each get `min-h-svh` with `flex flex-col justify-center` so content is vertically distributed inside the pinned screen.
- [x] Career section received an "Experience & education" heading ("The journey so far" eyebrow) so it no longer reads as floating cards.
- [x] Skills section columns now share the same bottom edge (left column is a flex column with a `flex-1` card grid).
- [x] Contact CTA is a full-height wrapper `min-h-[calc(100svh-6.5rem)]` (minus the ~103px footer) with the card vertically centered, so the final resting screen no longer exposes a cut-off Skills section.
- [x] Mobile is unaffected: content is taller than the viewport there, so `min-h-svh` never truncates anything (sticky stacking remains desktop-only).

## Completed Task: HouseNow Experience and Project Content

Status: Completed and verified on 2026-09-30. Decisions were settled through a grilling interview with the user (role, dates, highlights, naming, positioning all confirmed).

- [x] Added the user's full-time role to the homepage: **Frontend Developer at HouseNow JSC** (proptech, August 2024 — Present) with 5 confirmed highlights — TanStack Router webview migration, HouseReels and agent dashboard built from zero, monetization features (~10% of revenue), a sister proptech company's landlord-app revamp (+50% retention), and Geolify SEO 54 → 74 (score corrected by the user on 2026-11-16).
- [x] Converted `experience` (single object) into an `experiences` array (HouseNow first, internship second under "Earlier experience"); the Career section maps over it with the company name linked to housenow.com.vn.
- [x] Added a `projects` array (HouseNow + PakiSlot with hero visual, gallery, and per-project source labels); `/projects` renders both case studies — HouseNow links to the live product, PakiSlot keeps its GitHub repo. The homepage "Selected projects" section also shows both cards (HouseNow 01 in the green `--nature` variant, PakiSlot 02 in `--ice`); the unused `featuredProject` export was removed. Both oversized layers (Featured ~1400px, Career ~1553px) use `lg:relative!` — a sticky `top: 0` section taller than the viewport pins with its lower content unreachable, and `lg:static!` alone would strip z-index and let the pinned section behind cover it.
- [x] Captured public HouseNow screenshots (`public/housenow/`): web home (hero visual), agent wallet portal, and home-loan page. The consumer search page renders broken under `prefers-color-scheme: dark` (the in-app browser's default), so the agent portal shot is used instead.
- [x] Positioning sync: `profile.role`, header brand, `<title>`, meta descriptions, and JSON-LD `jobTitle` are now "Frontend Developer"; the focus strip reads "Open to — New opportunities & thoughtful collaborations"; the contact CTA dropped "junior developer"; skills gained TanStack Router, React Query, React Native, Prisma, Kysely, and Linear.
- [x] Stack caveat from the user: the Next.js → TanStack Router migration was the mobile app's webview (the website remains Next.js); HouseNews is a product feature, not the user's contribution; CarNow is anonymized as "a sister proptech company" while Masterise and agencies stay named.
- [x] Fixed a stacking bug this introduced: sections taller than 100svh (Featured ~1400px, Career ~1553px) cannot pin with `sticky top: 0` (lower content becomes unreachable). Final approach: `StackedSection` gained an opt-in `pinBottom` mode — a `ResizeObserver` measures the section into a `--stack-h` custom property and the layer pins with `top: calc(100svh - var(--stack-h))`, i.e. it scrolls through all content, then freezes bottom-aligned exactly as the next section arrives to cover it, at any viewport size. Rejected alternatives: `lg:sticky lg:bottom-0` (pulls unreached sections up to the viewport at scroll 0) and per-card `h-svh` wrappers (dead scroll gaps). The cards inside both tall layers still deck (`lg:sticky lg:top-[90px]` in `lg:block! lg:space-y-6` containers).

## Current Task: Inline Project Contributions (2026-11-16)

- [x] Temporarily hide standalone case-study pages without deleting the shared content/component.
- [x] Redirect known `/projects/$slug` URLs to `/projects`; keep unknown slugs as not found.
- [x] Replace card detail links with expandable contributions below each card, shared by homepage and collection.
- [x] Add open/close animation, expanded/control semantics, keyboard operation, and reduced-motion handling.
- [x] Remove individual sticky card positioning and keep the Projects section in normal flow so expanded contributions and toggles are not covered by following sections.
- [x] Use a white background for expanded contributions (user preference).
- [x] Build (including TypeScript) and lint pass.
- [x] Headless Chromium checks at 1440px and 390px: both cards expand/collapse, final contributions remain reachable and unobscured, keyboard/reduced-motion behavior works, cards fit the viewport, collection toggles work, known detail URLs redirect, unknown slugs return 404, and no browser runtime errors are observed.
- [ ] Existing mobile horizontal overflow from the decorative About logo remains outside this change.

## Milestone 3: Project Collection

The entries below record the original implementation. Standalone detail routes are currently hidden as described above.

- [x] Define and validate the project content schema. (Completed 2026-09-30: the `projects` array in `src/data/portfolio.ts` is TypeScript-typed at build time; runtime (Zod) validation is deferred until content comes from external sources such as MDX or a CMS.)
- [x] Replace placeholders with real project content and screenshots. (Completed 2026-09-30: HouseNow and PakiSlot with full case-study data and screenshots.)
- [x] Build the complete `/projects` collection. (Completed 2026-09-30: `/projects` is an index of project cards linking to individual case studies; homepage and index share the `ProjectCard` component.)
- [x] Build `/projects/$slug` case-study routes. (Completed 2026-09-30: each case study renders from the shared `CaseStudy` component with its own title, meta description, and per-project `og:image`; unknown slugs throw `notFound()` and render the branded root `notFoundComponent` with HTTP 404; prev/next navigation at the bottom. Routing structure: `projects.tsx` is a layout rendering `<Outlet/>`, `projects.index.tsx` the collection, `projects.$slug.tsx` the case study — the flat dot-convention nests `$slug` under `projects`, so the parent must render an Outlet.)
- [x] Complete at least one real project case study.
- [x] Add repository and live-demo links.

## Milestone 4: MDX Content

> Deferral note (2026-09-30): MDX + Shiki stay unconfigured on purpose — both case studies render from the typed `projects` array and contain no prose or code blocks yet. Set this up when writing the first article or the first prose-heavy case study; the content schema and routes will not need to change.

- [ ] Configure MDX content loading.
- [ ] Add validated frontmatter for projects and articles.
- [ ] Add readable prose styles.
- [ ] Add Shiki syntax highlighting.
- [ ] Move project case studies into MDX.

## Milestone 5: About and Contact

- [~] Personal biography, portrait, skills, and interests are implemented; final personal-content review is pending.
- [x] Add factual career and education entries on the homepage (HouseNow, internship, and university). A separate Journey route is not planned for the initial release.
- [~] GitHub, LinkedIn, and email links are implemented; confirm the public details during personal-content review.
- [ ] Add the real resume PDF and its navigation/contact links.
- [x] Implement the contact form with a POST server function.
- [x] Add shared Zod validation, field errors, pending/success/error states, retained input on failure, and accessible status/focus behavior.
- [~] Resend delivery code and mocked integration tests are implemented; real credentials, an authorized sender, and live inbox verification remain pending.

## Completed Task: Consolidate About Into Homepage

Status: Completed and verified on 2026-09-26.

- [x] Move the useful `/about` content into a new `#about` section on the homepage.
- [x] Include the portrait, short biography, frontend internship, education, skills, and interests without making the homepage feel repetitive.
- [x] Reorder the homepage to: Hero → Featured Project → Experience/About → Skills/Education → Contact.
- [x] Consolidate About navigation at `/#about`. Current code links from the hero; the header contains only Projects and Contact.
- [x] Remove the `/about` route and regenerate the route tree after the homepage version is complete.
- [x] Update internal links, page metadata, and the navigation architecture document to reflect the single-page About flow.
- [x] Verify responsive layouts, anchor scrolling, build, type-check, lint, and formatting.

## Milestone 6: Field Notes

- [ ] Build `/blog` and `/blog/$slug`.
- [ ] Publish the first Field Note.
- [ ] Reveal Field Notes in navigation after content exists.
- [ ] Add article metadata, tags, and draft filtering.
- [ ] Add RSS and sitemap generation.

## Milestone 7: Quality and Launch

- [x] Add metadata, Open Graph, canonical URLs, and JSON-LD. (Completed 2026-09-30: per-route titles/descriptions, OG and Twitter card tags, canonical URLs, a 1200x630 OG image at `/og/og-default.png`, and a Person JSON-LD schema. The absolute site URL is set through `VITE_SITE_URL` and must be provided at deploy time; it falls back to `http://localhost:3000`.)
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

- [x] Final professional title and short introduction. (Confirmed 2026-09-30.)
- [x] Current `Building`, `Exploring`, and `Available For` values. (Confirmed 2026-09-30 as the Focus Strip values.)
- [x] Two real projects with descriptions, roles, stacks, and dates: HouseNow and PakiSlot.
- [x] Real project screenshots and source/live-product links appropriate to each project.
- [~] Biography and career/education milestones are present; personal-content sign-off is pending.
- [~] GitHub, LinkedIn, and email are present; final public-details review is pending.
- [ ] Resume PDF.

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
- [x] Tablet browser QA at 768 x 1024.
- [ ] Real-device and cross-browser QA.

### 2026-08-02: Homepage workflow completion

- [x] Replaced static workflow arrows with responsive SVG connector line-drawing animations.
- [x] Verified the horizontal tablet workflow and centered third project card at 768 x 1024.
- [x] Verified the vertical mobile workflow at 390 x 844.
- [x] Verified `prefers-reduced-motion: reduce`; transitions finish immediately at 0.01 ms.
- [x] No application console errors were observed in tablet, mobile, or reduced-motion sessions.

### 2026-09-30: Content finalization and SEO hygiene

- [x] Removed the stale `bun.lock`; npm (via `package-lock.json`) is the single package manager.
- [x] Finalized the hero copy and Focus Strip values; both Milestone 2 `[~]` items are now `[x]`.
- [x] Added `src/lib/seo.ts` with a `seoHead()` helper (title, description, OG, Twitter, canonical) and site-wide OG defaults plus a Person JSON-LD schema wired into the root route.
- [x] Generated the 1200x630 OG image at `public/og/og-default.png` using the brand colors and Noto Sans (full Vietnamese diacritics).
- [x] `npm run build`, `npm run typecheck`, `npm run lint`, and `npm run format:check` all pass.
- [x] Rendered-head QA: `/`, `/projects`, and `/contact` each emit the correct canonical URL, `og:url`, and `og:title`; the JSON-LD parses as valid schema.org; the OG image serves with HTTP 200.
- [x] Verified the `VITE_SITE_URL` override propagates to canonical URLs and `og:url`.

### 2026-09-30: Full-viewport homepage sections

- [x] `npm run build`, `npm run typecheck`, `npm run lint`, and `npm run format:check` all pass.
- [x] Measured section heights at 1440x900: Featured/About/Career/Skills are exactly 900px (100svh); hero is 824px (100svh minus the 76px header); Contact CTA is 797px (100svh minus the 103px footer).
- [x] Screenshot QA of every pinned section: content is vertically centered with no dead bands; the page-end state shows the Contact card centered above the footer with no cut-off section above it.
- [x] Note: flow positions for sticky sections must be measured at `scrollY = 0`; `offsetTop` of a pinned sticky element reflects its stuck position, and the page's `scroll-behavior: smooth` requires `behavior: "instant"` for programmatic scrolls.

### 2026-09-30: HouseNow experience and project content

- [x] `npm run build`, `npm run typecheck`, `npm run lint`, and `npm run format:check` all pass (`.agents/` vendor skill files added to `.prettierignore`).
- [x] Rendered QA at 1440x900: Career section shows both experience cards with the Education card no longer stretched; `/projects` renders the HouseNow case study first with real screenshots and PakiSlot second.
- [x] Verified `<title>` ("Frontend Developer"), JSON-LD `jobTitle`, focus strip, and contact-CTA copy in the SSR output.
- [x] Scroll QA confirmed the Career section's lower card is reachable after switching its layer from sticky to relative pinning.

### 2026-11-16: Repository status audit

- [x] Checked routes, shared project data, homepage biography, contact page, and header against this checklist.
- [x] `npm run build` passed (includes `tsc --noEmit`).
- [x] `npm run lint` passed.
- [x] Reconciled stale project/contact checklist items and current navigation.
- [ ] Browser, accessibility, performance, and deployment verification remain outstanding for launch.

### 2026-11-16: AI coding tools and skills layout

- [x] Add the user-confirmed AI coding tools: Claude Code, Codex, Gemini, Amp, T3 Code, and OpenCode, shown as chips without proficiency claims.
- [x] Arrange desktop skill groups in two rows: Frontend 7/12 + Backend 5/12, then Tools 5/12 + AI coding tools 7/12. Row heights follow content independently.
- [x] Keep mobile as one column in the same reading order.

- [x] Build (including TypeScript), lint, and targeted headless Chromium layout checks at 1440px, 768px, and 390px pass: expected group order, six AI tools, desktop column proportions, mobile stacking, and no skill-card overflow.

### 2026-11-16: Contact form

- [x] Add name/email/message form with shared client/server validation, honeypot, duplicate-submit prevention, and direct email fallback.
- [x] Add server-only Resend delivery with recipient configuration, visitor reply-to, timeout, and safe errors.
- [x] Add `.env.example`, setup documentation, and `npm run test:contact` with mocked provider tests.
- [ ] Configure the real provider credentials/sender and verify a message arrives in the intended inbox.
