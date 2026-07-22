import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, CheckCircle, MapPin } from "lucide-react"
import { notFound } from "next/navigation"
import JsonLd from "@/app/components/JsonLd"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { createRegionalFaqs, regionalPages } from "@/lib/geo-content"
import { isRegionalContentApproved } from "@/lib/deployment"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createFaqNode, createSchemaGraph, createServiceNode, createWebPageNode } from "@/lib/schema"

type RegionalPageProps = { params: Promise<{ stadt: string }> }

function getRegion(slug: string) {
  return regionalPages.find((region) => region.slug === slug)
}

export async function generateMetadata({ params }: RegionalPageProps): Promise<Metadata> {
  const { stadt } = await params
  const region = getRegion(stadt)
  if (!region) return createPageMetadata({ title: "Region nicht gefunden", description: "Die angeforderte Region ist nicht verfügbar.", path: `/industrielle-ct/${stadt}`, noindex: true })
  return createPageMetadata({
    title: `Industrielle CT und Röntgenanalyse für ${region.city}`,
    description: `Zerstörungsfreie Bauteilprüfung für Unternehmen aus ${region.city}: industrielle CT, 2D-Röntgen, Fehleranalyse und digitale Befundauswertung über den Kinemo-Standort Wuppertal.`,
    path: `/industrielle-ct/${region.slug}`,
    keywords: [`industrielle CT ${region.city}`, `Röntgenanalyse ${region.city}`, `Bauteilprüfung ${region.city}`],
    noindex: region.slug !== "wuppertal" && !isRegionalContentApproved,
  })
}

export default async function RegionalServicePage({ params }: RegionalPageProps) {
  const { stadt } = await params
  const region = getRegion(stadt)
  if (!region) notFound()
  const path = `/industrielle-ct/${region.slug}`
  const faqs = createRegionalFaqs(region)
  const description = `Industrielle CT, Röntgenanalyse und zerstörungsfreie Bauteilprüfung für Unternehmen aus ${region.city}, durchgeführt über den Kinemo-Standort in Wuppertal.`
  const schema = createSchemaGraph([
    createWebPageNode({ path, name: `Industrielle CT für ${region.city}`, description, about: ["Industrielle Computertomographie", "Röntgenanalyse", region.city] }),
    createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Leistungen", path: "/leistungen" }, { name: region.city, path }], path),
    createServiceNode({ path, name: `Industrielle CT und Röntgenanalyse für ${region.city}`, description, areaServed: { "@type": "City", name: region.city, containedInPlace: { "@type": "State", name: region.state } } }),
    createFaqNode(faqs, path),
  ])

  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <JsonLd data={schema} />
      <PageHero eyebrow={`Prüfservice / ${region.city}`} title={`Industrielle CT und Röntgenanalyse für Unternehmen aus ${region.city}.`} description="Bauteile zerstörungsfrei untersuchen, innere Merkmale einordnen und Ergebnisse nachvollziehbar dokumentieren – über den Kinemo-Unternehmens- und Laborstandort in Wuppertal." code={`REGION / ${region.slug.toUpperCase()}`} ctaLabel="Prüfaufgabe anfragen" />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1] dark:text-[#50C9E1]">Regionaler Kontext</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#08415C] dark:text-white">Prüfdaten für Entwicklung und Qualitätssicherung.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">{region.context}</p>
            <p className="mt-5 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">Kinemo stimmt das Verfahren nicht nach einem pauschalen Leistungspaket ab, sondern nach Material, Geometrie, relevanter Struktur und gewünschter Entscheidung. So wird geklärt, ob eine schnelle 2D-Projektion genügt oder ein vollständiges CT-Volumen benötigt wird.</p>
          </div>
          <aside className="border border-[#08415C]/15 bg-[#08415C]/[0.035] p-7 dark:border-white/10 dark:bg-white/[0.035]">
            <MapPin aria-hidden="true" className="h-6 w-6 text-[#1f9cb1] dark:text-[#50C9E1]" />
            <h2 className="mt-4 font-bold text-[#08415C] dark:text-white">Standorttransparenz</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{region.slug === "wuppertal" ? "Kinemo hat seinen Unternehmens- und Laborstandort in Wuppertal." : `Diese Seite beschreibt das Leistungsgebiet für ${region.city}. Kinemo unterhält dort keine zusätzliche Niederlassung; Unternehmens- und Laborstandort ist Wuppertal.`}</p>
          </aside>
        </div>
      </section>

      <section className="bg-[#f3f7f8] px-6 py-16 dark:bg-[#0f2b3b] md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1] dark:text-[#50C9E1]">Typische Branchenbezüge</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#08415C] dark:text-white">Prüffragen aus dem industriellen Umfeld von {region.city}.</h2>
              <ul className="mt-7 space-y-3">
                {region.industries.map((industry) => <li key={industry} className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><CheckCircle aria-hidden="true" className="h-5 w-5 text-[#1f9cb1] dark:text-[#50C9E1]" />{industry}</li>)}
              </ul>
            </div>
            <div className="grid gap-px bg-gray-300 dark:bg-white/10 sm:grid-cols-2">
              {[{ title: "Innere Defekte", text: "Poren, Lunker, Einschlüsse und weitere relevante Strukturen lokalisieren." }, { title: "Montagezustand", text: "Verdeckte Positionen und Verbindungen in Baugruppen untersuchen." }, { title: "Geometrievergleich", text: "Rekonstruierte Oberflächen mit CAD- oder Referenzdaten vergleichen." }, { title: "Befunddokumentation", text: "Relevante Beobachtungen mit Bildern und technischer Einordnung festhalten." }].map((item) => <article key={item.title} className="bg-white p-6 dark:bg-[#061b26]"><h3 className="font-bold text-[#08415C] dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#08415C] dark:text-white">Häufige Fragen aus {region.city}</h2>
          <div className="mt-7 divide-y divide-gray-200 border-y border-gray-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold text-[#08415C] dark:text-white">{faq.question}</summary><p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">{faq.answer}</p></details>)}
          </div>
          <Link href="/faq" className="group mt-7 inline-flex items-center gap-2 border-b border-[#50C9E1] pb-1 font-semibold text-[#08415C] dark:text-[#50C9E1]">Alle technischen FAQ <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </div>
      </section>
      <PageCta title={`Prüfprojekt aus ${region.city} technisch einordnen.`} description="Senden Sie Bauteildaten und Prüffrage. Kinemo klärt das geeignete Verfahren und den organisatorischen Ablauf über den Standort Wuppertal." label="Analyse anfragen" />
    </main>
  )
}

export function generateStaticParams() {
  return regionalPages.map((region) => ({ stadt: region.slug }))
}
