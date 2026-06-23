"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Check, CheckCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/primitives/Reveal";
import { GradientText } from "@/components/primitives/GradientText";
import { WhatsAppIcon } from "@/components/icons";

type Msg = { from: "user" | "ai"; text: string };

const messages: Msg[] = [
  { from: "user", text: "Hola, ¿tienen disponibilidad este fin de semana?" },
  {
    from: "ai",
    text: "¡Hola! 👋 Claro que sí. Tenemos cupos el sábado y el domingo. ¿Para cuántas personas?",
  },
  { from: "user", text: "Para 2, el sábado 🙌" },
  {
    from: "ai",
    text: "Perfecto. Tengo el sábado a la 1:00 pm o a las 8:30 pm. ¿Cuál prefieres?",
  },
  { from: "user", text: "8:30 pm" },
  {
    from: "ai",
    text: "¡Listo! Reservé tu mesa para 2 el sábado a las 8:30 pm y te envié la confirmación. ¿Algo más en lo que pueda ayudarte? ✨",
  },
];

const highlights = [
  "Conversaciones que se sienten humanas",
  "Agenda y confirma citas sola",
  "Responde en segundos, 24/7",
];

function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </span>
  );
}

function Phone() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-120px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduced) {
      const id = requestAnimationFrame(() =>
        setShown(messages.map((_, i) => i))
      );
      return () => cancelAnimationFrame(id);
    }
    if (!inView) return;
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        const t = window.setTimeout(res, ms);
        timers.push(t);
      });

    async function run() {
      while (!cancelled) {
        setShown([]);
        setTyping(false);
        await wait(700);
        for (let i = 0; i < messages.length; i++) {
          if (cancelled) return;
          if (messages[i].from === "ai") {
            setTyping(true);
            await wait(1100);
            if (cancelled) return;
            setTyping(false);
          } else {
            await wait(650);
          }
          if (cancelled) return;
          setShown((prev) => [...prev, i]);
          await wait(messages[i].from === "ai" ? 1000 : 500);
        }
        await wait(2800);
      }
    }
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, reduced]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [shown, typing]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[330px]">
      {/* glow behind phone */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />

      <div className="overflow-hidden rounded-[2.4rem] border border-border-strong bg-[#0c0a14] p-2 shadow-[0_40px_120px_-30px_rgba(139,92,246,0.5)]">
        <div className="overflow-hidden rounded-[2rem] border border-border">
          {/* header */}
          <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-deep text-white">
              <Sparkles size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Nébula IA</p>
              <p className="flex items-center gap-1 text-[0.7rem] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                en línea
              </p>
            </div>
            <WhatsAppIcon size={18} color="#9b94a8" />
          </div>

          {/* messages */}
          <div
            ref={scrollRef}
            className="bg-dots flex h-[400px] flex-col gap-2 overflow-hidden bg-background px-3 py-4"
          >
            <AnimatePresence initial={false}>
              {messages
                .filter((_, i) => shown.includes(i))
                .map((m, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={
                      m.from === "ai"
                        ? "max-w-[82%] self-start rounded-2xl rounded-tl-sm border border-primary/20 bg-primary/10 px-3.5 py-2 text-sm text-foreground"
                        : "max-w-[82%] self-end rounded-2xl rounded-tr-sm bg-surface-2 px-3.5 py-2 text-sm text-foreground"
                    }
                  >
                    {m.text}
                    {m.from === "user" && (
                      <CheckCheck
                        size={13}
                        className="ml-1 inline-block translate-y-px text-primary-light"
                      />
                    )}
                  </motion.div>
                ))}
              {typing && (
                <motion.div
                  key="typing"
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-[60%] self-start rounded-2xl rounded-tl-sm border border-primary/20 bg-primary/10 px-3.5 py-1.5"
                >
                  <TypingDots />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* input bar */}
          <div className="flex items-center gap-2 border-t border-border bg-surface px-3 py-2.5">
            <div className="flex-1 rounded-full border border-border bg-background px-3.5 py-2 text-xs text-muted">
              Escribe un mensaje…
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-deep text-white">
              <Check size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Section id="demo">
      <div
        ref={sectionRef}
        className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10"
      >
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">
            Demo en vivo
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
            Mira a tu <GradientText>agente de IA</GradientText> cerrar una venta
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted md:text-lg">
            Así conversa Nébula con tus clientes en WhatsApp: entiende, responde
            y agenda automáticamente, sin que tú muevas un dedo.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                  <Check size={14} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <motion.div style={reduced ? undefined : { y }}>
          <Phone />
        </motion.div>
      </div>
    </Section>
  );
}
