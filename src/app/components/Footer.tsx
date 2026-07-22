import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import ConsentSettingsButton from "@/app/components/ConsentSettingsButton"
import {
  COMPANY_ADDRESS_LINE_1,
  COMPANY_BRAND,
  COMPANY_CITY,
  COMPANY_COUNTRY,
  COMPANY_EMAIL,
  COMPANY_EMAIL_HREF,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
} from "@/lib/site"

const navigation = [
  ["Leistungen", "/leistungen"],
  ["Branchen", "/branchen"],
  ["Anwendungsfälle", "/anwendungsfaelle"],
  ["Technologie", "/technologie"],
  ["Referenzen", "/referenzen"],
  ["Wissenszentrum", "/wissen"],
  ["FAQ", "/faq"],
  ["Über Kinemo", "/ueber-kinemo"],
] as const

const topics = [
  ["CT für Aluminiumguss", "/ct-aluminiumguss"],
  ["BGA-Lötstellenprüfung", "/bga-loetstellenpruefung"],
  ["Porositätsanalyse", "/porositaetsanalyse"],
  ["Erstmusterprüfung mit CT", "/erstmusterpruefung-ct"],
  ["Industrielle CT Wuppertal", "/industrielle-ct/wuppertal"],
] as const

const linkClassName = "transition-colors hover:text-[#50C9E1]"

export default function Footer() {
  return (
    <footer className="w-full bg-[#04141d] px-6 pb-8 pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.35fr_0.65fr_0.65fr_0.85fr]">
          <div>
            <Link href="/" aria-label="Kinemo Startseite" className="inline-block text-4xl font-extrabold tracking-[-0.05em]">
              {COMPANY_BRAND.slice(0, 3).toUpperCase()}<span className="text-[#50C9E1]">{COMPANY_BRAND.slice(3).toUpperCase()}</span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">
              Industrielle CT und Röntgenanalyse für Unternehmen, die verborgene Fehler frühzeitig erkennen wollen.
            </p>
            <Link href="/kontakt" className="group mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[#50C9E1] py-2 font-semibold text-[#50C9E1]">
              Projekt besprechen
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          <nav aria-label="Footer Navigation">
            <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-white/40">Navigation</h2>
            <ul className="space-y-3 text-sm text-white/75">
              {navigation.map(([label, href]) => <li key={href}><Link href={href} className={linkClassName}>{label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="Prüfaufgaben">
            <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-white/40">Prüfaufgaben</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-white/75">
              {topics.map(([label, href]) => <li key={href}><Link href={href} className={linkClassName}>{label}</Link></li>)}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-white/40">Kontakt & Labor</h2>
            <address className="space-y-4 text-sm not-italic leading-relaxed text-white/75">
              <p className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#50C9E1]" />
                <span>{COMPANY_NAME}<br />{COMPANY_ADDRESS_LINE_1}<br />{COMPANY_CITY}<br />{COMPANY_COUNTRY}</span>
              </p>
              <a href={COMPANY_PHONE_HREF} className={`flex items-center gap-3 ${linkClassName}`}>
                <Phone aria-hidden="true" className="h-4 w-4 text-[#50C9E1]" />{COMPANY_PHONE}
              </a>
              <a href={COMPANY_EMAIL_HREF} className={`flex items-center gap-3 ${linkClassName}`}>
                <Mail aria-hidden="true" className="h-4 w-4 text-[#50C9E1]" />{COMPANY_EMAIL}
              </a>
            </address>

            <div className="mt-7 flex gap-2">
              <a href="https://www.linkedin.com/company/kinemo" target="_blank" rel="noopener noreferrer" aria-label="Kinemo auf LinkedIn (öffnet in neuem Tab)" className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-[#50C9E1] hover:text-[#50C9E1]">
                <FaLinkedin aria-hidden="true" size={19} />
              </a>
              <a href="https://www.youtube.com/@kinemo" target="_blank" rel="noopener noreferrer" aria-label="Kinemo auf YouTube (öffnet in neuem Tab)" className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-[#50C9E1] hover:text-[#50C9E1]">
                <FaYoutube aria-hidden="true" size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Kinemo. Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            <li><Link href="/impressum" className={linkClassName}>Impressum</Link></li>
            <li><Link href="/datenschutz" className={linkClassName}>Datenschutz</Link></li>
            <li><ConsentSettingsButton /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
