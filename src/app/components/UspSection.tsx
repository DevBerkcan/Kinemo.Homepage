import { ActivitySquare, FileSearch, Lightbulb, ShieldCheck } from "lucide-react"

const capabilities = [
  {
    icon: FileSearch,
    title: "Innere Strukturen sichtbar machen",
    description: "CT und Röntgen bilden Bereiche ab, die mit Sichtprüfung und äußerer Messtechnik nicht zugänglich sind.",
    points: ["Poren, Lunker und Einschlüsse", "verdeckte Verbindungen und Einbaulagen", "innere Geometrien und Wandstärken"],
  },
  {
    icon: ActivitySquare,
    title: "Verfahren zur Prüffrage wählen",
    description: "Nicht jede Aufgabe benötigt ein vollständiges CT-Volumen. Material, Geometrie und Entscheidungsziel bestimmen den geeigneten Prüfweg.",
    points: ["2D-Röntgen für geeignete Projektionsaufgaben", "CT für räumliche Lokalisation und 3D-Daten", "Machbarkeitsbewertung vor Projektstart"],
  },
  {
    icon: ShieldCheck,
    title: "Entwicklung und Qualität unterstützen",
    description: "Bildgebende Befunde schaffen eine zusätzliche Datenbasis für Prototypen, Erstmuster, Freigaben und Ursachenanalysen.",
    points: ["Prüfung ohne Zerschneiden für die Bildgebung", "Vergleich von Bauteilzuständen", "nachvollziehbare Dokumentation relevanter Befunde"],
  },
  {
    icon: Lightbulb,
    title: "Grenzen transparent einordnen",
    description: "Detailerkennbarkeit und Messfähigkeit werden bauteilspezifisch bewertet – ohne pauschale Auflösungs- oder Nachweisversprechen.",
    points: ["Einfluss von Dichte und Durchstrahlungsweg", "Artefakte und Orientierung berücksichtigen", "Auswertung am benötigten Erkenntnisgewinn ausrichten"],
  },
]

export default function UspSection() {
  return (
    <section id="benefits" className="bg-white px-6 py-24 dark:bg-[#061b26] md:py-32">
      <div className="mx-auto max-w-7xl">
        <div data-motion="reveal" className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#1f9cb1] dark:text-[#50C9E1]">02 / Prüfkompetenz</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#08415C] dark:text-white md:text-6xl">Vom Bild zur belastbaren technischen Einordnung.</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">GEO-taugliche Expertise beginnt mit präzisen Aussagen: Was kann das Verfahren zeigen, wovon hängt die Erkennbarkeit ab und welche Entscheidung soll der Befund unterstützen?</p>
        </div>
        <div data-motion="stagger" className="mt-14 grid gap-px bg-gray-200 dark:bg-white/10 md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <article key={capability.title} className="bg-white p-7 dark:bg-[#061b26] md:p-10">
                <Icon aria-hidden="true" className="h-7 w-7 text-[#1f9cb1] dark:text-[#50C9E1]" />
                <h3 className="mt-6 text-2xl font-bold text-[#08415C] dark:text-white">{capability.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">{capability.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                  {capability.points.map((point) => <li key={point} className="border-l-2 border-[#50C9E1] pl-3">{point}</li>)}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
