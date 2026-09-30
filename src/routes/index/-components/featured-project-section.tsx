import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { projects } from '~/data/portfolio'
import { ProjectCard } from '~/components/project-card'

export function FeaturedProjectSection() {
  return (
    <section
      className="section page-shell flex min-h-svh flex-col justify-center"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured collection</p>
          <h2 id="projects-title">Selected projects</h2>
        </div>
        <Link className="text-link" to="/projects">
          View all projects <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="project-grid project-grid--featured lg:block! lg:space-y-6">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  )
}
