import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08070c",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 999,
            background: "linear-gradient(135deg, #a78bfa, #6d28d9)",
            boxShadow: "0 0 18px rgba(139,92,246,0.9)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
