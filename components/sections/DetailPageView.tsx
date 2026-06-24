import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightCard } from "@/components/primitives/SpotlightCard";
import { Icon, WhatsAppIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { getGroup, type PageContent } from "@/lib/pages";
import { cn } from "@/lib/utils";

/** Splits a title on `|`; the part after the pipe renders with the gradient. */
function Title({ title }: { title: string }) {
  const [head, accent] = title.split("|");
  return (
    <>
      {head}
      {accent ? <span className="text-gradient">{accent}</span> : null}
    </>
  );
}

export function DetailPageView({ data }: { data: PageContent }) {
  const group = getGroup(data.group);

  return (
    <>
      <Navbar />
      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
          <div
            aria-hidden
            className="bg-grid pointer-events-none absolute inset-0 mask-fade-b opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
          />
          <div className="container-page relative">
            {/* breadcrumb */}
            <Reveal y={16}>
              <nav
                aria-label="Ruta"
                className="mb-7 flex items-center gap-1.5 text-xs text-muted"
              >
                <Link href="/" className="transition-colors hover:text-foreground">
                  Inicio
                </Link>
                <ChevronRight size={13} className="opacity-50" />
                <Link
                  href={group.href}
                  className="transition-colors hover:text-foreground"
                >
                  {group.label}
                </Link>
                <ChevronRight size={13} className="opacity-50" />
                <span className="text-foreground/80">
                  {data.title.replace("|", "").trim()}
                </span>
              </nav>
            </Reveal>

            <div className="flex max-w-3xl flex-col gap-6">
              <Reveal y={18}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-primary-light">
                    <Icon name={data.icon} size={22} />
                  </span>
                  <Eyebrow>{data.eyebrow}</Eyebrow>
                </div>
              </Reveal>

              <Reveal y={20} delay={0.05}>
                <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-[3.4rem] md:leading-[1.05]">
                  <Title title={data.title} />
                </h1>
              </Reveal>

              <Reveal y={20} delay={0.1}>
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  {data.lead}
                </p>
              </Reveal>

              <Reveal y={20} delay={0.15}>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl(data.cta.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "primary", size: "lg" })}
                  >
                    <WhatsAppIcon size={18} />
                    Agenda tu demo
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    href={group.href}
                    className={buttonVariants({ variant: "ghost", size: "lg" })}
                  >
                    Ver {group.label.toLowerCase()}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Intro + stats ---------------- */}
        <Section className="py-8 md:py-10">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
                {data.intro}
              </p>
            </Reveal>
            {data.stats && (
              <Reveal delay={0.1}>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-3">
                  {data.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-border bg-white/[0.02] p-4 text-center md:flex md:items-baseline md:gap-3 md:text-left"
                    >
                      <p className="text-2xl font-semibold tracking-tight text-gradient md:text-3xl">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs text-muted md:mt-0 md:text-sm">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </Section>

        {/* ---------------- Features ---------------- */}
        <Section className="py-8 md:py-12">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Lo que hace por ti
            </h2>
          </Reveal>
          <div
            className={cn(
              "mt-8 grid gap-5",
              data.features.length >= 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {data.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col gap-3 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                      <Icon name={f.icon} size={20} />
                    </span>
                    <h3 className="mt-1 text-base font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {f.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------------- Highlights ---------------- */}
        <Section className="py-8 md:py-12">
          <SpotlightCard className="overflow-hidden">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
              <Reveal>
                <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                  Todo incluido, sin letra pequeña
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Trabajamos contigo de principio a fin: diseño, implementación y
                  mejora continua. Tú te enfocas en tu negocio; nosotros, en que la
                  IA trabaje por ti.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {data.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary-light"
                      />
                      <span className="text-foreground/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </SpotlightCard>
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
                  {data.cta.title}
                </h2>
                <p className="text-pretty text-muted">{data.cta.subtitle}</p>
                <a
                  href={whatsappUrl(data.cta.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "mt-2"
                  )}
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
