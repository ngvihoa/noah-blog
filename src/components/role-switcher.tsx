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

  if (shouldReduceMotion) {
    return (
      <p className="mb-6 text-base font-bold text-[var(--primary-dark)] sm:text-lg">
        Software Developer <span aria-hidden="true">·</span> Frontend Developer
      </p>
    )
  }

  return (
    <p
      className="mb-6 flex items-baseline gap-2 text-base font-semibold text-[var(--ink-soft)] sm:text-lg"
      aria-label="Software Developer with a strong frontend foundation"
    >
      <span aria-hidden="true">I’m a</span>
      <span
        className="relative inline-grid min-w-[12.5rem] overflow-hidden font-bold text-[var(--primary-dark)]"
        aria-hidden="true"
      >
        <span className="invisible col-start-1 row-start-1">
          Software Developer
        </span>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={roles[activeRole]}
            className="col-start-1 row-start-1 whitespace-nowrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {roles[activeRole]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  )
}
