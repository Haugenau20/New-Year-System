import Section from '../components/Section'
import { links } from '../content/site'
import './Links.css'

export default function Links() {
  return (
    <Section id="links" eyebrow="Links" title="Explore the system" narrow>
      <div className="links__stack">
        {/* Primary cards */}
        <a
          href={links.nfcRepo}
          className="links__card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="links__card-icon" aria-hidden="true">⚡</span>
          <div className="links__card-body">
            <span className="links__card-label">NFC Party Controller</span>
            <span className="links__card-sub">GitHub — ESP32 firmware, ESPHome config, wiring notes</span>
          </div>
        </a>

        <a
          href={links.dashboardRepo}
          className="links__card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="links__card-icon" aria-hidden="true">🎆</span>
          <div className="links__card-body">
            <span className="links__card-label">New Year Dashboard</span>
            <span className="links__card-sub">GitHub — React 18 + TypeScript TV dashboard, Firebase deployment</span>
          </div>
        </a>

        {/* Secondary: live dashboard */}
        <div className="links__secondary">
          <p className="links__secondary-heading">Live deployment</p>
          <a
            href={links.liveDashboard}
            className="links__secondary-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live dashboard →
          </a>
          <p className="links__idle-note">
            Active only during events — outside of New Year's Eve the dashboard is idle and
            will show no data. The GitHub repo is the best place to see how it works.
          </p>
        </div>

        {/* Scope / limitations — honest portfolio framing */}
        <div className="links__scope">
          <p className="links__scope-heading">Scope</p>
          <p className="links__scope-text">
            Built as a portfolio and inspiration piece — not a plug-and-play product. It's wired to
            one specific home: hardcoded to my speakers and two Spotify accounts (two, because Spotify
            won't play different songs on separate speakers from a single account), and Spotify-only
            with no support for other music services.
          </p>
        </div>
      </div>

      {/* Footer back-link */}
      <div className="links__footer">
        <a
          href={links.portfolio}
          className="links__back"
          target="_blank"
          rel="noopener noreferrer"
        >
          ← Back to portfolio
        </a>
      </div>
    </Section>
  )
}
