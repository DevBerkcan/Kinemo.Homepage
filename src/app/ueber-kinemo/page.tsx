import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Building2, MapPin, Scan } from "lucide-react"
import JsonLd from "@/app/components/JsonLd"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { kinemoTopics } from "@/lib/geo-content"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createSchemaGraph, createWebPageNode, entityIds } from "@/lib/schema"
import { COMPANY_ADDRESS_FULL, COMPANY_EMAIL, COMPANY_EMAIL_HREF, COMPANY_NAME } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "Über Kinemo – Ansprechpartner und CT-Labor in Wuppertal",
  description: "Lernen Sie Kinemo, den Standort Wuppertal und Gründer Sercan Atesoglu kennen. Industrielle CT und Röntgenanalyse für Entwicklung und Qualitätssicherung.",
  path: "/ueber-kinemo",
  keywords: ["Kinemo GmbH", "CT Labor Wuppertal", "Sercan Atesoglu"],
})

export default function AboutPage() {
  const description = "Unternehmens-, Standort- und Ansprechpartnerinformationen zur Kinemo GmbH in Wuppertal."
  const aboutPage = {
    ...createWebPageNode({ path: "/ueber-kinemo", name: "Über Kinemo", description, type: "AboutPage", about: [...kinemoTopics] }),
    mainEntity: { "@id": entityIds.organization },
  }
  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <JsonLd data={createSchemaGraph([
        aboutPage,
        createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Über Kinemo", path: "/ueber-kinemo" }], "/ueber-kinemo"),
      ])} />
      <PageHero eyebrow="Unternehmen / Wuppertal" title="Bildgebende Prüftechnik für Entscheidungen in Entwicklung und Qualität." description="Kinemo verbindet industrielle CT und Röntgenanalyse mit einer klaren technischen Fragestellung: Welche Information wird benötigt, um die nächste Entscheidung belastbar zu treffen?" code="ENTITY / KINEMO" ctaLabel="Kinemo kontaktieren" />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#0f2b3b]">
            <Image src="/sercan-atesoglu.jpeg" alt="Sercan Atesoglu, Gründer von Kinemo" width={760} height={900} className="aspect-[4/5] w-full object-cover object-top" priority />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1] dark:text-[#50C9E1]">Ansprechpartner</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#08415C] dark:text-white md:text-5xl">Sercan Atesoglu</h2>
            <p className="mt-2 text-lg text-[#1f9cb1] dark:text-[#50C9E1]">Gründer von Kinemo</p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">Kinemo entstand aus der Überzeugung, dass verborgene Bauteilinformationen früher in Entwicklungs- und Qualitätsentscheidungen einfließen sollten. Der Fokus liegt auf einer verständlichen Verbindung von Aufnahme, Auswertung und konkreter Prüffrage.</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">Auf dieser Seite werden bewusst nur belegbare Unternehmens- und Ansprechpartnerdaten veröffentlicht. Kundenstimmen, Kennzahlen und Referenzzuordnungen erscheinen erst nach dokumentierter Freigabe.</p>
            <a href={COMPANY_EMAIL_HREF} className="group mt-8 inline-flex items-center gap-2 border-b border-[#50C9E1] pb-1 font-semibold text-[#08415C] dark:text-[#50C9E1]">{COMPANY_EMAIL}<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7f8] px-6 py-20 dark:bg-[#0f2b3b] md:py-24">
        <div className="mx-auto grid max-w-7xl gap-px bg-gray-300 dark:bg-white/10 md:grid-cols-3">
          {[{ icon: Building2, title: "Unternehmen", text: COMPANY_NAME }, { icon: MapPin, title: "Standort", text: COMPANY_ADDRESS_FULL }, { icon: Scan, title: "Fachgebiet", text: "Industrielle CT und Röntgenanalyse" }].map((item) => { const Icon = item.icon; return <article key={item.title} className="bg-white p-8 dark:bg-[#061b26]"><Icon aria-hidden="true" className="h-6 w-6 text-[#1f9cb1] dark:text-[#50C9E1]" /><h2 className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/45">{item.title}</h2><p className="mt-2 font-semibold text-[#08415C] dark:text-white">{item.text}</p></article> })}
        </div>
        <div className="mx-auto mt-10 max-w-7xl"><Link href="/technologie" className="group inline-flex items-center gap-2 border-b border-[#50C9E1] pb-1 font-semibold text-[#08415C] dark:text-[#50C9E1]">Technologie und Grenzen verstehen<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
      </section>
      <PageCta title="Lassen Sie uns die Prüffrage zuerst klären." description="Ein belastbares Angebot beginnt mit Bauteil, Material, relevanter Struktur und dem gewünschten Erkenntnisgewinn." label="Projekt besprechen" />
    </main>
  )
}
