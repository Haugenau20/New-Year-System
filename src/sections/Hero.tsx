import { useEffect, useRef } from 'react'
import './Hero.css'
import MediaFrame from '../components/MediaFrame'
import { hero } from '../content/site'

// ---------------------------------------------------------------------------
// Starfield – lightweight canvas effect (no deps). Each star is a point of
// light that drifts slowly downward and wraps, evoking a midnight sky.
// Gated behind prefers-reduced-motion at the JS level so the canvas never
// starts animating when the user has opted out.
// ---------------------------------------------------------------------------

type Star = {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
  opacityDelta: number
}

function makeStars(count: number, w: number, h: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.4 + 0.2,
    speed: Math.random() * 0.25 + 0.05,
    opacity: Math.random(),
    opacityDelta: (Math.random() * 0.005 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
  }))
}

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let stars: Star[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      stars = makeStars(180, canvas.width, canvas.height)
    }

    const draw = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)

      for (const s of stars) {
        // Gentle drift
        s.y += s.speed
        if (s.y > h) { s.y = 0; s.x = Math.random() * w }

        // Twinkle
        s.opacity += s.opacityDelta
        if (s.opacity <= 0 || s.opacity >= 1) s.opacityDelta *= -1

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230, 230, 255, ${Math.max(0, Math.min(1, s.opacity))})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export default function Hero() {
  // Split title: last two words get the gradient treatment
  const words = hero.title.split(' ')
  const plainWords = words.slice(0, -2).join(' ')
  const accentWords = words.slice(-2).join(' ')

  return (
    <section id="hero" className="hero">
      <Starfield />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        {/* ---- Text stack ---- */}
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-plain">{plainWords} </span>
            <span className="hero__title-accent">{accentWords}</span>
          </h1>

          <p className="hero__hook">{hero.hook}</p>
          <p className="hero__sub">{hero.sub}</p>
        </div>

        {/* ---- NFC tap visual ---- */}
        <div className="hero__media">
          <MediaFrame
            alt={hero.nfcGifAlt}
            placeholderLabel="NFC tap GIF"
            ratio="4 / 3"
          />
        </div>
      </div>

      {/* ---- Scroll cue ---- */}
      <a href="#story" className="hero__scroll-cue" aria-label="Scroll to The Story">
        <span>Scroll</span>
        <span className="hero__chevron" aria-hidden="true" />
      </a>
    </section>
  )
}
