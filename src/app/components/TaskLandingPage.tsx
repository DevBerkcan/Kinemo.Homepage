import type { ReactNode } from "react"
import { CheckCircle2 } from "lucide-react"
import PageCta from "./PageCta"
import PageHero from "./PageHero"

type TaskLandingPageProps = {
  eyebrow: string
  code: string
  title: string
  description: string
  sectionTitle: string
  body: ReactNode
  listTitle: string
  items: readonly string[]
  ctaTitle: string
  ctaDescription: string
  ctaLabel: string
}

export default function TaskLandingPage({
  eyebrow,
  code,
  title,
  description,
  sectionTitle,
  body,
  listTitle,
  items,
  ctaTitle,
  ctaDescription,
  ctaLabel,
}: TaskLandingPageProps) {
  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <PageHero eyebrow={eyebrow} code={code} title={title} description={description} ctaLabel="Prüfaufgabe besprechen" />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-motion="reveal">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#0b8ca7] dark:text-[#50C9E1]">Technische Einordnung</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#08415C] dark:text-white md:text-5xl">{sectionTitle}</h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-gray-600 dark:text-white/65 md:text-lg">{body}</div>
          </div>

          <aside data-motion="reveal" className="border-t border-[#08415C]/20 pt-7 dark:border-white/15 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h3 className="text-xl font-semibold text-[#08415C] dark:text-white">{listTitle}</h3>
            <ol className="mt-7 divide-y divide-[#08415C]/15 border-y border-[#08415C]/15 dark:divide-white/15 dark:border-white/15">
              {items.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                  <span className="font-mono text-xs text-[#0b8ca7] dark:text-[#50C9E1]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex gap-3">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0b8ca7] dark:text-[#50C9E1]" />
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <PageCta title={ctaTitle} description={ctaDescription} label={ctaLabel} />
    </main>
  )
}
