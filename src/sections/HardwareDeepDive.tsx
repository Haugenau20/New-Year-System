import Section from '../components/Section'
import { hardware } from '../content/site'

// STUB — to be implemented: spec-card grid + build photo.
export default function HardwareDeepDive() {
  return (
    <Section id="hardware" eyebrow="Hardware" title="Inside the controllers">
      <p style={{ color: 'var(--text-1)', marginBottom: 'var(--space-4)' }}>{hardware.intro}</p>
      <ul style={{ color: 'var(--text-1)' }}>
        {hardware.specs.map((spec) => (
          <li key={spec.name}>
            <strong>{spec.name}</strong> — {spec.detail}
          </li>
        ))}
      </ul>
      <p style={{ color: 'var(--text-2)', marginTop: 'var(--space-3)' }}>{hardware.power}</p>
    </Section>
  )
}
