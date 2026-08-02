import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FocusStrip } from '~/components/focus-strip'
import { WorkflowDiagram } from '~/components/workflow-diagram'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const projects = [
  {
    title: 'Project one',
    type: 'Web application',
    summary:
      'A real project story and product screenshot will replace this placeholder.',
    stack: ['TypeScript', 'React'],
    element: 'ice',
  },
  {
    title: 'Project two',
    type: 'Data experience',
    summary:
      'A concise explanation of the problem, contribution, and outcome belongs here.',
    stack: ['UI design', 'Data'],
    element: 'fire',
  },
  {
    title: 'Project three',
    type: 'Product experiment',
    summary:
      'This card remains honest about missing content while the layout is developed.',
    stack: ['Prototype', 'Research'],
    element: 'nature',
  },
] as const

function HomePage() {
  return (
    <main>
      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Hello, I’m Viết Hòa</p>
          <h1 id="hero-title">I build thoughtful, useful digital products.</h1>
          <p className="hero__intro">
            I’m a junior developer focused on turning clear product flows into
            accessible, well-crafted web experiences.
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

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-card--${project.element}`}
              key={project.title}
            >
              <div className="project-card__visual" aria-hidden="true">
                <span>Real project screenshot</span>
                <strong>0{index + 1}</strong>
              </div>
              <div className="project-card__body">
                <p className="project-card__type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul
                  className="chip-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="project-card__pending">
                  Case study pending real content
                </span>
              </div>
            </article>
          ))}
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
              I care about understanding the problem before reaching for tools.
              This space will document what I build, how I make decisions, and
              what each iteration teaches me.
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
