"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { createBreadcrumbJsonLd } from "@/lib/seo"
import { COMPANY_ADDRESS_FULL, COMPANY_EMAIL, COMPANY_EMAIL_HREF, COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/lib/site"
import { submitInquiry } from "@/lib/inquiry"
import { trackAnalyticsEvent } from "@/lib/analytics"
import PageHero from "@/app/components/PageHero"

export default function KontaktPage() {
  const successCloseRef = useRef<HTMLButtonElement>(null)
  const hasStarted = useRef(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", privacy: false, website: "" })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!success) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const focusFrame = window.requestAnimationFrame(() => successCloseRef.current?.focus())
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSuccess(false)
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [success])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!form.name.trim()) newErrors.name = "Bitte geben Sie Ihren Namen ein."
    if (!form.email.trim()) newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    if (!form.company.trim()) newErrors.company = "Bitte geben Sie den Firmennamen an."
    if (!form.privacy) newErrors.privacy = "Bitte bestätigen Sie die Datenschutzbestimmungen."
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type } = target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setLoading(true)
    try {
      await submitInquiry({ ...form, source: "kontakt" })
      trackAnalyticsEvent("contact_form_submit")
      setSuccess(true)
      setForm({ name: "", email: "", phone: "", company: "", message: "", privacy: false, website: "" })
    } catch (error) {
      setErrors({ submit: error instanceof Error ? error.message : "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail." })
    } finally {
      setLoading(false)
    }
  }

  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Kontakt", path: "/kontakt" },
  ])

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt Kinemo",
    url: "https://www.kinemo.de/kontakt",
    description:
      "Kontaktseite für Anfragen zu industrieller CT, Röntgenanalyse und zerstörungsfreier Prüfung.",
    mainEntity: { "@id": "https://www.kinemo.de/#organization" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <PageHero
          eyebrow="Direkter Kontakt"
          title="Ihre Prüfaufgabe beginnt mit einem klaren Gespräch."
          description="Beschreiben Sie Bauteil, Material und Fragestellung. Wir ordnen die Aufgabe ein und klären gemeinsam den sinnvollen nächsten Schritt."
          code="CONTACT / INQUIRY"
        />

        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#08415C] dark:text-white mb-6">
                Wir freuen uns auf Ihre Anfrage
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Egal ob Sie konkrete Prüfaufgaben haben, einen Prozess verbessern oder einfach
                herausfinden möchten, ob industrielle CT für Ihr Projekt geeignet ist –
                sprechen Sie uns an.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: "Telefon", value: COMPANY_PHONE, href: COMPANY_PHONE_HREF },
                  { icon: Mail, label: "E-Mail", value: COMPANY_EMAIL, href: COMPANY_EMAIL_HREF },
                  { icon: MapPin, label: "Labor", value: COMPANY_ADDRESS_FULL },
                  { icon: Clock, label: "Rückmeldung", value: "Persönlich nach Prüfung Ihrer Anfrage" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#08415C]/10 dark:bg-[#50C9E1]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#08415C] dark:text-[#50C9E1]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium text-[#08415C] [overflow-wrap:anywhere] dark:text-white hover:text-[#50C9E1] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-[#08415C] dark:text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-[#08415C]/5 dark:bg-[#50C9E1]/5 border border-[#08415C]/10 dark:border-[#50C9E1]/10 rounded-2xl p-6">
                <h3 className="font-semibold text-[#08415C] dark:text-white mb-3">Was im Erstgespräch geklärt wird:</h3>
                <ul className="space-y-2">
                  {[
                    "Welches Bauteil / welche Baugruppe soll geprüft werden?",
                    "Welche Fragestellung steht im Vordergrund?",
                    "Welches Analyseverfahren ist am besten geeignet?",
                    "Wie ist der zeitliche Rahmen?",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle size={15} className="text-[#50C9E1] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm dark:border-gray-700 dark:bg-[#0f2b3b] sm:p-8">
              <form
                onSubmit={handleSubmit}
                onFocusCapture={() => {
                  if (hasStarted.current) return
                  hasStarted.current = true
                  trackAnalyticsEvent("contact_form_start")
                }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-2">
                  Nachricht senden
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Vor- und Nachname"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                    />
                    {errors.name && <p id="contact-name-error" role="alert" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Unternehmen <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      maxLength={120}
                      required
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? "contact-company-error" : undefined}
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Muster GmbH"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                    />
                    {errors.company && <p id="contact-company-error" role="alert" className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-Mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="max@muster.de"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                    />
                    {errors.email && <p id="contact-email-error" role="alert" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      maxLength={50}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ihre Anfrage
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    maxLength={3000}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Welches Bauteil soll geprüft werden? Was ist Ihre Fragestellung?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition resize-none"
                  />
                </div>

                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    value={form.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={form.privacy}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.privacy)}
                    aria-describedby={errors.privacy ? "contact-privacy-error" : undefined}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[#50C9E1]"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-[#50C9E1] hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.privacy && <p id="contact-privacy-error" role="alert" className="text-red-500 text-xs -mt-3">{errors.privacy}</p>}

                {errors.submit && (
                  <p role="alert" className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg">
                    {errors.submit}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#50C9E1] hover:bg-[#7DDBF3] disabled:opacity-60 text-[#08415C] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {loading ? "Wird gesendet..." : "Jetzt Analyse anfragen"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {success && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/70 p-[max(1rem,env(safe-area-inset-left))]">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-success-title"
              className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center shadow-2xl dark:border-gray-700 dark:bg-[#0f2b3b] sm:px-8 sm:py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 id="contact-success-title" className="text-2xl font-bold text-[#08415C] dark:text-white mb-3">Vielen Dank!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ihre Nachricht wurde erfolgreich übermittelt. Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen.
              </p>
              <button
                ref={successCloseRef}
                type="button"
                onClick={() => setSuccess(false)}
                className="min-h-11 bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition"
              >
                Fenster schließen
              </button>
            </div>
          </div>
      )}

    </>
  )
}
