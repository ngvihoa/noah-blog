import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { FocusStrip } from '~/components/focus-strip'
import { HomeAbout } from '~/components/home-about'
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
          <p className="eyebrow">Hello, I’m {profile.alias}</p>
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
            <a className="button button--secondary" href="#about">
              About my process
            </a>
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
            <figure className="project-card__visual project-card__visual--product">
              <span className="project-card__visual-label">
                Capstone project
              </span>
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

      <HomeAbout />

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
