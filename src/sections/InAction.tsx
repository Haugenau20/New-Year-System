import Section from '../components/Section'
import MediaFrame from '../components/MediaFrame'
import { inAction } from '../content/site'

// STUB — to be implemented: responsive gallery grid.
export default function InAction() {
  return (
    <Section id="in-action" eyebrow="In Action" title="New Year’s Eve, live">
      <p style={{ color: 'var(--text-1)', marginBottom: 'var(--space-4)' }}>{inAction.intro}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'var(--space-3)',
        }}
      >
        {inAction.gallery.map((item) => (
          <MediaFrame
            key={item.caption}
            alt={item.caption}
            caption={item.caption}
            ratio={item.ratio}
            placeholderLabel="Photo / clip"
          />
        ))}
      </div>
    </Section>
  )
}
