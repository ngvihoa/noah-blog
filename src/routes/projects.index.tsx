import { createFileRoute } from '@tanstack/react-router'
import { projects } from '~/data/portfolio'
import { ProjectCard } from '~/components/project-card'
import { seoHead } from '~/lib/seo'

export const Route = createFileRoute('/projects/')({
  head: () =>
    seoHead({
      title: 'Projects | Noah / Viết Hòa',
      description:
        'Selected frontend work by Noah, Nguyễn Viết Hòa — HouseNow and PakiSlot.',
      path: '/projects',
    }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main>
      <header className="page-shell content-page content-page--intro">
        <p className="eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p className="content-page__lead">
          A closer look at how I move from requirements and product flows to
          interface design and frontend implementation.
        </p>
      </header>

      <div className="page-shell pb-28">
        <div className="project-grid project-grid--featured lg:block! lg:space-y-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
      </div>
    </main>
  )
}
