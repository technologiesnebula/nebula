import { cn } from "@/lib/utils";
import { Reveal } from "@/components/primitives/Reveal";
import type { ReactNode } from "react";

/** Section wrapper: id anchor, vertical rhythm, centered container. */
export function Section({
  id,
  className,
  children,
  bleed = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  /** when true, skip the inner container (full-bleed content) */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-16 md:py-24", className)}
    >
      {bleed ? children : <div className="container-page">{children}</div>}
    </section>
  );
}

/** Eyebrow pill used above headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

/** Standard section heading block. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-[2.6rem] md:leading-[1.08]">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-pretty text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
