import './Story.css'
import Section from '../components/Section'
import { story } from '../content/site'

export default function Story() {
  const [lead, ...rest] = story.paragraphs

  return (
    <Section id="story" eyebrow="The Story" title="Why it was built" narrow>
      {/* Lead paragraph with drop-cap and gold left-rule */}
      <p className="story__lead">{lead}</p>

      {rest.map((para, i) => (
        <div key={i}>
          <span className="story__sep" aria-hidden="true">· · ·</span>
          <p className="story__body">{para}</p>
        </div>
      ))}
    </Section>
  )
}
