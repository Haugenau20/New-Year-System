import Section from '../components/Section'
import SystemDiagram from '../components/SystemDiagram'
import { systemFlow } from '../content/site'
import './SystemOverview.css'

export default function SystemOverview() {
  return (
    <Section id="system" eyebrow="System Overview" title="How the pieces fit together">
      <p className="sysoverview__lead">{systemFlow.intro}</p>

      {/* Pull-quote callout: surfaces the "no logic in firmware" architectural point */}
      <aside className="sysoverview__callout" aria-label="Key architectural principle">
        <span className="sysoverview__callout-icon" aria-hidden="true">✦</span>
        <p className="sysoverview__callout-text">
          <strong>No business logic on the device.</strong>{' '}
          The ESP32 firmware only emits tag events — every playlist assignment and automation lives in Home Assistant.
        </p>
        <p className="sysoverview__callout-sub">
          This means tags can be reassigned to any playlist or scene without ever reflashing the hardware.
        </p>
      </aside>

      {/* Diagram breaks slightly out of the prose column for visual breathing room */}
      <div className="sysoverview__diagram-wrap">
        <SystemDiagram steps={systemFlow.steps} />
      </div>
    </Section>
  )
}
