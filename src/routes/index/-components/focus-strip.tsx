const focusItems = [
  { label: 'Building with', value: 'React, Next.js & TypeScript' },
  { label: 'Working across', value: 'Frontend & backend APIs' },
  { label: 'Open to', value: 'Software & Frontend Developer roles' },
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
