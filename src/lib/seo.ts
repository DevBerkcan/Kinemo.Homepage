import type { Metadata } from "next"
import {
  COMPANY_ADDRESS_LINE_1,
  COMPANY_BRAND,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "@/lib/site"
import { isIndexingEnabled } from "@/lib/deployment"

export const SITE_URL = "https://www.kinemo.de"
export const BRAND_NAME = COMPANY_BRAND
export const DEFAULT_OG_IMAGE = "/opengraph-image"

export const DEFAULT_KEYWORDS = [
  "industrielle CT",
  "industrielle Computertomographie",
  "CT Analyse",
  "Röntgenanalyse",
  "zerstörungsfreie Prüfung",
  "ZfP",
  "Bauteilanalyse",
  "Fehleranalyse",
  "Lunkeranalyse",
  "Porositätsanalyse",
  "Baugruppenprüfung",
  "Qualitätssicherung",
  "Produktentwicklung",
  "Erstmusterprüfung",
  "Soll Ist Vergleich",
]

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString()
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  noindex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const shouldNoIndex = noindex || !isIndexingEnabled

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical,
      languages: {
        de: canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND_NAME,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !shouldNoIndex,
      follow: !shouldNoIndex,
      googleBot: {
        index: !shouldNoIndex,
        follow: !shouldNoIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "industrial inspection",
  }
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: BRAND_NAME,
  legalName: "Kinemo GmbH",
  url: SITE_URL,
  logo: absoluteUrl("/01_logo_blau.png"),
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS_LINE_1,
    postalCode: "42287",
    addressLocality: "Wuppertal",
    addressCountry: "DE",
  },
  areaServed: "DE",
  sameAs: ["https://www.linkedin.com/company/kinemo", "https://www.youtube.com/@kinemo"],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BRAND_NAME,
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organization` },
}
