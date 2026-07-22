"use client"

import Script from "next/script"
import Link from "next/link"
import { useEffect, useState } from "react"
import { OPEN_CONSENT_EVENT } from "@/lib/consent"

const CONSENT_STORAGE_KEY = "kinemo-cookie-consent"
const CONSENT_VERSION = 1

type ConsentChoice = "accepted" | "rejected" | null

type StoredConsent = {
  analytics: boolean
  version: number
  updatedAt: string
}

function readConsent(): ConsentChoice {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) return null

    const consent = JSON.parse(stored) as StoredConsent
    if (consent.version !== CONSENT_VERSION) return null
    return consent.analytics ? "accepted" : "rejected"
  } catch {
    return null
  }
}

function persistConsent(analytics: boolean) {
  const consent: StoredConsent = {
    analytics,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  }
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // The current page can still respect the choice if storage is unavailable.
  }
}

export default function ConsentManager() {
  const [choice, setChoice] = useState<ConsentChoice>(null)
  const [isOpen, setIsOpen] = useState(false)
  const configuredProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "w73k7kbfc5"
  const clarityProjectId = configuredProjectId && /^[a-z0-9]+$/i.test(configuredProjectId)
    ? configuredProjectId
    : undefined

  useEffect(() => {
    const storedChoice = readConsent()
    setChoice(storedChoice)
    setIsOpen(storedChoice === null)

    const openSettings = () => setIsOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, openSettings)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openSettings)
  }, [])

  const saveChoice = (analytics: boolean) => {
    const wasAccepted = choice === "accepted"
    persistConsent(analytics)
    setChoice(analytics ? "accepted" : "rejected")
    setIsOpen(false)

    if (!analytics && wasAccepted) {
      window.location.reload()
    }
  }

  return (
    <>
      {choice === "accepted" && clarityProjectId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityProjectId}");`}
        </Script>
      )}

      {isOpen && (
        <section
          role="dialog"
          aria-labelledby="consent-title"
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto w-[calc(100%_-_2rem)] max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#061b26] p-5 text-white shadow-2xl sm:p-6"
        >
          <h2 id="consent-title" className="text-lg font-bold text-[#50C9E1]">
            Datenschutz-Einstellungen
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Technisch notwendige Funktionen laufen immer. Mit Ihrer Zustimmung laden wir
            Microsoft Clarity, um die Nutzung der Website auszuwerten und sie zu verbessern.
          </p>
          <p className="mt-2 text-xs text-white/65">
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="underline hover:text-[#50C9E1]">
              Datenschutzerklärung
            </Link>.
          </p>
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveChoice(false)}
              className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold hover:border-white hover:bg-white/10"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => saveChoice(true)}
              className="rounded-full bg-[#50C9E1] px-5 py-2.5 text-sm font-semibold text-[#08415C] hover:bg-[#7DDBF3]"
            >
              Analyse erlauben
            </button>
          </div>
        </section>
      )}
    </>
  )
}
