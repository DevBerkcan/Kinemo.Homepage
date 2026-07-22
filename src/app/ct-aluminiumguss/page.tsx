import TaskLandingPage from "@/app/components/TaskLandingPage"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "CT für Aluminiumguss und Lunkeranalyse",
  description: "Industrielle CT für Aluminiumguss: Lunker, Porosität, Einschlüsse und Wandstärkenabweichungen in Gussteilen zerstörungsfrei erkennen.",
  path: "/ct-aluminiumguss",
  keywords: ["CT Aluminiumguss", "Lunkeranalyse Aluminiumguss", "Porosität Guss CT"],
})

const benefits = [
  "Lunker und Porennester dreidimensional lokalisieren",
  "Kritische Bereiche in Lastpfaden und Dichtflächen bewerten",
  "Wandstärken und Geometrie mit dem CAD-Modell vergleichen",
  "Belastbare Grundlage für Werkzeug- und Prozessoptimierung schaffen",
] as const

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Wann lohnt sich CT bei Aluminiumgussteilen?", acceptedAnswer: { "@type": "Answer", text: "Besonders bei Erstmustern, Prototypen, sicherheitsrelevanten Bauteilen und wiederkehrenden Qualitätsproblemen lohnt sich CT, weil innere Fehlstellen sichtbar werden, bevor sie in der Serie teuer werden." } },
    { "@type": "Question", name: "Welche Fehler erkennt CT in Aluminiumguss?", acceptedAnswer: { "@type": "Answer", text: "CT erkennt unter anderem Lunker, Porosität, Einschlüsse, Risse, Wandstärkenabweichungen und Montagefehler in Baugruppen." } },
  ],
}

export default function CtAluminiumgussPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([{ name: "Startseite", path: "/" }, { name: "CT für Aluminiumguss", path: "/ct-aluminiumguss" }])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TaskLandingPage
        eyebrow="Prüfaufgabe / Aluminiumguss"
        code="CT.01 / GUSS"
        title="CT für Aluminiumguss"
        description="Lunker, Porosität und Einschlüsse in Aluminiumgussteilen mit industrieller CT zerstörungsfrei erkennen und vor Serienfreigabe sicher bewerten."
        sectionTitle="Innere Gussqualität belastbar bewerten."
        body={<><p>Wer nach <strong>CT Aluminiumguss</strong>, <strong>Lunkeranalyse Aluminium</strong> oder <strong>Porosität Guss CT</strong> sucht, hat meist eine sehr konkrete Prüfaufgabe. Genau dafür ist diese Landingpage gedacht.</p><p>Industrielle CT liefert bei Aluminiumgussteilen ein vollständiges 3D-Bild des Bauteils. So lassen sich innere Fehlstellen nicht nur erkennen, sondern auch nach Lage, Größe und Relevanz für Funktion und Lebensdauer bewerten.</p><p>Besonders wertvoll ist das bei Erstmustern, Vorserien, Reklamationen und Freigabeentscheidungen, wenn Oberflächenprüfung allein nicht ausreicht.</p></>}
        listTitle="Typische Analyseziele"
        items={benefits}
        ctaTitle="Aluminiumgussteil prüfen lassen."
        ctaDescription="Wenn Sie Lunker, Porosität oder Geometrieabweichungen absichern möchten, ist CT meist der schnellste Weg zu belastbaren Daten."
        ctaLabel="Analyse anfragen"
      />
    </>
  )
}
