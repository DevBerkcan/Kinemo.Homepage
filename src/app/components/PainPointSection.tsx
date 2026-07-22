import { AlertTriangle, Clock, DollarSign, Search, TrendingDown } from "lucide-react"

const painPoints = [
  {
    icon: Search,
    title: "Defekte werden erst spät entdeckt",
    description: "Innere Fehler bleiben bei visueller Prüfung unsichtbar – und werden oft erst nach Auslieferung oder unter Betrieb sichtbar.",
  },
  {
    icon: Clock,
    title: "Entwicklungszyklen verzögern sich",
    description: "Fehler, die spät erkannt werden, erzwingen aufwändige Iterationen und verschieben Markteinführungstermine.",
  },
  {
    icon: Search,
    title: "Ursachenanalyse kostet unnötig Zeit",
    description: "Ohne klare Einblicke ins Innere des Bauteils bleibt die Fehlerursache oft wochenlang ungeklärt.",
  },
  {
    icon: DollarSign,
    title: "Spätere Änderungen verursachen hohe Kosten",
    description: "Je später ein Fehler im Entwicklungsprozess erkannt wird, desto teurer wird die Korrektur – oft um den Faktor 10.",
  },
  {
    icon: AlertTriangle,
    title: "Qualitätsprobleme gefährden die Markteinführung",
    description: "Unentdeckte Mängel in Prototypen oder der Vorserie können Freigaben verzögern oder zu kostspieligen Rückrufen führen.",
  },
]

export default function PainPointSection() {
  return (
    <section id="benefits" className="relative scroll-mt-24 overflow-hidden bg-[#061b26] px-5 py-24 text-white sm:px-6 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute inset-y-0 left-[38%] hidden w-px bg-gradient-to-b from-transparent via-[#50C9E1]/40 to-transparent lg:block" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full border border-[#50C9E1]/10" />
        <div className="absolute -right-20 top-36 h-72 w-72 rounded-full border border-[#50C9E1]/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-motion="reveal" className="self-start lg:sticky lg:top-32">
          <div className="mb-6 inline-flex items-center gap-2 border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
            <TrendingDown size={16} aria-hidden="true" />
            01 / Das Problem
          </div>
          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Viele Fehler bleiben <span className="text-[#50C9E1]">zu lange unsichtbar.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
            Innere Strukturfehler, Materialdefekte und Fertigungsmängel sind von außen nicht erkennbar – und werden deshalb oft viel zu spät entdeckt.
          </p>

          <div className="mt-10 hidden max-w-sm border-l border-[#50C9E1]/40 pl-5 font-mono text-xs uppercase tracking-[0.18em] text-[#50C9E1]/70 lg:block">
            Oberfläche ≠ Innenstruktur
            <span className="mt-2 block text-white/40">Scrollen, um die Risikokette sichtbar zu machen</span>
          </div>
        </div>

        <ol className="relative space-y-5 lg:space-y-7">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            const number = String(index + 1).padStart(2, "0")

            return (
              <li
                key={point.title}
                data-problem-card
                className="group relative min-h-52 overflow-hidden border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#50C9E1]/40 hover:bg-white/[0.075] sm:p-8 lg:min-h-60"
              >
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#50C9E1]/70 to-transparent opacity-40 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-sm tracking-[0.18em] text-[#50C9E1]">{number}</span>
                  <Icon size={28} className="text-red-300/80" aria-hidden="true" />
                </div>
                <h3 className="mt-10 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">{point.title}</h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">{point.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
