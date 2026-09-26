import { Link } from '@tanstack/react-router'
import { ArrowRight, Github } from 'lucide-react'
import { featuredProject } from '~/data/portfolio'

export function FeaturedProjectSection() {
  return (
    <section className="section page-shell" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured collection</p>
          <h2 id="projects-title">Selected projects</h2>
        </div>
        <Link className="text-link" to="/projects">
          View all projects <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="project-grid project-grid--featured">
        <article className="project-card project-card--ice project-card--featured">
          <figure className="project-card__visual project-card__visual--product">
            <span className="project-card__visual-label">Capstone project</span>
            <div className="project-preview">
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
            </div>
            <strong>01</strong>
          </figure>
          <div className="project-card__body project-card__body--featured">
            <p className="project-card__type">{featuredProject.subtitle}</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.summary}</p>
            <dl className="project-facts">
              <div>
                <dt>Role</dt>
                <dd>{featuredProject.role}</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{featuredProject.team}</dd>
              </div>
            </dl>
            <ul
              className="chip-list"
              aria-label={`${featuredProject.title} technologies`}
            >
              {featuredProject.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-card__links">
              <Link className="text-link" to="/projects">
                Read case study <ArrowRight aria-hidden="true" />
              </Link>
              <a
                className="text-link text-link--muted"
                href={featuredProject.source}
                target="_blank"
                rel="noreferrer"
              >
                Source <Github aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
