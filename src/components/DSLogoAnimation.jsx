import { useEffect, useRef, useState } from 'react'

// Draw order: D first, then S pieces staggered
const PATHS = [
  {
    id: 'D',
    d: 'M537.341,453.676 C537.341,453.676 566.61,463.788 566.61,463.788 C544.35,527.956 485.714,570.658 417.852,572.2 C417.852,572.2 325.709,572.598 325.709,572.598 C325.709,572.598 325.575,588.022 325.575,588.022 C325.575,588.022 422.865,587.476 422.865,587.476 C494.76,584.548 558.182,537.235 580.983,468.86 C580.983,468.86 608.657,479.368 608.657,479.368 C608.657,479.368 613.922,481.887 613.922,481.887 C584.94,563.111 509.456,617.914 423.027,620.29 C423.027,620.29 289.001,620.72 289.001,620.72 C289.001,620.72 288.987,183.936 288.987,183.936 C288.987,183.936 426.933,184.153 426.933,184.153 C450.654,184.191 472.586,189.889 494.263,197.609 C567.467,225.377 612.195,288.531 623.703,364.311 C623.703,364.311 584.522,350.978 584.522,350.978 C577.664,323.371 564.895,297.96 546.171,275.73 C514.971,241.361 472.606,220.424 425.926,218.496 C425.926,218.496 324.997,218.1 324.997,218.1 C324.997,218.1 325.02,541.902 325.02,541.902 C325.02,541.902 420.433,541.419 420.433,541.419 C474.234,539.136 519.748,504.761 537.341,453.676 Z',
    fill: 'rgb(11,32,49)',
    drawDelay: 0,
    drawDuration: 2200,
  },
  {
    id: 'S_outer',
    d: 'M657.242,621.338 C610.284,638.934 552.121,635.365 506.806,613.782 C520.096,608.162 532.068,601.288 543.773,592.654 C586.948,604.499 633.951,602.164 669.692,576.79 C694.613,559.097 707.392,530.905 704.423,500.715 C698.159,437.015 634.987,419.379 583.275,401.694 C555.776,392.289 520.419,379.111 503.998,354.016 C485.772,326.165 489.6,289.292 512.783,265.444 C522.527,272.974 530.827,280.549 537.948,290.121 C529.029,302.222 527.338,318.586 535.245,331.892 C541.863,343.029 552.401,349.939 563.685,355.436 C577.352,362.093 591.236,366.7 605.706,371.413 C623.861,377.326 641.402,383.387 658.594,391.4 C706.88,413.903 741.486,449.796 742.238,506.056 C742.662,537.786 731.076,567.234 708.256,589.28 C693.391,603.642 676.483,614.129 657.242,621.338 Z',
    fill: 'rgb(12,33,50)',
    drawDelay: 1600,
    drawDuration: 2000,
  },
  {
    id: 'S_inner',
    d: 'M687.457,512.989 C683.983,573.317 613.833,593.279 559.925,580.607 C569.963,571.621 579.479,562.699 587.972,551.999 C602.914,552.618 617.55,550.569 630.116,543.332 C643.861,535.416 650.562,521.673 649.073,505.902 C646.269,476.205 606.704,464.94 580.365,455.519 C580.365,455.519 537.768,440.282 537.768,440.282 C518.012,433.216 499.886,423.594 483.423,410.611 C456.853,389.658 440.162,359.812 437.963,326.046 C435.908,294.473 445.293,264.597 466.116,240.876 C477.582,245.041 488.823,249.065 499.258,256.247 C480.744,275.167 472.742,300.45 476.016,327.07 C479.016,351.464 492.818,371.88 512.725,386.363 C528.055,397.516 544.925,404.972 562.725,411.324 C562.725,411.324 587.817,420.278 587.817,420.278 C614.181,429.686 637.925,436.281 661.402,454.557 C679.575,468.705 688.785,489.929 687.457,512.989 Z',
    fill: 'rgb(11,32,49)',
    drawDelay: 2000,
    drawDuration: 1800,
  },
  {
    id: 'S_top',
    d: 'M655.473,225.094 C623.732,215.496 591.601,214.165 560.087,222.183 C549.596,212.63 538.356,205.69 525.808,198.508 C552.645,187.099 581.248,182.776 611.116,183.853 C653.948,185.508 693.907,200.092 728.733,224.66 C728.733,224.66 712.923,255.091 712.923,255.091 C695.204,242.119 676.914,231.803 655.473,225.094 Z',
    fill: 'rgb(12,32,49)',
    drawDelay: 2400,
    drawDuration: 900,
  },
  {
    id: 'S_bottom',
    d: 'M690.812,298.946 C673.289,283.272 653.344,272.134 630.772,266.364 C619.97,263.444 609.422,262.489 597.506,263.15 C590.782,253.148 583.014,244.274 574.396,234.926 C608.366,227.979 641.739,233.802 671.918,248.208 C684.226,254.065 694.961,260.942 706.184,269.268 C706.184,269.268 690.812,298.946 690.812,298.946 Z',
    fill: 'rgb(12,32,50)',
    drawDelay: 2700,
    drawDuration: 800,
  },
]

const TOTAL_DRAW_MS = 3600   // last path ends ~3500ms
const PULSE_START_MS = 3700
const SOLID_START_MS = 4100

export default function DSLogoAnimation({ className = '', style = {} }) {
  const pathRefs = useRef([])
  const [phase, setPhase] = useState('idle') // idle | drawing | pulse | solid

  useEffect(() => {
    const paths = pathRefs.current
    // Measure and initialise all paths to hidden
    paths.forEach((el) => {
      if (!el) return
      const len = el.getTotalLength()
      el.style.strokeDasharray = `${len}`
      el.style.strokeDashoffset = `${len}`
    })

    // Start drawing on next frame
    const startRaf = requestAnimationFrame(() => {
      setPhase('drawing')
      paths.forEach((el, i) => {
        if (!el) return
        const { drawDelay, drawDuration } = PATHS[i]
        setTimeout(() => {
          el.style.transition = `stroke-dashoffset ${drawDuration}ms cubic-bezier(0.4,0,0.2,1)`
          el.style.strokeDashoffset = '0'
        }, drawDelay)
      })
    })

    const pulseTimer = setTimeout(() => setPhase('pulse'), PULSE_START_MS)
    const solidTimer = setTimeout(() => setPhase('solid'), SOLID_START_MS)

    return () => {
      cancelAnimationFrame(startRaf)
      clearTimeout(pulseTimer)
      clearTimeout(solidTimer)
    }
  }, [])

  const isSolid = phase === 'solid'
  const isPulse = phase === 'pulse'

  return (
    <div
      className={`ds-logo-anim${className ? ` ${className}` : ''}`}
      style={{ background: '#ffffff', display: 'inline-flex', ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="180 170 580 470"
        width="100%"
        height="100%"
        aria-label="DS monogram logo"
      >
        {/* Wave pulse sweep gradient */}
        {isPulse && (
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(11,32,49)" stopOpacity="1" />
              <stop offset="40%" stopColor="rgb(80,120,160)" stopOpacity="1">
                <animate
                  attributeName="offset"
                  from="40%"
                  to="110%"
                  dur="0.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="60%" stopColor="rgb(11,32,49)" stopOpacity="1">
                <animate
                  attributeName="offset"
                  from="60%"
                  to="130%"
                  dur="0.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="100%" stopColor="rgb(11,32,49)" stopOpacity="1" />
            </linearGradient>
          </defs>
        )}

        {PATHS.map((p, i) => (
          <path
            key={p.id}
            ref={(el) => (pathRefs.current[i] = el)}
            d={p.d}
            fill={isSolid || isPulse ? p.fill : 'none'}
            stroke={isSolid ? 'none' : 'rgb(11,32,49)'}
            strokeWidth={isSolid ? 0 : 3}
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{
              transition: isPulse
                ? 'fill 0.08s ease-in, stroke 0.08s ease-out'
                : isSolid
                ? 'fill 0.15s ease-out, stroke 0.15s ease-out'
                : undefined,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
