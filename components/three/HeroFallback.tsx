/**
 * Lightweight CSS fallback for the 3D hero — used when WebGL is unavailable,
 * on low-end devices, or when the user prefers reduced motion.
 */
export function HeroFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* glowing core */}
      <div className="animate-float absolute left-1/2 top-1/2 h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2">
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
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.5), transparent), radial-gradient(1.5px 1.5px at 85% 25%, rgba(167,139,250,0.8), transparent), radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 10% 70%, rgba(255,255,255,0.5), transparent)",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
}
