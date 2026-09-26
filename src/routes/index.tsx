import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { FocusStrip } from '~/components/focus-strip'
import { WorkflowDiagram } from '~/components/workflow-diagram'
import { featuredProject, profile } from '~/data/portfolio'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Hello, I’m {profile.shortName}</p>
          <h1 id="hero-title">
            I turn product flows into polished interfaces.
          </h1>
          <p className="hero__intro">
            I’m a frontend developer in Ho Chi Minh City, working with React,
            Next.js, and TypeScript to build clear, accessible web experiences.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/projects">
              View projects <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button--secondary" to="/about">
              About my process
            </Link>
          </div>
        </div>
        <WorkflowDiagram />
      </section>

      <div className="page-shell">
        <FocusStrip />
      </div>

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
            <div className="project-card__visual project-card__visual--dashboard">
              <span className="project-card__visual-label">
                Capstone project
              </span>
              <div className="dashboard-preview" aria-hidden="true">
                <span className="dashboard-preview__sidebar" />
                <span className="dashboard-preview__header" />
                <span className="dashboard-preview__metric dashboard-preview__metric--one" />
                <span className="dashboard-preview__metric dashboard-preview__metric--two" />
                <span className="dashboard-preview__map" />
              </div>
              <strong>01</strong>
            </div>
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

      <section className="about-preview">
        <div className="page-shell about-preview__inner">
          <div>
            <p className="eyebrow">Player profile</p>
            <h2>Curious by default. Intentional in execution.</h2>
          </div>
          <div className="about-preview__copy">
            <p>
              My Computer Science background and frontend internship taught me
              to begin with requirements and workflows, then move from Figma to
              maintainable implementation. I’m growing toward full-stack product
              development with Node.js and Express.
            </p>
            <Link className="text-link" to="/about">
              More about me <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="contact-cta page-shell"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Let’s build something useful together.</h2>
          <p>
            I’m open to junior developer opportunities and thoughtful
            collaborations.
          </p>
        </div>
        <Link className="button button--primary" to="/contact">
          Contact me <ExternalLink aria-hidden="true" />
        </Link>
      </section>
    </main>
  )
}
