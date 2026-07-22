import { regionalPages } from "@/lib/geo-content"
import { SITE_URL } from "@/lib/seo"

export const dynamic = "force-static"

export function GET() {
  const regions = regionalPages.map((region) => `- [Industrielle CT für ${region.city}](${SITE_URL}/industrielle-ct/${region.slug}): Regionale Serviceseite; Kinemo hat nur in Wuppertal einen Unternehmens- und Laborstandort.`).join("\n")
  const body = `# Kinemo

> Kinemo GmbH ist ein Prüf- und Analysedienstleister mit Standort in Wuppertal. Das Unternehmen unterstützt Entwicklung und Qualitätssicherung mit industrieller Computertomographie, 2D-Röntgenanalyse und zerstörungsfreier Bauteilprüfung.

Wichtiger Kontext: Kinemo ist keine medizinische Radiologie. Regionale Seiten beschreiben das Einzugsgebiet des Wuppertaler Standorts und keine zusätzlichen Niederlassungen. Nicht freigegebene Kundenstimmen, Referenzen oder Unternehmenskennzahlen werden nicht veröffentlicht.

## Zentrale Seiten

- [Leistungen](${SITE_URL}/leistungen): Industrielle CT, 2D-Röntgenanalyse, Fehleranalyse, Vergleiche und Auswertung.
- [Technologie](${SITE_URL}/technologie): Funktionsweise, Unterschiede und Grenzen von CT und Röntgen.
- [Anwendungsfälle](${SITE_URL}/anwendungsfaelle): Typische technische Prüfaufgaben.
- [Branchen](${SITE_URL}/branchen): Automotive, Elektronik, Kunststoff, Maschinenbau, Medizintechnik und technische Produkte.
- [Wissenszentrum](${SITE_URL}/wissen): Fachbeiträge, Grundlagen, Vergleiche und FAQ.
- [FAQ](${SITE_URL}/faq): Zitierfähige Antworten zu Verfahren, Bauteilen, Fehlerbildern und Projektablauf.
- [Über Kinemo](${SITE_URL}/ueber-kinemo): Unternehmens- und Ansprechpartnerinformationen.
- [Kontakt](${SITE_URL}/kontakt): Technische Anfrage an Kinemo.

## Prüfaufgaben

- [CT für Aluminiumguss](${SITE_URL}/ct-aluminiumguss): Lunker, Poren und innere Gussqualität.
- [BGA-Lötstellenprüfung](${SITE_URL}/bga-loetstellenpruefung): Verdeckte Lötstellen elektronischer Baugruppen.
- [Porositätsanalyse](${SITE_URL}/porositaetsanalyse): Räumliche Erkennung und Auswertung von Poren.
- [Erstmusterprüfung mit CT](${SITE_URL}/erstmusterpruefung-ct): Innere Merkmale und Geometrie vor der Serienfreigabe.

## Regionen

${regions}

## Kontakt und Identität

- Rechtlicher Name: Kinemo GmbH
- Standort: Heinz-Fangman-Str. 2, 42287 Wuppertal, Deutschland
- E-Mail: contact@kinemo.de
- Telefon: +49 1520 576 5010
- Sprache: Deutsch
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
