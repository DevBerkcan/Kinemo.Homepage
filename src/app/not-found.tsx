import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Seite nicht gefunden",
  description: "Die angeforderte Seite ist nicht verfügbar.",
  path: "/404",
  noindex: true,
})

const destinations = [
  ["Leistungen", "/leistungen"],
  ["Anwendungsfälle", "/anwendungsfaelle"],
  ["Wissenszentrum", "/wissen"],
  ["Kontakt", "/kontakt"],
] as const

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#061b26] px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#50C9E1]">
          Fehler 404
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
          Diese Seite ist nicht mehr erreichbar.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Nutzen Sie die Suche oder wechseln Sie direkt zu einem unserer zentralen Themenbereiche.
        </p>

        <Link
          href="/suche"
          className="mt-9 inline-flex min-h-12 items-center gap-3 bg-[#50C9E1] px-6 py-3 font-semibold text-[#061b26] transition-colors hover:bg-[#7ddbf3]"
        >
          <Search aria-hidden="true" className="h-5 w-5" />
          Website durchsuchen
        </Link>

        <nav aria-label="Hilfreiche Seiten" className="mt-14 border-t border-white/15 pt-8">
          <ul className="grid gap-px bg-white/15 sm:grid-cols-2">
            {destinations.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex min-h-16 items-center justify-between bg-[#061b26] px-5 py-4 font-semibold transition-colors hover:bg-[#0b3143]"
                >
                  {label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#50C9E1] transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
