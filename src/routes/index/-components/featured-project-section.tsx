import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { projects, sideProjects } from '~/data/portfolio'
import { ProjectCard } from '~/components/project-card'
import { Reveal } from '~/components/reveal'

export function FeaturedProjectSection() {
  return (
    <section
      className="section page-shell flex flex-col justify-center lg:min-h-svh"
      aria-labelledby="projects-title"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Featured collection</p>
          <h2 id="projects-title">Selected projects</h2>
        </div>
        <Link className="text-link" to="/projects">
          View all projects
          {sideProjects.length > 0 && ` + ${sideProjects.length} side projects`}
          <ArrowRight aria-hidden="true" />
        </Link>
      </Reveal>

      <div className="project-grid project-grid--featured lg:block! lg:space-y-[var(--space-card-gap)]">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  )
}
