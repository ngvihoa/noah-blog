import { Lock } from 'lucide-react'
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

export function AiWorkflowSection() {
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
        <Reveal>
          <ol className="m-0 grid list-none grid-cols-5 p-0 max-md:grid-cols-1 max-md:gap-9">
            {steps.map((step, index) => (
              <li
                className="relative pr-5 max-md:grid max-md:grid-cols-[2.75rem_minmax(0,1fr)] max-md:gap-x-4 max-md:pr-0"
                key={step.name}
              >
                {index < steps.length - 1 && (
                  <span
                    className="absolute top-[1.3rem] right-0 left-11 h-0.5 bg-[rgb(108_92_231/25%)] max-md:top-11 max-md:right-auto max-md:-bottom-9 max-md:left-[1.3rem] max-md:h-auto max-md:w-0.5"
                    aria-hidden="true"
                  />
                )}
                {step.approval && (
                  <span className="group absolute top-2 left-[calc(1.375rem+50%)] z-[2] -translate-x-1/2 max-md:top-auto max-md:-bottom-8 max-md:left-[1.375rem]">
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
                  </span>
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
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
