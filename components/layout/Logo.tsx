import { cn } from "@/lib/utils";

/**
 * NÉBULA wordmark — minimalist, wide-tracked, matching the brand logo.
 * A small purple dot replaces nothing; it sits before the name as a mark.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.42em] text-foreground",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, var(--grad-3), var(--grad-1))",
          boxShadow: "0 0 12px rgba(139,92,246,0.8)",
        }}
      />
      NÉBULA
    </span>
  );
}
