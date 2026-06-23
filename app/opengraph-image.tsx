import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} · ${site.tagline}`;
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
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 20% 0%, #6d28d9 0%, #1a1626 45%, #08070c 80%)",
          color: "#F3F1F8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            letterSpacing: 14,
            fontWeight: 600,
            color: "#A78BFA",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#A78BFA",
            }}
          />
          NÉBULA
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 920,
            letterSpacing: -2,
          }}
        >
          Agentes de IA que venden y atienden por ti, 24/7
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#9B94A8",
            maxWidth: 820,
          }}
        >
          Agentes de WhatsApp · Páginas web · SEO / GEO
        </div>
      </div>
    ),
    { ...size }
  );
}
