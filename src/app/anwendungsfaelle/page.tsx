import { CheckCircle, Microscope, Zap, Eye, Layers, Component, Ruler } from "lucide-react"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Anwendungsfälle für industrielle CT und Röntgenanalyse",
  description:
    "Typische Anwendungsfälle der industriellen CT und Röntgenanalyse: Lunkerprüfung, Lötstellenanalyse, Fremdkörpererkennung, Rissanalyse, Baugruppenkontrolle und Soll-Ist-Vergleiche.",
  path: "/anwendungsfaelle",
  keywords: ["Anwendungsfälle industrielle CT", "Lötstellenanalyse", "Fremdkörpererkennung"],
})

const useCases = [
  {
    icon: Layers,
    title: "Lunker und Porositäten erkennen",
    tag: "Guss / Metall",
    problem:
      "In Gussbauteilen aus Aluminium, Zink oder Stahl entstehen während des Erstarrungsprozesses Hohlräume (Lunker) und Porositätsnester. Diese sind von außen unsichtbar, reduzieren jedoch die mechanische Festigkeit erheblich.",
    analysis:
      "Die industrielle CT erzeugt ein dreidimensionales Volumen des Bauteils. Lunker und Poren können darin segmentiert, visualisiert und hinsichtlich Größe und Lage ausgewertet werden.",
    insight:
      "Entwicklungs- und Qualitätsteams erhalten klare Aussagen über Lage, Größe und Häufigkeit der Fehlstellen – als Grundlage für Prozessoptimierungen oder Konstruktionsanpassungen.",
    keywords: ["Lunkeranalyse", "Porositätsprüfung", "Gussqualität", "Aluminiumbauteile"],
    color: "from-[#08415C] to-[#0C5374]",
  },
  {
    icon: Zap,
    title: "Lötstellen prüfen",
    tag: "Elektronik / PCB",
    problem:
      "In elektronischen Baugruppen (Leiterplatten, BGA-Komponenten) sind Lötstellen weder visuell noch mit herkömmlichen Methoden vollständig prüfbar. Kalte Lötstellen, Lunkern oder Hohlräume unter BGAs führen zu Ausfällen im Feld.",
    analysis:
      "Röntgen und CT liefern präzise Einblicke in Lötstellengeometrie, -vollständigkeit und -qualität. BGA-Verbindungen lassen sich schichtweise analysieren – ohne Demontage oder Zerstörung.",
    insight:
      "Lötstellendefekte werden frühzeitig erkannt, klassifiziert und dokumentiert. Das ermöglicht gezielte Prozessanpassungen im Lötprozess noch vor dem Serienstart.",
    keywords: ["Lötstellenanalyse", "BGA-Prüfung", "Leiterplatteninspektion", "Elektronik CT"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Eye,
    title: "Fremdkörper erkennen",
    tag: "Alle Branchen",
    problem:
      "Metallspäne, Schmutzpartikel, Werkzeugbruchstücke oder andere Fremdkörper können bei der Fertigung oder Montage unbemerkt in Bauteile oder Baugruppen gelangen. Sie gefährden Funktion und Sicherheit.",
    analysis:
      "CT und Röntgenanalyse detektieren auch kleinste Einschlüsse mit hohem Kontrast zum umgebenden Material – unabhängig von Bauteilgröße oder Zugänglichkeit.",
    insight:
      "Fremdkörper werden lokalisiert, in ihrer Art und Größe bewertet und dokumentiert. Die Ergebnisse dienen der Eingrenzung von Fehlerquellen in der Fertigung.",
    keywords: ["Fremdkörpererkennung", "Einschlussdetektion", "Röntgeninspektion", "Fertigungsqualität"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Microscope,
    title: "Risse und Materialfehler analysieren",
    tag: "Metall / Kunststoff",
    problem:
      "Innere Risse, Bindefehler und Materialinhomogenitäten entstehen durch Fertigungsprozesse, thermische Spannungen oder Materialdefekte. Oft werden sie erst unter Betriebslast sichtbar – dann ist es zu spät.",
    analysis:
      "Hochauflösende CT-Scans zeigen feinste Risse und Gefügeunregelmäßigkeiten in dreidimensionaler Darstellung – mit Subvoxel-Auflösung bei kritischen Bauteilen.",
    insight:
      "Lage, Orientierung und Ausdehnung von Rissen werden präzise dokumentiert. In Kombination mit FEM-Daten lässt sich die sicherheitsrelevante Auswirkung bewerten.",
    keywords: ["Rissanalyse", "Materialfehler", "ZfP", "zerstörungsfreie Prüfung"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Component,
    title: "Baugruppen intern prüfen",
    tag: "Mechatronik / Montage",
    problem:
      "Montierte Baugruppen können nach der Montage nicht mehr zerlegt werden – oder der Aufwand wäre zu hoch. Innere Montagefehler, Fehllagen oder Passungsprobleme bleiben unentdeckt.",
    analysis:
      "CT analysiert die vollständige Baugruppe im montierten Zustand: Alle Komponenten, ihre gegenseitige Lage und mögliche Fehlpositionierungen werden sichtbar – ohne Demontage.",
    insight:
      "Montageabweichungen und Passungsprobleme werden erkannt und dokumentiert. Das ermöglicht gezielte Korrekturen im Montageprozess und verhindert Serienausfälle.",
    keywords: ["Baugruppenkontrolle", "Montageinspektion", "CT-Analyse", "Funktionsprüfung"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Ruler,
    title: "Toleranz- und Strukturvergleiche",
    tag: "Entwicklung / Qualität",
    problem:
      "Gefertigte Bauteile weichen von der Konstruktion ab – mal gering, mal signifikant. Maßabweichungen und Strukturunterschiede zwischen Charge A und B bleiben ohne CT oft unsichtbar.",
    analysis:
      "CT-Daten werden mit dem CAD-Modell oder einem Referenzbauteil überlagert. Abweichungen werden farbkodiert visualisiert und als Messpunkte dokumentiert.",
    insight:
      "Konstruktions- und Fertigungsteams erhalten eine objektive Grundlage für Freigabeentscheidungen, Toleranzdefinitionen und Lieferantenbewertungen.",
    keywords: ["Soll-Ist-Vergleich", "Toleranzanalyse", "CAD-Vergleich", "Maßhaltigkeit"],
    color: "from-teal-500 to-cyan-500",
  },
]

const faqItems = [
  {
    question: "Wie aufwändig ist die Vorbereitung einer CT-Analyse?",
    answer: "Minimal. Sie schicken uns das Bauteil, beschreiben die Prüfaufgabe – den Rest übernehmen wir.",
  },
  {
    question: "Kann man Baugruppen mit verschiedenen Materialien analysieren?",
    answer: "Ja, Mischbaugruppen aus Metall und Kunststoff sind analysierbar. Die Auflösung und Erkennbarkeit hängt von Materialdichte und -kontrast ab.",
  },
  {
    question: "Ab welcher Fehlergröße sind Defekte erkennbar?",
    answer: "Je nach Bauteilgröße und eingesetztem System ab wenigen Mikrometern. Im Gespräch klären wir, welche Auflösung für Ihre Fragestellung erforderlich ist.",
  },
]

export default function AnwendungsfaellePage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Anwendungsfälle", path: "/anwendungsfaelle" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <PageHero
          eyebrow="03 / Anwendungsfälle"
          code="APPLICATION / NDT"
          title="Was lässt sich mit CT und Röntgen prüfen?"
          description="Typische Prüfaufgaben aus der industriellen Praxis – von der Lunkeranalyse bis zum Soll-/Ist-Vergleich. Jedes Beispiel zeigt: Zerstörungsfreie Prüfung lohnt sich früh."
          ctaLabel="Anwendungsfall besprechen"
        />

        {/* Use cases */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} id={`use-case-${index}`} className="border-b border-gray-100 dark:border-gray-800 pb-20 last:border-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#50C9E1] uppercase tracking-widest">{useCase.tag}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#08415C] dark:text-white">{useCase.title}</h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-[#08415C] dark:text-white mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 text-xs flex items-center justify-center font-bold">!</span>
                        Das Problem
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{useCase.problem}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-[#08415C] dark:text-white mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 text-xs flex items-center justify-center font-bold">→</span>
                        Die Analyse
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{useCase.analysis}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-[#08415C] dark:text-white mb-3 flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#50C9E1]" />
                        Der Erkenntnisgewinn
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{useCase.insight}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {useCase.keywords.map((kw, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs bg-[#08415C]/10 dark:bg-[#50C9E1]/10 text-[#08415C] dark:text-[#50C9E1] font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 dark:bg-[#0f2b3b] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white text-center mb-12">
              Häufige Fragen zu Anwendungsfällen
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white dark:bg-[#061b26] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-[#08415C] dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title="Ihr Anwendungsfall ist dabei."
          description="Beschreiben Sie uns Ihre Prüfaufgabe – wir klären gemeinsam, welches Verfahren den größten Erkenntnisgewinn bringt."
          label="Jetzt unverbindlich anfragen"
        />
      </main>
    </>
  )
}
