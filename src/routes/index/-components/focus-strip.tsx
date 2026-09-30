const focusItems = [
  { label: 'Building with', value: 'React, Next.js & TypeScript' },
  { label: 'Growing toward', value: 'Full-stack development' },
  { label: 'Open to', value: 'Frontend roles & product ideas' },
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
