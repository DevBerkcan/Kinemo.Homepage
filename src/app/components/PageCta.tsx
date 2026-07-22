import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type PageCtaProps = {
  title: string
  description: string
  label: string
  href?: string
}

export default function PageCta({ title, description, label, href = "/kontakt" }: PageCtaProps) {
  return (
    <section className="bg-[#08415C] px-6 py-16 text-white md:py-20">
      <div data-motion="reveal" className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr_auto] lg:items-end">
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">{title}</h2>
        <p className="max-w-xl leading-relaxed text-white/65">{description}</p>
        <Link href={href} className="group inline-flex min-h-12 w-fit items-center gap-3 border-b border-[#50C9E1] py-2 font-semibold text-[#50C9E1]">
          {label}
          <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
