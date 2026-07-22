import TaskLandingPage from "@/app/components/TaskLandingPage"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Porositätsanalyse mit industrieller CT",
  description: "Porositätsanalyse für Guss, Kunststoff und additiv gefertigte Bauteile. Hohlräume, Poren und Verteilungen mit industrieller CT sichtbar und bewertbar machen.",
  path: "/porositaetsanalyse",
  keywords: ["Porositätsanalyse CT", "Porenanalyse Guss", "Hohlräume CT Analyse"],
})

const industries = [
  "Aluminium- und Druckguss",
  "Spritzguss und technische Kunststoffe",
  "Additiv gefertigte Bauteile",
  "Dichtheits- und festigkeitskritische Komponenten",
] as const

export default function PorositaetsanalysePage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([{ name: "Startseite", path: "/" }, { name: "Porositätsanalyse", path: "/porositaetsanalyse" }])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TaskLandingPage
        eyebrow="Prüfaufgabe / Porosität"
        code="CT.03 / VOID"
        title="Porositätsanalyse mit industrieller CT"
        description="Poren, Lunker und Hohlräume zerstörungsfrei analysieren, dokumentieren und für Freigabe- oder Optimierungsentscheidungen nutzbar machen."
        sectionTitle="Für Bauteile mit innerem Qualitätsrisiko."
        body={<><p>Bei Suchanfragen wie <strong>Porositätsanalyse CT</strong>, <strong>Porenanalyse Guss</strong> oder <strong>Hohlräume im Bauteil prüfen</strong> geht es fast immer um eine konkrete Qualitätsentscheidung.</p><p>CT ermöglicht nicht nur den Nachweis einzelner Poren, sondern auch die Bewertung ihrer Verteilung, Clusterbildung und Lage in funktionskritischen Bereichen.</p><p>Damit wird aus einem bloßen Sichtbarkeitsproblem eine belastbare technische Entscheidungsvorlage für Entwicklung, QS und Lieferantenmanagement.</p></>}
        listTitle="Besonders relevant für"
        items={industries}
        ctaTitle="Porosität bewerten statt vermuten."
        ctaDescription="Wenn Poren und Hohlräume über Freigabe, Dichtheit oder Bauteillebensdauer entscheiden, ist CT oft das präziseste Verfahren."
        ctaLabel="Porositätsanalyse anfragen"
      />
    </>
  )
}
