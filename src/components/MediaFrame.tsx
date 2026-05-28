import type { CSSProperties } from 'react'

type MediaFrameProps = {
  /** Path under /public (e.g. "media/nfc-tap.gif"). When absent, a styled placeholder renders. */
  src?: string
  /** Render as a looping muted video instead of an <img>. */
  video?: boolean
  alt: string
  /** Caption shown beneath the frame. */
  caption?: string
  /** CSS aspect-ratio, e.g. "16 / 9" (default) or "1 / 1". */
  ratio?: string
  /** Label shown inside the placeholder box when no src is provided. */
  placeholderLabel?: string
  className?: string
  style?: CSSProperties
}

/**
 * Placeholder-aware media slot. Until real assets land in /public/media,
 * pass no `src` and it renders a labelled placeholder with the right
 * aspect ratio so layout is final before media exists.
 */
export default function MediaFrame({
  src,
  video = false,
  alt,
  caption,
  ratio = '16 / 9',
  placeholderLabel,
  className,
  style,
}: MediaFrameProps) {
  const resolved = src ? `${import.meta.env.BASE_URL}${src}` : undefined

  return (
    <figure className={className} style={{ margin: 0, ...style }}>
      <div
        style={{
          aspectRatio: ratio,
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          border: '1px solid var(--line)',
          background: 'var(--bg-2)',
          boxShadow: 'var(--shadow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {resolved ? (
          video ? (
            <video
              src={resolved}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img
              src={resolved}
              alt={alt}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-small)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-2)',
              padding: 'var(--space-3)',
              textAlign: 'center',
            }}
          >
            {placeholderLabel ?? alt}
          </span>
        )}
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: 'var(--space-2)',
            fontSize: 'var(--fs-small)',
            color: 'var(--text-2)',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
