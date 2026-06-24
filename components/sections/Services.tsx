import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightCard } from "@/components/primitives/SpotlightCard";
import { services, whatsappUrl, type Plan, type Service } from "@/lib/site";
import { formatCOP, cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Check } from "lucide-react";

function PlanCard({ plan, service }: { plan: Plan; service: Service }) {
  const highlight = plan.highlight;
  const msg = `Hola Nébula 👋, me interesa el plan ${plan.name} de "${service.title}".`;

  return (
    <SpotlightCard
      conic={highlight}
      className={cn("h-full", highlight && "glow-primary")}
    >
      <div className="flex h-full flex-col p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            {plan.name}
          </span>
          {highlight && (
            <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[0.7rem] font-medium text-primary-light">
              Recomendado
            </span>
          )}
        </div>

        <div className="mt-6">
          <p className="text-xs text-muted">{plan.setup.label}</p>
          <p className="text-3xl font-semibold tracking-tight">
            {formatCOP(plan.setup.amount)}
          </p>
          {plan.recurring && (
            <p className="mt-1 text-sm text-muted">
              + {formatCOP(plan.recurring.amount)}{" "}
              <span className="text-xs">/ {plan.recurring.label.toLowerCase()}</span>
            </p>
          )}
        </div>

        <ul className="mt-6 flex flex-1 flex-col gap-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
              <Check size={16} className="mt-0.5 shrink-0 text-primary-light" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({
              variant: highlight ? "primary" : "ghost",
              size: "md",
            }),
            "mt-7 w-full"
          )}
        >
          Quiero este plan
        </a>
      </div>
    </SpotlightCard>
  );
}

export function Services() {
  return (
    <Section id="servicios">
      <SectionHeading
        eyebrow="Servicios"
        title="Todo lo que tu negocio necesita para crecer con IA"
        subtitle="Dos soluciones que funcionan solas o juntas como un sistema completo de ventas, atención y visibilidad."
      />

      <div className="mt-12 flex flex-col gap-12">
        {services.map((service) => (
          <div key={service.id}>
            <Reveal
              className={cn(
                "mb-6 flex items-baseline gap-3",
                service.plans.length === 1 && "justify-center"
              )}
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {service.eyebrow}
              </span>
            </Reveal>

            <div
              className={cn(
                "grid gap-5",
                service.plans.length > 1 ? "md:grid-cols-2" : "max-w-md mx-auto"
              )}
            >
              {service.plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.08}>
                  <PlanCard plan={plan} service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="max-w-xl text-sm text-muted">
          Valores de referencia en pesos colombianos (COP). Te entregamos una
          cotización formal y a tu medida antes de empezar.
        </p>
        <p className="text-sm text-muted">
          ¿No sabes qué plan elegir?{" "}
          <a
            href={whatsappUrl("Hola Nébula 👋, ayúdenme a elegir el plan ideal.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-light hover:text-foreground"
          >
            Te asesoramos sin costo →
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
