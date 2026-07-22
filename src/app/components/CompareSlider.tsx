"use client"

import Image from "next/image"
import { useState } from "react"
import { ScanLine } from "lucide-react"

export default function CompareSlider() {
  const [position, setPosition] = useState(50)

  return (
    <figure className="mx-auto max-w-6xl">
      <div className="relative aspect-[16/10] overflow-hidden border border-[#50C9E1]/25 bg-[#061b26] shadow-2xl sm:aspect-[16/8]">
        <Image
          src="/xray-before.jpg"
          alt="Bauteil vor der CT-Auswertung"
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
          priority={false}
        />
        <Image
          src="/xray-after.jpg"
          alt="Dasselbe Bauteil in der Röntgenansicht"
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white sm:p-6 sm:text-xs">
          <span className="bg-[#061b26]/80 px-3 py-2 backdrop-blur">Röntgenansicht</span>
          <span className="bg-[#061b26]/80 px-3 py-2 backdrop-blur">Außenansicht</span>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-[#50C9E1] shadow-[0_0_18px_#50C9E1]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#50C9E1] bg-[#061b26]/90 text-[#50C9E1] shadow-xl sm:h-14 sm:w-14">
            <ScanLine size={24} />
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Vergleich zwischen Außenansicht und Röntgenansicht"
          aria-valuetext={`${position} Prozent Röntgenansicht sichtbar`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <figcaption className="mt-5 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300 sm:flex-row sm:items-center sm:justify-between">
        <span>Ziehen Sie den Regler oder verwenden Sie die Pfeiltasten.</span>
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#50C9E1]">CT / Materialdurchleuchtung</span>
      </figcaption>
    </figure>
  )
}
