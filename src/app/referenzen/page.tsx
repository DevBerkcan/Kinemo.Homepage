import { CheckCircle, ShieldCheck } from "lucide-react"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Referenzen und Projekteinblicke für industrielle CT",
  description:
    "Freigegebene Projekteinblicke zur industriellen CT, Röntgenanalyse und zerstörungsfreien Prüfung bei Kinemo.",
  path: "/referenzen",
  keywords: ["Case Studies industrielle CT", "Referenzen Röntgenanalyse", "Praxisbeispiele ZfP"],
})

const caseStudies = [
  {
    industry: "Automotive",
    client: "OEM-Zulieferer (anonym)",
    title: "Lunker in Aluminiumgussteilen vor der Serienfreigabe erkannt",
    situation:
      "Ein Automobilzulieferer stand kurz vor der Serienfreigabe eines neuen Strukturbauteils. Die Erstmusterprüfung verlief unauffällig – Maße und Oberfläche waren in Ordnung. Dennoch gab es Unsicherheiten bezüglich der inneren Gussqualität.",
    goal: "Überprüfung der inneren Struktur auf Lunker, Poren und Einschlüsse vor Freigabe.",
    approach:
      "Kinemo führte eine vollständige CT-Analyse des Bauteils durch. Das 3D-Volumenmodell wurde mit dem CAD-Konstruktionsdatensatz überlagert und schichtweise auf Fehlstellen untersucht.",
    findings:
      "Im Bereich eines sicherheitsrelevanten Lastpfades wurden mehrere Lunker entdeckt, die bei Dauerbelastung zu einem Ermüdungsbruch hätten führen können. Die Fehler lagen innerhalb der Wandstruktur und waren von außen nicht erkennbar.",
    result:
      "Die Serienfreigabe wurde vorübergehend gestoppt, der Gussprozess angepasst und erneut analysiert. Das überarbeitete Bauteil war frei von Fehlstellen. Ein potenzieller Rückruf mit Kosten im sechsstelligen Bereich wurde verhindert.",
    tags: ["Automotive", "Aluminiumguss", "Lunkeranalyse", "Serienfreigabe"],
    color: "from-[#08415C] to-[#0C5374]",
  },
  {
    industry: "Elektronik",
    client: "Mittelständischer Elektronikhersteller (anonym)",
    title: "BGA-Lötstellen bei Steuergerät analysiert – Feldausfälle erklärt",
    situation:
      "Ein Hersteller verzeichnete eine erhöhte Ausfallrate bei einem Steuergerät nach etwa 6 Monaten Feldeinsatz. Die Fehlerursache war unklar – äußerlich waren die Rückläufer unauffällig.",
    goal: "Identifikation der Fehlerursache in BGA-bestückten Leiterplatten.",
    approach:
      "Röntgen- und CT-Analyse der Rückläufer im Vergleich zu fehlerfreien Neuteilen. Schichtweise Analyse der BGA-Lötstellen unter dem Mikrochip.",
    findings:
      "Bei den Ausfallteilen zeigten sich systematische Hohlräume (Voids) unter bestimmten BGA-Anschlüssen sowie kalte Lötstellen an den äußeren Reihen. Frische Teile zeigten dieses Muster nicht – der Fehler war auf einen veränderten Lötprozess zurückzuführen.",
    result:
      "Der Fehler wurde dem Lötprozess zugeordnet. Nach Anpassung der Lötparameter und erneuter CT-Prüfung war das Problem behoben. Der Hersteller konnte die Produktion ohne weiteren Ausfall fortsetzen.",
    tags: ["Elektronik", "BGA", "Lötstellenanalyse", "Ursachenanalyse"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    industry: "Medizintechnik",
    client: "Medizintechnikunternehmen (anonym)",
    title: "Implantatkonstruktion in der Vorserie mit CT-Daten validiert",
    situation:
      "Ein Unternehmen entwickelte ein neues Implantat und befand sich in der Vorserie. Konstruktive Änderungen in den letzten Entwicklungsschleifen hatten die innere Geometrie verändert – eine Überprüfung war vor Zulassungseinreichung erforderlich.",
    goal: "Validierung der inneren Struktur des Implantats auf Porosität, Wandstärkengleichmäßigkeit und Formtreue gegenüber dem CAD-Modell.",
    approach:
      "Hochauflösende CT-Analyse mit anschließendem Soll-Ist-Vergleich gegen CAD. Zusätzlich automatisierte Porositätsanalyse nach Branchen-Standard.",
    findings:
      "Der Soll-Ist-Vergleich zeigte eine Unterschreitung der Mindestwandstärke in einem kritischen Bereich des Implantats – knapp unterhalb des Toleranzbereichs. Die Porosität lag innerhalb der akzeptablen Grenzen.",
    result:
      "Die Konstruktion wurde punktuell angepasst, erneut gefertigt und per CT verifiziert. Die Zulassungsunterlagen konnten mit CT-Daten als Nachweis eingereicht werden – ohne zeitaufwändige Schliffbildserie.",
    tags: ["Medizintechnik", "Implantat", "Wandstärkenanalyse", "Zulassung"],
    color: "from-green-500 to-emerald-600",
  },
  {
    industry: "Kunststoff / Konsumgüter",
    client: "Haushaltsgerätehersteller (anonym)",
    title: "Bindenähte in Spritzgussgehäuse identifiziert – Prozess optimiert",
    situation:
      "Ein Hersteller von Haushaltsgeräten beobachtete bei Fallprüfungen eine erhöhte Bruchrate an einem neuen Kunststoffgehäuse. Das Versagen trat immer an derselben Stelle auf – dem Verdacht nach entlang einer Bindenahtstelle.",
    goal: "Nachweis und Lokalisierung von Bindenähten im Spritzgussbauteil sowie Bewertung ihrer Auswirkung.",
    approach:
      "CT-Analyse des Gehäuses ohne Demontage. Schichtweise Auswertung im Bereich der Versagensstelle. Vergleich mit unauffälligen Bauteilen.",
    findings:
      "Eine ausgeprägte Bindenahtstelle wurde genau an der Bruchstelle identifiziert. Das Nahtmuster zeigte eine geringe Materialverschmelzung – charakteristisch für zu niedrige Werkzeugtemperatur beim Einspritzen.",
    result:
      "Durch Anpassung von Werkzeugtemperatur und Einspritzgeschwindigkeit wurde die Bindenahtstelle deutlich reduziert. Die Bruchrate bei der Fallprüfung sank auf unter 1 %. Kein Design-Redesign notwendig.",
    tags: ["Kunststoff", "Spritzguss", "Bindenähte", "Fallprüfung"],
    color: "from-orange-500 to-amber-500",
  },
]

export default function ReferenzenPage() {
  const referenceContentApproved = process.env.REFERENCE_CONTENT_APPROVED === "true"
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Referenzen", path: "/referenzen" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <PageHero
          eyebrow="Projekteinblicke"
          title="Prüfergebnisse brauchen Kontext – und eine dokumentierte Freigabe."
          description="Hier veröffentlichen wir ausschließlich Projekteinblicke, deren Inhalte für die externe Kommunikation bestätigt wurden."
          code="REFERENCES / VERIFIED"
          ctaLabel="Eigene Prüfaufgabe besprechen"
        />

        {referenceContentApproved ? (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="border-b border-gray-100 dark:border-gray-800 pb-20 last:border-0">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${cs.color}`}>
                    {cs.industry}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cs.client}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#08415C] dark:text-white mb-8">
                  {cs.title}
                </h2>

                {/* 4-block grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  {[
                    { label: "Ausgangslage", text: cs.situation, accent: "border-gray-300 dark:border-gray-600" },
                    { label: "Ziel", text: cs.goal, accent: "border-blue-300 dark:border-blue-700" },
                    { label: "Analyseansatz", text: cs.approach, accent: "border-[#50C9E1]/50" },
                    { label: "Erkenntnisse", text: cs.findings, accent: "border-orange-300 dark:border-orange-700" },
                  ].map((block) => (
                    <div key={block.label} className={`bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-6 border-l-4 ${block.accent}`}>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{block.label}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className="bg-[#08415C]/5 dark:bg-[#50C9E1]/5 border border-[#08415C]/15 dark:border-[#50C9E1]/20 rounded-2xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#50C9E1] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#08415C] dark:text-white mb-2">Ergebnis & Mehrwert</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-[#08415C]/8 dark:bg-[#50C9E1]/10 text-[#08415C] dark:text-[#50C9E1] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        ) : (
          <section className="px-6 py-20 md:py-28">
            <div data-motion="reveal" className="mx-auto grid max-w-5xl gap-8 border border-[#08415C]/15 bg-[#08415C]/[0.035] p-8 dark:border-white/10 dark:bg-white/[0.035] md:grid-cols-[auto_1fr] md:p-12">
              <div className="flex h-14 w-14 items-center justify-center bg-[#08415C] text-[#50C9E1]">
                <ShieldCheck aria-hidden="true" className="h-7 w-7" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#1f9cb1] dark:text-[#50C9E1]">Freigabestatus</p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#08415C] dark:text-white md:text-3xl">Projektdetails werden nach dokumentierter Freigabe veröffentlicht.</h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">Bis dahin verzichten wir bewusst auf Kundennamen, Ergebniszahlen und nicht bestätigte Fallstudien. Eine konkrete Prüfaufgabe können wir unabhängig davon vertraulich mit Ihnen besprechen.</p>
              </div>
            </div>
          </section>
        )}

        <PageCta
          title="Ihr Bauteil. Ihre Fragestellung. Ein belastbarer Prüfplan."
          description="Sprechen Sie vertraulich mit uns über Material, Geometrie und den gewünschten Erkenntnisgewinn."
          label="Analyse anfragen"
        />
      </main>
    </>
  )
}
