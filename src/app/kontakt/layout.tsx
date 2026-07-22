import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Kontakt und Analyseanfrage",
  description: "Sprechen Sie mit Kinemo über Ihre Prüfaufgabe für industrielle CT, Röntgenanalyse oder zerstörungsfreie Prüfung.",
  path: "/kontakt",
})

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return children
}
