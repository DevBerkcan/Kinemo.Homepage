import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { homeFaqs } from "@/lib/geo-content"

export default function FAQSection() {
  return (
    <section id="faq" className="border-t border-gray-200 bg-white px-4 py-24 dark:border-[#1f3a4b] dark:bg-[#0f2b3b]">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#08415C] dark:text-white">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-4">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-gray-200 bg-gray-50 shadow-sm dark:border-[#1f3a4b] dark:bg-[#061b26]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-lg font-medium text-[#08415C] marker:hidden dark:text-[#50C9E1]">
                <span>{faq.question}</span>
                <ChevronDown className="shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-4 pb-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-xl font-semibold text-[#08415C] dark:text-white">Noch Fragen offen?</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">Wir beraten Sie gerne individuell zu Ihrer Anwendung.</p>
          <Link href="/kontakt" className="inline-block rounded-md bg-[#50C9E1] px-6 py-3 font-semibold text-[#08415C] transition hover:bg-[#7DDBF3]">
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </section>
  )
}
