# Navigation Architecture

## Direction

The portfolio should use a multi-page architecture instead of making every header item scroll to a section on the homepage.

This approach gives each topic enough room for meaningful content, improves SEO and sharing, and provides a clearer path for expanding the portfolio into a blog. The homepage acts as a curated overview rather than the final destination for every type of content.

## Route Structure

```text
/                    Home
/projects            Project collection
/projects/$slug      Project case study
/about               About
/blog                 Field Notes
/blog/$slug           Article
/contact              Contact
```

Possible future routes:

```text
/journey              Detailed career timeline
/tags/$tag            Articles by tag
/resume               HTML resume
```

## Header Navigation

The initial header should contain:

```text
Projects    About    Field Notes    Contact    Resume
```

`Journey` should remain part of the About page until there are enough meaningful milestones to justify a dedicated page.

## Logo

- Navigates to `/`.
- If the user is already on the homepage, it returns to the top without requiring a full page reload.
- Includes an accessible name instead of relying on the visual mark alone.
- Uses only a subtle color or gem-state transition on hover and focus.

## Projects

**Destination:** `/projects`

- Displays the complete project collection.
- Uses a responsive grid on desktop and tablet and a vertical list or horizontal media cards on mobile.
- Each card links to `/projects/$slug`.
- Project information remains visible without hover.
- Filters by project type or element should only be introduced when there are enough projects to make filtering useful.
- The active state applies to both `/projects` and `/projects/$slug`.

The homepage shows only three featured projects and a `View all projects` link.

## About

**Destination:** `/about`

- Introduces personal background, current focus, preferred ways of working, career goals, and technologies used in practice.
- May use the `Player Profile` label as a visual motif, but the content must remain professional and factual.
- Avoids skill percentages, fictional combat stats, and unverifiable metrics.
- Includes the short Journey timeline until that content is substantial enough for its own page.
- The active state applies to `/about`.

The homepage contains only a short introduction and a `More about me` link.

## Journey

**Initial location:** Part of `/about`

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
- Provides email, GitHub, LinkedIn, and resume links.
- May include a contact form implemented with TanStack Start Server Functions, Zod, and Resend.
- The form must expose loading, success, validation-error, and submission-error states.
- The navigation item opens the Contact page rather than launching the visitor's email client immediately.
- The active state applies to `/contact`.

The homepage ends with a short contact CTA that links to this page.

## Resume

Resume is presented as a secondary button rather than a standard text navigation item.

Initial behavior:

- Opens the resume PDF in a new tab.
- Uses `target="_blank"` and `rel="noopener noreferrer"`.
- Has an accessible label indicating that it opens a PDF in a new tab.
- Does not force a download; a separate `Download PDF` action can be provided inside the resume viewer or About page.

A future `/resume` route may provide an HTML version optimized for mobile, accessibility, printing, and SEO.

## Homepage Role

The homepage is a curated collection overview rather than a long single-page portfolio.

Recommended hierarchy:

```text
1. Hero and professional positioning
2. Focus Strip
3. Three featured projects
4. Short About preview
5. Latest Field Notes, when available
6. Contact CTA
7. Footer
```

Each section previews content and links to a dedicated page. Detailed project information, the complete personal story, all articles, and the contact form should not be duplicated on the homepage.

## Focus Strip

The Focus Strip sits between the Hero and Featured Projects. It provides enough context to interpret the projects without placing a full About or Skills section before the strongest evidence of work.

It contains no more than three current signals:

```text
BUILDING        Accessible web interfaces
EXPLORING       Full-stack TypeScript
AVAILABLE FOR   Junior developer opportunities
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

## Final Recommendation

Use this navigation for the initial release:

```text
Projects    About    Field Notes    Contact    Resume
```

Use dedicated routes for all primary navigation items. Keep Journey inside About until the timeline has enough depth to become an independent page.
