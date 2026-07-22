import Link from "next/link"
import { ArrowUpRight, BookOpen, CircleHelp, GitCompare, ScanSearch } from "lucide-react"
import JsonLd from "@/app/components/JsonLd"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { blogPosts } from "@/lib/blog-posts"
import { faqCategories } from "@/lib/geo-content"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createSchemaGraph, createWebPageNode } from "@/lib/schema"

export const metadata = createPageMetadata({
  title: "Wissenszentrum für industrielle CT und Röntgenanalyse",
  description: "Fachwissen, Definitionen, Vergleiche und Antworten zu industrieller CT, Röntgenanalyse, Bauteilprüfung und Qualitätssicherung.",
  path: "/wissen",
  keywords: ["Wissenszentrum industrielle CT", "Röntgen FAQ", "ZfP Ratgeber"],
})

const entryPoints = [
  { icon: BookOpen, title: "Fachbeiträge", description: "Grundlagen und technische Einordnungen für Entwicklung und Qualität.", href: "/blog" },
  { icon: CircleHelp, title: "FAQ Hub", description: `${faqCategories.reduce((sum, category) => sum + category.items.length, 0)} präzise Antworten zu Verfahren, Bauteilen und Projektablauf.`, href: "/faq" },
  { icon: GitCompare, title: "CT oder Röntgen?", description: "Die Verfahren anhand von Informationsgehalt, Aufwand und Einsatzgrenzen vergleichen.", href: "/technologie" },
  { icon: ScanSearch, title: "Prüfaufgaben", description: "Von Aluminiumguss bis BGA: konkrete Aufgaben und geeignete Analysewege.", href: "/anwendungsfaelle" },
]

export default function KnowledgePage() {
  const description = "Zentrale Wissensbasis von Kinemo zu industrieller CT, Röntgenanalyse und zerstörungsfreier Prüfung."
  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <JsonLd data={createSchemaGraph([
        createWebPageNode({ path: "/wissen", name: "Kinemo Wissenszentrum", description, type: "CollectionPage", about: ["Industrielle Computertomographie", "Röntgenanalyse", "zerstörungsfreie Prüfung"] }),
        createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Wissen", path: "/wissen" }], "/wissen"),
      ])} />
      <PageHero eyebrow="Knowledge Hub" title="Technische Antworten, die sich prüfen und zitieren lassen." description="Definitionen, Verfahrensvergleiche, Grenzen und konkrete Prüfaufgaben – strukturiert für Menschen, Suchmaschinen und assistive KI-Systeme." code="KNOWLEDGE / NDT" ctaLabel="Frage direkt stellen" />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-gray-200 dark:bg-white/10 md:grid-cols-2">
            {entryPoints.map((entry) => {
              const Icon = entry.icon
              return (
                <article key={entry.href} className="bg-white p-7 dark:bg-[#061b26] md:p-10">
                  <Icon aria-hidden="true" className="h-7 w-7 text-[#1f9cb1] dark:text-[#50C9E1]" />
                  <h2 className="mt-6 text-2xl font-bold text-[#08415C] dark:text-white">{entry.title}</h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-gray-600 dark:text-gray-300">{entry.description}</p>
                  <Link href={entry.href} className="group mt-6 inline-flex items-center gap-2 border-b border-[#50C9E1] pb-1 font-semibold text-[#08415C] dark:text-[#50C9E1]">Öffnen <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7f8] px-6 py-20 dark:bg-[#0f2b3b] md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1] dark:text-[#50C9E1]">Aktuelle Fachbeiträge</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border border-[#08415C]/10 bg-white p-7 dark:border-white/10 dark:bg-[#061b26]">
                <p className="font-mono text-xs text-gray-500 dark:text-white/45">{new Date(post.date).toLocaleDateString("de-DE")}</p>
                <h2 className="mt-3 text-xl font-bold text-[#08415C] dark:text-white"><Link href={`/blog/${post.slug}`} className="hover:text-[#1f9cb1] dark:hover:text-[#50C9E1]">{post.title}</Link></h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Eine technische Frage bleibt offen?" description="Beschreiben Sie Bauteil, Werkstoff und gewünschten Erkenntnisgewinn. Wir ordnen den geeigneten Prüfweg ein." label="Prüfaufgabe besprechen" />
    </main>
  )
}
