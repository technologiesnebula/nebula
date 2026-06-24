import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/primitives/Reveal";
import { testimonials } from "@/lib/site";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonios">
      <SectionHeading
        eyebrow="Testimonios"
        title="Negocios que ya crecen con Nébula"
        subtitle="Atención más rápida, más reservas y más ventas — sin sumar carga al equipo."
      />

      <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem
            key={t.name}
            className="flex h-full flex-col justify-between rounded-[var(--radius-card)] glass p-7"
          >
            <div>
              <Quote
                size={26}
                className="text-primary-light/60"
                aria-hidden="true"
              />
              <p className="mt-4 text-pretty leading-relaxed text-foreground/90">
                {t.quote}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-deep text-sm font-semibold text-white">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
