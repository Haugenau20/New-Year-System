import Section from '../components/Section'
import MediaFrame from '../components/MediaFrame'
import { hardware } from '../content/site'
import './HardwareDeepDive.css'

export default function HardwareDeepDive() {
  return (
    <Section id="hardware" eyebrow="Hardware" title="Inside the controllers">
      <p className="hw__lead">{hardware.intro}</p>

      <div className="hw__content">
        {/* Spec card grid */}
        <div>
          <div className="hw__grid">
            {hardware.specs.map((spec) => (
              <div key={spec.name} className="hw__card">
                <h3 className="hw__card-name">{spec.name}</h3>
                <p className="hw__card-detail">{spec.detail}</p>
              </div>
            ))}
          </div>

          {/* Battery life callout */}
          <div className="hw__power">
            <span className="hw__power-icon" aria-hidden="true">⚡</span>
            <div>
              <p className="hw__power-label">Battery life</p>
              <p className="hw__power-text">{hardware.power}</p>
            </div>
          </div>
        </div>

        {/* Build photo placeholder */}
        <div className="hw__photo">
          <MediaFrame
            src="media/both_device_inside.jpg"
            alt="Physical build of the NFC controller hardware"
            ratio="4 / 3"
            placeholderLabel="Build photo"
          />
        </div>
      </div>
    </Section>
  )
}
