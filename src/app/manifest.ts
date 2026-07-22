import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kinemo – Industrielle CT und Röntgenanalyse",
    short_name: "Kinemo",
    description: "Industrielle CT, Röntgenanalyse und zerstörungsfreie Bauteilprüfung für Entwicklung und Qualitätssicherung.",
    start_url: "/",
    display: "standalone",
    background_color: "#061b26",
    theme_color: "#08415C",
    lang: "de-DE",
    icons: [
      {
        src: "/01_logo_blau.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
