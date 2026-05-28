import Section from '../components/Section'
import { links } from '../content/site'

// STUB — to be implemented: link cards + footer with portfolio back-link.
// Live dashboard is a SECONDARY link with an idle-state note (per decision).
export default function Links() {
  return (
    <Section id="links" eyebrow="Links" title="Explore the system" narrow>
      <ul style={{ color: 'var(--text-1)' }}>
        <li>
          <a href={links.nfcRepo}>NFC Party Controller — GitHub</a>
        </li>
        <li>
          <a href={links.dashboardRepo}>New Year Dashboard — GitHub</a>
        </li>
        <li>
          <a href={links.liveDashboard}>Live dashboard</a>{' '}
          <span style={{ color: 'var(--text-2)' }}>(live only during events — idle otherwise)</span>
        </li>
      </ul>
      <p style={{ marginTop: 'var(--space-4)', color: 'var(--text-2)' }}>
        <a href={links.portfolio}>← Back to portfolio</a>
      </p>
    </Section>
  )
}
