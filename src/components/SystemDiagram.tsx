import './SystemDiagram.css'

type Step = {
  label: string
  detail: string
}

type SystemDiagramProps = {
  steps: readonly Step[]
}

export default function SystemDiagram({ steps }: SystemDiagramProps) {
  return (
    <div className="sysdiagram" role="list" aria-label="System flow diagram">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        const isFirst = index === 0
        return (
          <div key={step.label} className="sysdiagram__item" role="listitem">
            <div
              className={`sysdiagram__node${isLast ? ' sysdiagram__node--gold' : ''}${isFirst ? ' sysdiagram__node--first' : ''}`}
            >
              <span className="sysdiagram__label">{step.label}</span>
              <span className="sysdiagram__detail">{step.detail}</span>
            </div>
            {!isLast && (
              <div className="sysdiagram__connector" aria-hidden="true">
                {/* Inline SVG arrow — no dependencies */}
                <svg
                  className="sysdiagram__arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal arrow (desktop) */}
                  <line
                    className="sysdiagram__arrow-h"
                    x1="0"
                    y1="12"
                    x2="18"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <polyline
                    className="sysdiagram__arrow-h"
                    points="13,7 19,12 13,17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  {/* Vertical arrow (mobile) */}
                  <line
                    className="sysdiagram__arrow-v"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <polyline
                    className="sysdiagram__arrow-v"
                    points="7,13 12,19 17,13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
