import type { ReactNode } from "react"

type DocumentPageProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export default function DocumentPage({ eyebrow, title, description, children }: DocumentPageProps) {
  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-[#061b26] dark:text-gray-200">
      <header className="border-b border-white/10 bg-[#061b26] px-6 py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#50C9E1]">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] [overflow-wrap:anywhere] sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl break-words leading-relaxed text-white/60">{description}</p>
        </div>
      </header>
      <div className="mx-auto min-w-0 w-full max-w-3xl break-words px-6 py-14 [overflow-wrap:anywhere] md:py-20">{children}</div>
    </main>
  )
}
