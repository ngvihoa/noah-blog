import { skills } from '~/data/portfolio'

export function SkillsInterestsSection() {
  return (
    <section
      className="section flex flex-col justify-center border-b border-[var(--line)] bg-[rgb(255_255_255/52%)] lg:min-h-svh"
      aria-label="Skills"
    >
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Toolbox</p>
            <h2>Skills I work with</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[var(--space-card-gap)] md:grid-cols-12">
          {Object.entries(skills).map(([group, items]) => (
            <div
              className={`min-w-0 rounded-[18px] border border-[var(--line)] bg-[var(--surface-strong)] p-[22px] ${
                group === 'frontend' || group === 'AI coding tools'
                  ? 'md:col-span-7'
                  : 'md:col-span-5'
              }`}
              key={group}
            >
              <h3>
                {group === 'AI coding tools'
                  ? group
                  : group[0].toUpperCase() + group.slice(1)}
              </h3>
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
