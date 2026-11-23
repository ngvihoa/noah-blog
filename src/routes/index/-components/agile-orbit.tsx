import {
  motion,
  useReducedMotion,
  useTime,
  useTransform,
  type MotionValue,
} from 'motion/react'

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

  return (
    <div
      className="relative min-w-0 max-lg:w-full max-md:overflow-x-clip"
      aria-label="Agile delivery contributions"
    >
      {/* Mobile is too narrow for a circle of cards, so the orbit stretches into a vertical ellipse there. */}
      <div className="relative -mt-4 min-h-[530px] [--orbit-rx:195px] [--orbit-ry:195px] max-md:mt-0 max-md:min-h-[550px] max-md:[--orbit-rx:min(145px,calc(50vw-73px))] max-md:[--orbit-ry:205px]">
        <div
          className="absolute top-1/2 left-1/2 h-[calc(2*var(--orbit-ry))] w-[calc(2*var(--orbit-rx))] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[1.5px] border-dashed border-[#c9c0e8] bg-[radial-gradient(closest-side,rgb(108_92_231/7%)_0,rgb(108_92_231/3%)_48%,transparent_96%)]"
          aria-hidden="true"
        >
          <span className="absolute inset-12 rounded-[50%] border border-[rgb(108_92_231/10%)] max-md:inset-8" />
        </div>

        <div
          className="absolute top-1/2 left-1/2 z-[1] flex size-[150px] -translate-x-1/2 -translate-y-1/2 rotate-3 flex-col items-center justify-center border border-[rgb(81_64_204/20%)] bg-linear-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_18px_42px_rgb(108_92_231/25%)] [border-radius:36%_64%_56%_44%/52%_38%_62%_48%] max-md:size-[88px]"
          aria-hidden="true"
        >
          <span className="[font-family:var(--display)] text-[1.75rem] font-extrabold tracking-[-0.04em] max-md:text-2xl">
            Agile
          </span>
          <small className="mt-0.5 text-xs font-semibold tracking-[0.08em] uppercase max-md:text-[0.5625rem] max-md:tracking-[0.06em] md:text-sm">
            Delivery loop
          </small>
        </div>

        <ul className="absolute top-1/2 left-1/2 z-[2] m-0 size-0 list-none p-0">
          {contributions.map((item, index) => (
            <OrbitCard
              key={item.label}
              index={index}
              rotation={orbitRotation}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function OrbitCard({
  index,
  rotation,
  label,
  detail,
}: {
  index: number
  rotation: MotionValue<number>
  label: string
  detail: string
}) {
  const angle = useTransform(
    rotation,
    (value) => ((value + index * (360 / contributions.length)) * Math.PI) / 180,
  )
  const orbitX = useTransform(angle, Math.sin)
  const orbitY = useTransform(angle, (value) => -Math.cos(value))

  return (
    <motion.li
      className="absolute top-0 left-0 size-0 [transform:translate(calc(var(--orbit-x)*var(--orbit-rx)),calc(var(--orbit-y)*var(--orbit-ry)))]"
      style={
        { '--orbit-x': orbitX, '--orbit-y': orbitY } as React.CSSProperties
      }
    >
      <div className="absolute flex min-h-[88px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[14px] border border-[var(--line)] bg-[var(--surface-strong)] px-3 pt-7 pb-3 text-center shadow-[0_10px_28px_rgb(23_35_60/9%)] max-md:min-h-20 max-md:w-[116px] max-md:px-2.5 max-md:pt-6 max-md:pb-2.5">
        <span className="absolute top-2 left-[9px] text-xs font-bold text-[#a49bb1] md:text-sm">
          0{index + 1}
        </span>
        <strong className="[font-family:var(--display)] text-[0.9rem] text-[var(--ink)] max-md:text-[0.8125rem] max-md:leading-tight">
          {label}
        </strong>
        <small className="mt-[3px] text-xs leading-[1.35] text-[var(--ink-soft)] md:text-sm">
          {detail}
        </small>
      </div>
    </motion.li>
  )
}
