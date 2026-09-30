import { skills } from '~/data/portfolio'

export function SkillsInterestsSection() {
  return (
    <section
      className="flex min-h-svh flex-col justify-center border-b border-[var(--line)] bg-[rgb(255_255_255/52%)] py-24 md:py-32"
      aria-label="Skills"
    >
      <div className="page-shell">
        <p className="eyebrow">Toolbox</p>
        <h2>Skills I work with</h2>
        <div className="grid grid-cols-3 gap-[14px] max-md:grid-cols-1">
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
    </section>
  )
}
