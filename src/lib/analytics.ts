declare global {
  interface Window {
    clarity?: (command: "event", name: string) => void
  }
}

const eventNamePattern = /^[a-z][a-z0-9_]{1,63}$/

export function trackAnalyticsEvent(name: string) {
  if (typeof window === "undefined" || !eventNamePattern.test(name)) return
  window.clarity?.("event", name)
}

