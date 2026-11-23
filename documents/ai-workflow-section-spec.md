# How I work with AI section

Spec v3

## Outcome

Visitors to the homepage can see, in a few seconds, how Noah delivers a feature with AI agents. The section shows that agents do most of the drafting, building, and checking, and that work moves on only after his approval. It describes a general workflow, not one project.

## Placement

- Add a new section to the homepage between Experience & education (Career) and Skills & interests.
- It joins the stacked sections on large screens, with the same sticky layering, rounded top edge, and background as its neighbors. Layer numbers after it shift up by one.
- Give it the anchor `#how-i-work` so it can be linked.
- The hero's secondary button, "About my process", links to `#how-i-work` instead of `#about`, because the About section introduces Noah but does not describe a process.

## Content

- Eyebrow: "How I work with AI".
- Title: "I steer. Agents build."
- Supporting line: "Nothing moves forward without my approval."
- Five numbered steps, each with a name and one short line:
  1. Clarify & spec: "I define what and why."
  2. Break down: "Small tasks that can each be verified."
  3. Build: "Agents code, test-first."
  4. Review & QA: "Checked against the spec."
  5. Ship: "I decide when it goes live."
- An approval mark (lock icon) sits on the connector after Clarify & spec, after Break down, and after Review & QA. There is no legend. Each mark shows a tooltip on hover, keyboard focus, or tap: "I approve the spec", "I approve the task plan", and "I sign off before shipping".
- No tool list, per-step detail panel, or role badges. The content should stay light enough to scan without interaction.

The steps follow the agent workflow in `.agents/skills/t3-agent-workflow`: clarification and spec with approval, ticket breakdown with a separate approval, test-first implementation, review against standards and spec plus QA, and shipping only on Noah's explicit decision.

## Layout

- Desktop and tablet (from the `md` breakpoint): the five steps sit in one horizontal row with connectors between their number circles.
- Mobile: the steps stack vertically, with a vertical connector between number circles and the approval marks on that connector. Nothing overflows horizontally at 360px.
- Uses the existing tokens (`--primary`, `--primary-dark`, `--ink`, `--ink-soft`, `--line`, `--canvas`), the `.section`, `.section-heading`, `.eyebrow`, and `h2` styles, and `Reveal` for the scroll-in fade like other sections.

## Motion

- When the steps first scroll into view, they play once in order: step 1 fades up, then the connector to the next step draws, and each next step fades up as the line reaches it.
- On a connector with an approval mark, the line pauses halfway while the lock pops in with a small spring, then finishes. The whole sequence takes about four seconds.
- The line grows rightward on desktop and downward on mobile.
- With `prefers-reduced-motion: reduce`, everything renders in its final state without animation.

## Accessibility

- Steps are an ordered list, so their order is announced.
- Each approval mark is a focusable button whose tooltip text is its accessible description; the lock icon itself is hidden from assistive technology.
- The section is labelled by its title.

## Acceptance checks

- The section renders after Career and before Skills on the homepage, at desktop and mobile widths, matching the layout above.
- The hero's "About my process" button scrolls to the new section.
- Approval marks appear in exactly the three positions listed, and each shows its tooltip on hover and focus without overflowing the viewport at 360px.
- No horizontal scrolling at 360px.
- The entrance sequence plays once in order on desktop and mobile, and reduced motion shows the final state immediately.
- `npm run typecheck` and `npm run build` pass.

## Out of scope

Changes to the hero illustration, interactive step details, a tools list, CV changes, and new routes.
