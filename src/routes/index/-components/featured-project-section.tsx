import { Link } from '@tanstack/react-router'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '~/data/portfolio'

const featuredVisuals = {
  housenow: {
    label: 'Full-time role · Proptech',
    variant: 'project-card--nature',
  },
  'paki-slot': { label: 'Capstone project', variant: 'project-card--ice' },
} as const

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
        {projects.map((project, index) => {
          const visual = featuredVisuals[project.slug]
          return (
            <article
              className={`project-card project-card--featured lg:sticky lg:top-[90px] ${visual.variant}`}
              key={project.slug}
            >
              <figure className="project-card__visual project-card__visual--product">
                <span className="project-card__visual-label">
                  {visual.label}
                </span>
                <div className="project-preview">
                  {project.slug === 'paki-slot' ? (
                    <>
                      <img
                        className="project-preview__desktop"
                        src="/paki-slot/m-home.png"
                        alt="PakiSlot management dashboard showing parking and revenue data"
                        width="1367"
                        height="941"
                        loading="lazy"
                      />
                      <img
                        className="project-preview__mobile"
                        src="/paki-slot/login_screen.png"
                        alt="PakiSlot mobile login screen"
                        width="849"
                        height="1863"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <img
                      className="project-preview__desktop"
                      src={project.heroVisual.src}
                      alt={project.heroVisual.alt}
                      width={project.heroVisual.width}
                      height={project.heroVisual.height}
                      loading="lazy"
                    />
                  )}
                </div>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
              </figure>
              <div className="project-card__body project-card__body--featured">
                <p className="project-card__type">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <dl className="project-facts">
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Team</dt>
                    <dd>{project.team}</dd>
                  </div>
                </dl>
                <ul
                  className="chip-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <Link className="text-link" to="/projects">
                    Read case study <ArrowRight aria-hidden="true" />
                  </Link>
                  <a
                    className="text-link text-link--muted"
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.sourceLabel}{' '}
                    {project.sourceKind === 'github' ? (
                      <Github aria-hidden="true" />
                    ) : (
                      <ExternalLink aria-hidden="true" />
                    )}
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
