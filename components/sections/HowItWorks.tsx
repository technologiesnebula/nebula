"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/primitives/Reveal";
import { Icon } from "@/components/icons";
import { steps } from "@/lib/site";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <Section id="proceso">
      <SectionHeading
        eyebrow="Cómo funciona"
        title="De la idea a resultados en cuatro pasos"
        subtitle="Un proceso claro y sin fricción. Tú nos cuentas tu negocio; nosotros lo ponemos a trabajar con IA."
      />

      <div ref={ref} className="relative mt-12">
        {/* desktop connector */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-primary-deep via-primary to-primary-light"
            style={{ scaleX: reduced ? 1 : scrollYProgress }}
          />
        </div>
        {/* mobile connector */}
        <div className="absolute bottom-2 left-[27px] top-2 w-px bg-border md:hidden">
          <motion.div
            className="w-full origin-top bg-gradient-to-b from-primary-deep via-primary to-primary-light"
            style={{ scaleY: reduced ? 1 : scrollYProgress, height: "100%" }}
          />
        </div>

        <div className="grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.1}
              className="relative flex gap-5 md:block"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-primary-light glow-primary">
                <Icon name={s.icon} size={22} />
              </div>
              <div className="md:mt-6">
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  {s.n}
                </span>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
