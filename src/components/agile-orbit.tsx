import { motion, useReducedMotion } from 'motion/react'

const contributions = [
  { label: 'Read specs', detail: 'Requirements & logic' },
  { label: 'Review design', detail: 'UI flows & states' },
  { label: 'Align', detail: 'With Designer & PM' },
  { label: 'Build', detail: 'Product-ready features' },
  { label: 'Test & validate', detail: 'Together with QA' },
  { label: 'Maintain', detail: 'Fixes after release' },
] as const

const orbitTransition = {
  duration: 32,
  ease: 'linear',
  repeat: Number.POSITIVE_INFINITY,
} as const

export function AgileOrbit() {
  const shouldReduceMotion = useReducedMotion()
  const orbitAnimation = shouldReduceMotion ? undefined : { rotate: 360 }
  const counterAnimation = shouldReduceMotion ? undefined : { rotate: -360 }

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
          animate={orbitAnimation}
          transition={orbitTransition}
        >
          {contributions.map((item, index) => (
            <li
              className="agile-orbit__slot"
              style={
                {
                  '--orbit-angle': `${index * 60}deg`,
                } as React.CSSProperties
              }
              key={item.label}
            >
              <div className="agile-orbit__anchor">
                <motion.div
                  className="agile-orbit__counter"
                  animate={counterAnimation}
                  transition={orbitTransition}
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
