import Section from '../components/Section'
import { software } from '../content/site'

// STUB — to be implemented: two-column layout (HA layer + dashboard).
export default function SoftwareDeepDive() {
  return (
    <Section id="software" eyebrow="Software" title="The automation & dashboard layer">
      <p style={{ color: 'var(--text-1)', marginBottom: 'var(--space-4)' }}>{software.intro}</p>
      <h3 style={{ fontSize: 'var(--fs-h3)' }}>{software.homeAssistant.title}</h3>
      <ul style={{ color: 'var(--text-1)' }}>
        {software.homeAssistant.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <h3 style={{ fontSize: 'var(--fs-h3)', marginTop: 'var(--space-4)' }}>{software.dashboard.title}</h3>
      <ul style={{ color: 'var(--text-1)' }}>
        {software.dashboard.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </Section>
  )
}
