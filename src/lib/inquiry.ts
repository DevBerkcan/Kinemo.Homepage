export const inquirySources = ["kontakt", "demo", "booking"] as const

export type InquirySubmission = {
  name: string
  company?: string
  email: string
  phone?: string
  message?: string
  preferredDate?: string
  privacy: boolean
  source: (typeof inquirySources)[number]
  website?: string
}

export async function submitInquiry(payload: InquirySubmission) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const result = (await response.json().catch(() => null)) as
    | { error?: string }
    | null

  if (!response.ok) {
    throw new Error(result?.error || "Anfrage konnte nicht gesendet werden.")
  }
}
