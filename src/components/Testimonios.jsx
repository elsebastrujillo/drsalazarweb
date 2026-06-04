import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F4F8FC" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export default function Testimonios() {
  const ref = useIntersectionObserver()

  return (
    <section className="sec light" id="resultados" ref={ref}>
      <div className="wrap">
        <p className="slabel light fade-up">// historias de éxito</p>
        <h2 className="sh light fade-up delay-1">
          Más de 1,500 pacientes recuperaron<br />
          su movilidad. <em>Recuperaron su vida.</em>
        </h2>
        <p className="sb light fade-up delay-2" style={{ maxWidth: '560px', marginBottom: '44px' }}>
          Datos clínicos reales. La indicación de cirugía depende de valoración médica
          individual con el Dr. Salazar.
        </p>

        {/* Featured testimony */}
        <div className="tfeat fade-up delay-3">
          <div className="tf-l">
            <div className="tf-tag">// reemplazo total de rodilla · 2024</div>
            <blockquote className="tf-q">
              &ldquo;A los 15 días ya caminaba sin bastón. Pensé que nunca volvería a
              subir las escaleras de mi casa. El Dr. Salazar me devolvió mi independencia.&rdquo;
            </blockquote>
            <div className="tf-pat">
              <div className="av" aria-hidden="true">MR</div>
              <div>
                <b>María R., 67 años</b>
                <br />
                <small>Reemplazo total de rodilla · Robot ROSA · Quito, 2024</small>
              </div>
            </div>
          </div>
          <div className="tf-r" role="list" aria-label="Métricas clínicas del caso">
            {[
              { n: '15', u: 'días', l: 'Deambulación sin bastón' },
              { n: '2', u: 'hrs', l: 'Duración cirugía' },
              { n: '3', u: 'días', l: 'Alta hospitalaria' },
              { n: '6', u: 'sem', l: 'Retorno actividad' },
            ].map((m) => (
              <div className="tfm" key={m.l} role="listitem">
                <b>{m.n}<small>{m.u}</small></b>
                <span>{m.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional testimonies */}
        <div className="tgrid">
          <article className="tcard fade-up delay-1">
            <div className="tv" aria-label="Video testimonio de Carlos R., artroplastia de cadera">
              <div className="tplay-ico"><PlayIcon /></div>
              <div className="tvm">
                <span>Testimonio · Cadera · 2024</span>
                <span>4:12</span>
              </div>
            </div>
            <div className="tb">
              <div className="tpat">
                <div className="av" aria-hidden="true">CR</div>
                <div>
                  <b>Carlos R., 72 años</b>
                  <br />
                  <small>Artroplastia de cadera · Robot ROSA</small>
                </div>
              </div>
              <blockquote className="tq">
                &ldquo;Llevaba 3 años sin poder caminar más de una cuadra. Hoy camino
                5 km diarios sin ningún dolor.&rdquo;
              </blockquote>
              <div className="tdata">
                <div className="td"><b>20d</b><small>Caminata</small></div>
                <div className="td"><b>2.5h</b><small>Cirugía</small></div>
                <div className="td"><b>4d</b><small>Alta</small></div>
              </div>
            </div>
          </article>

          <article className="tcard fade-up delay-2">
            <div className="tv" aria-label="Video testimonio de Luisa V., artroplastia de rodilla">
              <div className="tplay-ico"><PlayIcon /></div>
              <div className="tvm">
                <span>Testimonio · Rodilla · 2024</span>
                <span>3:28</span>
              </div>
            </div>
            <div className="tb">
              <div className="tpat">
                <div
                  className="av"
                  style={{ background: 'linear-gradient(135deg,#1A5FA8,#1AABDC)' }}
                  aria-hidden="true"
                >
                  LV
                </div>
                <div>
                  <b>Luisa V., 58 años</b>
                  <br />
                  <small>Artroplastia de rodilla · Robot ROSA</small>
                </div>
              </div>
              <blockquote className="tq">
                &ldquo;La recuperación fue mucho más rápida de lo que esperaba.
                Mi médico anterior dijo que tardaría 6 meses.&rdquo;
              </blockquote>
              <div className="tdata">
                <div className="td"><b>10d</b><small>Sin dolor</small></div>
                <div className="td"><b>1.5h</b><small>Cirugía</small></div>
                <div className="td"><b>5sem</b><small>Retorno</small></div>
              </div>
            </div>
          </article>
        </div>

        <p className="tdiscl">
          Los resultados individuales pueden variar. La indicación de cirugía depende de
          valoración médica individual con el Dr. Salazar.
        </p>
      </div>
    </section>
  )
}
