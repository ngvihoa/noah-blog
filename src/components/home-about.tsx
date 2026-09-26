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
    <section
      id="about"
      className="scroll-mt-[76px] border-y border-[var(--line)] bg-[rgb(255_255_255/52%)] py-[108px] max-[720px]:py-[76px]"
      aria-labelledby="about-title"
    >
      <div className="page-shell grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] items-center gap-[90px] max-[1020px]:gap-[50px] max-[720px]:grid-cols-1 max-[720px]:gap-8">
        <div className="relative max-w-[420px] -rotate-2 rounded-[26px] border border-[var(--line)] bg-[var(--surface-strong)] p-[13px] shadow-[0_24px_70px_rgb(63_48_13/12%)] after:absolute after:right-[-7px] after:bottom-[18%] after:size-4 after:rotate-45 after:bg-[var(--gold)] after:content-[''] max-[720px]:w-[min(100%,360px)] max-[720px]:justify-self-center">
          <img
            className="block h-auto w-full rounded-[17px] saturate-[0.88] contrast-[1.03]"
            src="/avatar.jpg"
            alt="Nguyễn Viết Hòa"
            width="592"
            height="620"
            loading="lazy"
          />
          <img
            className="absolute right-[-34px] bottom-[-34px] size-[116px] rotate-4 rounded-[28px] border border-[rgb(23_35_60/8%)] bg-[var(--surface-strong)] object-contain p-[18px] shadow-[0_18px_44px_rgb(23_35_60/16%)]"
            src="/logo_main.png"
            alt=""
            width="627"
            height="627"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow">About me</p>
          <h2 id="about-title">
            Curious by default. Intentional in execution.
          </h2>
          <p className="max-w-[650px] text-[1.12rem] leading-[1.8] text-[var(--ink-soft)]">
            I’m Noah — Nguyễn Viết Hòa, a software developer with a strong
            frontend foundation and a Computer Science background. I enjoy
            understanding a product’s workflows, shaping them in Figma, and
            turning them into clear, responsive products.
          </p>
          <p className="max-w-[650px] leading-[1.8] text-[1.12rem] text-[var(--ink-soft)]">
            My long-term goal is to become a full-stack developer who can take
            ownership across the product. I’m expanding my backend foundation
            with Node.js, Express, and SQL.
          </p>
          <dl className="mt-[34px] grid grid-cols-2 gap-[18px] max-[720px]:grid-cols-1">
            <div className="border-t border-(--line) pt-4">
              <dt className="mb-[5px] text-[0.64rem] font-bold tracking-[0.12em] text-[var(--primary-dark)] uppercase">
                Based in
              </dt>
              <dd className="m-0 [font-family:var(--display)] font-semibold">
                {profile.location}
              </dd>
            </div>
            <div className="border-t border-(--line) pt-4">
              <dt className="mb-[5px] text-[0.64rem] font-bold tracking-[0.12em] text-[var(--primary-dark)] uppercase">
                Focus
              </dt>
              <dd className="m-0 [font-family:var(--display)] font-semibold">
                Software development & product UI
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="page-shell mt-[76px] grid grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-6 max-[1020px]:grid-cols-1 max-[720px]:mt-[54px]">
        <article className="rounded-[20px] bg-[var(--surface-strong)] p-[38px] shadow-[0_18px_50px_rgb(23_35_60/7%)] outline outline-1 outline-[rgb(23_35_60/6%)] max-[720px]:px-6 max-[720px]:py-7">
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

        <article className="rounded-[20px] bg-[var(--surface-strong)] p-[38px] shadow-[0_18px_50px_rgb(23_35_60/7%)] outline outline-1 outline-[rgb(23_35_60/6%)] max-[720px]:px-6 max-[720px]:py-7">
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
              <dd className="m-0 text-[0.82rem] font-bold">
                {education.period}
              </dd>
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

      <div className="page-shell mt-[76px] grid grid-cols-[minmax(0,1.35fr)_minmax(330px,0.65fr)] gap-[54px] max-[1020px]:grid-cols-1 max-[720px]:mt-[54px] max-[720px]:gap-8">
        <div>
          <p className="eyebrow">Toolbox</p>
          <h2>Skills I work with</h2>
          <div className="grid grid-cols-3 gap-[14px] max-[720px]:grid-cols-1">
            {Object.entries(skills).map(([group, items]) => (
              <div
                className="rounded-[18px] border border-[var(--line)] bg-[var(--surface-strong)] p-[22px]"
                key={group}
              >
                <h3 className="capitalize">{group}</h3>
                <ul className="chip-list">
                  {items.map((item) => (
                    <li className="bg-[#eeeafd]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Beyond the screen</p>
          <h2>Things that keep me curious</h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-[var(--line)] bg-[var(--line)] p-0">
            {interests.map((interest, index) => (
              <li
                className="flex items-center gap-3.5 bg-[var(--surface-strong)] p-5 [font-family:var(--display)] font-semibold"
                key={interest}
              >
                <span className="[font-family:var(--body)] text-[0.66rem] text-[var(--primary-dark)]">
                  0{index + 1}
                </span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
