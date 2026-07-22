"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowUpRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Julia Möller",
    role: "Produktentwicklung, Vorwerk",
    quote: "Dank Kinemo konnten wir Fehlerquellen bereits in der Prototypenphase erkennen und sparen damit Monate an Entwicklung.",
  },
  {
    name: "Martin Schubert",
    role: "Leitung Technik, Hansgrohe",
    quote: "Die CT-Analyse hat uns geholfen, innere Strukturfehler frühzeitig zu identifizieren – ein echter Gamechanger für unsere Qualitätssicherung.",
  },
  {
    name: "Dr. Lisa Krämer",
    role: "F&E Managerin, Meditech AG",
    quote: "Unsere Produkte durchlaufen jetzt eine viel präzisere Prüfung. Kinemo setzt hier einen neuen Standard.",
  },
  {
    name: "Christian Prellwitz",
    role: "Abteilungsleiter Test & Vorentwicklung, ABUS",
    quote: "Durch die CT-Analyse war es möglich, das Verhalten der Bauteile unter Belastung zu verstehen und Rückschlüsse auf potenzielle Probleme zu ermitteln. Als Ergebnis konnten wir unsere Produkte robuster auslegen und Reklamationen vermeiden, was im Endeffekt zu signifikanten Kosteneinsparungen geführt hat.",
  },
  {
    name: "Dr. Thomas Kunstfeld",
    role: "Abteilungsleiter Versuch, Festool",
    quote: "Wir konnten durch die Analyse wertvolle Zeit einsparen und komplexe Problemstellungen vereinfacht darstellen und kommunizieren.",
  },
  {
    name: "Michael Ußfeller",
    role: "Manager Project Development, Brose",
    quote: "Durch die CT-Analyse entstanden wertvolle Erkenntnisse, die wir innerhalb kurzer Zeit verfügbar hatten. Es wurden uns Optimierungspotenziale aufgezeigt, die wir mit keinem anderen Verfahren hätten erfahren können.",
  },
] as const

const caseStudies = [
  {
    title: "Strukturanalyse eines Filtergehäuses bei Hansgrohe",
    summary: "Kinemo analysierte die innere Geometrie und Wandstärkenverteilung im Filtergehäuse und unterstützte die Optimierung der Konstruktion.",
    slug: "hansgrohe-wasserfilter",
    details: "CT-Analyse zeigte Wandstärkenabweichungen und Einschlüsse, die zur gezielten Anpassung der Gusskonstruktion führten.",
    imageBefore: "/xray-before.jpg",
    imageAfter: "/xray-after.jpg",
  },
  {
    title: "Prototypenprüfung bei Vorwerk-Küchengeräten",
    summary: "Frühzeitige Entdeckung innerer Schwachstellen dank CT-Analyse von Entwicklungsprototypen – noch vor der Serienfreigabe.",
    slug: "vorwerk-prototypen",
    details: "Die CT-Analyse identifizierte Bindenähte und Porositäten, die zu gezielten Konstruktionsanpassungen führten.",
    imageBefore: "/xray-before.jpg",
    imageAfter: "/xray-after.jpg",
  },
  {
    title: "Implantatprüfung in der Medizintechnik",
    summary: "CT-gestützte Analyse von Implantatstrukturen zur Optimierung von Hüftimplantaten – direkt in der Entwicklungsphase.",
    slug: "implantat-medizintechnik",
    details: "Ermöglichte die Identifikation innerer Materialfehler und Toleranzabweichungen, um Materialversagen frühzeitig zu minimieren.",
    imageBefore: "/xray-before.jpg",
    imageAfter: "/xray-after.jpg",
  },
] as const

type Tab = "testimonials" | "cases"

export default function TestimonialsAndCases() {
  const [activeTab, setActiveTab] = useState<Tab>("testimonials")
  const testimonialTabRef = useRef<HTMLButtonElement>(null)
  const caseTabRef = useRef<HTMLButtonElement>(null)

  function selectTab(tab: Tab, moveFocus = false) {
    setActiveTab(tab)
    if (moveFocus) {
      if (tab === "testimonials") testimonialTabRef.current?.focus()
      else caseTabRef.current?.focus()
    }
  }

  return (
    <section className="bg-white px-6 py-24 dark:bg-[#0f2b3b] md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 border-b border-[#08415C]/15 pb-10 dark:border-white/15 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#0b8ca7] dark:text-[#50C9E1]">07 / Praxis</p>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#08415C] dark:text-white md:text-6xl">
              Erfahrung wird sichtbar, wenn Ergebnisse sprechen.
            </h2>
          </div>
          <div role="tablist" aria-label="Praxisinhalte" className="flex gap-1 border border-[#08415C]/15 p-1 dark:border-white/15">
            <button
              id="tab-testimonials"
              ref={testimonialTabRef}
              type="button"
              role="tab"
              aria-selected={activeTab === "testimonials"}
              aria-controls="panel-testimonials"
              tabIndex={activeTab === "testimonials" ? 0 : -1}
              onClick={() => selectTab("testimonials")}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  event.preventDefault()
                  selectTab("cases", true)
                }
              }}
              className={`min-h-11 px-4 text-sm font-semibold transition-colors ${activeTab === "testimonials" ? "bg-[#08415C] text-white dark:bg-[#50C9E1] dark:text-[#061b26]" : "text-[#08415C] hover:bg-[#08415C]/5 dark:text-white dark:hover:bg-white/5"}`}
            >
              Stimmen
            </button>
            <button
              id="tab-cases"
              ref={caseTabRef}
              type="button"
              role="tab"
              aria-selected={activeTab === "cases"}
              aria-controls="panel-cases"
              tabIndex={activeTab === "cases" ? 0 : -1}
              onClick={() => selectTab("cases")}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  event.preventDefault()
                  selectTab("testimonials", true)
                }
              }}
              className={`min-h-11 px-4 text-sm font-semibold transition-colors ${activeTab === "cases" ? "bg-[#08415C] text-white dark:bg-[#50C9E1] dark:text-[#061b26]" : "text-[#08415C] hover:bg-[#08415C]/5 dark:text-white dark:hover:bg-white/5"}`}
            >
              Anwendungsfälle
            </button>
          </div>
        </div>

        {activeTab === "testimonials" ? (
          <div id="panel-testimonials" role="tabpanel" aria-labelledby="tab-testimonials" tabIndex={0} className="grid gap-px bg-[#08415C]/15 dark:bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="flex min-h-80 flex-col bg-white p-7 dark:bg-[#0f2b3b] md:p-9">
                <Quote aria-hidden="true" className="mb-10 h-8 w-8 text-[#50C9E1]" />
                <blockquote className="flex-1 text-lg leading-relaxed text-[#17394a] dark:text-white/80">{testimonial.quote}</blockquote>
                <figcaption className="mt-8 border-t border-[#08415C]/15 pt-5 dark:border-white/15">
                  <span className="block font-semibold text-[#08415C] dark:text-white">{testimonial.name}</span>
                  <span className="mt-1 block text-sm text-gray-500 dark:text-white/50">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div id="panel-cases" role="tabpanel" aria-labelledby="tab-cases" tabIndex={0} className="divide-y divide-[#08415C]/15 dark:divide-white/15">
            {caseStudies.map((caseStudy, index) => (
              <details key={caseStudy.slug} className="group py-7">
                <summary className="grid cursor-pointer list-none gap-4 sm:grid-cols-[4rem_1fr_2rem] sm:items-start [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-xs text-[#0b8ca7] dark:text-[#50C9E1]">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-2xl font-semibold tracking-tight text-[#08415C] dark:text-white md:text-3xl">{caseStudy.title}</span>
                    <span className="mt-3 block max-w-3xl leading-relaxed text-gray-600 dark:text-white/60">{caseStudy.summary}</span>
                  </span>
                  <span aria-hidden="true" className="text-2xl text-[#0b8ca7] transition-transform group-open:rotate-45 dark:text-[#50C9E1]">+</span>
                </summary>
                <div className="mt-7 grid gap-6 pl-0 sm:pl-16 lg:grid-cols-[0.7fr_1.3fr]">
                  <p className="leading-relaxed text-gray-600 dark:text-white/65">{caseStudy.details}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <figure>
                      <Image src={caseStudy.imageBefore} alt="Bauteil vor der Auswertung" width={500} height={300} className="aspect-[5/3] w-full object-cover" />
                      <figcaption className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-white/45">Ausgangsdaten</figcaption>
                    </figure>
                    <figure>
                      <Image src={caseStudy.imageAfter} alt="Visualisiertes Analyseergebnis" width={500} height={300} className="aspect-[5/3] w-full object-cover" />
                      <figcaption className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-white/45">Auswertung</figcaption>
                    </figure>
                  </div>
                </div>
              </details>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-end">
          <Link href="/referenzen" className="group inline-flex min-h-12 items-center gap-3 border-b border-[#0b8ca7] py-2 font-semibold text-[#0b8ca7] dark:border-[#50C9E1] dark:text-[#50C9E1]">
            Referenzen ansehen
            <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
