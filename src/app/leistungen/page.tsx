import { Scan, Radio, SearchX, FlaskConical, GitCompare, FileText, CheckCircle } from "lucide-react"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import JsonLd from "@/app/components/JsonLd"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createSchemaGraph, createServiceNode, createWebPageNode } from "@/lib/schema"
import { regionalPages } from "@/lib/geo-content"
import Link from "next/link"

export const metadata = createPageMetadata({
  title: "Leistungen für industrielle CT, Röntgenanalyse und Fehleranalyse",
  description:
    "Von industrieller Computertomographie über 2D-Röntgenanalyse bis zur Fehler- und Schadensanalyse: Kinemo unterstützt Produktentwicklung und Qualitätssicherung mit präzisen Prüfleistungen.",
  path: "/leistungen",
  keywords: ["Leistungen industrielle CT", "2D Röntgenanalyse", "Schadensanalyse"],
})

const services = [
  {
    icon: Scan,
    title: "Industrielle Computertomographie (CT)",
    subtitle: "3D-Einblicke in jedes Bauteil",
    description:
      "Die industrielle CT ist das leistungsfähigste Werkzeug zur zerstörungsfreien Prüfung. Sie liefert dreidimensionale Daten über die innere Struktur von Bauteilen – ohne diese zu beschädigen.",
    benefits: [
      "Vollständige 3D-Rekonstruktion innerer Strukturen",
      "Erkennung von Lunkern, Rissen, Poren und Fremdkörpern",
      "Wandstärken- und Toleranzanalysen",
      "Messungen und Vergleiche mit CAD-Daten (Soll-/Ist-Vergleich)",
      "Geeignet für Metall, Kunststoff, Verbundwerkstoffe und Elektronik",
    ],
    scenarios: "Prototypenprüfung, Vorserienvalidierung, Fehlerursachenanalyse, Fertigungsoptimierung",
    color: "from-[#08415C] to-[#0C5374]",
  },
  {
    icon: Radio,
    title: "2D-Röntgenanalyse",
    subtitle: "Schnell. Präzise. Zerstörungsfrei.",
    description:
      "Die klassische Röntgendurchleuchtung liefert schnelle Ergebnisse bei einfacheren Prüfaufgaben – ideal, wenn eine zweidimensionale Darstellung ausreicht oder Zeit eine Rolle spielt.",
    benefits: [
      "Schnelle Durchleuchtung für erste Einschätzungen",
      "Erkennung von Fehllagen, Fremdkörpern und groben Defekten",
      "Lötstellen- und Verbindungsprüfung in Elektronikbaugruppen",
      "Kostengünstige Alternative zur CT bei geeigneten Aufgaben",
    ],
    scenarios: "Erstprüfung, Serienbegleitung, Eingangsinspektion, Schnellprüfung",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: SearchX,
    title: "Fehler- und Schadensanalyse",
    subtitle: "Ursachen verstehen – nicht nur Symptome sehen",
    description:
      "Wenn ein Bauteil versagt, ein Prozess unbeständig ist oder Qualitätsprobleme wiederholt auftreten, hilft eine systematische Fehleranalyse, die Wurzel des Problems zu finden.",
    benefits: [
      "Systematische Ursachenanalyse (Root Cause Analysis)",
      "Dokumentation von Fehlerbildern mit annotierten Bildern",
      "Unterstützung bei Lieferantenreklamationen",
      "Bewertung von Ausschuss und Rückläufern",
    ],
    scenarios: "Reklamationsbearbeitung, Prozessoptimierung, Qualitätssicherung, Entwicklungsschleifen",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FlaskConical,
    title: "Entwicklungsbegleitende Prüfungen",
    subtitle: "Von der ersten Idee bis zur Serienreife",
    description:
      "Kinemo begleitet Entwicklungsteams in jeder Phase – vom ersten Prototypen über die Vorserie bis zur Serienfreigabe – mit präzisen Analysedaten als Entscheidungsgrundlage.",
    benefits: [
      "Früherkennung von Konstruktionsschwächen",
      "Bewertung von Fertigungsalternativen",
      "Analyse von Iterationen und Designänderungen",
      "Unterstützung bei Freigabeentscheidungen",
    ],
    scenarios: "F&E-Begleitung, Prototypenphasen, Vorserienfreigabe, Konstruktionsoptimierung",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: GitCompare,
    title: "Vergleichsanalysen",
    subtitle: "Abweichungen sichtbar machen",
    description:
      "Soll-/Ist-Vergleiche zwischen CAD-Modell und realem Bauteil oder zwischen verschiedenen Fertigungschargen helfen, Fertigungsqualität objektiv zu bewerten.",
    benefits: [
      "Abgleich mit CAD-Konstruktionsdaten",
      "Chargenkompensation und Serienstreuung bewerten",
      "Dokumentation von Maßabweichungen",
      "Grundlage für Freigabeentscheidungen und Toleranzdefinitionen",
    ],
    scenarios: "Erstmusterprüfung, Serienüberwachung, Lieferantenbewertung",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: FileText,
    title: "Dokumentation & Auswertung",
    subtitle: "Klare Berichte als Entscheidungsgrundlage",
    description:
      "Jede Analyse endet mit einem strukturierten Bericht – verständlich für Entwicklungsteams, Qualitätsmanager und externe Partner.",
    benefits: [
      "Annotierte CT-Schnittbilder und 3D-Visualisierungen",
      "Klare Befundbeschreibung und Handlungsempfehlungen",
      "Dokumentation in druckfähigem PDF-Format",
      "Geeignet für interne Freigaben und Lieferantenkommunikation",
    ],
    scenarios: "Interne QS-Dokumentation, Projektabschlussberichte, Lieferantenaudit",
    color: "from-teal-500 to-cyan-500",
  },
]

export default function LeistungenPage() {
  const description = "Industrielle CT, 2D-Röntgenanalyse, Fehleranalyse und entwicklungsbegleitende Bauteilprüfung durch Kinemo."
  const schema = createSchemaGraph([
    createWebPageNode({ path: "/leistungen", name: "Leistungen für industrielle CT und Röntgenanalyse", description, about: services.map((service) => service.title) }),
    createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Leistungen", path: "/leistungen" }], "/leistungen"),
    ...services.map((service, index) => createServiceNode({ path: "/leistungen", id: `service-${index + 1}`, name: service.title, description: service.description })),
  ])

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <PageHero
          eyebrow="01 / Unsere Leistungen"
          code="SERVICE / NDT"
          title="Präzise Analysen für Ihre Produktentwicklung"
          description="Von der industriellen CT bis zur Entwicklungsbegleitung – Kinemo bietet zerstörungsfreie Analyseleistungen, die verborgene Fehler früh erkennen und Entwicklungszeiten verkürzen."
          ctaLabel="Jetzt Analyse anfragen"
        />

        {/* Services */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}
                >
                  <div className="lg:w-1/2">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-2">{service.title}</h2>
                    <p className="text-[#50C9E1] font-medium mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-[#08415C] dark:text-white">Typische Einsatzszenarien:</span>{" "}
                      {service.scenarios}
                    </p>
                  </div>
                  <div className="lg:w-1/2 bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-[#08415C] dark:text-white mb-5">Was Sie erhalten:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-[#50C9E1] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-[#f3f7f8] px-6 py-16 dark:bg-[#0f2b3b] md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1f9cb1] dark:text-[#50C9E1]">Regionale Erreichbarkeit</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
              <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#08415C] dark:text-white">CT- und Röntgenprüfungen über den Standort Wuppertal.</h2>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">Kinemo bedient Unternehmen aus dem Bergischen Land und angrenzenden Wirtschaftsregionen. Die Stadtseiten beschreiben das Leistungsgebiet und keine zusätzlichen Niederlassungen.</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {regionalPages.map((region) => <li key={region.slug}><Link href={`/industrielle-ct/${region.slug}`} className="inline-flex min-h-11 items-center border border-[#08415C]/15 bg-white px-4 py-2 text-sm font-medium text-[#08415C] hover:border-[#50C9E1] dark:border-white/15 dark:bg-[#061b26] dark:text-white">{region.city}</Link></li>)}
            </ul>
          </div>
        </section>

        <PageCta
          title="Nicht sicher, welche Leistung passt?"
          description="Wir klären gemeinsam, welches Analyseverfahren für Ihre Fragestellung den größten Erkenntnisgewinn bringt."
          label="Jetzt unverbindlich anfragen"
        />
      </main>
    </>
  )
}
