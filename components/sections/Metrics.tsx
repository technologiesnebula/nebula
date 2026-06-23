import { Section } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/primitives/Reveal";
import { AnimatedCounter } from "@/components/primitives/AnimatedCounter";
import { GradientText } from "@/components/primitives/GradientText";
import { metrics } from "@/lib/site";

export function Metrics() {
  return (
    <Section id="resultados">
      <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface/60 px-6 py-14 md:px-12 md:py-20">
        {/* glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(139,92,246,0.22), transparent)",
          }}
        />

        <div className="relative">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-primary-light">
            Resultados que se sienten
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center text-2xl font-semibold tracking-tight md:text-4xl">
            Números que cambian cuando la IA trabaja por ti
          </h2>

          <StaggerContainer className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {metrics.map((m) => (
              <StaggerItem key={m.label} className="text-center">
                <p
                  className="font-semibold tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  <GradientText>
                    <AnimatedCounter
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                    />
                  </GradientText>
                </p>
                <p className="mt-2 text-sm text-muted">{m.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}
