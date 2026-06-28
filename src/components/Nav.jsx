import { useState, useEffect } from 'react'
import DSLogoAnimation from './DSLogoAnimation'

const WA_URL =
  'https://wa.me/593986841118?text=Hola%20Dr.%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.%20Vi%20su%20sitio%20web.'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header" id="site-header">
      <nav className={`nav-wrap${scrolled ? ' scrolled' : ''}`} aria-label="Menú principal">
        <div className="nav-inner">
          <a href="#inicio" className="nav-brand" aria-label="Inicio — Dr. Germán Salazar">
            <DSLogoAnimation className="nav-ds-logo" style={{ width: 44, height: 36 }} />
            <span className="nav-brand-text">
              <span className="nav-name">Dr. Germán Salazar</span>
              <span className="nav-sub">Traumatología · Cirugía Robótica · Quito</span>
            </span>
          </a>

          <div className="nav-links" id="nav-links">
            <a href="#robot-rosa" className="nav-link">Robot ROSA</a>
            <a href="#especialidades" className="nav-link">Especialidades</a>
            <a href="#el-doctor" className="nav-link">El Dr.</a>
            <a href="#resultados" className="nav-link">Resultados</a>
            <a
              href={WA_URL}
              className="btn-wa nav-wa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar cita por WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.385.632 4.636 1.832 6.58L0 24l5.59-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              Agendar cita
            </a>
          </div>

          <button
            className={`nav-ham${open ? ' open' : ''}`}
            id="nav-ham"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mob-menu${open ? ' open' : ''}`}
        id="mob-menu"
        aria-hidden={!open}
        role="dialog"
        aria-label="Menú de navegación"
      >
        <a href="#robot-rosa" className="mob-link" onClick={close}>Robot ROSA</a>
        <a href="#especialidades" className="mob-link" onClick={close}>Especialidades</a>
        <a href="#el-doctor" className="mob-link" onClick={close}>El Dr. Salazar</a>
        <a href="#resultados" className="mob-link" onClick={close}>Resultados</a>
        <a
          href={WA_URL}
          className="btn-wa mob-wa-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta por WhatsApp"
          onClick={close}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.385.632 4.636 1.832 6.58L0 24l5.59-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
          Agendar por WhatsApp
        </a>
      </div>
    </header>
  )
}
