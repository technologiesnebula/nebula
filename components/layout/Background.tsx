/**
 * Global decorative background: base color, faint grid, animated purple aurora
 * blobs and a soft top vignette. Purely CSS — fixed behind all content.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* faint grid, fading toward the bottom */}
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-60" />

      {/* aurora blobs */}
      <div
        className="animate-aurora absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.30), transparent)",
        }}
      />
      <div
        className="animate-aurora absolute top-1/3 -left-32 h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(109,40,217,0.28), transparent)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-aurora absolute -right-32 bottom-0 h-[60vh] w-[60vh] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(167,139,250,0.22), transparent)",
          animationDelay: "-12s",
        }}
      />

      {/* top + bottom vignette for depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
