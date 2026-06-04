import { ImageResponse } from "next/og";

export const alt = "Rehman Industry — Precision Plastic Injection Moulding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0b1220",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(31,67,220,0.45), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "84px",
              height: "84px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "22px",
              backgroundColor: "#1f43dc",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            RI
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#cbd5e1",
            }}
          >
            REHMAN INDUSTRY
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          <span>Precision Plastic</span>
          <span style={{ color: "#90b2ff" }}>Injection Moulding</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: "999px",
              backgroundColor: "#1f43dc",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            Gujranwala, Pakistan
          </div>
          <div style={{ fontSize: "26px", color: "#94a3b8" }}>
            rehmanindustry.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
