"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { menuGroups, type MenuGroup } from "@/lib/pages";
import { WhatsAppIcon, Icon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/design-tokens";

/** Quick links to home-page sections (work from any route via absolute hash). */
const quickLinks = [
  { label: "Precios", href: "/#servicios" },
  { label: "Resultados", href: "/#resultados" },
];

/* --------------------------- Desktop mega-menu --------------------------- */

function MegaPanel({ group }: { group: MenuGroup }) {
  const isList = group.layout === "list";
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-strong bg-surface/95 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl",
        isList ? "w-[320px]" : "w-[620px]"
      )}
    >
      {/* overview row */}
      <Link
        href={group.href}
        className="group/ov flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-primary/15 to-primary/[0.04] px-4 py-3 transition-colors hover:from-primary/25"
      >
        <div>
          <p className="text-sm font-medium text-foreground">
            Todo {group.label}
          </p>
          <p className="text-xs text-muted">{group.blurb}</p>
        </div>
        <ArrowRight
          size={16}
          className="shrink-0 text-primary-light transition-transform duration-300 group-hover/ov:translate-x-0.5"
        />
      </Link>

      {/* items */}
      <div
        className={cn(
          "mt-2 grid gap-1",
          !isList && "grid-cols-2"
        )}
      >
        {group.items.map((item) => (
          <Link
            key={item.slug}
            href={`${group.href}/${item.slug}`}
            className="group/it flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-light transition-colors group-hover/it:bg-primary/20">
              <Icon name={item.icon} size={17} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-foreground">
                {item.label}
              </span>
              <span className="block text-xs leading-snug text-muted">
                {item.blurb}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Mobile menu ------------------------------ */

function MobileAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState<string | null>(menuGroups[0].key);

  return (
    <div className="flex flex-col gap-1">
      {menuGroups.map((group, gi) => {
        const isOpen = open === group.key;
        return (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.06 + gi * 0.05,
              duration: 0.45,
              ease: easeOutExpo,
            }}
            className="border-b border-border"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : group.key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-4 text-left text-xl font-medium tracking-tight"
            >
              {group.label}
              <ChevronDown
                size={20}
                className={cn(
                  "text-muted transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  className="overflow-hidden"
                >
                  <li>
                    <Link
                      href={group.href}
                      onClick={onNavigate}
                      className="flex items-center gap-2 py-2.5 text-sm font-medium text-primary-light"
                    >
                      Todo {group.label}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`${group.href}/${item.slug}`}
                        onClick={onNavigate}
                        className="flex items-center gap-3 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <Icon
                          name={item.icon}
                          size={16}
                          className="shrink-0 text-primary-light/80"
                        />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="h-2" />
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {quickLinks.map((l, i) => (
        <motion.div
          key={l.href}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.06 + (menuGroups.length + i) * 0.05,
            duration: 0.45,
            ease: easeOutExpo,
          }}
          className="border-b border-border"
        >
          <Link
            href={l.href}
            onClick={onNavigate}
            className="block py-4 text-xl font-medium tracking-tight"
          >
            {l.label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------------- Navbar -------------------------------- */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  function openMenu(key: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(key);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 140);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const activeGroup = menuGroups.find((g) => g.key === active);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 transition-all duration-300 md:px-8",
          scrolled &&
            "mt-2 h-14 max-w-[1180px] rounded-2xl border border-border bg-background/60 px-4 backdrop-blur-xl md:mt-3 md:px-6"
        )}
      >
        <Link href="/" aria-label="Nébula · inicio" className="shrink-0">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={scheduleClose}
        >
          {menuGroups.map((group) => (
            <div key={group.key} onMouseEnter={() => openMenu(group.key)}>
              <button
                type="button"
                aria-expanded={active === group.key}
                onClick={() =>
                  setActive(active === group.key ? null : group.key)
                }
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:text-foreground",
                  active === group.key ? "text-foreground" : "text-muted"
                )}
              >
                {group.label}
                <ChevronDown
                  size={14}
                  className={cn(
                    "mt-px transition-transform duration-300",
                    active === group.key && "rotate-180"
                  )}
                />
              </button>
            </div>
          ))}

          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={() => openMenu("")}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            <WhatsAppIcon size={15} />
            Agenda tu demo
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* desktop mega-menu panel */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            key={activeGroup.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: easeOutExpo }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute left-1/2 top-full hidden -translate-x-1/2 px-4 pt-2 md:block"
          >
            <MegaPanel group={activeGroup} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex min-h-full flex-col px-8 pb-12 pt-24">
              <MobileAccordion onNavigate={() => setOpen(false)} />
              <motion.a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: easeOutExpo }}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "mt-8"
                )}
              >
                <WhatsAppIcon size={18} />
                Agenda tu demo
                <ArrowRight size={16} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
