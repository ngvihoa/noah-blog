import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '~/data/portfolio'
import { CaseStudy } from '~/components/case-study'
import { seoHead } from '~/lib/seo'

const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug)

export const Route = createFileRoute('/projects/$slug')({
  beforeLoad: ({ params }) => {
    if (!findProject(params.slug)) throw notFound()
  },
  head: ({ params }) => {
    const project = findProject(params.slug)
    if (!project) return {}
    return seoHead({
      title: `${project.title} | Noah / Viết Hòa`,
      description: project.summary,
      path: `/projects/${project.slug}`,
      image: project.heroVisual.src,
    })
  },
  component: ProjectCaseStudyPage,
})

function ProjectCaseStudyPage() {
  const { slug } = Route.useParams()
  const project = findProject(slug)
  if (!project) return null

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const prev = projects[(index + projects.length - 1) % projects.length]
  const showBoth = prev.slug !== next.slug

  return (
    <main>
      <div className="page-shell pt-10">
        <Link className="text-link" to="/projects">
          <ArrowLeft aria-hidden="true" /> All projects
        </Link>
      </div>

      <CaseStudy project={project} />

      <nav
        className="page-shell flex items-center justify-between gap-6 py-14"
        aria-label="More projects"
      >
        {showBoth ? (
          <Link
            className="text-link"
            to="/projects/$slug"
            params={{ slug: prev.slug }}
          >
            <ArrowLeft aria-hidden="true" /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link
          className="text-link"
          to="/projects/$slug"
          params={{ slug: next.slug }}
        >
          Next: {next.title} <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </main>
  )
}
