import { absoluteUrl, SITE_URL } from "@/lib/seo"
import {
  COMPANY_ADDRESS_LINE_1,
  COMPANY_BRAND,
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
} from "@/lib/site"
import { kinemoTopics, regionalPages, type FaqItem } from "@/lib/geo-content"

export const entityIds = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  founder: `${SITE_URL}/ueber-kinemo#sercan-atesoglu`,
} as const

const sameAs = [
  "https://www.linkedin.com/company/kinemo",
  "https://www.youtube.com/@kinemo",
]

export const organizationNode = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": entityIds.organization,
  name: COMPANY_BRAND,
  legalName: COMPANY_NAME,
  url: SITE_URL,
  description: "Kinemo ist ein Prüf- und Analysedienstleister für industrielle Computertomographie, 2D-Röntgenanalyse und zerstörungsfreie Bauteilprüfung mit Standort in Wuppertal.",
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/01_logo_blau.png"),
    contentUrl: absoluteUrl("/01_logo_blau.png"),
  },
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS_LINE_1,
    postalCode: "42287",
    addressLocality: "Wuppertal",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    availableLanguage: ["de"],
    areaServed: "DE",
  },
  founder: { "@id": entityIds.founder },
  knowsAbout: [...kinemoTopics],
  areaServed: regionalPages.map((region) => ({
    "@type": "City",
    name: region.city,
    containedInPlace: { "@type": "State", name: region.state },
  })),
  sameAs,
}

export const founderNode = {
  "@type": "Person",
  "@id": entityIds.founder,
  name: "Sercan Atesoglu",
  jobTitle: "Gründer",
  image: absoluteUrl("/sercan-atesoglu.jpeg"),
  url: absoluteUrl("/ueber-kinemo"),
  worksFor: { "@id": entityIds.organization },
  knowsAbout: [
    "Industrielle Computertomographie",
    "Röntgenanalyse",
    "Bauteilprüfung",
    "Produktentwicklung",
    "Qualitätssicherung",
  ],
}

export const websiteNode = {
  "@type": "WebSite",
  "@id": entityIds.website,
  name: COMPANY_BRAND,
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: { "@id": entityIds.organization },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/suche?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export function createSchemaGraph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

export function createWebPageNode({
  path,
  name,
  description,
  type = "WebPage",
  about = [],
}: {
  path: string
  name: string
  description: string
  type?: string
  about?: string[]
}) {
  const url = absoluteUrl(path)
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "de-DE",
    isPartOf: { "@id": entityIds.website },
    about: about.map((name) => ({ "@type": "Thing", name })),
    breadcrumb: { "@id": `${url}#breadcrumb` },
  }
}

export function createBreadcrumbNode(items: Array<{ name: string; path: string }>, path: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function createFaqNode(items: FaqItem[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

export function createServiceNode({
  path,
  name,
  description,
  areaServed = "DE",
  id = "service",
}: {
  path: string
  name: string
  description: string
  areaServed?: string | object
  id?: string
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#${id}`,
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": entityIds.organization },
    areaServed,
  }
}
