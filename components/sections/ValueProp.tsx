import { Section } from "@/components/ui/section";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/primitives/Reveal";
import { GradientText } from "@/components/primitives/GradientText";
import { Icon } from "@/components/icons";
import type { IconKey } from "@/lib/site";

const pillars: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "zap",
    title: "Responde al instante",
    text: "El primero en contestar gana la venta. Tu IA responde en segundos, a cualquier hora.",
  },
  {
    icon: "clock",
    title: "Nunca se detiene",
    text: "Atiende noches, fines de semana y festivos. Cero clientes esperando, cero ventas perdidas.",
  },
  {
    icon: "chart",
    title: "Escala sin contratar",
    text: "Mil conversaciones a la vez sin sumar costos. Tu equipo se enfoca en lo que importa.",
  },
];

export function ValueProp() {
  return (
    <Section id="valor">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">
          Por qué Nébula
        </p>
        <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl md:leading-[1.08]">
          Cada mensaje sin responder es una venta que se va.{" "}
          <GradientText>Nosotros la recuperamos.</GradientText>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
          La atención manual no escala: se pierde de noche, se satura en
          temporada alta y depende de que alguien esté disponible. Nébula
          combina inteligencia artificial, diseño y estrategia para que tu
          negocio atienda, convierta y crezca de forma automática.
        </p>
      </Reveal>

      <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <StaggerItem
            key={p.title}
            className="glass rounded-[var(--radius-card)] p-7"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-primary-light">
              <Icon name={p.icon} size={20} />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
