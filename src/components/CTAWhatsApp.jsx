import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const WA_URL =
  'https://wa.me/593986841118?text=Hola%20Dr.%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.%20Vi%20su%20sitio%20web.'

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E7FD4" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="#25D366" width="34" height="34" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.385.632 4.636 1.832 6.58L0 24l5.59-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
)

export default function CTAWhatsApp() {
  const ref = useIntersectionObserver()

  return (
    <section className="sec dark cta-sec" ref={ref}>
      <div className="cta-inner">
        <div className="wa-ico-wrap fade-up">
          <WAIcon />
        </div>

        <h2 className="sh fade-up delay-1">
          ¿Listo para dar el primer paso<br />
          hacia una vida <em>sin dolor?</em>
        </h2>

        <p className="sb fade-up delay-2" style={{ maxWidth: '520px', margin: '0 auto 40px' }}>
          Agende su consulta directamente con el equipo del Dr. Salazar.
          Sin formularios ni esperas. Solo un mensaje de WhatsApp.
        </p>

        <div className="fade-up delay-3">
          <a
            href={WA_URL}
            className="btn-wa wa-big"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir al Dr. Germán Salazar por WhatsApp para agendar consulta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.385.632 4.636 1.832 6.58L0 24l5.59-1.467A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            Escribir al Dr. Salazar por WhatsApp
          </a>
          <p className="wa-note">Respuesta en menos de 30 min · Lunes a Viernes 8:00–18:00</p>
        </div>

        <div className="wa-cls fade-up delay-4">
          <div className="wacl">
            <LocationIcon />
            <div>
              <b>Hospital AXXIS</b>
              <small>Quito · Norte</small>
            </div>
          </div>
          <div className="wacl">
            <LocationIcon />
            <div>
              <b>Novaclínica Santa Cecilia</b>
              <small>Quito · Centro-Norte</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
