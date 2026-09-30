import { useEffect, useRef, type ReactNode } from 'react'

import { cn } from '~/lib/utils'

type StackedSectionProps = {
  children: ReactNode
  layer: number
  className?: string
  /** Pin bottom-aligned once scrolled past, for sections taller than 100svh. */
  pinBottom?: boolean
}

export function StackedSection({
  children,
  layer,
  className,
  pinBottom = false,
}: StackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pinBottom) return
    const el = ref.current
    if (!el) return
    const measure = () =>
      el.style.setProperty('--stack-h', `${el.offsetHeight}px`)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [pinBottom])

  return (
    <div
      ref={ref}
      className={cn(
        'relative bg-[var(--canvas)] lg:sticky lg:top-0',
        pinBottom && 'lg:top-[calc(100svh-var(--stack-h))]',
        className,
      )}
      style={{ zIndex: layer }}
    >
      <div className="relative bg-[var(--canvas)] lg:overflow-hidden lg:rounded-t-[28px] lg:border-t lg:border-[var(--line)] lg:shadow-[0_-18px_52px_rgb(23_35_60/8%)]">
        {children}
      </div>
    </div>
  )
}
