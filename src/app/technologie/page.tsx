import { CheckCircle, Scan, Layers, Microscope, GitCompare, ShieldCheck, AlertTriangle } from "lucide-react"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Technologie hinter industrieller CT und Röntgenanalyse",
  description:
    "Was ist industrielle CT, wie unterscheidet sie sich von klassischem Röntgen und wann lohnt sich welches Verfahren? Technologiewissen für Entwicklung und Qualitätssicherung.",
  path: "/technologie",
  keywords: ["Was ist industrielle CT", "CT vs Röntgen", "Technologie ZfP"],
})

const ctVsXray = [
  { aspect: "Darstellung", ct: "3D – vollständiges Volumenmodell", xray: "2D – Projektion von oben" },
  { aspect: "Fehlerlokalisation", ct: "Präzise in X, Y und Z", xray: "Nur in X und Y" },
  { aspect: "Detailtiefe", ct: "Innere Schichten einzeln analysierbar", xray: "Überlagerungen möglich" },
  { aspect: "Maßhaltigkeitsprüfung", ct: "Vollständiger Soll-Ist-Vergleich", xray: "Eingeschränkt" },
  { aspect: "Analysezeit", ct: "Etwas länger (rekonstruktionsbasiert)", xray: "Sehr schnell" },
  { aspect: "Kosten", ct: "Höher", xray: "Günstiger" },
]

const advantages = [
  {
    icon: Scan,
    title: "Vollständig zerstörungsfrei",
    description: "Das Bauteil bleibt nach der Analyse in unverändertem Zustand. Keine Schliffe, keine Demontage, keine Beschädigung.",
  },
  {
    icon: Layers,
    title: "3D-Einblicke auf Knopfdruck",
    description: "CT liefert ein vollständiges Volumenmodell – jede Schicht, jede Struktur, jeder Hohlraum ist einzeln analysierbar.",
  },
  {
    icon: Microscope,
    title: "Bauteilspezifische Detaildarstellung",
    description: "Die erreichbare Detaildarstellung hängt unter anderem von Bauteilgröße, Material, Durchstrahlungsweg, Aufnahmegeometrie und Systemkonfiguration ab.",
  },
  {
    icon: GitCompare,
    title: "Soll-Ist-Vergleich mit CAD",
    description: "CT-Daten lassen sich direkt mit dem CAD-Modell überlagern – Abweichungen werden farbkodiert visualisiert.",
  },
  {
    icon: ShieldCheck,
    title: "Dokumentierbare Vergleichsdaten",
    description: "Bei abgestimmter Prüfkonfiguration lassen sich CT-Datensätze und Auswertebereiche nachvollziehbar dokumentieren und für Variantenvergleiche nutzen.",
  },
  {
    icon: AlertTriangle,
    title: "Früherkennung statt Ausschuss",
    description: "Fehler werden erkannt, bevor ein Bauteil in die Serie geht – das spart Kosten, Zeit und Ressourcen.",
  },
]

const limits = [
  "Sehr dichte Materialien (z. B. dickwandiger Stahl) können die Bildqualität einschränken.",
  "Bauteilgröße und -gewicht müssen zum verfügbaren CT-System passen.",
  "Stark absorbierende Materialien (z. B. Blei) erschweren die Durchstrahlung.",
  "CT ist kein Echtzeit-Verfahren – die Rekonstruktion benötigt Zeit.",
]

export default function TechnologiePage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Technologie", path: "/technologie" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <PageHero
          eyebrow="Technologie verstehen"
          title="Industrielle CT und Röntgenanalyse – von der Projektion zum Befund."
          description="Wie die Verfahren funktionieren, wo ihre Unterschiede liegen und welche Methode zu Ihrer konkreten Prüfaufgabe passt."
          code="TECH / CT + X-RAY"
          ctaLabel="Prüfaufgabe besprechen"
        />

        {/* Was ist industrielle CT */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-6">
              Was ist industrielle Computertomographie?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              Industrielle Computertomographie (CT) ist ein zerstörungsfreies Prüfverfahren,
              bei dem ein Bauteil aus mehreren Hundert bis Tausend Winkelprojektion geröntgt wird.
              Ein Computer rekonstruiert aus diesen Projektionen ein vollständiges
              dreidimensionales Volumenmodell des Bauteils – inklusive aller inneren Strukturen.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              Anders als bei klassischen Röntgenaufnahmen (2D-Durchleuchtung) können bei der CT
              einzelne Schichten beliebig herausgeschnitten, innere Strukturen freigestellt und
              Maße direkt im 3D-Modell gemessen werden. Das Bauteil bleibt dabei vollständig
              unberührt.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Die industrielle CT unterscheidet sich von der medizinischen CT vor allem durch
              die höhere Auflösung, die größere Flexibilität bei Materialien und die Möglichkeit,
              Bauteile aus nahezu jedem Werkstoff zu untersuchen – von Aluminium über Kunststoff
              bis hin zu Verbundwerkstoffen.
            </p>
          </div>
        </section>

        {/* CT vs. Röntgen Tabelle */}
        <section className="bg-gray-50 dark:bg-[#0f2b3b] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4 text-center">
              CT vs. klassisches Röntgen
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto">
              Beide Verfahren haben ihre Stärken – je nach Prüfaufgabe ist das eine oder andere
              besser geeignet. Kinemo berät Sie, welches Verfahren für Ihre Anforderungen passt.
            </p>
            <div role="region" aria-label="Vergleich von industrieller CT und klassischem Röntgen" tabIndex={0} className="table-scroll-region rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
              <table className="w-full min-w-[42rem] text-sm">
                <thead>
                  <tr className="bg-[#08415C] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Kriterium</th>
                    <th className="text-left px-6 py-4 font-semibold text-[#50C9E1]">Industrielle CT</th>
                    <th className="text-left px-6 py-4 font-semibold">Klassisches Röntgen (2D)</th>
                  </tr>
                </thead>
                <tbody>
                  {ctVsXray.map((row, i) => (
                    <tr key={row.aspect} className={`border-t border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? "bg-white dark:bg-[#061b26]" : "bg-gray-50 dark:bg-[#0f2b3b]"}`}>
                      <td className="px-6 py-4 font-medium text-[#08415C] dark:text-white">{row.aspect}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.ct}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.xray}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4 text-center">
              Vorteile der zerstörungsfreien Prüfung
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Warum ZfP-Verfahren wie CT und Röntgen in der modernen Produktentwicklung
              unverzichtbar sind.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv) => {
                const Icon = adv.icon
                return (
                  <div key={adv.title} className="bg-gray-50 dark:bg-[#0f2b3b] border border-gray-200 dark:border-gray-700 rounded-2xl p-7">
                    <div className="w-11 h-11 rounded-xl bg-[#08415C]/10 dark:bg-[#50C9E1]/10 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-[#08415C] dark:text-[#50C9E1]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#08415C] dark:text-white mb-2">{adv.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Visualisierungsmöglichkeiten */}
        <section className="bg-gray-50 dark:bg-[#0f2b3b] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-6">
              Visualisierungsmöglichkeiten
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              CT-Daten lassen sich auf viele Arten darstellen – je nach Fragestellung und Zielgruppe:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Schnittbildansichten (2D-Slices)", desc: "Beliebige Schnitte durch das 3D-Volumen – horizontal, vertikal, diagonal. Ideal für die Analyse innerer Strukturen auf einem bestimmten Niveau." },
                { title: "3D-Volumenrekonstruktion", desc: "Vollständige dreidimensionale Darstellung des Bauteils – Oberflächen und innere Strukturen frei wählbar ein- oder ausblendbar." },
                { title: "Farbkodierter Soll-Ist-Vergleich", desc: "Abweichungen zwischen CT-Daten und CAD-Modell werden farbkodiert visualisiert – Abweichungen sofort erkennbar." },
                { title: "Porositäts- und Defektanalyse", desc: "Automatische Erkennung und Klassifizierung von Hohlräumen, Poren und Einschlüssen – mit Volumen- und Positionsangabe." },
                { title: "Annotierte Berichte", desc: "Alle relevanten Befunde werden in einem strukturierten PDF-Bericht zusammengefasst – mit Bildern, Maßen und Handlungsempfehlungen." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 bg-white dark:bg-[#061b26] rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                  <CheckCircle size={18} className="text-[#50C9E1] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#08415C] dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Grenzen */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-6">
              Grenzen und Einsatzbereiche
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Industrielle CT ist leistungsfähig – aber nicht für jede Aufgabe das optimale Verfahren.
              Wir beraten Sie transparent, wann CT sinnvoll ist und wann andere Methoden besser passen.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-7">
              <h3 className="font-semibold text-[#08415C] dark:text-white mb-4">Einschränkungen, die Sie kennen sollten:</h3>
              <ul className="space-y-3">
                {limits.map((limit) => (
                  <li key={limit} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-200 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">!</span>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PageCta
          title="Welche Technologie passt zu Ihrem Bauteil?"
          description="Wir ordnen Material, Geometrie und Fragestellung ein und empfehlen das passende Prüfverfahren."
          label="Technische Frage stellen"
        />
      </main>
    </>
  )
}
