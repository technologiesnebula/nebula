"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroFallback } from "@/components/three/HeroFallback";
import { GradientText } from "@/components/primitives/GradientText";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";
import { easeOutExpo } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};

export function Hero() {
  const reduced = useReducedMotion();
  const [use3D, setUse3D] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Cursor glow
  const gx = useMotionValue(-500);
  const gy = useMotionValue(-500);
  const sx = useSpring(gx, { stiffness: 120, damping: 20 });
  const sy = useSpring(gy, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // Detect capability after mount, deferred a frame to avoid a sync
    // setState in the effect body (and any first-paint jank).
    const id = requestAnimationFrame(() => {
      const lowEnd =
        (navigator.hardwareConcurrency ?? 8) < 4 ||
        // @ts-expect-error deviceMemory is non-standard
        (navigator.deviceMemory ?? 8) < 4;
      setUse3D(!reduced && supportsWebGL() && !lowEnd);
    });
    return () => cancelAnimationFrame(id);
  }, [reduced]);

  function onMove(e: React.MouseEvent) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    gx.set(e.clientX - rect.left);
    gy.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* 3D / fallback layer */}
      <div className="absolute inset-0 -z-0">
        {use3D ? <HeroCanvas /> : <HeroFallback />}
      </div>

      {/* legibility gradient over the canvas */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,transparent,rgba(8,7,12,0.55))]" />

      {/* cursor glow */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-[340px] w-[340px] rounded-full blur-3xl"
          style={{
            left: sx,
            top: sy,
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18), transparent 65%)",
          }}
        />
      )}

      {/* content */}
      <motion.div
        variants={reduced ? undefined : container}
        initial={reduced ? undefined : "hidden"}
        animate={reduced ? undefined : "show"}
        className="container-page relative z-10 flex flex-col items-center text-center"
      >
        <motion.div variants={reduced ? undefined : item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-[0.14em] text-muted backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            IMPULSADO POR IA DE ÚLTIMA GENERACIÓN
          </span>
        </motion.div>

        <motion.h1
          variants={reduced ? undefined : item}
          className="mt-7 max-w-4xl text-balance font-semibold tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 1.02 }}
        >
          Agentes de IA que{" "}
          <GradientText animated>venden y atienden</GradientText> por ti, 24/7
        </motion.h1>

        <motion.p
          variants={reduced ? undefined : item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg"
        >
          Nébula construye agentes de WhatsApp con IA, páginas web de alta
          conversión y posicionamiento SEO/GEO para que tu negocio crezca en
          piloto automático.
        </motion.p>

        <motion.div
          variants={reduced ? undefined : item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agenda tu demo por WhatsApp"
            className={cn(buttonVariants({ variant: "primary", size: "pill" }))}
          >
            <WhatsAppIcon size={18} />
            Agenda tu demo
            <ArrowRight size={16} />
          </MagneticButton>

          <a
            href="#servicios"
            className={cn(buttonVariants({ variant: "ghost", size: "pill" }))}
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.p
          variants={reduced ? undefined : item}
          className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-muted/80"
        >
          Sin permanencias · Implementación en días · Resultados medibles
        </motion.p>
      </motion.div>

      {/* scroll cue */}
      {!reduced && (
        <motion.a
          href="#servicios"
          aria-label="Desplázate para ver más"
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-muted/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.a>
      )}
    </section>
  );
}
