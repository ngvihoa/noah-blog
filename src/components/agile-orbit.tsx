import { motion, useReducedMotion, useTime, useTransform } from 'motion/react'

const contributions = [
  {
    label: 'Clarify requirements',
    detail: 'Review specs & designs with PM and Designer',
  },
  { label: 'Build', detail: 'Product-ready features' },
  { label: 'Test & validate', detail: 'Together with QA' },
  { label: 'Maintain & improve', detail: 'Monitor, refine & evolve' },
] as const

export function AgileOrbit() {
  const shouldReduceMotion = useReducedMotion()
  const time = useTime()
  const orbitRotation = useTransform(time, (value) =>
    shouldReduceMotion ? 0 : ((value % 32_000) / 32_000) * 360,
  )
  const counterRotation = useTransform(orbitRotation, (value) => -value)

  return (
    <div
      className="agile-orbit"
      aria-labelledby="agile-orbit-title"
      aria-describedby="agile-orbit-description"
    >
      <div className="agile-orbit__stage">
        <div className="agile-orbit__ring" aria-hidden="true" />

        <div className="agile-orbit__core" aria-hidden="true">
          <span>Agile</span>
          <small>Delivery loop</small>
        </div>

        <motion.ul
          className="agile-orbit__list"
          style={{ rotate: orbitRotation }}
        >
          {contributions.map((item, index) => (
            <li
              className="agile-orbit__slot"
              style={
                {
                  '--orbit-angle': `${index * (360 / contributions.length)}deg`,
                } as React.CSSProperties
              }
              key={item.label}
            >
              <div className="agile-orbit__anchor">
                <motion.div
                  className="agile-orbit__counter"
                  style={{ rotate: counterRotation }}
                >
                  <div className="agile-orbit__item">
                    <span className="agile-orbit__number">0{index + 1}</span>
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </div>
                </motion.div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
