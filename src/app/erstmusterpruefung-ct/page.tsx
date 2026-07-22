import TaskLandingPage from "@/app/components/TaskLandingPage"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Erstmusterprüfung mit industrieller CT",
  description: "Erstmusterprüfung mit industrieller CT: innere Strukturen, Porosität, Wandstärken und Soll-Ist-Abweichungen vor Serienfreigabe sicher bewerten.",
  path: "/erstmusterpruefung-ct",
  keywords: ["Erstmusterprüfung CT", "Serienfreigabe CT", "Vorserie CT Analyse"],
})

const checklist = [
  "Innere Struktur vor Serienstart absichern",
  "CAD-Soll-Ist-Vergleich für Geometrie und Toleranzen nutzen",
  "Porosität und kritische Fehlstellen vor Freigabe erkennen",
  "Lieferanten- oder Prozessänderungen früh bewerten",
] as const

export default function ErstmusterpruefungCtPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([{ name: "Startseite", path: "/" }, { name: "Erstmusterprüfung mit CT", path: "/erstmusterpruefung-ct" }])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TaskLandingPage
        eyebrow="Prüfaufgabe / Serienfreigabe"
        code="CT.04 / FAI"
        title="Erstmusterprüfung mit industrieller CT"
        description="Vor Serienfreigabe reicht die Betrachtung von Oberfläche und Maßen oft nicht aus. CT zeigt, was im Inneren des Bauteils tatsächlich vorhanden ist."
        sectionTitle="Mehr Sicherheit vor der Freigabe."
        body={<><p>Suchanfragen wie <strong>Erstmusterprüfung CT</strong> oder <strong>Serienfreigabe CT Analyse</strong> entstehen dort, wo Entwicklungs- und QS-Teams nicht nur Sichtprüfung wollen, sondern belastbare innere Daten.</p><p>CT ergänzt klassische Erstmusterprüfungen um Informationen zu inneren Fehlstellen, Wandstärken, Passungen und Geometrieabweichungen. So lassen sich Freigaben fundierter treffen und Rückläufer vermeiden.</p><p>Das ist besonders wertvoll bei sicherheitsrelevanten Bauteilen, komplexen Geometrien, Gussteilen, Spritzgussteilen und montierten Baugruppen.</p></>}
        listTitle="Was mit CT zusätzlich abgesichert wird"
        items={checklist}
        ctaTitle="Erstmuster mit CT absichern."
        ctaDescription="Wenn vor Serienstart mehr Klarheit benötigt wird als klassische Prüfberichte liefern, unterstützt CT mit inneren Daten und klarer Dokumentation."
        ctaLabel="Erstmuster prüfen lassen"
      />
    </>
  )
}
