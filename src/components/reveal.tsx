import { motion, type HTMLMotionProps } from 'motion/react'

type RevealProps = HTMLMotionProps<'div'> & {
  as?: 'div' | 'article'
  delay?: number
}

/** Fades content up once when it first scrolls into view. */
export function Reveal({ as = 'div', delay = 0, ...props }: RevealProps) {
  const Component = motion[as] as typeof motion.div

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  )
}
