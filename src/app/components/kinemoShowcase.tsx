import CompareSlider from "./CompareSlider"

export default function KinemoShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#071f2c] px-5 py-24 text-white sm:px-6 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('/xray-grid-pattern.svg')] bg-repeat opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div data-motion="reveal" className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#50C9E1]">03 / Sichtprüfung</p>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
              Die Oberfläche zeigt nur <span className="text-[#50C9E1]">die halbe Wahrheit.</span>
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed text-gray-300 lg:justify-self-end">
            Verschieben Sie die Scanlinie und vergleichen Sie Außenansicht und innere Struktur direkt miteinander.
          </p>
        </div>

        <div data-motion="reveal">
          <CompareSlider />
        </div>
      </div>
    </section>
  )
}
