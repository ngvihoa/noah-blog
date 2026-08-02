const focusItems = [
  { label: 'Building', value: 'Accessible web interfaces' },
  { label: 'Exploring', value: 'Full-stack TypeScript' },
  { label: 'Available for', value: 'Junior developer opportunities' },
] as const

export function FocusStrip() {
  return (
    <dl className="focus-strip" aria-label="Current focus">
      {focusItems.map((item) => (
        <div className="focus-strip__item" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
