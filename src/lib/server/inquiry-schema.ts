import { z } from "zod"
import { inquirySources } from "@/lib/inquiry"

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .default("")

export const inquirySchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    company: optionalText(120),
    email: z.string().trim().email().max(254),
    phone: optionalText(50),
    message: optionalText(3000),
    preferredDate: optionalText(100),
    privacy: z.literal(true),
    source: z.enum(inquirySources),
    website: optionalText(200),
  })
  .superRefine((value, context) => {
    if (value.source === "kontakt" && value.company.length < 2) {
      context.addIssue({
        code: "custom",
        path: ["company"],
        message: "Bitte geben Sie den Firmennamen an.",
      })
    }

    if (value.source === "booking" && value.message.length < 10) {
      context.addIssue({
        code: "custom",
        path: ["message"],
        message: "Bitte beschreiben Sie Ihr Anliegen kurz.",
      })
    }
  })

export type Inquiry = z.infer<typeof inquirySchema>
