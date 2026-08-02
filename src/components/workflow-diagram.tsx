import { ArrowRight } from 'lucide-react'

const workflow = [
  { label: 'Discover', detail: 'Problem & users', focus: false },
  { label: 'Define', detail: 'Requirements & flow', focus: false },
  { label: 'Design', detail: 'UI & interaction', focus: true },
  { label: 'Build', detail: 'Frontend & integration', focus: true },
  { label: 'Refine', detail: 'Test, learn & iterate', focus: true },
] as const

export function WorkflowDiagram() {
  return (
    <div className="workflow" aria-labelledby="workflow-title">
      <div className="workflow__heading">
        <p className="eyebrow" id="workflow-title">
          How I contribute
        </p>
        <span className="workflow__legend">
          <span className="workflow__legend-dot" /> Primary focus
        </span>
      </div>

      <ol className="workflow__list">
        {workflow.map((step, index) => (
          <li
            className={
              step.focus
                ? 'workflow-step workflow-step--focus'
                : 'workflow-step'
            }
            style={{ '--step-index': index } as React.CSSProperties}
            key={step.label}
          >
            <div className="workflow-step__node">
              <span className="workflow-step__number">0{index + 1}</span>
              <span className="workflow-step__gem" aria-hidden="true" />
            </div>
            <div className="workflow-step__copy">
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </div>
            {index < workflow.length - 1 ? (
              <ArrowRight className="workflow-step__arrow" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}
