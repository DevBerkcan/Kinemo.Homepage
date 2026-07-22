import Link from "next/link"
import { ArrowRight, FileText, FlaskConical, GitCompare, Radio, Scan, SearchX } from "lucide-react"

const services = [
  { icon: Scan, title: "CT-Analyse", subtitle: "Industrielle Computertomographie", description: "Dreidimensionale Darstellung innerer Strukturen für geeignete Bauteile und Baugruppen.", href: "/leistungen/industrielle-computertomographie" },
  { icon: Radio, title: "Röntgenprüfung", subtitle: "2D-Röntgenanalyse", description: "Projektionsaufnahmen zur Untersuchung verdeckter Strukturen und definierter Prüfmerkmale.", href: "/leistungen/industrielle-roentgenpruefung" },
  { icon: SearchX, title: "Fehleranalyse", subtitle: "Schaden- und Ursachenanalyse", description: "Innere Befunde dokumentieren und gemeinsam mit Prozess- und Schadensinformationen einordnen.", href: "/leistungen/fehleranalyse" },
  { icon: FlaskConical, title: "Entwicklungsbegleitung", subtitle: "Prüfungen in F&E-Phasen", description: "Prototypen, Varianten und Vorserienteile anhand definierter Prüfmerkmale vergleichen.", href: "/leistungen/entwicklungsbegleitende-pruefung" },
  { icon: GitCompare, title: "Vergleichsanalysen", subtitle: "Soll-/Ist-Vergleiche", description: "Rekonstruierte Geometrien mit CAD- oder Referenzdaten abgleichen und dokumentieren.", href: "/leistungen/soll-ist-vergleich" },
  { icon: FileText, title: "Dokumentation & Auswertung", subtitle: "Technische Berichte", description: "Relevante Bilder, Befunde und vereinbarte Auswertungen nachvollziehbar zusammenführen.", href: "/leistungen/dokumentation-auswertung" },
]

export default function ServicesPreview() {
  return (
    <section className="bg-white px-5 py-24 dark:bg-[#061b26] sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div data-motion="reveal" className="mb-14 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#50C9E1]">02 / Leistungen</p>
            <h2 className="text-4xl font-bold leading-[1.05] text-[#08415C] dark:text-white sm:text-5xl lg:text-6xl">Präzision für jede Prüfaufgabe.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 lg:justify-self-end">
            Von der CT-Analyse bis zur Entwicklungsbegleitung: Jede Leistung liefert konkrete Einblicke für schnellere und sicherere Entscheidungen.
          </p>
        </div>

        <ol className="border-t border-gray-200 dark:border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <li key={service.title} data-motion="reveal" className="group grid gap-6 border-b border-gray-200 py-8 dark:border-white/10 sm:py-10 lg:grid-cols-[0.18fr_0.8fr_1fr_0.2fr] lg:items-center">
                <span className="font-mono text-sm tracking-[0.18em] text-[#50C9E1]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">{service.subtitle}</p>
                  <h3 className="text-2xl font-bold text-[#08415C] transition-colors group-hover:text-[#1f9cb1] dark:text-white sm:text-3xl">{service.title}</h3>
                </div>
                <p className="max-w-xl leading-relaxed text-gray-600 dark:text-gray-300">{service.description}</p>
                <div className="flex items-center justify-between lg:justify-end">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#08415C]/15 text-[#08415C] transition group-hover:border-[#50C9E1] group-hover:bg-[#50C9E1] dark:border-white/15 dark:text-[#50C9E1] dark:group-hover:text-[#08415C]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  {service.href ? (
                    <Link href={service.href} aria-label={`${service.title} ansehen`} className="ml-4 text-[#50C9E1] lg:ml-6">
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-12 text-right">
          <Link href="/leistungen" className="group inline-flex items-center bg-[#08415C] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#0C5374]">
            Alle Leistungen entdecken
            <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
