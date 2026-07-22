import TaskLandingPage from "@/app/components/TaskLandingPage"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "BGA-Lötstellenprüfung mit Röntgen und CT",
  description: "BGA-Lötstellenprüfung mit 2D-Röntgen und CT: Voids, kalte Lötstellen, Fehlpositionierungen und Lötfehler in Elektronikbaugruppen erkennen.",
  path: "/bga-loetstellenpruefung",
  keywords: ["BGA Lötstellenprüfung", "Röntgen BGA", "CT Elektronik Lötstellen"],
})

const useCases = [
  "Voids unter BGAs sichtbar machen",
  "Kalte oder unvollständige Lötstellen bewerten",
  "Bauteilpositionierung und Kurzschlüsse prüfen",
  "Vergleich zwischen Gutteil und Ausfallteil durchführen",
] as const

export default function BgaLoetstellenpruefungPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([{ name: "Startseite", path: "/" }, { name: "BGA-Lötstellenprüfung", path: "/bga-loetstellenpruefung" }])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TaskLandingPage
        eyebrow="Prüfaufgabe / Elektronik"
        code="XR.02 / BGA"
        title="BGA-Lötstellenprüfung mit Röntgen und CT"
        description="Für Elektronikbaugruppen, bei denen verdeckte Lötstellen nicht optisch prüfbar sind, liefern Röntgen und CT die nötige Transparenz."
        sectionTitle="Verdeckte Elektronikfehler gezielt eingrenzen."
        body={<><p>Suchanfragen wie <strong>BGA Lötstellenprüfung</strong>, <strong>Röntgenanalyse Elektronik</strong> oder <strong>Voids BGA prüfen</strong> kommen fast immer aus einer konkreten Qualitäts- oder Ausfallsituation.</p><p>2D-Röntgen ist ideal für schnelle Serien- und Stichprobenprüfungen. CT wird interessant, wenn Lage, Tiefe und exakte Fehlerursache dreidimensional bewertet werden sollen.</p><p>Das ist besonders relevant bei Feldausfällen, Serienanläufen, Prozessänderungen und Freigaben neuer Baugruppen.</p></>}
        listTitle="Wofür die Prüfung genutzt wird"
        items={useCases}
        ctaTitle="Elektronikbaugruppe analysieren lassen."
        ctaDescription="Wenn verdeckte Lötstellen die Ursache für Ausfälle sein könnten, schaffen Röntgen und CT schnell Klarheit."
        ctaLabel="Anfrage senden"
      />
    </>
  )
}
