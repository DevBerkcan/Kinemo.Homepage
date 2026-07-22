import Link from "next/link"
import { ArrowUpRight, Box, Car, Cog, Cpu, HeartPulse, ShoppingBag } from "lucide-react"

const industries = [
  {
    icon: Car,
    title: "Automotive",
    description: "Gussteile, Schweißnähte, Sicherheitsbauteile und Antriebskomponenten zerstörungsfrei prüfen.",
  },
  {
    icon: Cpu,
    title: "Elektronik",
    description: "Lötstellenqualität, Leiterbahnintegrität und Bauteilpositionierung in Leiterplatten analysieren.",
  },
  {
    icon: Box,
    title: "Kunststoff",
    description: "Einfallstellen, Lunker, Bindenähte und Wandstärkenabweichungen in Spritzgussteilen erkennen.",
  },
  {
    icon: Cog,
    title: "Maschinenbau",
    description: "Innere Strukturen von Getrieben, Ventilen und Baugruppen auf Fehler und Abweichungen prüfen.",
  },
  {
    icon: HeartPulse,
    title: "Medizintechnik",
    description: "Implantate, Instrumente und medizinische Geräte nach höchsten Qualitätsstandards analysieren.",
  },
  {
    icon: ShoppingBag,
    title: "Konsumgüter",
    description: "Technische Produkte und Haushaltsgeräte in der Entwicklung auf innere Fehler und Qualitätsmängel prüfen.",
  },
] as const

export default function IndustriesSection() {
  return (
    <section id="branchen-uebersicht" className="relative scroll-mt-24 overflow-hidden bg-[#061b26] px-6 py-24 text-white md:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(80,201,225,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(80,201,225,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div data-motion="reveal">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#50C9E1]">06 / Branchen</p>
            <h2 className="max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.04em] md:text-6xl">
              Ein Blick ins Innere verändert Entscheidungen.
            </h2>
          </div>
          <p data-motion="reveal" className="max-w-2xl text-lg leading-relaxed text-white/65 lg:justify-self-end">
            Ob Entwicklung, Fehleranalyse oder Serienfreigabe: Die Prüfstrategie richtet sich nach Material,
            Bauteilgeometrie und Ihrer konkreten Fragestellung.
          </p>
        </div>

        <ol data-motion="stagger" className="divide-y divide-white/15">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <li key={industry.title} className="group grid gap-4 py-7 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_0.7fr_1.3fr_3rem] lg:items-center lg:py-9">
                <span className="font-mono text-xs text-[#50C9E1]">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex items-center gap-4">
                  <Icon aria-hidden="true" className="h-5 w-5 text-[#50C9E1]" />
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{industry.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-white/60 sm:col-start-2 lg:col-start-auto lg:text-base">
                  {industry.description}
                </p>
                <ArrowUpRight aria-hidden="true" className="hidden h-6 w-6 text-white/25 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#50C9E1] lg:block" />
              </li>
            )
          })}
        </ol>

        <div className="mt-10 flex justify-end">
          <Link href="/branchen" className="group inline-flex min-h-12 items-center gap-3 border-b border-[#50C9E1] py-2 font-semibold text-[#50C9E1]">
            Alle Branchenlösungen
            <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
