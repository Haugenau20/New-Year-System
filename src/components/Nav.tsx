import { navItems } from '../content/site'

/** Sticky top in-page navigation. Anchors to each section id. */
export default function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        background: 'rgba(10, 10, 18, 0.7)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-3)',
          paddingBlock: 'var(--space-2)',
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--text-0)',
            letterSpacing: '0.02em',
          }}
        >
          NYE&nbsp;<span style={{ color: 'var(--gold)' }}>System</span>
        </a>
        <ul
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontSize: 'var(--fs-small)',
            flexWrap: 'wrap',
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} style={{ color: 'var(--text-1)' }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
