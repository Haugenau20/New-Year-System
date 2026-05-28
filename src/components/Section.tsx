import { useEffect, useRef, useState, type ReactNode } from 'react'

type SectionProps = {
  id: string
  /** Small uppercase label above the heading. */
  eyebrow?: string
  /** Section heading. Omit for sections that render their own (e.g. Hero). */
  title?: string
  /** Constrain content to the narrow reading column. */
  narrow?: boolean
  className?: string
  children: ReactNode
}

/**
 * Shared section wrapper: consistent vertical rhythm, container width,
 * optional eyebrow/title, and a scroll-reveal animation on first view.
 */
export default function Section({
  id,
  eyebrow,
  title,
  narrow = false,
  className,
  children,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ paddingBlock: 'var(--section-pad)' }}
    >
      <div className={`container${narrow ? ' container--narrow' : ''}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: 'var(--space-4)' }}>{title}</h2>}
        {children}
      </div>
    </section>
  )
}
