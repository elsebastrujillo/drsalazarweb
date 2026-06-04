import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function RobotRosa() {
  const ref = useIntersectionObserver()

  return (
    <section className="sec dark" id="robot-rosa" ref={ref}>
      <div className="wrap">
        <p className="slabel fade-up">// tecnología robótica</p>
        <h2 className="sh fade-up delay-1">
          Cirugía robótica de rodilla y cadera<br />
          con Robot ROSA en <em>Quito, Ecuador</em>
        </h2>
        <p className="sb fade-up delay-2" style={{ maxWidth: '600px', marginBottom: '52px' }}>
          El Robot ROSA de Zimmer Biomet es el estándar más avanzado en artroplastia.
          El Dr. Salazar lo combina con más de 18 años de criterio clínico — una combinación
          que la tecnología sola no puede ofrecer.
        </p>

        <div className="rosa-grid fade-up delay-3">
          <div className="rosa-steps">
            {[
              {
                n: '01',
                title: 'Planificación preoperatoria 3D',
                desc: 'El software ROSA analiza imágenes del paciente y diseña un plan quirúrgico personalizado antes de entrar al quirófano. Sin improvisación.',
              },
              {
                n: '02',
                title: 'Registro óseo intraoperatorio',
                desc: 'El robot mapea la anatomía real del paciente en tiempo real durante la cirugía, ajustando el plan al milímetro exacto.',
              },
              {
                n: '03',
                title: 'Corte guiado con precisión ±0.1 mm',
                desc: 'El brazo robótico guía los instrumentos con precisión imposible para la mano humana sola. El Dr. toma cada decisión crítica.',
              },
              {
                n: '04',
                title: 'Implante personalizado y verificado',
                desc: 'La prótesis se coloca exactamente en la posición planificada. El sistema confirma el alineamiento antes de cerrar.',
              },
            ].map((step) => (
              <div className="rstep" key={step.n}>
                <div className="rsn" aria-hidden="true">{step.n}</div>
                <div>
                  <h3 className="rst">{step.title}</h3>
                  <p className="rsd">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rosa-metrics-col">
            {[
              { n: '0.1', u: 'mm', l: 'Precisión de corte' },
              { n: '3×', u: '', l: 'Recuperación más rápida' },
              { n: '↓40', u: '%', l: 'Menos pérdida de sangre' },
              { n: '3', u: 'días', l: 'Alta hospitalaria promedio' },
            ].map((m) => (
              <div className="rmc-card" key={m.l}>
                <div className="rmc-n">
                  {m.n}
                  {m.u && <span>{m.u}</span>}
                </div>
                <div className="rmc-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="ssh fade-up">
          Cirugía robótica vs. <em>cirugía convencional</em>
        </h3>

        <div className="ctable fade-up delay-1" role="table" aria-label="Comparativa cirugía robótica vs convencional">
          <div className="crow ch" role="row">
            <div className="cc cf" role="columnheader">Característica</div>
            <div className="cc cr" role="columnheader">
              Robot ROSA<small>Dr. Germán Salazar</small>
            </div>
            <div className="cc" role="columnheader">
              Convencional<small>método tradicional</small>
            </div>
          </div>
          {[
            { feat: 'Precisión de corte', rosa: '±0.1 mm', conv: '±1–2 mm' },
            { feat: 'Planificación 3D', rosa: 'Sí · Personalizada', conv: 'Limitada' },
            { feat: 'Personalización', rosa: '100% adaptada', conv: 'Estándar general' },
            { feat: 'Recuperación', rosa: '4–6 semanas', conv: '12–16 semanas' },
            { feat: 'Pérdida de sangre', rosa: 'Significativamente menor', conv: 'Mayor volumen' },
          ].map((row) => (
            <div className="crow" key={row.feat} role="row">
              <div className="cc cf" role="cell">{row.feat}</div>
              <div className="cc cr cyes" role="cell">
                <CheckIcon />
                {row.rosa}
              </div>
              <div className="cc cno" role="cell">{row.conv}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
