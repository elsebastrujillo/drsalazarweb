const WA_URL =
  'https://wa.me/593986841118?text=Hola%20Dr.%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.%20Vi%20su%20sitio%20web.'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-disc">
        La indicación de cirugía depende de valoración médica individual con el Dr. Germán Salazar.
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-name">Dr. Germán Salazar</div>
          <div className="footer-tag">Traumatología · Cirugía Robótica ROSA · Quito, Ecuador</div>
          <div className="footer-clinics">Hospital AXXIS · Novaclínica Santa Cecilia</div>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <a href="#robot-rosa">Robot ROSA</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#el-doctor">El Dr. Salazar</a>
          <a href="#resultados">Resultados</a>
          <a
            href={WA_URL}
            className="btn-wa footer-wa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar cita por WhatsApp"
          >
            Agendar cita
          </a>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/dr.german_salazar/"
            target="_blank"
            rel="noopener noreferrer"
            className="soc"
            aria-label="Instagram del Dr. Germán Salazar"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/dr.german.salazar/"
            target="_blank"
            rel="noopener noreferrer"
            className="soc"
            aria-label="Facebook del Dr. Germán Salazar"
          >
            <FacebookIcon />
            Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {year} Dr. Germán Salazar ·{' '}
          <a href="https://traumatologiaecuador.com">traumatologiaecuador.com</a>
        </span>
        <span>La indicación de cirugía depende de valoración médica individual.</span>
      </div>
    </footer>
  )
}
