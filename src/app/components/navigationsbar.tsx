"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUp, Menu, Moon, Phone, Sun, X } from "lucide-react"
import { COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/lib/site"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const menu = [
  { title: "Leistungen", path: "/leistungen" },
  { title: "Branchen", path: "/branchen" },
  { title: "Anwendungsfälle", path: "/anwendungsfaelle" },
  { title: "Technologie", path: "/technologie" },
  { title: "Referenzen", path: "/referenzen" },
  { title: "Wissen", path: "/wissen" },
  { title: "Kontakt", path: "/kontakt" },
]

export default function Navbar() {
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()
  const mobileMenuRef = useRef<HTMLElement>(null)
  const mobileItemsRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedMode === null ? prefersDark : savedMode === "true"

    setDarkMode(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
    document.documentElement.style.colorScheme = shouldBeDark ? "dark" : "light"
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      setShowScrollTop(window.scrollY > 600)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    window.dispatchEvent(
      new CustomEvent("kinemo:scroll-lock", { detail: { locked: isOpen } }),
    )

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const menuElement = mobileMenuRef.current
    const itemsElement = mobileItemsRef.current
    if (!menuElement || !itemsElement) return

    if (reducedMotion) {
      menuElement.style.visibility = isOpen ? "visible" : "hidden"
      menuElement.style.opacity = isOpen ? "1" : "0"
      menuElement.style.transform = "none"
      return
    }

    let cancelled = false

    void import("gsap").then(({ gsap }) => {
      if (cancelled) return

      gsap.killTweensOf([menuElement, ...itemsElement.children])

      if (isOpen) {
        gsap.set(menuElement, { visibility: "visible" })
        gsap.fromTo(
          menuElement,
          { autoAlpha: 0, y: -14 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" },
        )
        gsap.fromTo(
          itemsElement.children,
          { autoAlpha: 0, x: -24 },
          { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.045, delay: 0.08, ease: "power3.out" },
        )
      } else {
        gsap.to(menuElement, {
          autoAlpha: 0,
          y: -10,
          duration: 0.22,
          ease: "power2.in",
          onComplete: () => gsap.set(menuElement, { visibility: "hidden", y: 0 }),
        })
      }
    })

    return () => {
      cancelled = true
    }
  }, [isOpen, reducedMotion])

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode
    setDarkMode(nextDarkMode)
    document.documentElement.classList.toggle("dark", nextDarkMode)
    document.documentElement.style.colorScheme = nextDarkMode ? "dark" : "light"
    localStorage.setItem("darkMode", String(nextDarkMode))
  }

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)
  const useDarkSurface = pathname === "/" && !isScrolled

  return (
    <>
      <header
        data-site-header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          useDarkSurface
            ? "border-white/10 bg-[#061b26]/95 text-white"
            : "border-gray-200/70 bg-white/90 text-[#08415C] shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#061b26]/92 dark:text-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-[padding] duration-300 ${isScrolled ? "py-2.5" : "py-4"}`}>
            <Link href="/" className="relative z-50 flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50C9E1]" aria-label="Kinemo Startseite">
              <Image src="/01_logo_blau.png" alt="Kinemo" width={130} height={40} priority />
            </Link>

            <div className="hidden items-center gap-4 md:flex">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="rounded-full p-2 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#50C9E1]"
                aria-label={darkMode ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href={COMPANY_PHONE_HREF} className="flex items-center gap-2 border border-current/25 px-3 py-2 text-sm transition-colors hover:border-[#50C9E1] hover:text-[#50C9E1]">
                <Phone size={16} aria-hidden="true" /> {COMPANY_PHONE}
              </a>
              <Link href="/kontakt" className="group inline-flex items-center bg-[#50C9E1] px-5 py-2.5 text-sm font-semibold text-[#08415C] transition-colors hover:bg-[#7DDBF3]">
                Jetzt Analyse anfragen
                <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <button
              type="button"
              className="relative z-50 rounded-full border border-current/20 p-2 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          <nav aria-label="Hauptnavigation" className={`hidden flex-wrap gap-6 transition-[padding] duration-300 md:flex ${isScrolled ? "pb-2.5" : "pb-4"}`}>
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative py-1 text-sm font-medium transition-colors hover:text-[#50C9E1] ${isActive(item.path) ? "text-[#50C9E1]" : ""}`}
              >
                {item.title}
                <span className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[#50C9E1] transition-transform duration-300 ${isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
          </nav>
        </div>

        <nav
          id="mobile-navigation"
          ref={mobileMenuRef}
          aria-label="Mobile Navigation"
          aria-hidden={!isOpen}
          className={`fixed inset-0 z-40 bg-[#061b26] px-6 pb-8 pt-24 text-white md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{ visibility: "hidden", opacity: 0 }}
        >
          <div ref={mobileItemsRef} className="mx-auto flex h-full max-w-lg flex-col overflow-y-auto">
            <p className="mb-7 font-mono text-xs uppercase tracking-[0.24em] text-[#50C9E1]">Navigation / Kinemo</p>
            {menu.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                tabIndex={isOpen ? 0 : -1}
                className={`flex items-baseline justify-between border-b border-white/10 py-4 text-2xl font-semibold sm:text-3xl ${isActive(item.path) ? "text-[#50C9E1]" : "text-white"}`}
              >
                <span>{item.title}</span>
                <span className="font-mono text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span>
              </Link>
            ))}

            <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
              <button type="button" onClick={toggleDarkMode} tabIndex={isOpen ? 0 : -1} className="flex min-h-12 items-center justify-center gap-2 border border-white/20 px-4 py-3">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                {darkMode ? "Heller Modus" : "Dunkler Modus"}
              </button>
              <a href={COMPANY_PHONE_HREF} tabIndex={isOpen ? 0 : -1} className="flex min-h-12 items-center justify-center gap-2 border border-white/20 px-4 py-3">
                <Phone size={18} /> {COMPANY_PHONE}
              </a>
              <Link href="/kontakt" tabIndex={isOpen ? 0 : -1} className="flex min-h-12 items-center justify-center bg-[#50C9E1] px-4 py-3 font-semibold text-[#08415C] sm:col-span-2">
                Jetzt Analyse anfragen
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {showScrollTop && (
        <button
          type="button"
          className="fixed bottom-20 right-4 z-40 rounded-full bg-[#50C9E1] p-3 text-[#08415C] shadow-lg transition-colors hover:bg-[#7DDBF3] sm:bottom-6 sm:right-6"
          onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })}
          aria-label="Nach oben scrollen"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  )
}
