import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightCard } from "@/components/primitives/SpotlightCard";
import { Icon, WhatsAppIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { type MenuGroup } from "@/lib/pages";

export function GroupOverview({ group }: { group: MenuGroup }) {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-14">
          <div
            aria-hidden
            className="bg-grid pointer-events-none absolute inset-0 mask-fade-b opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
          />
          <div className="container-page relative flex max-w-3xl flex-col gap-6">
            <Reveal y={16}>
              <Eyebrow>{group.label}</Eyebrow>
            </Reveal>
            <Reveal y={20} delay={0.05}>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-[3.4rem] md:leading-[1.05]">
                {group.overview.title.split("|")[0]}
                {group.overview.title.includes("|") && (
                  <span className="text-gradient">
                    {group.overview.title.split("|")[1]}
                  </span>
                )}
              </h1>
            </Reveal>
            <Reveal y={20} delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                {group.overview.subtitle}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Items ---------------- */}
        <Section className="py-6 md:py-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06}>
                <Link
                  href={`${group.href}/${item.slug}`}
                  className="block h-full"
                  aria-label={item.label}
                >
                  <SpotlightCard className="h-full">
                    <div className="flex h-full flex-col gap-4 p-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                        <Icon name={item.icon} size={22} />
                      </span>
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold tracking-tight">
                          {item.label}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {item.blurb}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-light">
                        Ver más
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------------- CTA ---------------- */}
        <Section className="py-10 md:py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-gradient-to-br from-surface to-background px-6 py-12 text-center md:px-12 md:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
              />
              <div className="relative mx-auto flex max-w-xl flex-col items-center gap-4">
                <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  ¿No sabes por dónde empezar?
                </h2>
                <p className="text-pretty text-muted">
                  Cuéntanos qué quieres lograr y te asesoramos sin costo para
                  elegir la solución de mayor impacto.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <WhatsAppIcon size={18} />
                  Hablar con Nébula
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
