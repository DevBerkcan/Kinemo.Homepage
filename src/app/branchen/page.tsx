import Link from "next/link"
import { Car, Cpu, Box, Cog, HeartPulse, ShoppingBag, ArrowRight, CheckCircle } from "lucide-react"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Branchen für industrielle CT und Röntgenanalyse",
  description:
    "Kinemo unterstützt Automotive, Elektronik, Kunststoff, Maschinenbau, Medizintechnik und technische Produkte mit zerstörungsfreier Bauteilprüfung per CT und Röntgenanalyse.",
  path: "/branchen",
  keywords: ["Automotive CT", "Elektronik Röntgenanalyse", "Medizintechnik CT"],
})

const industries = [
  {
    icon: Car,
    title: "Automotive",
    challenges: "Sicherheitsrelevante Bauteile unterliegen höchsten Qualitätsanforderungen. Innere Defekte in Gussteilen, Schweißverbindungen oder Verbundwerkstoffen können im Betrieb zu kritischen Ausfällen führen.",
    errorTypes: ["Lunker und Poren in Aluminiumgussteilen", "Schweißnahtfehler und Bindefehler", "Risse in Strukturbauteilen", "Abweichungen in sicherheitsrelevanten Maßen"],
    applications: "Gussteile, Schweißbaugruppen, Bremskomponenten, Getriebegehäuse, Antriebswellen, Strukturbauteile",
    color: "from-[#08415C] to-[#0C5374]",
    iconColor: "text-[#08415C] dark:text-[#50C9E1]",
  },
  {
    icon: Cpu,
    title: "Elektronik",
    challenges: "In Leiterplatten und elektronischen Baugruppen sind Lötstellen, Vias und Bondverbindungen von außen nicht prüfbar. Fehler führen zu Ausfällen im Feld und hohen Reklamationskosten.",
    errorTypes: ["Kalte und unvollständige Lötstellen", "Fehlpositionierte Bauelemente", "Risse in Vias und Durchkontaktierungen", "Hohlräume unter BGAs und Flip-Chips"],
    applications: "Leiterplatten, BGA-Baugruppen, Steckverbinder, Sensoren, Steuergeräte",
    color: "from-blue-600 to-cyan-600",
    iconColor: "text-blue-600 dark:text-cyan-400",
  },
  {
    icon: Box,
    title: "Kunststoff",
    challenges: "Spritzgussteile und Kunststoffbaugruppen zeigen innere Fehler, die weder visuell noch taktil erkennbar sind – und die unter Belastung zu Versagen führen können.",
    errorTypes: ["Einfallstellen und Lunker", "Bindenähte und Bindestellen", "Wandstärkenabweichungen", "Einschlüsse und Fremdkörper"],
    applications: "Spritzgussteile, Formteile, Gehäuse, Verbundwerkstoffe, Dichtungselemente",
    color: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500 dark:text-amber-400",
  },
  {
    icon: Cog,
    title: "Maschinenbau",
    challenges: "Getriebe, Ventile und Hydraulikkomponenten haben komplexe innere Strukturen, die im Betrieb extremen Belastungen ausgesetzt sind. Innere Fehler bleiben ohne CT unsichtbar.",
    errorTypes: ["Poren und Einschlüsse in Druckguss", "Risse in Zahnrädern und Wellen", "Undichtigkeiten und Fehlpassungen", "Strukturabweichungen in Ventilgehäusen"],
    applications: "Getriebe, Hydraulikkomponenten, Pumpengehäuse, Ventile, Werkzeughalter",
    color: "from-green-600 to-emerald-600",
    iconColor: "text-green-600 dark:text-emerald-400",
  },
  {
    icon: HeartPulse,
    title: "Medizintechnik",
    challenges: "Medizinische Produkte und Implantate unterliegen strengsten Zulassungsanforderungen. Innere Fehler können direkte Auswirkungen auf die Patientensicherheit haben.",
    errorTypes: ["Porosität in Implantaten", "Schichthaftungsprobleme", "Innere Risse und Fehlstellen", "Abweichungen von Zulassungsanforderungen"],
    applications: "Implantate, Instrumente, Prothesen, Dentalkomponenten, Diagnosegeräte",
    color: "from-red-500 to-rose-500",
    iconColor: "text-red-500 dark:text-rose-400",
  },
  {
    icon: ShoppingBag,
    title: "Konsumgüter & Technische Produkte",
    challenges: "Technische Konsumgüter werden in großen Stückzahlen gefertigt. Innere Fehler in der Entwicklung führen zu teuren Rückrufen und Imageschäden.",
    errorTypes: ["Montageabweichungen in Baugruppen", "Fremdkörper und Einschlüsse", "Fehlpositionierte Inserts", "Innere Strukturfehler in Druckgussteilen"],
    applications: "Haushaltsgeräte, Werkzeuge, Spielzeug mit Sicherheitsanforderungen, technische Accessoires",
    color: "from-purple-500 to-violet-600",
    iconColor: "text-purple-500 dark:text-violet-400",
  },
]

export default function BranchenPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Branchen", path: "/branchen" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <PageHero
          eyebrow="02 / Branchen"
          code="INDUSTRY / 06"
          title="Für Ihre Branche"
          description="Kinemo unterstützt Unternehmen aus verschiedenen Industrien dabei, innere Fehler frühzeitig zu erkennen – zerstörungsfrei, präzise und mit klaren Handlungsempfehlungen."
          ctaLabel="Anwendungsfall besprechen"
        />

        {/* Industry blocks */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start border-b border-gray-100 dark:border-gray-800 pb-20 last:border-0`}>
                  <div className="lg:w-1/2">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">{industry.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{industry.challenges}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span className="font-semibold text-[#08415C] dark:text-white">Beispielanwendungen:</span>{" "}
                      {industry.applications}
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center text-[#50C9E1] hover:text-[#7DDBF3] font-medium gap-2 transition-colors"
                    >
                      Anwendungsfall besprechen
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="lg:w-1/2 bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-[#08415C] dark:text-white mb-5">Typische Fehlerbilder:</h3>
                    <ul className="space-y-3">
                      {industry.errorTypes.map((error, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-[#50C9E1] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{error}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <PageCta
          title="Ihre Branche ist dabei."
          description="Wir klären gemeinsam, wie Kinemo Ihre spezifische Prüfaufgabe lösen kann."
          label="Jetzt unverbindlich anfragen"
        />
      </main>
    </>
  )
}
