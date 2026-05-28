import Section from '../components/Section'
import MediaFrame from '../components/MediaFrame'
import { inAction } from '../content/site'
import './InAction.css'

export default function InAction() {
  return (
    <Section id="in-action" eyebrow="In Action" title="New Year's Eve, live">
      <p className="gallery__lead">{inAction.intro}</p>
      <div className="gallery__grid">
        {inAction.gallery.map((item) => {
          const isWide = item.ratio === '16 / 9'
          return (
            <MediaFrame
              key={item.caption}
              alt={item.caption}
              caption={item.caption}
              ratio={item.ratio}
              placeholderLabel="Photo / clip"
              className={`gallery__tile${isWide ? ' gallery__tile--wide' : ''}`}
            />
          )
        })}
      </div>
    </Section>
  )
}
