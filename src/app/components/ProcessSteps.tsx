import { BarChart3, ClipboardList, MessageSquare, Scan } from "lucide-react"

const steps = [
  { number: "01", icon: MessageSquare, title: "Anfrage & Zielklärung", description: "Sie beschreiben Ihr Bauteil, den Prüfauftrag und Ihre Fragestellung. Gemeinsam klären wir, welches Verfahren den größten Erkenntnisgewinn bringt." },
  { number: "02", icon: ClipboardList, title: "Analyseplanung", description: "Wir definieren Auflösung, Ausrichtung und Prüfparameter – abgestimmt auf Bauteilgröße, Material und Ihre spezifische Fragestellung." },
  { number: "03", icon: Scan, title: "Röntgen- oder CT-Auswertung", description: "Das Bauteil wird gescannt, die Daten werden rekonstruiert und ausgewertet. Auffälligkeiten werden identifiziert und annotiert." },
  { number: "04", icon: BarChart3, title: "Ergebnis & Handlungsempfehlung", description: "Sie erhalten einen strukturierten Analysebericht mit Visualisierungen, Befunden und konkreten Handlungsempfehlungen für Ihr Team." },
]

export default function ProcessSteps() {
  return (
    <section className="bg-[#eef6f8] px-5 py-24 dark:bg-[#081f2b] sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-motion="reveal" className="self-start lg:sticky lg:top-32">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1]">04 / Ablauf</p>
          <h2 className="text-4xl font-bold leading-[1.05] text-[#08415C] dark:text-white sm:text-5xl lg:text-6xl">Vom Bauteil zur klaren Entscheidung.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-300">Ein transparenter Prozess, damit Sie schnell die Antworten erhalten, die Entwicklung und Qualitätssicherung wirklich weiterbringen.</p>

          <div className="relative mt-10 hidden aspect-square max-w-sm items-center justify-center overflow-hidden border border-[#08415C]/10 bg-[#08415C] lg:flex" aria-hidden="true">
            <div className="absolute h-64 w-64 rounded-full border border-[#50C9E1]/20" />
            <div className="absolute h-44 w-44 rounded-full border border-[#50C9E1]/30" />
            <Scan size={72} className="text-[#50C9E1]" />
            <span className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.18em] text-[#50C9E1]">Analyse / Befund</span>
          </div>
        </div>

        <ol data-motion="stagger" className="relative border-l border-[#1f9cb1]/30 pl-6 sm:pl-10">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li key={step.number} className="group relative pb-14 last:pb-0 sm:pb-20">
                <span className="absolute -left-[2.05rem] top-0 h-4 w-4 rounded-full border-4 border-[#eef6f8] bg-[#50C9E1] dark:border-[#081f2b] sm:-left-[2.8rem]" aria-hidden="true" />
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-sm tracking-[0.18em] text-[#1f9cb1]">{step.number}</span>
                  <Icon className="text-[#1f9cb1]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#08415C] dark:text-white sm:text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
