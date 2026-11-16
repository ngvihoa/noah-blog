import { EmphasizedText } from '~/components/emphasized-text'
import { ExternalLink, Github } from 'lucide-react'
import type { projects } from '~/data/portfolio'

type Project = (typeof projects)[number]

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="case-study">
      <div className="page-shell">
        <div className="case-study__heading">
          <div>
            <p className="eyebrow">{project.context}</p>
            <h2>{project.title}</h2>
            <p className="case-study__subtitle">{project.subtitle}</p>
          </div>
          <a
            className="button button--secondary"
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

        <dl className="case-study__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{project.period}</dd>
          </div>
        </dl>

        <div className="case-study__overview">
          <div>
            <p className="eyebrow">The product</p>
            <p className="case-study__lead">{project.summary}</p>
          </div>
          <ul className="chip-list" aria-label="Technologies used">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <figure className="case-study__hero-visual">
          <img
            src={project.heroVisual.src}
            alt={project.heroVisual.alt}
            width={project.heroVisual.width}
            height={project.heroVisual.height}
          />
          <figcaption>{project.heroVisual.caption}</figcaption>
        </figure>

        <div
          className={`case-study__columns ${'features' in project ? '' : 'grid-cols-1!'}`}
        >
          <section aria-labelledby={`${project.slug}-contributions`}>
            <p className="eyebrow">My contribution</p>
            <h3 id={`${project.slug}-contributions`}>
              {project.slug === 'housenow'
                ? 'Two years across web, webview, and internal tools'
                : 'From system flow to interface'}
            </h3>
            <ul className="detail-list">
              {project.contributions.map((item) => (
                <li key={item}>
                  <EmphasizedText text={item} />
                </li>
              ))}
            </ul>
          </section>
          {'features' in project ? (
            <section aria-labelledby={`${project.slug}-features`}>
              <p className="eyebrow">Core capabilities</p>
              <h3 id={`${project.slug}-features`}>
                Built for parking operations
              </h3>
              <ul className="detail-list">
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="case-study__gallery">
          {project.gallery.map((item) => (
            <figure
              className={`case-study__gallery-item case-study__gallery-item--${item.variant}`}
              key={item.src}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <a
          className="case-study__source text-link"
          href={project.source}
          target="_blank"
          rel="noreferrer"
        >
          {project.sourceLongLabel} <ExternalLink aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
