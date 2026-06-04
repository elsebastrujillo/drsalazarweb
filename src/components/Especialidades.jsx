import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const WA_URL =
  'https://wa.me/593986841118?text=Hola%20Dr.%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.%20Vi%20su%20sitio%20web.'

const KneeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E7FD4" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const HipIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E7FD4" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
)

const ArthroIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E7FD4" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const services = [
  {
    num: '01',
    icon: <KneeIcon />,
    name: 'Artroplastia Robótica de Rodilla',
    desc: 'Reemplazo total de rodilla con Robot ROSA. Planificación 3D personalizada. Recuperación acelerada y prótesis adaptada a su anatomía exacta.',
  },
  {
    num: '02',
    icon: <HipIcon />,
    name: 'Artroplastia Robótica de Cadera',
    desc: 'Reemplazo total de cadera con guía robótica. Menor tiempo quirúrgico, recuperación más rápida y mayor longevidad del implante.',
  },
  {
    num: '03',
    icon: <ArthroIcon />,
    name: 'Artroscopia Avanzada',
    desc: 'Menisco, ligamentos y cartílago con acceso mínimamente invasivo. Recuperación acelerada y menor trauma quirúrgico.',
  },
]

export default function Especialidades() {
  const ref = useIntersectionObserver()

  return (
    <section className="sec white" id="especialidades" ref={ref}>
      <div className="wrap">
        <p className="slabel light fade-up">// especialidades</p>
        <h2 className="sh light fade-up delay-1">
          Reemplazo de rodilla y cadera,<br />
          artroscopia y <em>cirugía ortopédica</em> en Quito
        </h2>
        <p className="sb light fade-up delay-2" style={{ maxWidth: '560px' }}>
          Más de 1,500 procedimientos respaldan cada especialidad.
          La indicación de cirugía depende de valoración médica individual.
        </p>

        <div className="svc-grid">
          {services.map((s, i) => (
            <article className={`scard fade-up delay-${i + 1}`} key={s.num}>
              <div className="snum">{s.num}</div>
              <div className="sico">{s.icon}</div>
              <h3 className="sname">{s.name}</h3>
              <p className="sdesc">{s.desc}</p>
              <a
                href={WA_URL}
                className="btn-wa swa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar sobre ${s.name} por WhatsApp`}
              >
                Consultar por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
