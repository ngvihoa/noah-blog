import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const roles = ['Software Developer', 'Frontend Developer'] as const

export function RoleSwitcher() {
  const [activeRole, setActiveRole] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = window.setInterval(() => {
      setActiveRole((currentRole) => (currentRole + 1) % roles.length)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [shouldReduceMotion])

  const visibleRole = roles[shouldReduceMotion ? 0 : activeRole]
  const titleTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <h1 id="hero-title" aria-label="Software Developer and Frontend Developer">
      <span className="grid overflow-hidden" aria-hidden="true">
        <span className="invisible col-start-1 row-start-1">
          Software Developer
        </span>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={visibleRole}
            className="col-start-1 row-start-1"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={titleTransition}
          >
            {visibleRole}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  )
}
