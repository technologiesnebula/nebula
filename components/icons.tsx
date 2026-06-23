import {
  Bot,
  Globe,
  TrendingUp,
  ShieldCheck,
  Zap,
  CalendarClock,
  BarChart3,
  Sparkles,
  Target,
  Plug,
  Clock,
  type LucideProps,
} from "lucide-react";
import type { IconKey } from "@/lib/site";
import type { ComponentType } from "react";

/** Brand-accurate WhatsApp glyph (lucide dropped brand icons). */
export function WhatsAppIcon(props: LucideProps) {
  const { size = 24, color = "currentColor", strokeWidth, ...rest } = props;
  void strokeWidth;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      {...rest}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

/** Instagram brand glyph (lucide dropped brand icons). */
export function InstagramIcon(props: LucideProps) {
  const { size = 24, color = "currentColor", strokeWidth = 2, ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/** LinkedIn brand glyph (lucide dropped brand icons). */
export function LinkedinIcon(props: LucideProps) {
  const { size = 24, color = "currentColor", strokeWidth = 2, ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const lucideMap: Partial<Record<IconKey, ComponentType<LucideProps>>> = {
  web: Globe,
  seo: TrendingUp,
  bot: Bot,
  shield: ShieldCheck,
  zap: Zap,
  calendar: CalendarClock,
  chart: BarChart3,
  sparkles: Sparkles,
  target: Target,
  plug: Plug,
  clock: Clock,
};

export function Icon({
  name,
  ...props
}: { name: IconKey } & LucideProps) {
  if (name === "whatsapp") return <WhatsAppIcon {...props} />;
  const Cmp = lucideMap[name] ?? Sparkles;
  return <Cmp {...props} />;
}
