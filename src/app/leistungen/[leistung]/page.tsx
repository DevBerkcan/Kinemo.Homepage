import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, CircleAlert } from "lucide-react"
import { notFound } from "next/navigation"
import JsonLd from "@/app/components/JsonLd"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createFaqNode, createSchemaGraph, createServiceNode, createWebPageNode } from "@/lib/schema"
import { servicePageMap, servicePages } from "@/lib/service-pages"

type ServicePageProps = { params: Promise<{ leistung: string }> }

export function generateStaticParams() {
  return servicePages.map((service) => ({ leistung: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { leistung } = await params
  const service = servicePageMap[leistung]
  if (!service) {
    return createPageMetadata({ title: "Leistung nicht gefunden", description: "Die angeforderte Leistung ist nicht verfügbar.", path: `/leistungen/${leistung}`, noindex: true })
  }

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`,
    keywords: [service.name, service.shortName],
  })
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { leistung } = await params
  const service = servicePageMap[leistung]
  if (!service) notFound()

  const path = `/leistungen/${service.slug}`
  const schema = createSchemaGraph([
    createWebPageNode({ path, name: service.title, description: service.metaDescription, about: [service.name, service.shortName] }),
    createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Leistungen", path: "/leistungen" }, { name: service.shortName, path }], path),
    createServiceNode({ path, name: service.name, description: service.metaDescription }),
    createFaqNode([...service.faqs], path),
  ])

  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Leistung / Kinemo"
        breadcrumbItems={[{ label: "Leistungen", href: "/leistungen" }, { label: service.shortName }]}
        title={service.title}
        description={service.description}
        code={`SERVICE / ${service.slug.toUpperCase()}`}
        ctaLabel="Prüfaufgabe besprechen"
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1] dark:text-[#50C9E1]">Einsatz und Ziel</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#08415C] dark:text-white md:text-4xl">Wann diese Leistung eingesetzt wird.</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{service.purpose}</p>
        </div>
      </section>

      <section className="bg-[#f3f7f8] px-6 py-16 dark:bg-[#0f2b3b] md:py-24">
        <div className="mx-auto grid max-w-7xl gap-px bg-[#08415C]/15 dark:bg-white/10 lg:grid-cols-2">
          <article className="bg-white p-7 dark:bg-[#061b26] md:p-10">
            <h2 className="text-2xl font-bold text-[#08415C] dark:text-white">Typische Prüfobjekte und Situationen</h2>
            <ul className="mt-7 space-y-4">
              {service.suitableFor.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-gray-700 dark:text-gray-300"><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#1f9cb1] dark:text-[#50C9E1]" />{item}</li>)}
            </ul>
          </article>
          <article className="bg-white p-7 dark:bg-[#061b26] md:p-10">
            <h2 className="text-2xl font-bold text-[#08415C] dark:text-white">Mögliche Ergebnisse</h2>
            <ul className="mt-7 space-y-4">
              {service.deliverables.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-gray-700 dark:text-gray-300"><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#1f9cb1] dark:text-[#50C9E1]" />{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#08415C] dark:text-white">Ablauf vom Prüfziel zum Befund</h2>
            <ol className="mt-8 divide-y divide-[#08415C]/15 border-y border-[#08415C]/15 dark:divide-white/10 dark:border-white/10">
              {service.process.map((step, index) => <li key={step} className="grid grid-cols-[3rem_1fr] gap-4 py-5"><span className="font-mono text-sm text-[#1f9cb1] dark:text-[#50C9E1]">{String(index + 1).padStart(2, "0")}</span><span className="font-medium text-gray-700 dark:text-gray-200">{step}</span></li>)}
            </ol>
          </div>
          <aside className="border-l-2 border-amber-400 bg-amber-50 p-7 text-amber-950 dark:bg-amber-300/10 dark:text-amber-100 md:p-9">
            <CircleAlert aria-hidden="true" className="h-6 w-6" />
            <h2 className="mt-4 text-2xl font-bold">Technische Grenzen</h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed">
              {service.limits.map((limit) => <li key={limit}>{limit}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-[#061b26] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em]">Häufige Fragen zu {service.shortName}</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {service.faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold text-[#50C9E1]">{faq.question}</summary><p className="mt-3 leading-relaxed text-white/70">{faq.answer}</p></details>)}
          </div>

          <nav aria-label="Verwandte Themen" className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">Verwandte Themen</h2>
            <ul className="mt-5 grid gap-px bg-white/15 sm:grid-cols-3">
              {service.related.map((item) => <li key={item.href}><Link href={item.href} className="group flex min-h-24 items-center justify-between bg-[#061b26] p-5 font-semibold transition-colors hover:bg-[#0b3143]">{item.label}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-[#50C9E1] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></li>)}
            </ul>
          </nav>
        </div>
      </section>

      <PageCta title={`${service.shortName} für Ihr Bauteil einordnen.`} description="Senden Sie Abmessungen, Werkstoff und Prüffrage. Kinemo klärt, welche Aufnahme und Auswertung für die gewünschte Entscheidung geeignet ist." label="Technische Anfrage senden" />
    </main>
  )
}
