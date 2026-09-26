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
      className="relative min-w-0 max-[1020px]:w-full max-[720px]:overflow-x-clip"
      aria-label="Agile delivery contributions"
    >
      <div className="relative -mt-4 min-h-[530px] max-[720px]:mt-0 max-[720px]:min-h-[430px]">
        <div
          className="absolute top-1/2 left-1/2 size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-[#c9c0e8] bg-[radial-gradient(circle,rgb(108_92_231/7%)_0,rgb(108_92_231/3%)_34%,transparent_68%)] max-[720px]:size-[min(290px,calc(100vw-160px))]"
          aria-hidden="true"
        >
          <span className="absolute inset-12 rounded-full border border-[rgb(108_92_231/10%)] max-[720px]:inset-8" />
        </div>

        <div
          className="absolute top-1/2 left-1/2 z-[1] flex size-[150px] -translate-x-1/2 -translate-y-1/2 rotate-3 flex-col items-center justify-center border border-[rgb(81_64_204/20%)] bg-linear-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_18px_42px_rgb(108_92_231/25%)] [border-radius:36%_64%_56%_44%/52%_38%_62%_48%] max-[720px]:size-28"
          aria-hidden="true"
        >
          <span className="[font-family:var(--display)] text-[1.75rem] font-extrabold tracking-[-0.04em]">
            Agile
          </span>
          <small className="mt-0.5 text-[0.62rem] font-semibold tracking-[0.08em] uppercase">
            Delivery loop
          </small>
        </div>

        <motion.ul
          className="absolute top-1/2 left-1/2 z-[2] m-0 size-0 list-none p-0"
          style={{ rotate: orbitRotation }}
        >
          {contributions.map((item, index) => (
            <li
              className="absolute top-0 left-0 size-0 [--orbit-radius:195px] max-[720px]:[--orbit-radius:min(145px,calc(50vw-80px))]"
              style={
                {
                  '--orbit-angle': `${index * (360 / contributions.length)}deg`,
                  transform:
                    'rotate(var(--orbit-angle)) translateY(calc(-1 * var(--orbit-radius)))',
                } as React.CSSProperties
              }
              key={item.label}
            >
              <div
                style={{ transform: 'rotate(calc(-1 * var(--orbit-angle)))' }}
              >
                <motion.div
                  className="size-0"
                  style={{ rotate: counterRotation }}
                >
                  <div className="absolute flex min-h-[74px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[14px] border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-center shadow-[0_10px_28px_rgb(23_35_60/9%)] max-[720px]:min-h-[68px] max-[720px]:w-[126px]">
                    <span className="absolute top-2 left-[9px] text-[0.55rem] font-bold text-[#a49bb1]">
                      0{index + 1}
                    </span>
                    <strong className="[font-family:var(--display)] text-[0.9rem] text-[var(--ink)]">
                      {item.label}
                    </strong>
                    <small className="mt-[3px] text-[0.62rem] leading-[1.35] text-[var(--ink-soft)]">
                      {item.detail}
                    </small>
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
