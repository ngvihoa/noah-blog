import { Lock } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Reveal } from '~/components/reveal'

type Step = { name: string; line: string; approval?: string }

const steps: Step[] = [
  {
    name: 'Clarify & spec',
    line: 'I define what and why.',
    approval: 'I approve the spec',
  },
  {
    name: 'Break down',
    line: 'Small tasks that can each be verified.',
    approval: 'I approve the task plan',
  },
  { name: 'Build', line: 'Agents code, test-first.' },
  {
    name: 'Review & QA',
    line: 'Checked against the spec.',
    approval: 'I sign off before shipping',
  },
  { name: 'Ship', line: 'I decide when it goes live.' },
]

// The connector after a step draws in this many seconds. A connector with an
// approval mark pauses halfway while its lock pops in.
const lineDuration = (step: Step) => (step.approval ? 1 : 0.45)
const pauseAt = [0, 0.35, 0.65, 1]

// Start time of each step's entrance and of the connector that follows it.
const timeline = steps.reduce<{ step: number; line: number }[]>(
  (times, step, index) => {
    const previous = times[index - 1]
    const start = previous
      ? previous.line + lineDuration(steps[index - 1]) - 0.1
      : 0
    times.push({ step: start, line: start + 0.2 })
    return times
  },
  [],
)

export function AiWorkflowSection() {
  const listRef = useRef<HTMLOListElement>(null)
  const inView = useInView(listRef, {
    once: true,
    margin: '0px 0px -15% 0px',
  })
  const animate = !useReducedMotion()
  const shown = inView || !animate

  return (
    <section
      id="how-i-work"
      className="section flex scroll-mt-[76px] flex-col justify-center border-b border-[var(--line)] lg:min-h-svh"
      aria-labelledby="how-i-work-title"
    >
      <div className="page-shell">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">How I work with AI</p>
            <h2 id="how-i-work-title">I steer. Agents build.</h2>
            <p className="m-0 text-[1.12rem] text-[var(--ink-soft)]">
              Nothing moves forward without my approval.
            </p>
          </div>
        </Reveal>
        <ol
          ref={listRef}
          className="m-0 grid list-none grid-cols-5 p-0 max-md:grid-cols-1 max-md:gap-9"
        >
          {steps.map((step, index) => (
            <motion.li
              className="relative pr-5 max-md:grid max-md:grid-cols-[2.75rem_minmax(0,1fr)] max-md:gap-x-4 max-md:pr-0"
              key={step.name}
              initial={animate ? { opacity: 0, y: 12 } : false}
              animate={shown ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: timeline[index].step,
              }}
            >
              {index < steps.length - 1 && (
                // Scaling from the top-left corner grows the line rightward on
                // desktop and downward on mobile.
                <motion.span
                  className="absolute top-[1.3rem] right-0 left-11 h-0.5 origin-top-left bg-[rgb(108_92_231/35%)] max-md:top-11 max-md:right-auto max-md:-bottom-9 max-md:left-[1.3rem] max-md:h-auto max-md:w-0.5"
                  aria-hidden="true"
                  initial={animate ? { scale: 0 } : false}
                  animate={
                    shown
                      ? {
                          scale: step.approval ? [0, 0.5, 0.5, 1] : 1,
                        }
                      : undefined
                  }
                  transition={{
                    duration: lineDuration(step),
                    ease: 'easeInOut',
                    times: step.approval ? pauseAt : undefined,
                    delay: timeline[index].line,
                  }}
                />
              )}
              {step.approval && (
                <motion.span
                  className="group absolute top-2 left-[calc(1.375rem+50%)] z-[2] -translate-x-1/2 max-md:top-auto max-md:-bottom-8 max-md:left-[1.375rem]"
                  initial={animate ? { scale: 0 } : false}
                  animate={shown ? { scale: 1 } : undefined}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 14,
                    delay:
                      timeline[index].line + lineDuration(step) * pauseAt[1],
                  }}
                >
                  <button
                    type="button"
                    className="grid size-7 cursor-help place-items-center rounded-full bg-[#fff3d6] text-[#b7791f] transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] [&_svg]:size-3.5"
                    aria-describedby={`approval-${index}`}
                  >
                    <Lock aria-hidden="true" strokeWidth={2.5} />
                    <span className="sr-only">Approval point</span>
                  </button>
                  <span
                    id={`approval-${index}`}
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 rounded-lg bg-[var(--ink)] px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-[0_8px_20px_rgb(23_35_60/18%)] transition duration-150 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 max-md:top-1/2 max-md:bottom-auto max-md:left-full max-md:mb-0 max-md:ml-2 max-md:translate-x-0 max-md:-translate-y-1/2 max-md:group-focus-within:-translate-y-1/2 max-md:group-hover:-translate-y-1/2"
                  >
                    {step.approval}
                  </span>
                </motion.span>
              )}
              <span className="relative z-[1] mb-5 grid size-11 place-items-center rounded-full border-2 border-[var(--primary)] bg-[var(--canvas)] [font-family:var(--display)] font-extrabold text-[var(--primary-dark)] max-md:row-span-2 max-md:mb-0">
                {index + 1}
              </span>
              <h3 className="mb-1.5! text-[1.25rem]! leading-tight max-md:mt-1">
                {step.name}
              </h3>
              <p className="m-0 leading-normal text-[var(--ink-soft)]">
                {step.line}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
