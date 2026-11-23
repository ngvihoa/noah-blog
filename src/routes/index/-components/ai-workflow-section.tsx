import { Lock } from 'lucide-react'
import { Reveal } from '~/components/reveal'

const steps = [
  { name: 'Clarify & spec', line: 'I define what and why.', approval: true },
  {
    name: 'Break down',
    line: 'Small tasks that can each be verified.',
    approval: true,
  },
  { name: 'Build', line: 'Agents code, test-first.', approval: false },
  { name: 'Review & QA', line: 'Checked against the spec.', approval: true },
  { name: 'Ship', line: 'I decide when it goes live.', approval: false },
] as const

const approvalMark =
  'grid size-7 place-items-center rounded-full bg-[#fff3d6] text-[#b7791f] [&_svg]:size-3.5'

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
                  <span
                    className={`${approvalMark} absolute top-2 left-[calc(1.375rem+50%)] z-[1] -translate-x-1/2 max-md:top-auto max-md:-bottom-8 max-md:left-[1.375rem]`}
                    role="img"
                    aria-label="Needs my approval"
                  >
                    <Lock aria-hidden="true" strokeWidth={2.5} />
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
          <p className="mt-12! mb-0 flex items-center gap-2.5 text-sm font-semibold text-[var(--ink-soft)]">
            <span className={approvalMark} aria-hidden="true">
              <Lock strokeWidth={2.5} />
            </span>
            My approval
          </p>
        </Reveal>
      </div>
    </section>
  )
}
