import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="page-shell content-page">
      <p className="eyebrow">Player profile</p>
      <h1>About Viết Hòa</h1>
      <p className="content-page__lead">
        The final biography, working principles, and Journey timeline still need
        real personal content.
      </p>
    </main>
  )
}
