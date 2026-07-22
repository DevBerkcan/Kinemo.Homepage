"use client"

import { useRef, useState } from "react"
import { Phone, Mail, Clock, CheckCircle, CalendarCheck } from "lucide-react"
import { createBreadcrumbJsonLd } from "@/lib/seo"
import { COMPANY_EMAIL, COMPANY_EMAIL_HREF, COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/lib/site"
import { submitInquiry } from "@/lib/inquiry"
import { trackAnalyticsEvent } from "@/lib/analytics"

const trustItems = [
  { icon: Clock, text: "Persönliche Rückmeldung nach Prüfung der Anfrage" },
  { icon: CheckCircle, text: "Kostenlos & unverbindlich" },
  { icon: CalendarCheck, text: "Flexibel – per Telefon, Video oder vor Ort" },
]

export default function TerminBuchenPage() {
  const hasStarted = useRef(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
    privacy: false,
    website: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setLoading(true)

    try {
      await submitInquiry({ ...formData, source: "booking" })
      trackAnalyticsEvent("booking_submit")
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Die Terminanfrage konnte nicht gesendet werden.")
    } finally {
      setLoading(false)
    }
  }

  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Termin buchen", path: "/termin-buchen" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#08415C] to-[#061b26] text-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#50C9E1]/10 text-[#50C9E1] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CalendarCheck size={16} />
              Termin buchen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Erstgespräch vereinbaren
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Beschreiben Sie kurz Ihr Anliegen – wir melden uns zeitnah und klären gemeinsam,
              wie Kinemo Ihnen weiterhelfen kann.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Trust + contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[#08415C] dark:text-white mb-6">
                Was Sie erwartet
              </h2>
              <div className="space-y-4 mb-10">
                {trustItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-center gap-4 bg-gray-50 dark:bg-[#0f2b3b] rounded-xl px-5 py-4 border border-gray-200 dark:border-gray-700">
                      <Icon size={20} className="text-[#50C9E1] flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  )
                })}
              </div>

              <h3 className="text-lg font-semibold text-[#08415C] dark:text-white mb-4">Direkter Kontakt</h3>
              <div className="space-y-3">
                <a
                  href={COMPANY_PHONE_HREF}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#50C9E1] transition-colors"
                >
                  <Phone size={18} className="text-[#50C9E1]" />
                  {COMPANY_PHONE}
                </a>
                <a
                  href={COMPANY_EMAIL_HREF}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#50C9E1] transition-colors"
                >
                  <Mail size={18} className="text-[#50C9E1]" />
                  {COMPANY_EMAIL}
                </a>
              </div>

              <div className="mt-10 p-6 bg-[#08415C]/5 dark:bg-[#50C9E1]/5 border border-[#08415C]/10 dark:border-[#50C9E1]/10 rounded-2xl">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Im Erstgespräch klären wir: Welches Bauteil soll analysiert werden?
                  Welche Fragestellung steht im Vordergrund? Welches Verfahren ist am geeignetsten?
                  Sie erhalten danach ein konkretes Angebot.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#08415C] dark:text-white mb-3">
                    Anfrage erhalten!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  onFocusCapture={() => {
                    if (hasStarted.current) return
                    hasStarted.current = true
                    trackAnalyticsEvent("booking_start")
                  }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-6">
                    Termin anfragen
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="booking-name"
                        name="name"
                        required
                        autoComplete="name"
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        id="booking-company"
                        name="company"
                        autoComplete="organization"
                        maxLength={120}
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                        placeholder="Muster GmbH"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        required
                        autoComplete="email"
                        maxLength={254}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                        placeholder="max@muster.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        autoComplete="tel"
                        maxLength={50}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                        placeholder="+49 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-preferred-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Gewünschter Termin / Zeitraum
                    </label>
                    <input
                      type="text"
                      id="booking-preferred-date"
                      name="preferredDate"
                      maxLength={100}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition"
                      placeholder="z. B. KW 18, nächste Woche, morgens..."
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Ihr Anliegen <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={3000}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#061b26] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#50C9E1] transition resize-none"
                      placeholder="Welches Bauteil soll geprüft werden? Was ist Ihre Fragestellung?"
                    />
                  </div>

                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="booking-website">Website</label>
                    <input
                      id="booking-website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 accent-[#50C9E1]"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-[#50C9E1] hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {submitError && (
                    <p role="alert" className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#50C9E1] hover:bg-[#7DDBF3] disabled:opacity-60 text-[#08415C] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {loading ? "Wird gesendet..." : "Termin anfragen"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
