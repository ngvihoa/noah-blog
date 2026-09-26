import { ExternalLink } from 'lucide-react'
import { education, experience } from '~/data/portfolio'

const cardClassName =
  'rounded-[20px] bg-[var(--surface-strong)] p-[38px] shadow-[0_18px_50px_rgb(23_35_60/7%)] outline outline-1 outline-[rgb(23_35_60/6%)] max-[720px]:px-6 max-[720px]:py-7'

export function CareerSection() {
  return (
    <div className="page-shell mt-[76px] grid grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-6 max-[1020px]:grid-cols-1 max-[720px]:mt-[54px]">
      <article className={cardClassName}>
        <p className="eyebrow">Experience</p>
        <div className="flex items-start justify-between gap-8 max-[720px]:flex-col">
          <div>
            <h3 className="mb-2 text-[clamp(1.8rem,3vw,2.6rem)]">
              {experience.role}
            </h3>
            <p>{experience.company}</p>
          </div>
          <span className="shrink-0 text-[0.78rem] font-bold text-[var(--primary-dark)]">
            {experience.period}
          </span>
        </div>
        <p className="text-[0.78rem] font-bold text-[var(--primary-dark)]">
          {experience.type}
        </p>
        <ul className="detail-list">
          {experience.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          className="text-link mt-7"
          href={experience.source}
          target="_blank"
          rel="noreferrer"
        >
          View internship repositories <ExternalLink aria-hidden="true" />
        </a>
      </article>

      <article className={cardClassName}>
        <p className="eyebrow">Education</p>
        <h3 className="mb-2 text-[clamp(1.8rem,3vw,2.6rem)]">
          {education.degree}
        </h3>
        <p>{education.school}</p>
        <dl className="mt-11 grid gap-5">
          <div className="border-t border-[var(--line)] pt-[18px]">
            <dt className="mb-[5px] text-[0.65rem] font-bold tracking-[0.11em] text-[var(--ink-soft)] uppercase">
              Period
            </dt>
            <dd className="m-0 text-[0.82rem] font-bold">{education.period}</dd>
          </div>
          <div className="border-t border-[var(--line)] pt-[18px]">
            <dt className="mb-[5px] text-[0.65rem] font-bold tracking-[0.11em] text-[var(--ink-soft)] uppercase">
              GPA
            </dt>
            <dd className="m-0 text-[0.82rem] font-bold">{education.gpa}</dd>
          </div>
        </dl>
      </article>
    </div>
  )
}
