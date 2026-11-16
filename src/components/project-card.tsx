import { useId, useState } from 'react'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'
import type { projects } from '~/data/portfolio'

type Project = (typeof projects)[number]

const projectVisuals: Record<
  Project['slug'],
  { label: string; variant: string }
> = {
  housenow: {
    label: 'Full-time role · Proptech',
    variant: 'project-card--nature',
  },
  'paki-slot': { label: 'Capstone project', variant: 'project-card--ice' },
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const visual = projectVisuals[project.slug]
  const [expanded, setExpanded] = useState(false)
  const [instant, setInstant] = useState(false)
  const detailsId = useId()
  const headingId = useId()
  return (
    <article
      className={`project-card project-card--featured ${visual.variant}`}
    >
      <figure className="project-card__visual project-card__visual--product">
        <span className="project-card__visual-label">{visual.label}</span>
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
        <ul className="chip-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-card__links">
          <button
            type="button"
            className="text-link project-card__toggle"
            aria-expanded={expanded}
            aria-controls={detailsId}
            aria-label={`${expanded ? 'Hide details' : 'View details'} for ${project.title}`}
            onClick={(event) => {
              setInstant(event.detail === 0)
              setExpanded((current) => !current)
            }}
          >
            {expanded ? 'Hide details' : 'View details'}
            <ChevronDown aria-hidden="true" />
          </button>
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
      <section
        id={detailsId}
        className="project-card__details"
        aria-labelledby={headingId}
        aria-hidden={!expanded}
        inert={!expanded}
        data-expanded={expanded}
        data-instant={instant}
      >
        <div className="project-card__details-clip">
          <div className="project-card__contributions">
            <p className="eyebrow">My contribution</p>
            <h4 id={headingId}>My work on {project.title}</h4>
            <p className="project-card__period">{project.period}</p>
            <ul className="detail-list">
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
