import Section from '../components/Section'
import { software } from '../content/site'
import './SoftwareDeepDive.css'

export default function SoftwareDeepDive() {
  return (
    <Section id="software" eyebrow="Software" title="The automation & dashboard layer">
      <p className="sw__lead">{software.intro}</p>

      <div className="sw__columns">
        {/* Home Assistant layer — blue accent */}
        <div className="sw__block sw__block--ha">
          <h3 className="sw__block-title">{software.homeAssistant.title}</h3>
          <ul className="sw__block-list">
            {software.homeAssistant.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Dashboard layer — gold accent */}
        <div className="sw__block sw__block--dashboard">
          <h3 className="sw__block-title">{software.dashboard.title}</h3>
          <ul className="sw__block-list">
            {software.dashboard.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
