import { useEffect, useRef, useState } from 'react'

function Counter({ target, duration = 1600, suffix = '' }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {value.toLocaleString('es-EC')}
      {suffix}
    </span>
  )
}

export default function TrustStrip() {
  return (
    <div className="trust-strip" role="list" aria-label="Métricas de experiencia">
      <div className="ti" role="listitem">
        <div className="ti-n">
          <Counter target={1500} /><span>+</span>
        </div>
        <div className="ti-l">Procedimientos exitosos</div>
      </div>
      <div className="ti" role="listitem">
        <div className="ti-n">
          <Counter target={18} /><span>+</span>
        </div>
        <div className="ti-l">Años cirugía protésica</div>
      </div>
      <div className="ti" role="listitem">
        <div className="ti-n">2</div>
        <div className="ti-l">Clínicas en Quito</div>
      </div>
      <div className="ti" role="listitem">
        <div className="ti-n" style={{ fontSize: '15px', lineHeight: 1.3, letterSpacing: 0 }}>
          ROSA<br />Certified
        </div>
        <div className="ti-l">Zimmer Biomet</div>
      </div>
    </div>
  )
}
