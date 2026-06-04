import { useEffect, useRef, useState } from 'react'
import drPhoto from '../assets/dr-salazar-rosa.png'

const WA_URL =
  'https://wa.me/593986841118?text=Hola%20Dr.%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.%20Vi%20su%20sitio%20web.'

function AnimatedNumber({ target, duration = 1800 }) {
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

  return <span ref={ref}>{value.toLocaleString('es-EC')}</span>
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />

      <div className="hero-photo-wrap">
        {!imgError ? (
          <img
            src={drPhoto}
            alt="Dr. Germán Salazar junto al Robot ROSA de Zimmer Biomet en quirófano de Quito Ecuador"
            className="hero-photo"
            width="900"
            height="1100"
            loading="eager"
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg,#0D2347,#1A5FA8)' }} />
        )}
        <div className="hero-mask" />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="bdot" />
          <span className="hero-badge-text">Robot ROSA · Quito · Zimmer Biomet Certified</span>
        </div>

        <h1 className="hero-h1">
          18 años.<br />
          <em>1,500 cirugías.</em><br />
          <strong>Su recuperación<br />empieza hoy.</strong>
        </h1>

        <p className="hero-sub">
          Dr. Germán Salazar, traumatólogo ortopedista en Quito con más de 18 años en
          cirugía protésica. Robot ROSA — precisión milimétrica para su rodilla y cadera.
        </p>

        <div className="hero-cta">
          <a
            href={WA_URL}
            className="btn-wa btn-wa-hero"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consulta por WhatsApp con el Dr. Germán Salazar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.385.632 4.636 1.832 6.58L0 24l5.59-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            Agendar consulta por WhatsApp
          </a>
          <p className="hero-hint">Respuesta en menos de 30 min · L–V 8:00–18:00</p>
        </div>

        <div className="hero-stats">
          <div className="hs">
            <span className="hs-n">1,500</span>
            <span className="hs-u">+</span>
            <span className="hs-l">Procedimientos</span>
          </div>
          <div className="hs">
            <span className="hs-n">18</span>
            <span className="hs-u">+</span>
            <span className="hs-l">Años experiencia</span>
          </div>
          <div className="hs">
            <span className="hs-n">0.1</span>
            <span className="hs-u">mm</span>
            <span className="hs-l">Precisión ROSA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
