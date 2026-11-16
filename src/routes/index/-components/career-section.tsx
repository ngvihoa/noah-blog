import { EmphasizedText } from '~/components/emphasized-text'
import { ExternalLink } from 'lucide-react'
import { education, experiences } from '~/data/portfolio'

const cardClassName =
  'rounded-[20px] bg-[var(--surface-strong)] p-[38px] shadow-[0_18px_50px_rgb(23_35_60/7%)] outline outline-1 outline-[rgb(23_35_60/6%)] max-md:px-6 max-md:py-7'

export function CareerSection() {
  return (
    <section
      className="flex min-h-svh flex-col justify-center border-b border-[var(--line)] py-24 md:py-32"
      aria-label="Experience and education"
    >
      <div className="page-shell">
        <div className="mb-10">
          <p className="eyebrow">The journey so far</p>
          <h2>Experience &amp; education</h2>
        </div>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-6 max-lg:grid-cols-1">
          <div className="grid gap-6 lg:block! lg:space-y-6">
            {experiences.map((experience) => (
              <article
                className={`${cardClassName} lg:sticky lg:top-[90px]`}
                key={experience.company}
              >
                <p className="eyebrow">{experience.label}</p>
                <div className="flex items-start justify-between gap-8 max-md:flex-col">
                  <div>
                    <h3 className="mb-2 text-[clamp(1.8rem,3vw,2.6rem)]">
                      {experience.role}
                    </h3>
                    <p>
                      {experience.companyUrl ? (
                        <a
                          className="underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--primary-dark)] hover:decoration-[var(--primary)]"
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        experience.company
                      )}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-[var(--primary-dark)] md:text-sm">
                    {experience.period}
                  </span>
                </div>
                <p className="text-xs font-bold text-[var(--primary-dark)] md:text-sm">
                  {experience.type}
                </p>
                <ul className="detail-list">
                  {experience.highlights.map((item) => (
                    <li key={item}>
                      <EmphasizedText text={item} />
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link mt-7"
                  href={experience.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experience.sourceLabel} <ExternalLink aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <article
            className={`${cardClassName} self-start lg:sticky lg:top-[90px]`}
          >
            <p className="eyebrow">Education</p>
            <h3 className="mb-2 text-[clamp(1.8rem,3vw,2.6rem)]">
              {education.degree}
            </h3>
            <p>{education.school}</p>
            <dl className="mt-11 grid gap-5">
              <div className="border-t border-[var(--line)] pt-[18px]">
                <dt className="mb-[5px] text-xs font-bold tracking-[0.11em] text-[var(--ink-soft)] uppercase md:text-sm">
                  Period
                </dt>
                <dd className="m-0 text-xs font-bold md:text-sm">
                  {education.period}
                </dd>
              </div>
              <div className="border-t border-[var(--line)] pt-[18px]">
                <dt className="mb-[5px] text-xs font-bold tracking-[0.11em] text-[var(--ink-soft)] uppercase md:text-sm">
                  GPA
                </dt>
                <dd className="m-0 text-xs font-bold md:text-sm">
                  {education.gpa}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}
