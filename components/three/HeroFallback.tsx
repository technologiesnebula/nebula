/**
 * Lightweight CSS fallback for the 3D hero — used when WebGL is unavailable,
 * on low-end devices, or when the user prefers reduced motion.
 */
export function HeroFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* glowing core — much smaller and lifted into the open sky on phones,
          full size and centered from md+ */}
      <div className="animate-float absolute left-1/2 top-[28%] h-[19vh] w-[19vh] -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:h-[42vh] md:w-[42vh]">
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 38% 35%, #a78bfa, #6d28d9 45%, transparent 72%)",
          }}
        />
        <div
          className="animate-spin-slow absolute inset-6 rounded-full opacity-80 blur-md"
          style={{
            background:
              "conic-gradient(from 0deg, #6d28d9, #8b5cf6, #a78bfa, #6d28d9)",
          }}
        />
      </div>

      {/* twinkling star field */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.85), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.6), transparent), radial-gradient(1.5px 1.5px at 85% 25%, rgba(167,139,250,0.9), transparent), radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 10% 70%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 32% 52%, rgba(255,255,255,0.65), transparent), radial-gradient(1px 1px at 78% 82%, rgba(255,255,255,0.55), transparent), radial-gradient(1.5px 1.5px at 90% 68%, rgba(167,139,250,0.75), transparent), radial-gradient(1px 1px at 8% 18%, rgba(255,255,255,0.65), transparent), radial-gradient(1px 1px at 62% 38%, rgba(255,255,255,0.55), transparent), radial-gradient(1px 1px at 48% 8%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 27% 12%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 15% 48%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 38% 22%, rgba(255,255,255,0.55), transparent), radial-gradient(1px 1px at 52% 70%, rgba(255,255,255,0.5), transparent), radial-gradient(1.5px 1.5px at 66% 18%, rgba(167,139,250,0.7), transparent), radial-gradient(1px 1px at 82% 45%, rgba(255,255,255,0.55), transparent), radial-gradient(1px 1px at 92% 12%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 5% 88%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 45% 92%, rgba(255,255,255,0.45), transparent), radial-gradient(1px 1px at 72% 32%, rgba(255,255,255,0.55), transparent)",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
}
