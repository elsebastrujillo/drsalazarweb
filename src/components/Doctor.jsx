import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import drPhoto from '../assets/dr-salazar-rosa.png'

const WA_URL =
  'https://wa.me/593986841118?text=Hola%20Dr.%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.%20Vi%20su%20sitio%20web.'

export default function Doctor() {
  const ref = useIntersectionObserver()
  const [imgError, setImgError] = useState(false)

  return (
    <section className="sec white" id="el-doctor" ref={ref}>
      <div className="wrap">
        <div className="doc-grid">
          {/* Photo column */}
          <div className="fade-up">
            <div className="doc-photo-wrap">
              {!imgError ? (
                <img
                  src={drPhoto}
                  alt="Dr. Germán Salazar, traumatólogo ortopedista especialista en cirugía robótica en Quito Ecuador"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="doc-photo-placeholder" />
              )}
              <div className="doc-photo-overlay" />
              <div className="doc-credit">Dr. Germán Salazar</div>
              <div className="doc-badge" aria-label="Más de 1,500 cirugías exitosas">
                <b>1,500<span>+</span></b>
                <small>Cirugías exitosas</small>
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="doc-info">
            <p className="slabel light fade-up">// el especialista</p>
            <h2
              className="sh light fade-up delay-1"
              style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}
            >
              Dr. Germán Salazar<br />
              <em>Traumatólogo Ortopedista en Quito</em>
            </h2>

            <div className="chips fade-up delay-2">
              {[
                'ROSA Certified · Zimmer Biomet',
                '+18 años experiencia',
                '+1,500 cirugías exitosas',
                'Hospital AXXIS',
                'Novaclínica Santa Cecilia',
              ].map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>

            <p className="dbio fade-up delay-3">
              Especialista en traumatología y ortopedia con más de 18 años dedicados
              exclusivamente a la cirugía protésica en Ecuador. Su formación incluye
              entrenamiento en los principales centros de cirugía robótica de América y Europa.
            </p>
            <p className="dbio fade-up delay-3">
              Con más de 1,500 procedimientos realizados con éxito, el Dr. Salazar es uno
              de los traumatólogos ortopedistas con mayor trayectoria en cirugía protésica
              de Quito. Hoy opera con el Robot ROSA de Zimmer Biomet — la plataforma
              robótica de mayor precisión para reemplazos articulares.
            </p>
            <p className="dbio fade-up delay-3">
              Atiende en <strong>Hospital AXXIS</strong> y{' '}
              <strong>Novaclínica Santa Cecilia</strong>, las instituciones de mayor
              nivel técnico de Quito.
            </p>

            <div className="fade-up delay-4">
              <a
                href={WA_URL}
                className="btn-wa doc-wa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar consulta con el Dr. Germán Salazar por WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.385.632 4.636 1.832 6.58L0 24l5.59-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                Agendar consulta por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
