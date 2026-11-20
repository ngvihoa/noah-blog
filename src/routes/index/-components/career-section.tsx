import { EmphasizedText } from '~/components/emphasized-text'
import { ExternalLink } from 'lucide-react'
import {
  academicAchievements,
  education,
  experiences,
  professionalReferences,
} from '~/data/portfolio'
import { Reveal } from '~/components/reveal'

const cardSurface =
  'rounded-[20px] bg-[var(--surface-strong)] shadow-[0_18px_50px_rgb(23_35_60/7%)] outline outline-1 outline-[rgb(23_35_60/6%)]'
const cardClassName = `${cardSurface} p-[38px] max-md:px-6 max-md:py-7`
const supportingCardClassName = `${cardSurface} px-6 py-7 md:px-8 md:py-8`

export function CareerSection() {
  return (
    <section
      className="section flex flex-col justify-center border-b border-[var(--line)] lg:min-h-svh"
      aria-label="Experience and education"
    >
      <div className="page-shell">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">The journey so far</p>
            <h2>Experience &amp; education</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-[var(--space-card-gap)] max-lg:grid-cols-1">
          <div className="grid gap-[var(--space-card-gap)] lg:block! lg:space-y-[var(--space-card-gap)]">
            {experiences.map((experience) => (
              <Reveal
                as="article"
                className={cardClassName}
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
                  target={
                    experience.source.startsWith('/') ? undefined : '_blank'
                  }
                  rel={
                    experience.source.startsWith('/') ? undefined : 'noreferrer'
                  }
                >
                  {experience.sourceLabel} <ExternalLink aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>

          <div className="flex self-start flex-col gap-[var(--space-card-gap)]">
            <Reveal as="article" className={cardClassName} delay={0.08}>
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
            </Reveal>
            <Reveal
              as="article"
              className={supportingCardClassName}
              delay={0.16}
            >
              <h3 className="mb-5">Academic achievements</h3>
              <ul className="m-0 list-none p-0">
                {academicAchievements.map(({ title, detail }) => (
                  <li
                    className="border-t border-[var(--line)] py-3 last:pb-0"
                    key={title}
                  >
                    <p className="m-0 font-semibold">{title}</p>
                    <p className="m-0 text-sm text-[var(--ink-soft)]">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              as="article"
              className={supportingCardClassName}
              delay={0.24}
            >
              <h3 className="mb-5">References</h3>
              <ul className="m-0 list-none p-0">
                {professionalReferences.map(({ name, role, contact }) => (
                  <li
                    className="border-t border-[var(--line)] py-3 last:pb-0"
                    key={name}
                  >
                    <p className="m-0 font-semibold">{name}</p>
                    <p className="m-0 text-sm text-[var(--ink-soft)]">{role}</p>
                    <a
                      className="text-link mt-1 text-sm"
                      href={contact.href}
                      aria-label={`${contact.label} · ${name}`}
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
