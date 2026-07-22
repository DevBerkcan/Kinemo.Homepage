import Link from "next/link"
import { createBreadcrumbJsonLd } from "@/lib/seo"

export default function HowItWorks() {
  const metricsApproved = process.env.KINEMO_METRICS_APPROVED === "true"
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "How It Works", path: "/HowItWorks" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-white dark:bg-[#0f2b3b] py-20 md:py-24 px-4 relative pb-32 md:pb-24">
        <div className="fixed bottom-4 right-4 z-40 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6">
          <Link
            href="/kontakt"
            className="inline-flex max-w-[calc(100vw-2rem)] items-center justify-center bg-gradient-to-r from-[#50C9E1] to-[#84E3F5] text-[#08415C] font-semibold px-4 py-3 sm:px-5 rounded-full shadow-xl hover:scale-105 transition text-xs sm:text-sm md:text-base text-center leading-tight"
          >
            ✨ Jetzt kostenlos beraten lassen
          </Link>
        </div>

        <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#08415C] dark:text-white mb-4">
            Wie Kinemo Ihre Produktentwicklung unterstützt
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Entdecken Sie, wie industrielle CT- und Röntgenanalyse verborgene Fehler sichtbar macht und damit Entwicklungsschleifen verkürzt.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 rounded-xl bg-gradient-to-br from-[#08415C] to-[#061b26] px-6 py-12 text-center text-white shadow-xl md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#50C9E1]">Von der Frage zur Entscheidung</p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white/90">
            Wir übersetzen Ihre Prüfaufgabe in einen klaren Analyseplan und liefern nachvollziehbare Ergebnisse statt unkommentierter Bilddaten.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-6 text-center">
            Ablauf der Zusammenarbeit
          </h3>
          <ol className="space-y-6 pl-5 list-decimal text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li><strong>📞 Erstgespräch & Zieldefinition:</strong> Wir besprechen Ihre Anforderungen und definieren gemeinsam die Analyseziele.</li>
            <li><strong>📦 Bauteilanlieferung:</strong> Sie senden uns das Bauteil oder Produkt zur Untersuchung.</li>
            <li><strong>🔬 CT- & Röntgenanalyse:</strong> Industrielle CT macht innere Strukturen, Fehler und Maßabweichungen sichtbar, zerstörungsfrei.</li>
            <li><strong>📈 Auswertung & Interpretation:</strong> Sie erhalten hochwertige Visualisierungen, 3D-Rekonstruktionen und klare Handlungsempfehlungen.</li>
            <li><strong>🛠️ Beratung zur Optimierung:</strong> Auf Wunsch begleiten wir Sie bei der Weiterentwicklung und Konstruktionsanpassung.</li>
          </ol>

          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex max-w-full items-center justify-center px-5 py-3 md:px-6 bg-white dark:bg-[#0f2b3b] border border-[#50C9E1] text-[#08415C] dark:text-[#50C9E1] rounded-full shadow hover:bg-[#f3fdff] dark:hover:bg-[#193c4d] transition text-center text-sm md:text-base"
            >
              Beispiel-Auswertung persönlich anfragen
            </Link>
          </div>
        </div>

        <div className="mt-20 md:mt-24 bg-[#08415C] text-white py-10 md:py-12 px-5 md:px-6 rounded-xl max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Bereit für die nächste Entwicklungsstufe?</h3>
          <p className="mb-6 text-white/90 text-sm md:text-base">
            {metricsApproved
              ? "Über 50+ Unternehmen aus Industrie & Medizintechnik setzen bereits auf Kinemo. Fordern Sie jetzt eine unverbindliche Analyse an und entdecken Sie, was in Ihrem Produkt steckt."
              : "Fordern Sie jetzt eine unverbindliche Analyse an und entdecken Sie, welche Informationen in Ihrem Produkt sichtbar werden können."}
          </p>
          <Link
            href="/kontakt"
            className="inline-flex max-w-full items-center justify-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 md:px-8 py-3 rounded-full transition text-center"
          >
            🚀 Jetzt Demo anfordern
          </Link>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Die Integration industrieller CT und Röntgenanalyse in den Entwicklungsprozess spart Unternehmen Zeit, Geld und Ressourcen.
            Durch zerstörungsfreie Prüfung machen wir innere Strukturen, Fehler und Maßabweichungen in Prototypen, Baugruppen und Materialien sichtbar.
          </p>
          <p className="mt-4">
            Unsere Kund:innen, von der Automobilindustrie bis zur Medizintechnik, profitieren von präzisen Erkenntnissen, klaren Empfehlungen und einem reibungslosen Ablauf.
            Sie möchten wissen, ob Kinemo auch Ihr Projekt voranbringen kann? Vereinbaren Sie jetzt ein unverbindliches Gespräch.
          </p>
        </div>
      </section>
    </>
  )
}
