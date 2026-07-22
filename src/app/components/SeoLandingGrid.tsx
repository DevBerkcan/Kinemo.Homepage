import Link from "next/link"
import { ArrowUpRight, CircuitBoard, Cpu, Layers, ScanSearch } from "lucide-react"

const seoLandings = [
  {
    title: "CT für Aluminiumguss",
    href: "/ct-aluminiumguss",
    description: "Lunker, Poren und Einschlüsse in Aluminiumgussteilen frühzeitig mit industrieller CT erkennen.",
    icon: ScanSearch,
    code: "CT.01",
  },
  {
    title: "BGA-Lötstellenprüfung",
    href: "/bga-loetstellenpruefung",
    description: "2D-Röntgen und CT für die Analyse von BGAs, Voids, kalten Lötstellen und Fehlpositionierungen.",
    icon: CircuitBoard,
    code: "XR.02",
  },
  {
    title: "Porositätsanalyse",
    href: "/porositaetsanalyse",
    description: "Porositäten, Lunker und Hohlräume quantitativ bewerten und dokumentieren.",
    icon: Layers,
    code: "CT.03",
  },
  {
    title: "Erstmusterprüfung mit CT",
    href: "/erstmusterpruefung-ct",
    description: "Innere Strukturen, Wandstärken und Soll-Ist-Abweichungen vor Serienfreigabe absichern.",
    icon: Cpu,
    code: "CT.04",
  },
] as const

export default function SeoLandingGrid() {
  return (
    <section id="pruefaufgaben" className="scroll-mt-24 bg-[#f4f7f8] px-6 py-24 dark:bg-[#0b2230] md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-motion="reveal">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#0b8ca7] dark:text-[#50C9E1]">04 / Prüfaufgaben</p>
            <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#08415C] dark:text-white md:text-6xl">
              Präzise Antworten auf konkrete Fragen.
            </h2>
          </div>
          <p data-motion="reveal" className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 lg:justify-self-end">
            Direkter Einstieg in häufige Aufgaben aus Entwicklung, Qualitätssicherung und Fertigung – mit dem passenden Prüfverfahren und klarer technischer Einordnung.
          </p>
        </div>

        <div data-motion="stagger" className="border-t border-[#08415C]/20 dark:border-white/15">
          {seoLandings.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group grid min-h-40 gap-5 border-b border-[#08415C]/20 py-7 transition-colors hover:bg-white/70 dark:border-white/15 dark:hover:bg-white/[0.03] sm:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_0.9fr_1.1fr_3rem] lg:items-center lg:px-5"
              >
                <div className="flex items-center gap-3 font-mono text-xs text-[#0b8ca7] dark:text-[#50C9E1]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                  {item.code}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#08415C] dark:text-white md:text-3xl">{item.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:col-start-2 dark:text-gray-300 lg:col-start-auto lg:text-base">{item.description}</p>
                <ArrowUpRight aria-hidden="true" className="hidden h-6 w-6 text-[#08415C]/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0b8ca7] dark:text-white/30 dark:group-hover:text-[#50C9E1] lg:block" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
