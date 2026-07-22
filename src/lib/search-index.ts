import { blogPosts } from "@/lib/blog-posts"
import { faqCategories, regionalPages } from "@/lib/geo-content"

export type SearchDocument = {
  title: string
  description: string
  href: string
  type: "Leistung" | "Prüfaufgabe" | "Wissen" | "FAQ" | "Region" | "Unternehmen"
  terms: string
}

const coreDocuments: SearchDocument[] = [
  { title: "Industrielle CT und Röntgenanalyse", description: "Alle Prüf- und Analyseleistungen von Kinemo.", href: "/leistungen", type: "Leistung", terms: "computertomographie roentgen zerstörungsfrei zfp" },
  { title: "Technologie: CT oder 2D-Röntgen", description: "Funktionsweise, Unterschiede, Vorteile und Grenzen der Verfahren.", href: "/technologie", type: "Wissen", terms: "verfahren auflösung projektion volumen" },
  { title: "CT für Aluminiumguss", description: "Lunker, Poren und innere Gussqualität zerstörungsfrei untersuchen.", href: "/ct-aluminiumguss", type: "Prüfaufgabe", terms: "guss lunker porosität aluminium" },
  { title: "BGA-Lötstellenprüfung", description: "Verdeckte Lötstellen und elektronische Baugruppen per Röntgen oder CT untersuchen.", href: "/bga-loetstellenpruefung", type: "Prüfaufgabe", terms: "elektronik bga void löten leiterplatte" },
  { title: "Porositätsanalyse", description: "Poren räumlich erkennen, einordnen und dokumentieren.", href: "/porositaetsanalyse", type: "Prüfaufgabe", terms: "poren hohlräume volumen guss" },
  { title: "Erstmusterprüfung mit CT", description: "Innere Geometrie und verborgene Merkmale vor der Serienfreigabe prüfen.", href: "/erstmusterpruefung-ct", type: "Prüfaufgabe", terms: "erstmuster serie freigabe cad soll ist" },
  { title: "Branchen", description: "Anwendungen in Automotive, Elektronik, Kunststoff, Maschinenbau und Medizintechnik.", href: "/branchen", type: "Leistung", terms: "industrie automotive medizintechnik maschinenbau kunststoff" },
  { title: "Über Kinemo", description: "Unternehmen, Standort und fachlicher Ansprechpartner.", href: "/ueber-kinemo", type: "Unternehmen", terms: "sercan atesoglu wuppertal labor kontakt" },
]

export const searchDocuments: SearchDocument[] = [
  ...coreDocuments,
  ...blogPosts.map((post) => ({ title: post.title, description: post.excerpt, href: `/blog/${post.slug}`, type: "Wissen" as const, terms: post.tags.join(" ") })),
  ...faqCategories.map((category) => ({ title: `FAQ: ${category.name}`, description: `${category.items.length} Antworten zu ${category.name}.`, href: `/faq#${category.slug}`, type: "FAQ" as const, terms: category.items.map((item) => `${item.question} ${item.answer}`).join(" ") })),
  ...regionalPages.map((region) => ({ title: `Industrielle CT für ${region.city}`, description: region.context, href: `/industrielle-ct/${region.slug}`, type: "Region" as const, terms: `${region.city} ${region.industries.join(" ")}` })),
]

function normalizeSearchText(value: string) {
  return value
    .toLocaleLowerCase("de-DE")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

export function searchSite(query: string) {
  const tokens = normalizeSearchText(query).split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return []

  return searchDocuments
    .map((document) => {
      const title = normalizeSearchText(document.title)
      const haystack = normalizeSearchText(`${title} ${document.description} ${document.terms}`)
      const score = tokens.reduce((total, token) => total + (title.includes(token) ? 3 : haystack.includes(token) ? 1 : 0), 0)
      return { document, score }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.document.title.localeCompare(b.document.title, "de"))
    .map((result) => result.document)
}
