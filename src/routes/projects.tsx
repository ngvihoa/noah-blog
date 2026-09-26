import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Github } from 'lucide-react'
import { featuredProject } from '~/data/portfolio'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects | Viết Hòa' },
      {
        name: 'description',
        content: 'Selected frontend work by Viết Hòa, including PakiSlot.',
      },
    ],
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

      <article className="case-study">
        <div className="page-shell">
          <div className="case-study__heading">
            <div>
              <p className="eyebrow">{featuredProject.context}</p>
              <h2>{featuredProject.title}</h2>
              <p className="case-study__subtitle">{featuredProject.subtitle}</p>
            </div>
            <a
              className="button button--secondary"
              href={featuredProject.source}
              target="_blank"
              rel="noreferrer"
            >
              View source <Github aria-hidden="true" />
            </a>
          </div>

          <dl className="case-study__meta">
            <div>
              <dt>Role</dt>
              <dd>{featuredProject.role}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{featuredProject.team}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{featuredProject.period}</dd>
            </div>
          </dl>

          <div className="case-study__overview">
            <div>
              <p className="eyebrow">The product</p>
              <p className="case-study__lead">{featuredProject.summary}</p>
            </div>
            <ul className="chip-list" aria-label="Technologies used">
              {featuredProject.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className="case-study__hero-visual">
            <img
              src="/paki-slot/m-home.png"
              alt="PakiSlot web dashboard with revenue, service, vehicle, and traffic charts"
              width="1367"
              height="941"
            />
            <figcaption>
              The manager dashboard brings daily parking operations and business
              signals into one view.
            </figcaption>
          </figure>

          <div className="case-study__columns">
            <section aria-labelledby="contributions-title">
              <p className="eyebrow">My contribution</p>
              <h3 id="contributions-title">From system flow to interface</h3>
              <ul className="detail-list">
                {featuredProject.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="features-title">
              <p className="eyebrow">Core capabilities</p>
              <h3 id="features-title">Built for parking operations</h3>
              <ul className="detail-list">
                {featuredProject.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="case-study__gallery">
            <figure className="case-study__gallery-item case-study__gallery-item--wide">
              <img
                src="/paki-slot/e-map.png"
                alt="Interactive PakiSlot parking map with occupied and empty slots"
                width="1117"
                height="942"
                loading="lazy"
              />
              <figcaption>
                A live parking map makes slot status scannable at a glance.
              </figcaption>
            </figure>
            <figure className="case-study__gallery-item case-study__gallery-item--phone">
              <img
                src="/paki-slot/login_screen.png"
                alt="PakiSlot mobile authentication screen"
                width="849"
                height="1863"
                loading="lazy"
              />
              <figcaption>Mobile authentication experience.</figcaption>
            </figure>
            <figure className="case-study__gallery-item case-study__gallery-item--phone">
              <img
                src="/paki-slot/splash-screen.png"
                alt="PakiSlot mobile splash screen"
                width="781"
                height="1689"
                loading="lazy"
              />
              <figcaption>A focused brand moment on launch.</figcaption>
            </figure>
          </div>

          <a
            className="case-study__source text-link"
            href={featuredProject.source}
            target="_blank"
            rel="noreferrer"
          >
            Explore the repository <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </article>
    </main>
  )
}
