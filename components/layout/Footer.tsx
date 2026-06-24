import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import {
  Icon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons";
import { site, nav, whatsappUrl } from "@/lib/site";
import { getGroup } from "@/lib/pages";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Inteligencia artificial, diseño y estrategia para que tu negocio
              atienda, venda y crezca de forma automática.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* navigation */}
          <nav aria-label="Enlaces">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Navegación
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* product */}
          <nav aria-label="Producto">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Producto
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {getGroup("producto").items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/producto/${item.slug}`}
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Icon
                      name={item.icon}
                      size={14}
                      className="text-primary-light"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono tracking-tight">
            Hecho con IA · diseño · estrategia
          </p>
        </div>
      </div>
    </footer>
  );
}
