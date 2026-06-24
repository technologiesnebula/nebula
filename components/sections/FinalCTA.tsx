import { Reveal } from "@/components/primitives/Reveal";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { GradientText } from "@/components/primitives/GradientText";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contacto" className="relative scroll-mt-24 px-4 py-10 md:py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 px-6 py-20 text-center md:px-12 md:py-28">
          {/* intense purple background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(120% 120% at 50% 0%, rgba(109,40,217,0.55), rgba(139,92,246,0.18) 40%, transparent 70%), #0a0810",
            }}
          />
          <div className="bg-grid mask-fade-b absolute inset-0 -z-10 opacity-40" />
          <div
            aria-hidden="true"
            className="animate-aurora absolute left-1/2 top-0 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(167,139,250,0.45), transparent)",
            }}
          />

          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">
              Es tu momento
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              ¿Listo para que la IA{" "}
              <GradientText animated>trabaje por ti</GradientText>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              Agenda una demo gratuita y descubre, con tu propio caso, cuánto
              puede crecer tu negocio con Nébula.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agenda tu demo por WhatsApp"
                className={cn(
                  buttonVariants({ variant: "primary", size: "pill" })
                )}
              >
                <WhatsAppIcon size={18} />
                Agenda tu demo gratis
                <ArrowRight size={16} />
              </MagneticButton>
              <a
                href="#servicios"
                className={cn(buttonVariants({ variant: "ghost", size: "pill" }))}
              >
                Ver precios
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
