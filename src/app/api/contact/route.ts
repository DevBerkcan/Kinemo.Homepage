import { NextRequest, NextResponse } from "next/server"
import nodemailer, { type Transporter } from "nodemailer"
import { inquirySchema, type Inquiry } from "@/lib/server/inquiry-schema"
import { SITE_URL } from "@/lib/seo"

export const runtime = "nodejs"

const MAX_BODY_BYTES = 16_384
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

type RateLimitEntry = {
  count: number
  resetAt: number
}

const rateLimits = new Map<string, RateLimitEntry>()
let transporter: Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const port = Number(process.env.SMTP_PORT ?? 587)

  if (!host || !user || !pass || !Number.isInteger(port)) {
    throw new Error("SMTP configuration is incomplete")
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  })

  return transporter
}

function jsonError(error: string, status: number) {
  return NextResponse.json(
    { error },
    { status, headers: { "Cache-Control": "no-store" } },
  )
}

function getClientKey(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = rateLimits.get(key)

  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  current.count += 1
  return current.count > RATE_LIMIT_MAX_REQUESTS
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin")
  if (!origin) return true

  const configuredOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)

  const allowedOrigins = new Set([
    request.nextUrl.origin,
    new URL(SITE_URL).origin,
    ...configuredOrigins,
  ])

  return allowedOrigins.has(origin)
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }
    return entities[character]
  })
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim()
}

function getMailContent(inquiry: Inquiry) {
  const isDemo = inquiry.source === "demo"
  const isBooking = inquiry.source === "booking"
  const requestType = isBooking
    ? "Terminwunsch"
    : isDemo
      ? "Analyseanfrage"
      : "Kontaktanfrage"
  const company = inquiry.company || "Ohne Unternehmensangabe"
  const subject = `[Kinemo] ${requestType} von ${singleLine(company)}`

  const rows = [
    ["Name", inquiry.name],
    ["Unternehmen", company],
    ["E-Mail", inquiry.email],
    ["Telefon", inquiry.phone],
    ["Wunschtermin", inquiry.preferredDate],
    ["Nachricht", inquiry.message],
  ].filter(([, value]) => value)

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 10px 0; color: #666; font-size: 13px; width: 140px; vertical-align: top;">${escapeHtml(label)}</td>
          <td style="padding: 10px 0; color: #111; font-size: 14px; white-space: pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("")

  return {
    subject,
    text: [
      requestType,
      "",
      ...rows.map(([label, value]) => `${label}: ${value}`),
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #08415C; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #50C9E1; margin: 0; font-size: 20px;">${requestType}</h1>
          <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">Kinemo Website</p>
        </div>
        <div style="background: #f8f9fa; padding: 32px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">${htmlRows}</table>
        </div>
      </div>`,
  }
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID()

  if (!isAllowedOrigin(request)) {
    return jsonError("Anfrage wurde abgelehnt.", 403)
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return jsonError("Anfrage ist zu groß.", 413)
  }

  if (isRateLimited(getClientKey(request))) {
    return jsonError(
      "Zu viele Anfragen. Bitte versuchen Sie es später erneut.",
      429,
    )
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return jsonError("Ungültige Anfrage.", 400)
  }

  const result = inquirySchema.safeParse(payload)
  if (!result.success) {
    return jsonError("Bitte prüfen Sie Ihre Eingaben.", 400)
  }

  if (result.data.website) {
    return NextResponse.json({ success: true })
  }

  const mail = getMailContent(result.data)

  try {
    const smtpUser = process.env.SMTP_USER
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM ?? `"Kinemo Website" <${smtpUser}>`,
      to: process.env.MAIL_TO ?? "contact@kinemo.de",
      replyTo: result.data.email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      disableFileAccess: true,
      disableUrlAccess: true,
    })

    return NextResponse.json(
      { success: true },
      { headers: { "Cache-Control": "no-store" } },
    )
  } catch (error) {
    console.error("Contact request failed", { requestId, error })
    return jsonError(
      "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      500,
    )
  }
}
