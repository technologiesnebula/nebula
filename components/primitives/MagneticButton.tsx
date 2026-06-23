"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

/**
 * Button/link that subtly leans toward the cursor (magnetic effect).
 * Falls back to a static element when reduced motion is preferred.
 */
export function MagneticButton({
  children,
  href,
  className,
  strength = 0.35,
  target,
  rel,
  onClick,
  ...rest
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMove(e: MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const commonProps = {
    ref: ref as never,
    className,
    style: reduced ? undefined : { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    ...rest,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...commonProps}>
      {children}
    </motion.button>
  );
}
