import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Applies the signature purple gradient to inline text. */
export function GradientText({
  children,
  className,
  animated = false,
}: {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}) {
  return (
    <span
      className={cn(
        animated ? "text-gradient-animated" : "text-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}
