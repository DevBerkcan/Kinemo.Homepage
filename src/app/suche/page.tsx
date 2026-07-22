import Link from "next/link"
import { Search } from "lucide-react"
import JsonLd from "@/app/components/JsonLd"
import PageHero from "@/app/components/PageHero"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createSchemaGraph, createWebPageNode } from "@/lib/schema"
import { searchSite } from "@/lib/search-index"

export const metadata = createPageMetadata({
  title: "Kinemo Wissen und Leistungen durchsuchen",
  description: "Durchsuchen Sie Leistungen, Prüfaufgaben, Fachwissen, FAQ und regionale Informationen von Kinemo.",
  path: "/suche",
  noindex: true,
})

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams
  const query = q.trim().slice(0, 100)
  const results = searchSite(query)
  const description = "Interne Suche über Kinemo Leistungen, Prüfaufgaben und Fachwissen."

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <JsonLd data={createSchemaGraph([
        createWebPageNode({ path: "/suche", name: "Kinemo durchsuchen", description }),
        createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Suche", path: "/suche" }], "/suche"),
      ])} />
      <PageHero eyebrow="Website-Suche" title="Fachwissen und Prüfleistungen gezielt finden." description="Suchen Sie nach Verfahren, Fehlerbildern, Werkstoffen, Branchen oder einer Region." code="SEARCH / KINEMO" />
      <section className="px-4 py-14 sm:px-6 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <form action="/suche" role="search" className="grid gap-3 sm:relative sm:block">
            <label htmlFor="site-search" className="sr-only">Website durchsuchen</label>
            <Search aria-hidden="true" className="pointer-events-none absolute left-5 top-7 h-5 w-5 -translate-y-1/2 text-gray-400 sm:top-1/2" />
            <input id="site-search" name="q" type="search" defaultValue={query} placeholder="Zum Beispiel: Porosität Aluminiumguss" className="min-h-14 w-full border border-gray-300 bg-white py-4 pl-14 pr-4 text-base text-gray-900 outline-none focus:border-[#50C9E1] dark:border-white/15 dark:bg-[#0f2b3b] dark:text-white sm:pr-32" />
            <button type="submit" className="min-h-12 bg-[#50C9E1] px-5 font-semibold text-[#08415C] sm:absolute sm:bottom-1.5 sm:right-1.5 sm:top-1.5 sm:min-h-0">Suchen</button>
          </form>

          {query && (
            <div className="mt-12">
              <p role="status" className="font-mono text-xs uppercase tracking-[0.2em] text-[#1f9cb1] dark:text-[#50C9E1]">{results.length} Treffer für „{query}“</p>
              {results.length > 0 ? (
                <ol className="mt-6 divide-y divide-gray-200 border-y border-gray-200 dark:divide-white/10 dark:border-white/10">
                  {results.map((result) => (
                    <li key={result.href} className="py-6">
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-gray-500 dark:text-white/45">{result.type}</span>
                      <h2 className="mt-2 text-xl font-bold text-[#08415C] dark:text-white"><Link href={result.href} className="hover:text-[#1f9cb1] dark:hover:text-[#50C9E1]">{result.title}</Link></h2>
                      <p className="mt-2 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">{result.description}</p>
                    </li>
                  ))}
                </ol>
              ) : <p className="mt-6 border border-dashed border-gray-300 p-8 text-gray-600 dark:border-white/15 dark:text-gray-300">Keine passende Seite gefunden. Beschreiben Sie Ihre Prüfaufgabe alternativ direkt über das Kontaktformular.</p>}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
