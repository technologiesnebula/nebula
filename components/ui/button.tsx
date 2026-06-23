import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "text-white shadow-[0_10px_40px_-12px_rgba(139,92,246,0.7)] [background-image:linear-gradient(100deg,var(--grad-1),var(--grad-2)_55%,var(--grad-3))] hover:shadow-[0_16px_55px_-12px_rgba(139,92,246,0.85)]",
        ghost:
          "border border-border bg-white/[0.02] text-foreground hover:border-border-strong hover:bg-white/[0.05]",
        secondary:
          "bg-surface text-foreground border border-border hover:bg-surface-2",
        link: "text-primary-light underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-13 px-7 text-base",
        pill: "h-12 rounded-full px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
