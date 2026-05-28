import Section from '../components/Section'
import { systemFlow } from '../content/site'

// STUB — to be implemented: SystemDiagram component rendering the flow.
export default function SystemOverview() {
  return (
    <Section id="system" eyebrow="System Overview" title="How the pieces fit together" narrow>
      <p style={{ color: 'var(--text-1)', marginBottom: 'var(--space-4)' }}>{systemFlow.intro}</p>
      <ol style={{ color: 'var(--text-1)' }}>
        {systemFlow.steps.map((s) => (
          <li key={s.label}>
            <strong>{s.label}</strong> — {s.detail}
          </li>
        ))}
      </ol>
    </Section>
  )
}
