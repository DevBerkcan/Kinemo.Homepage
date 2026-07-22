import { ArrowUpRight, Clock3, Mail } from "lucide-react"
import DemoRequestFormFields from "./DemoRequestFormFields"
import { COMPANY_EMAIL, COMPANY_EMAIL_HREF } from "@/lib/site"

export default function DemoRequestForm() {
  return (
    <section id="anfrage" className="relative overflow-hidden bg-[#061b26] px-6 py-24 text-white md:py-32">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 opacity-35 lg:block [background-image:linear-gradient(rgba(80,201,225,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(80,201,225,.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#50C9E1]/20 shadow-[0_0_100px_rgba(80,201,225,.12)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div data-motion="reveal" className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-[#50C9E1]">09 / Anfrage</p>
          <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            Lassen Sie verborgene Risiken <span className="text-[#50C9E1]">sichtbar machen.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
            Beschreiben Sie Ihr Bauteil oder Ihre Prüfaufgabe. Wir klären gemeinsam, welches Verfahren belastbare Antworten liefert.
          </p>

          <div className="mt-10 space-y-4 border-t border-white/15 pt-7 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Clock3 aria-hidden="true" className="h-5 w-5 text-[#50C9E1]" />
              Persönliche Rückmeldung nach Prüfung Ihrer Anfrage
            </div>
            <a href={COMPANY_EMAIL_HREF} className="group flex w-fit items-center gap-3 transition-colors hover:text-white">
              <Mail aria-hidden="true" className="h-5 w-5 text-[#50C9E1]" />
              {COMPANY_EMAIL}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div data-motion="reveal" className="border border-white/15 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:p-10">
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/55">
            Ein paar technische Eckdaten genügen für den ersten Austausch. Pflichtfelder sind mit * gekennzeichnet.
          </p>
          <DemoRequestFormFields />
        </div>
      </div>
    </section>
  )
}
