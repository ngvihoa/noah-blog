import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main className="page-shell content-page">
      <p className="eyebrow">The collection</p>
      <h1>Projects</h1>
      <p className="content-page__lead">
        Real project cards and case studies have not been added yet. This route
        is ready for the project content milestone.
      </p>
    </main>
  )
}
