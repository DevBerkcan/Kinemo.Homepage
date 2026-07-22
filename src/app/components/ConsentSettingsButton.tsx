"use client"

import { OPEN_CONSENT_EVENT } from "@/lib/consent"

export default function ConsentSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="hover:text-[#50C9E1] transition-colors"
    >
      Datenschutz-Einstellungen
    </button>
  )
}
