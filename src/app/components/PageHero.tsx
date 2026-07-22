import Link from "next/link"
import { ArrowRight, Scan } from "lucide-react"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  code?: string
  ctaLabel?: string
  ctaHref?: string
  breadcrumbLabel?: string
  breadcrumbItems?: readonly { label: string; href?: string }[]
}

export default function PageHero({
  eyebrow,
  title,
  description,
  code = "KINEMO / ANALYSE",
  ctaLabel,
  ctaHref = "/kontakt",
  breadcrumbLabel,
  breadcrumbItems,
}: PageHeroProps) {
  const currentPageLabel = breadcrumbLabel ?? eyebrow.replace(/^\d+\s*\/\s*/, "")
  const visibleBreadcrumbs = breadcrumbItems ?? [{ label: currentPageLabel }]

  return (
    <section className="relative overflow-hidden bg-[#061b26] px-4 py-14 text-white sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(80,201,225,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(80,201,225,.1)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
        <div data-motion="stagger" className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              <li><Link href="/" className="transition-colors hover:text-[#50C9E1]">Startseite</Link></li>
              {visibleBreadcrumbs.map((item, index) => (
                <li key={`${item.label}-${index}`} className="contents">
                  <span aria-hidden="true">/</span>
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-[#50C9E1]">{item.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-white/80">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[#50C9E1] sm:tracking-[0.28em]">{eyebrow}</p>
          <h1 className="max-w-4xl text-[clamp(2rem,8vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.035em] [overflow-wrap:anywhere] sm:tracking-[-0.045em]">{title}</h1>
          <p className="mt-6 max-w-3xl break-words text-base leading-relaxed text-white/70 sm:mt-7 sm:text-lg">{description}</p>
          {ctaLabel && (
            <Link href={ctaHref} className="group mt-9 inline-flex min-h-12 items-center gap-3 bg-[#50C9E1] px-6 py-3 font-semibold text-[#061b26] transition-colors hover:bg-[#7ddbf3]">
              {ctaLabel}
              <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div aria-hidden="true" className="relative hidden min-h-64 overflow-hidden border border-white/15 bg-white/[0.025] lg:block">
          <span className="absolute left-5 top-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#50C9E1]">{code}</span>
          <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[#50C9E1] shadow-[0_0_18px_rgba(80,201,225,.9)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#50C9E1]/35 shadow-[0_0_70px_rgba(80,201,225,.08)]">
              <Scan className="h-14 w-14 text-[#50C9E1]" />
            </div>
          </div>
          <span className="kinemo-scan-line absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#50C9E1] to-transparent" />
        </div>
      </div>
    </section>
  )
}
