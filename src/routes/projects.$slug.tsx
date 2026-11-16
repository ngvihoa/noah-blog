import { createFileRoute, notFound, redirect } from '@tanstack/react-router'
import { projects } from '~/data/portfolio'

// Keep existing project URLs usable while standalone case studies are hidden.
export const Route = createFileRoute('/projects/$slug')({
  beforeLoad: ({ params }) => {
    if (!projects.some((project) => project.slug === params.slug)) {
      throw notFound()
    }
    throw redirect({ to: '/projects', replace: true })
  },
})
