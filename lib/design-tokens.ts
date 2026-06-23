/**
 * Design tokens mirrored in TS so non-CSS contexts (R3F / canvas / JS) share
 * the exact same palette as `app/globals.css`.
 */
export const colors = {
  background: "#08070C",
  surface: "#13101C",
  surface2: "#1A1626",
  primary: "#8B5CF6",
  primaryLight: "#A78BFA",
  primaryDeep: "#6D28D9",
  foreground: "#F3F1F8",
  muted: "#9B94A8",
} as const;

/** Same palette as numeric hex for three.js Color() inputs. */
export const colorsHex = {
  primary: 0x8b5cf6,
  primaryLight: 0xa78bfa,
  primaryDeep: 0x6d28d9,
  background: 0x08070c,
} as const;

/** Signature easing used across all motion. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
