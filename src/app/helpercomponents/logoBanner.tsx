import Image from "next/image"

const logos = [
  { src: "/01_logo_blau.png", alt: "Kinemo", description: "3D-Röntgentechnologie" },
  { src: "/witte_automotive.svg", alt: "Witte Automotive", description: "Automotive Solutions" },
  { src: "/hansgrohe.svg", alt: "Hansgrohe", description: "Sanitärtechnik" },
  { src: "/BROSE_Excellence_in_Mechatronics.png", alt: "Brose", description: "Mechatronik" },
  { src: "/FramoMorat_Logo_FMG.png", alt: "Framo Morat", description: "Antriebstechnik" },
  { src: "/Logo-SAGSchriftzug-RGB.jpg", alt: "Schulte-Schlagbaum AG", description: "Sicherheitstechnik" },
]

export default function LogoBanner() {
  return (
    <section aria-labelledby="partner-title" className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 py-12">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-white/30 blur-xl" />
        <div className="absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h2 id="partner-title" className="mb-8 text-center text-xl font-semibold tracking-wide text-white md:text-2xl">
          Vertraut von <span className="text-yellow-300">führenden</span> Industriepartnern
        </h2>

        <div className="kinemo-logo-viewport relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 py-14 backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-orange-500/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-orange-500/90 to-transparent" />
          <div className="kinemo-logo-track flex w-max gap-12 px-6">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="group relative shrink-0 rounded-xl focus-within:ring-2 focus-within:ring-white">
                <div className="flex h-14 w-44 items-center justify-center rounded-xl border border-white/30 bg-white/90 shadow-lg transition duration-300 group-hover:scale-105 group-hover:bg-white group-hover:shadow-xl">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} – ${logo.description}`}
                    width={160}
                    height={40}
                    className="h-10 w-auto max-w-[160px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded border border-gray-200 bg-white px-2 py-1 text-xs text-gray-900 opacity-0 shadow-lg transition group-hover:opacity-100">
                  <span className="font-semibold">{logo.alt}</span>
                  <span className="ml-1 text-gray-500">{logo.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
