import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { education, experience, interests, skills } from '~/data/portfolio'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About | Viết Hòa' },
      {
        name: 'description',
        content:
          'Frontend developer Viết Hòa — experience, education, skills, and interests.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <section className="about-hero page-shell">
        <div className="about-hero__portrait-wrap">
          <img
            className="about-hero__portrait"
            src="/images/viet-hoa-profile.jpg"
            alt="Nguyễn Viết Hòa"
            width="592"
            height="620"
          />
        </div>
        <div>
          <p className="eyebrow">Player profile</p>
          <h1>About Viết Hòa</h1>
          <p className="content-page__lead">
            I’m a frontend developer with a Computer Science background. I enjoy
            understanding a product’s workflows, shaping them in Figma, and
            turning them into clear, responsive React interfaces.
          </p>
          <p className="about-hero__body">
            My long-term goal is to become a full-stack developer who can take
            ownership across the product. I’m currently expanding my backend
            foundation with Node.js, Express, and SQL.
          </p>
        </div>
      </section>

      <section className="profile-section">
        <div className="page-shell profile-grid">
          <article className="profile-card profile-card--wide">
            <p className="eyebrow">Experience</p>
            <div className="profile-card__heading">
              <div>
                <h2>{experience.role}</h2>
                <p>{experience.company}</p>
              </div>
              <span>{experience.period}</span>
            </div>
            <p className="profile-card__meta">{experience.type}</p>
            <ul className="detail-list">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="text-link"
              href={experience.source}
              target="_blank"
              rel="noreferrer"
            >
              View internship repositories <ExternalLink aria-hidden="true" />
            </a>
          </article>

          <article className="profile-card">
            <p className="eyebrow">Education</p>
            <h2>{education.degree}</h2>
            <p>{education.school}</p>
            <dl className="education-facts">
              <div>
                <dt>Period</dt>
                <dd>{education.period}</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>{education.gpa}</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <section
        className="page-shell skills-section"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Toolbox</p>
            <h2 id="skills-title">Skills I work with</h2>
          </div>
        </div>
        <div className="skill-groups">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <ul className="chip-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="interests-section">
        <div className="page-shell interests-section__inner">
          <div>
            <p className="eyebrow">Beyond the screen</p>
            <h2>A few things that keep me curious.</h2>
          </div>
          <ul className="interest-list">
            {interests.map((interest, index) => (
              <li key={interest}>
                <span>0{index + 1}</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
