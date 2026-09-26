import { ExternalLink } from 'lucide-react'
import {
  education,
  experience,
  interests,
  profile,
  skills,
} from '~/data/portfolio'

export function HomeAbout() {
  return (
    <section id="about" className="home-about" aria-labelledby="about-title">
      <div className="page-shell home-about__intro">
        <div className="about-portrait">
          <img
            className="about-portrait__photo"
            src="/avatar.jpg"
            alt="Nguyễn Viết Hòa"
            width="592"
            height="620"
            loading="lazy"
          />
          <img
            className="about-portrait__logo"
            src="/logo_main.png"
            alt=""
            width="627"
            height="627"
            loading="lazy"
          />
        </div>
        <div className="home-about__copy">
          <p className="eyebrow">About me</p>
          <h2 id="about-title">
            Curious by default. Intentional in execution.
          </h2>
          <p className="home-about__lead">
            I’m Noah — Nguyễn Viết Hòa, a software developer with a strong
            frontend foundation and a Computer Science background. I enjoy
            understanding a product’s workflows, shaping them in Figma, and
            turning them into clear, responsive products.
          </p>
          <p>
            My long-term goal is to become a full-stack developer who can take
            ownership across the product. I’m expanding my backend foundation
            with Node.js, Express, and SQL.
          </p>
          <dl className="home-about__facts">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Software development & product UI</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="page-shell profile-grid home-about__journey">
        <article className="profile-card profile-card--wide">
          <p className="eyebrow">Experience</p>
          <div className="profile-card__heading">
            <div>
              <h3>{experience.role}</h3>
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
          <h3>{education.degree}</h3>
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

      <div className="page-shell home-about__details">
        <div>
          <p className="eyebrow">Toolbox</p>
          <h2>Skills I work with</h2>
          <div className="skill-groups skill-groups--compact">
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
        </div>
        <div className="home-about__interests">
          <p className="eyebrow">Beyond the screen</p>
          <h2>Things that keep me curious</h2>
          <ul className="interest-list">
            {interests.map((interest, index) => (
              <li key={interest}>
                <span>0{index + 1}</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
