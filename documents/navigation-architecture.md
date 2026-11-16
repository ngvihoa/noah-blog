# Navigation Architecture

Last reviewed against source: 2026-11-16.

Current implementation: homepage, project collection, and Contact. Standalone case studies are temporarily hidden; known project detail URLs redirect to `/projects`, and unknown slugs return 404. The header contains **Projects / Contact**. About is reached through the homepage hero link to `#about`. Field Notes and Resume below describe future behavior, not implemented navigation. Mobile Escape handling and focus return remain accessibility requirements awaiting implementation/verification.

## Direction

The portfolio uses a hybrid architecture: project and contact content have dedicated routes, while the personal profile is part of the homepage story.

This approach gives each topic enough room for meaningful content, improves SEO and sharing, and provides a clearer path for expanding the portfolio into a blog. The homepage acts as a curated overview rather than the final destination for every type of content.

## Route Structure

```text
/                    Home
/projects            Project collection
/projects/$slug      Temporarily redirects known projects to /projects
/contact              Contact
```

Possible future routes (not implemented):

```text
/blog                 Field Notes
/blog/$slug           Article
/journey              Detailed career timeline
/tags/$tag            Articles by tag
/resume               HTML resume
```

## Header Navigation

The current header contains:

```text
Projects    Contact
```

`Journey` should remain part of the homepage About section until there are enough meaningful milestones to justify a dedicated page.

## Logo

- Navigates to `/`.
- If the user is already on the homepage, it returns to the top without requiring a full page reload.
- Includes an accessible name instead of relying on the visual mark alone.
- Uses only a subtle color or gem-state transition on hover and focus.

## Projects

**Destination:** `/projects`

- Displays the complete project collection.
- Uses a responsive grid on desktop and tablet and a vertical list or horizontal media cards on mobile.
- Each card has a View details / Hide details toggle that reveals personal contributions inline, with animation and reduced-motion support.
- Project information remains visible without hover.
- Filters by project type or element should only be introduced when there are enough projects to make filtering useful.
- The active state applies to both `/projects` and `/projects/$slug`.

The homepage highlights HouseNow and PakiSlot, each revealing personal contributions below its card. The collection uses the same behavior.

## About

**Destination:** `/#about`

- Introduces personal background, current focus, preferred ways of working, career goals, and technologies used in practice.
- May use the `Player Profile` label as a visual motif, but the content must remain professional and factual.
- Avoids skill percentages, fictional combat stats, and unverifiable metrics.
- Includes the portrait, short biography, experience, education, skills, and interests.
- Keeps the professional story next to the featured work so visitors can understand the profile in one continuous scan.
- Can become a dedicated route again when the career timeline and writing are substantial enough to justify it.

## Journey

**Initial location:** Part of `/#about`

Journey should not appear in the primary navigation during the first release unless there are at least four or five meaningful milestones.

It can later become `/journey` when it includes enough content such as:

- Education milestones.
- Internships or professional experience.
- Hackathons and competitions.
- Important personal or team projects.
- Changes in technical focus.
- Related project case studies or Field Notes.

When introduced as a dedicated route, the active state applies to `/journey`.

## Field Notes

**Destination:** `/blog`

- `Field Notes` is the branded navigation label while `/blog` remains the clear, conventional URL.
- Displays published articles, tags, dates, summaries, and reading time where useful.
- Each article links to `/blog/$slug`.
- Search and tag filtering can be added when the article archive grows.
- The active state applies to `/blog`, `/blog/$slug`, and `/tags/$tag`.
- The item should be hidden before the first article is published instead of linking to an empty page.

The homepage may show the two or three most recent articles after blog content exists.

## Contact

**Destination:** `/contact`

- Explains what opportunities are currently relevant.
- Currently provides email, GitHub, and LinkedIn links. Resume is pending a real PDF.
- May include a contact form implemented with TanStack Start Server Functions, Zod, and Resend.
- The form must expose loading, success, validation-error, and submission-error states.
- The navigation item opens the Contact page rather than launching the visitor's email client immediately.
- The active state applies to `/contact`.

The homepage ends with a short contact CTA that links to this page.

## Resume

Resume is not implemented. Once a real PDF is available, present it as a secondary button rather than a standard text navigation item.

Initial behavior:

- Opens the resume PDF in a new tab.
- Uses `target="_blank"` and `rel="noopener noreferrer"`.
- Has an accessible label indicating that it opens a PDF in a new tab.
- Does not force a download; a separate `Download PDF` action can be provided inside the resume viewer or About page.

A future `/resume` route may provide an HTML version optimized for mobile, accessibility, printing, and SEO.

## Homepage Role

The homepage is a focused professional narrative with dedicated routes reserved for content that benefits from deeper reading.

Recommended hierarchy:

```text
1. Hero and professional positioning
2. Focus Strip
3. Featured project
4. About, experience, education, skills, and interests
5. Latest Field Notes, when available
6. Contact CTA
7. Footer
```

Detailed project information, articles, and the contact form remain on dedicated routes. The personal story lives on the homepage to reduce navigation friction while the portfolio has two case studies.

## Focus Strip

The Focus Strip sits between the Hero and Featured Projects. It provides enough context to interpret the projects without placing a full About or Skills section before the strongest evidence of work.

It contains no more than three current signals:

```text
Building with    React, Next.js & TypeScript
Growing toward   Full-stack development
Open to          Frontend Developer roles
```

Behavior and content rules:

- It is informational and does not need to be clickable.
- Each item uses a short eyebrow and one concise value.
- It describes current direction rather than listing the complete technology stack.
- It does not use proficiency percentages, progress bars, EXP, or fictional stats.
- Desktop uses one horizontal row with subtle dividers.
- Mobile stacks the items vertically or displays three compact rows.
- Decorative gems or element icons remain optional and must be paired with text labels.
- The content should be updated when learning priorities or availability change.

## Active States

- Only one primary navigation item is active at a time.
- The active state uses more than animation alone, such as text color plus an underline or small gem marker.
- Nested routes activate their parent item.
- The logo does not need a persistent active state on the homepage.
- Focus states remain clearly visible for keyboard users.

## Mobile Navigation

- Displays the logo on the left and a menu button on the right.
- Opens a simple menu panel rather than a game inventory or radial menu.
- Closes after a destination is selected.
- Supports closing with `Escape` and returns focus to the menu button.
- Uses minimum touch targets of approximately `44 x 44px`.
- Places the Resume button after the primary navigation links.
- Prevents background interaction while a modal-style menu is open.

## Future Navigation

Consider this expanded navigation after the relevant content exists:

```text
Projects    About    Field Notes    Contact    Resume
```

Keep About at `/#about`; Projects and Contact use dedicated routes. Reveal Field Notes only after the first article exists and Resume only after a real PDF is available. Keep Journey on the homepage until it merits an independent page.
