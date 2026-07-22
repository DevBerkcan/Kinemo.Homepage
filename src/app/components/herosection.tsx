import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronDown, Play, Scan, Star } from "lucide-react"

const features = [
  "Fehler früh erkennen, bevor sie teuer werden",
  "Entwicklungszyklen verkürzen",
  "Ausschuss und Reklamationen reduzieren",
  "Fundiertere Entscheidungen im F&E-Prozess",
]

const applications = [
  "Produktentwicklung",
  "Qualitätssicherung",
  "Fehleranalyse",
  "Prototypenprüfung",
  "Serienvalidierung",
]

const particles = Array.from({ length: 12 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 17) % 100}%`,
  delay: `${(index % 6) * 0.4}s`,
}))

function XRayVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#50C9E1]/20 bg-gradient-to-br from-[#0C5374] via-[#08415C] to-[#061b26]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-72 w-72 items-center justify-center">
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className="absolute rounded-full border-2 border-[#50C9E1]/25 animate-spin"
              style={{
                width: 150 + ring * 48,
                height: 150 + ring * 48,
                animationDuration: `${9 + ring * 3}s`,
              }}
            />
          ))}
          <div className="relative z-10 rounded-full bg-[#50C9E1]/10 p-8 animate-pulse">
            <Scan size={96} className="text-[#50C9E1]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[20, 40, 60, 80].map((top, index) => (
          <div
            key={top}
            className="kinemo-scan-line absolute h-px w-1/2 bg-gradient-to-r from-transparent via-[#50C9E1] to-transparent"
            style={{ top: `${top}%`, animationDelay: `${index * 0.8}s` }}
          />
        ))}
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="kinemo-particle absolute h-1 w-1 rounded-full bg-[#50C9E1]"
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const metricsApproved = process.env.KINEMO_METRICS_APPROVED === "true"

  return (
    <section data-motion-hero className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#08415C] via-[#0C5374] to-[#05151f] text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full bg-[url('/grid-pattern.svg')] bg-repeat" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center px-5 py-14 sm:px-6 md:flex-row md:py-16">
        <div className="min-w-0 w-full text-center md:w-1/2 md:text-left">
          {metricsApproved ? (
            <div data-hero-reveal className="mb-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <div className="flex items-center gap-1" aria-label="Fünf Sterne">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={16} className="fill-current text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm text-gray-300">50+ zufriedene Industriekunden</span>
            </div>
          ) : (
            <p data-hero-reveal className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-gray-300">
              Analysepartner für Entwicklung &amp; Qualitätssicherung
            </p>
          )}

          <div data-hero-reveal className="mb-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <Scan size={24} className="text-[#50C9E1]" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#50C9E1]">
              Industrielle CT &amp; Röntgenanalyse für die Produktentwicklung
            </span>
          </div>

          <h1 data-hero-reveal className="mb-6 break-words text-4xl font-bold leading-[1.06] sm:text-5xl md:text-6xl">
            <span className="block">Verborgene Produktfehler</span>
            <span className="block"><span className="text-[#50C9E1]">sichtbar machen</span> –</span>
            <span className="mt-1 block text-3xl font-semibold text-gray-200 sm:text-4xl md:text-5xl">
              bevor sie Zeit und Geld kosten.
            </span>
          </h1>

          <p data-hero-reveal className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg md:mx-0">
            Mit industrieller Röntgentechnologie und CT-Analysen unterstützt Kinemo Entwicklungs- und Qualitätsteams dabei,
            <span className="font-medium text-[#50C9E1]"> innere Strukturen, Schwachstellen und Fehler frühzeitig zu erkennen</span>.
          </p>

          <ul data-hero-reveal className="mb-8 grid gap-2 text-left sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-100">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-[#50C9E1]" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div data-hero-reveal className="mb-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Link href="/kontakt" className="group inline-flex items-center justify-center rounded-full bg-[#50C9E1] px-8 py-4 font-semibold text-[#08415C] shadow-lg transition hover:scale-105 hover:bg-[#7DDBF3] hover:shadow-xl">
              Jetzt Analyse anfragen
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/anwendungsfaelle" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-white transition hover:border-[#50C9E1] hover:bg-[#50C9E1]/10">
              <Play size={18} className="mr-2" />
              Anwendungsfälle ansehen
            </Link>
          </div>

          <div data-hero-reveal className="flex flex-wrap justify-center gap-3 md:justify-start">
            {applications.map((application) => (
              <span key={application} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                {application}
              </span>
            ))}
          </div>
        </div>

        <div data-hero-visual className="relative mt-12 h-[50vh] min-w-0 w-full sm:h-[60vh] md:mt-0 md:h-[80vh] md:w-1/2">
          <XRayVisual />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md md:-bottom-6 md:-left-6 md:right-auto md:w-72">
            <dl className="space-y-2 text-xs font-mono sm:text-sm">
              <div className="flex justify-between font-bold text-[#50C9E1]"><dt>DATENTYP:</dt><dd>2D / 3D</dd></div>
              <div className="flex justify-between"><dt>VERFAHREN:</dt><dd className="text-[#50C9E1]">CT / X-RAY</dd></div>
              <div className="flex justify-between"><dt>AUSWERTUNG:</dt><dd className="text-green-400">BAUTEILSPEZIFISCH</dd></div>
            </dl>
          </div>
        </div>
      </div>

      <a href="#benefits" className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-gray-300 transition hover:text-[#50C9E1]">
        Mehr erfahren
        <ChevronDown size={24} className="animate-bounce text-[#50C9E1]" />
      </a>
    </section>
  )
}
