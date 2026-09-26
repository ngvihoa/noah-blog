import type { ReactNode } from 'react'

import { cn } from '~/lib/utils'

type StackedSectionProps = {
  children: ReactNode
  layer: number
  className?: string
}

export function StackedSection({
  children,
  layer,
  className,
}: StackedSectionProps) {
  return (
    <div
      className={cn(
        'relative bg-[var(--canvas)] lg:sticky lg:top-0',
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
