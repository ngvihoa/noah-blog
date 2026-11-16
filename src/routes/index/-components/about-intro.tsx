import { profile } from '~/data/portfolio'

export function AboutIntroSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[76px] max-md:overflow-x-clip flex min-h-svh flex-col justify-center border-y border-[var(--line)] bg-[rgb(255_255_255/52%)] py-28 md:py-36"
      aria-labelledby="about-title"
    >
      <div className="page-shell grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] items-center gap-[90px] max-lg:gap-[50px] max-md:grid-cols-1 max-md:gap-8">
        <div className="relative max-w-[420px] -rotate-2 rounded-[26px] border border-[var(--line)] bg-[var(--surface-strong)] p-[13px] shadow-[0_24px_70px_rgb(63_48_13/12%)] after:absolute after:right-[-7px] after:bottom-[18%] after:size-4 after:rotate-45 after:bg-[var(--gold)] after:content-[''] max-md:w-[min(100%,360px)] max-md:justify-self-center">
          <img
            className="block h-auto w-full rounded-[17px] saturate-[0.88] contrast-[1.03]"
            src="/avatar.jpg"
            alt="Nguyễn Viết Hòa"
            width="592"
            height="620"
            loading="lazy"
          />
          <img
            className="absolute right-[-34px] bottom-[-34px] max-md:right-0 size-[116px] rotate-4 rounded-[28px] border border-[rgb(23_35_60/8%)] bg-[var(--surface-strong)] object-contain p-[18px] shadow-[0_18px_44px_rgb(23_35_60/16%)]"
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
            I’m Noah — Nguyễn Viết Hòa, a Software Developer based in Ho Chi
            Minh City with a strong frontend foundation. My work at HouseNow
            spans web and mobile product experiences, from property discovery to
            tools for real estate agents, with React, Next.js, and TypeScript.
          </p>
          <p className="max-w-[650px] text-[1.12rem] leading-[1.8] text-[var(--ink-soft)]">
            With a Computer Science background, I enjoy understanding how a
            product works and turning complex workflows into clear interfaces.
            I’m growing toward full-stack development, building on hands-on
            experience with backend APIs and SQL.
          </p>
          <dl className="mt-[34px] grid grid-cols-2 gap-[18px] max-md:grid-cols-1">
            <div className="border-t border-(--line) pt-4">
              <dt className="mb-[5px] text-xs font-bold tracking-[0.12em] text-[var(--primary-dark)] uppercase md:text-sm">
                Based in
              </dt>
              <dd className="m-0 [font-family:var(--display)] font-semibold">
                {profile.location}
              </dd>
            </div>
            <div className="border-t border-(--line) pt-4">
              <dt className="mb-[5px] text-xs font-bold tracking-[0.12em] text-[var(--primary-dark)] uppercase md:text-sm">
                Focus
              </dt>
              <dd className="m-0 [font-family:var(--display)] font-semibold">
                Software development & product UI
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
