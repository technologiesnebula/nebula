import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/primitives/Reveal";
import { techStack } from "@/lib/site";

export function TechStack() {
  return (
    <Section id="tecnologia">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Tecnología"
          title="Construido sobre lo mejor de la IA"
          subtitle="Usamos los modelos e infraestructura más avanzados del mundo para que tu solución sea rápida, confiable y a prueba de futuro."
        />

        <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {techStack.map((t) => (
            <StaggerItem
              key={t.name}
              className="group rounded-2xl border border-border bg-white/[0.02] p-5 transition-colors duration-300 hover:border-border-strong hover:bg-white/[0.04]"
            >
              <div className="mb-3 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
              <p className="font-mono text-sm font-medium tracking-tight text-foreground">
                {t.name}
              </p>
              <p className="mt-1 text-xs text-muted">{t.note}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
