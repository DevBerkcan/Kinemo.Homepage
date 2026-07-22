import { ImageResponse } from "next/og"

export const alt = "Kinemo – Industrielle CT und Röntgenanalyse"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const runtime = "edge"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "linear-gradient(135deg, #061b26 0%, #08415C 58%, #0C5374 100%)",
          color: "white",
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "72%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", color: "#50C9E1", fontSize: 32, fontWeight: 700, letterSpacing: 3 }}>
            KINEMO
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", fontSize: 60, fontWeight: 700, lineHeight: 1.08 }}>
              Verborgene Produktfehler sichtbar machen.
            </div>
            <div style={{ display: "flex", color: "#c9e8f2", fontSize: 27, lineHeight: 1.35 }}>
              Industrielle CT und Röntgenanalyse für Produktentwicklung und Qualitätssicherung.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: -45,
            top: 85,
            width: 370,
            height: 370,
            border: "3px solid rgba(80, 201, 225, 0.8)",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 260,
              height: 260,
              border: "2px solid rgba(80, 201, 225, 0.55)",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 145,
                height: 145,
                borderRadius: 28,
                background: "rgba(80, 201, 225, 0.18)",
                border: "2px solid #50C9E1",
                transform: "rotate(16deg)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  )
}
