import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Quote } from "lucide-react"

const logos = [
  { name: "Start-up Center", src: "/Start-up-Center-Logo-Etikett-schwarz_Ausnahme.svg" },
  { name: "EFRE NRW", src: "/EFRE.NRW_.svg" },
  { name: "Berg Pitch", src: "/logo-Berg-Pitch_n.png" },
  { name: "Bergische Universität Wuppertal", src: "/BUW_Logo-weiss.png" },
] as const

const achievements = [
  { number: "50+", label: "Zufriedene Industriekunden", description: "Von Start-ups bis Konzerne" },
  { number: "1000+", label: "Erfolgreiche Analysen", description: "CT- und Röntgenauswertungen" },
  { number: "5+", label: "Jahre Erfahrung", description: "In industrieller CT & ZfP" },
  { number: "3", label: "Patente", description: "Innovative Technologielösungen" },
] as const

const expertise = [
  "Industrielle CT & Röntgenanalyse",
  "Zerstörungsfreie Prüfung (ZfP)",
  "Produktentwicklung & Qualitätssicherung",
  "Fehler- & Ursachenanalyse",
  "Medizintechnik & Biomechanik",
] as const

export default function ImprovedAbout() {
  const metricsApproved = process.env.KINEMO_METRICS_APPROVED === "true"

  return (
    <section id="ueber-kinemo" className="scroll-mt-24 overflow-hidden bg-[#f7f8f7] px-6 py-24 text-[#17394a] dark:bg-[#05151f] dark:text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p data-motion="reveal" className="font-mono text-xs uppercase tracking-[0.28em] text-[#0b8ca7] dark:text-[#50C9E1]">08 / Gründer</p>
          <h2 data-motion="reveal" className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#08415C] dark:text-white md:text-6xl">
            Ingenieurwissen trifft auf den Blick für das Verborgene.
          </h2>
        </div>

        <div className="grid gap-10 border-y border-[#08415C]/15 py-10 dark:border-white/15 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-16">
          <figure data-motion="reveal" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#08415C]">
              <Image
                src="/sercan-atesoglu.jpeg"
                alt="Sercan Atesoglu, Gründer von Kinemo"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center grayscale-[20%]"
              />
              <div aria-hidden="true" className="absolute inset-x-0 top-1/3 h-px bg-[#50C9E1]/70 shadow-[0_0_18px_rgba(80,201,225,.8)]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061b26] to-transparent p-6 pt-24 text-white">
                <span className="block text-xl font-semibold">Sercan Atesoglu</span>
                <span className="mt-1 block font-mono text-xs uppercase tracking-[0.2em] text-[#50C9E1]">Gründer & CEO</span>
              </div>
            </div>
          </figure>

          <div data-motion="reveal" className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#08415C] dark:text-white md:text-4xl">
              Verborgene Fehler sichtbar machen – das ist unsere Mission.
            </h3>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-white/65">
              <p>
                Als Ingenieur und Gründer entwickelte ich Kinemo aus der Überzeugung heraus, dass viele teure Fehler vermeidbar wären, wenn man früh genug ins Innere schaut.
              </p>
              <p>
                Meine Expertise in Biomechanik und industrieller Bildgebung hat mir gezeigt: Innere Strukturfehler sind mit konventionellen Methoden schlicht nicht erkennbar – industrielle CT und Röntgenanalyse schon.
              </p>
              <p>
                Heute unterstützt Kinemo Entwicklungs- und Qualitätsteams dabei, verborgene Fehler frühzeitig zu erkennen – bevor sie Zeit, Geld und Nerven kosten.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="Fachgebiete">
              {expertise.map((skill) => (
                <li key={skill} className="border-l-2 border-[#50C9E1] pl-3 text-sm text-[#08415C] dark:text-white/75">{skill}</li>
              ))}
            </ul>

            <Link href="/kontakt" className="group mt-10 inline-flex min-h-12 w-fit items-center gap-3 border-b border-[#0b8ca7] py-2 font-semibold text-[#0b8ca7] dark:border-[#50C9E1] dark:text-[#50C9E1]">
              Persönliches Gespräch vereinbaren
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <figure data-motion="reveal" className="relative my-16 border-l-2 border-[#50C9E1] py-4 pl-7 md:my-24 md:pl-12">
          <Quote aria-hidden="true" className="mb-5 h-8 w-8 text-[#0b8ca7] dark:text-[#50C9E1]" />
          <blockquote className="max-w-5xl text-2xl font-medium leading-relaxed tracking-[-0.02em] text-[#08415C] dark:text-white md:text-4xl">
            „Jeder Fehler, der in der Entwicklung erkannt wird, ist ein Fehler, der nicht im Feld auftritt. Das ist der Mehrwert, den wir für unsere Kunden schaffen.“
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">Sercan Atesoglu · Gründer & CEO</figcaption>
        </figure>

        {metricsApproved && (
          <div data-motion="stagger" className="grid border-y border-[#08415C]/15 dark:border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="border-b border-[#08415C]/15 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r dark:border-white/15 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <span className="block text-4xl font-bold tracking-[-0.04em] text-[#08415C] dark:text-[#50C9E1]">{achievement.number}</span>
                <span className="mt-3 block font-semibold">{achievement.label}</span>
                <span className="mt-1 block text-sm text-gray-500 dark:text-white/45">{achievement.description}</span>
              </div>
            ))}
          </div>
        )}

        <div data-motion="reveal" className="mt-16 bg-[#08415C] px-6 py-9 text-white md:mt-24 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#50C9E1]">Institutionelles Umfeld</p>
              <h3 className="mt-3 text-2xl font-semibold">Netzwerk für Forschung und Innovation</h3>
            </div>
            <ul className="grid grid-cols-2 items-center gap-7 sm:grid-cols-4" aria-label="Institutionen im Kinemo-Umfeld">
              {logos.map((logo) => (
                <li key={logo.name} className={`flex min-h-16 items-center justify-center p-3 ${logo.name === "Bergische Universität Wuppertal" ? "bg-[#061b26]" : "bg-white/95"}`}>
                  <Image src={logo.src} alt={logo.name} width={160} height={56} className="max-h-10 w-auto object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
