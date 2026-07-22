import Link from "next/link"
import { ChevronDown } from "lucide-react"
import JsonLd from "@/app/components/JsonLd"
import PageCta from "@/app/components/PageCta"
import PageHero from "@/app/components/PageHero"
import { faqCategories } from "@/lib/geo-content"
import { createPageMetadata } from "@/lib/seo"
import { createBreadcrumbNode, createFaqNode, createSchemaGraph, createWebPageNode } from "@/lib/schema"

export const metadata = createPageMetadata({
  title: "FAQ zu industrieller CT, Röntgen und Bauteilprüfung",
  description: "Fachlich eingeordnete Antworten zu CT, 2D-Röntgen, Werkstoffen, Fehlerbildern, Messung, Nachweisgrenzen und Projektablauf.",
  path: "/faq",
  keywords: ["industrielle CT FAQ", "Röntgenanalyse Fragen", "Bauteilprüfung Antworten"],
})

export default function FaqPage() {
  const items = faqCategories.flatMap((category) => category.items)
  const description = `${items.length} Antworten zu industrieller CT, Röntgenanalyse und zerstörungsfreier Bauteilprüfung.`
  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <JsonLd data={createSchemaGraph([
        createWebPageNode({ path: "/faq", name: "FAQ zu industrieller CT und Röntgenanalyse", description, about: ["Industrielle CT", "Röntgenanalyse", "Bauteilprüfung"] }),
        createBreadcrumbNode([{ name: "Startseite", path: "/" }, { name: "Wissen", path: "/wissen" }, { name: "FAQ", path: "/faq" }], "/faq"),
        createFaqNode(items, "/faq"),
      ])} />
      <PageHero eyebrow="FAQ Hub" title="Klare Antworten auf technische Prüfentscheidungen." description="Kurz genug für den schnellen Einstieg, präzise genug für die nächste fachliche Frage. Nachweisgrenzen werden bewusst bauteilspezifisch eingeordnet." code="FAQ / ANSWERS" />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#1f9cb1] dark:text-[#50C9E1]">Themen</h2>
            <nav aria-label="FAQ Kategorien" className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-start">
              {faqCategories.map((category) => <Link key={category.slug} href={`#${category.slug}`} className="border-b border-gray-300 py-1 text-sm text-[#08415C] hover:border-[#50C9E1] dark:border-white/20 dark:text-white">{category.name}</Link>)}
            </nav>
          </aside>
          <div className="space-y-14">
            {faqCategories.map((category) => (
              <section key={category.slug} id={category.slug} className="scroll-mt-32">
                <h2 className="text-2xl font-bold tracking-[-0.025em] text-[#08415C] dark:text-white md:text-3xl">{category.name}</h2>
                <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200 dark:divide-white/10 dark:border-white/10">
                  {category.items.map((item) => (
                    <details key={item.question} className="group py-1">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-semibold text-[#08415C] marker:hidden dark:text-white">
                        <span>{item.question}</span><ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[#1f9cb1] transition-transform group-open:rotate-180 dark:text-[#50C9E1]" />
                      </summary>
                      <p className="max-w-3xl pb-6 leading-relaxed text-gray-600 dark:text-gray-300">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Die Antwort hängt von Ihrem Bauteil ab?" description="Für Nachweisgrenzen und Verfahrenswahl benötigen wir Geometrie, Werkstoff und konkrete Prüffrage." label="Technische Einschätzung anfragen" />
    </main>
  )
}
