"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { submitInquiry } from "@/lib/inquiry"
import { trackAnalyticsEvent } from "@/lib/analytics"

const fieldClassName = "min-h-12 w-full border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#50C9E1]"

export default function DemoRequestFormFields() {
  const hasStarted = useRef(false)
  const [submitted, setSubmitted] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!privacy) {
      setPrivacyError(true)
      return
    }

    setPrivacyError(false)
    setSubmitError("")

    const form = event.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value ?? "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "",
      privacy: true as const,
      source: "demo" as const,
      website: (form.elements.namedItem("website") as HTMLInputElement)?.value ?? "",
    }

    setLoading(true)
    try {
      await submitInquiry(data)
      trackAnalyticsEvent("contact_form_submit")
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div role="status" className="flex min-h-80 flex-col items-start justify-center">
        <CheckCircle2 aria-hidden="true" className="mb-6 h-12 w-12 text-[#50C9E1]" />
        <h3 className="text-2xl font-semibold">Vielen Dank für Ihre Anfrage.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-white/65">Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={() => {
        if (hasStarted.current) return
        hasStarted.current = true
        trackAnalyticsEvent("contact_form_start")
      }}
      className="space-y-7"
    >
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="demo-name" className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Name *</label>
          <input required id="demo-name" name="name" type="text" autoComplete="name" maxLength={100} placeholder="Vor- und Nachname" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="demo-email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">E-Mail *</label>
          <input required id="demo-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="name@unternehmen.de" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="demo-company" className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Unternehmen</label>
          <input id="demo-company" name="company" type="text" autoComplete="organization" maxLength={120} placeholder="Unternehmen" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="demo-phone" className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Telefon</label>
          <input id="demo-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="Optional" className={fieldClassName} />
        </div>
      </div>

      <div>
        <label htmlFor="demo-message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Prüfaufgabe</label>
        <textarea id="demo-message" name="message" rows={4} maxLength={3000} placeholder="Bauteil, Material und Fragestellung" className={fieldClassName} />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" autoComplete="off" tabIndex={-1} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            required
            type="checkbox"
            id="demo-privacy"
            checked={privacy}
            aria-invalid={privacyError}
            aria-describedby={privacyError ? "demo-privacy-error" : undefined}
            onChange={(event) => {
              setPrivacy(event.target.checked)
              setPrivacyError(false)
            }}
            className="mt-1 h-5 w-5 shrink-0 accent-[#50C9E1]"
          />
          <label htmlFor="demo-privacy" className="text-sm leading-relaxed text-white/60">
            Ich habe die <Link href="/datenschutz" className="text-[#50C9E1] underline-offset-4 hover:underline">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zu. *
          </label>
        </div>
        {privacyError && <p id="demo-privacy-error" role="alert" className="mt-2 text-sm text-red-300">Bitte bestätigen Sie die Datenschutzerklärung.</p>}
      </div>

      {submitError && <p role="alert" className="border border-red-300/30 bg-red-950/30 px-4 py-3 text-sm text-red-200">{submitError}</p>}

      <button type="submit" disabled={loading} className="group inline-flex min-h-13 w-full items-center justify-center gap-3 bg-[#50C9E1] px-7 py-3 font-semibold text-[#061b26] transition-colors hover:bg-[#7ddbf3] disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        {loading ? "Wird gesendet …" : "Analyse anfragen"}
        {!loading && <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
      </button>
    </form>
  )
}
