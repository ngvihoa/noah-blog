import { interests, skills } from '~/data/portfolio'

export function SkillsInterestsSection() {
  return (
    <section
      className="flex min-h-svh flex-col justify-center border-b border-[var(--line)] bg-[rgb(255_255_255/52%)] py-24 md:py-32"
      aria-label="Skills and interests"
    >
      <div className="page-shell grid grid-cols-[minmax(0,1.35fr)_minmax(330px,0.65fr)] gap-[54px] max-lg:grid-cols-1 max-md:gap-8">
        <div className="flex flex-col">
          <p className="eyebrow">Toolbox</p>
          <h2>Skills I work with</h2>
          <div className="grid flex-1 grid-cols-3 gap-[14px] max-md:grid-cols-1">
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
                <span className="[font-family:var(--body)] text-xs text-[var(--primary-dark)] md:text-sm">
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
