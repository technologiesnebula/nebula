# Nébula

Sitio web one-page premium para **Nébula** — agencia de inteligencia artificial
(agentes de WhatsApp con IA, páginas web de alta conversión y posicionamiento SEO/GEO).

Diseño oscuro monocromático (negro + morado), scroll cinematográfico, hero 3D y
animaciones cuidadas. Construido con calidad de producto de clase mundial.

## Stack

- **Next.js 16** (App Router, TypeScript estricto, Turbopack)
- **Tailwind CSS v4** (configuración CSS-first con `@theme`)
- **Motion** (Framer Motion) para animaciones
- **Lenis** para smooth scroll
- **React Three Fiber + drei + postprocessing** para el hero 3D (con fallback ligero)
- **Radix UI** (acordeón accesible) · **lucide-react** (íconos)
- **next/font** (Geist / Geist Mono)

## Requisitos

- Node.js **20.9+**
- npm

## Desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# edita .env.local y pon el número real de WhatsApp (NEXT_PUBLIC_WHATSAPP)

# 3. Levantar el servidor de desarrollo
npm run dev          # http://localhost:3000
```

Otros comandos:

```bash
npm run build        # build de producción
npm run start        # servir el build
npm run lint         # eslint
npx tsc --noEmit     # chequeo de tipos
```

## Configuración / contenido

Todo el contenido editable vive en **`lib/site.ts`** (servicios, precios en COP,
testimonios, métricas, FAQ, navegación y datos de contacto). Ahí también está el
helper `whatsappUrl()` que arma los enlaces de WhatsApp.

| Qué cambiar | Dónde |
| --- | --- |
| Número de WhatsApp | `NEXT_PUBLIC_WHATSAPP` en `.env.local` (o `site.whatsappNumber`) |
| Dominio final | `site.url` / `site.domain` en `lib/site.ts` |
| Servicios y precios | `services` en `lib/site.ts` |
| Métricas / testimonios | `metrics` / `testimonials` en `lib/site.ts` (⚠️ son placeholders) |
| Paleta y tokens | `app/globals.css` (`@theme`) y `lib/design-tokens.ts` |
| Logo (wordmark) | `components/layout/Logo.tsx` · imagen en `public/logo.png` |

> ⚠️ Las **métricas** y **testimonios** son ejemplos realistas marcados como
> editables. Reemplázalos por datos reales antes de publicar.

## SEO / GEO

- Metadatos completos (Open Graph + Twitter) en `app/layout.tsx`.
- Imagen OG e ícono generados dinámicamente (`app/opengraph-image.tsx`, `app/icon.tsx`).
- Datos estructurados JSON-LD (`Organization`, `WebSite`, `Service`) en el layout.
- `app/sitemap.ts` → `/sitemap.xml` · `app/robots.ts` → `/robots.txt` (crawlers de IA permitidos).
- `public/llms.txt` para citabilidad por motores de IA (GEO).

## Despliegue

### Vercel (recomendado, cero configuración)

1. Sube el repositorio a GitHub/GitLab.
2. Importa el proyecto en [vercel.com](https://vercel.com).
3. Añade la variable de entorno `NEXT_PUBLIC_WHATSAPP`.
4. Deploy. El App Router, `next/og` e `image` funcionan de forma nativa.

### Cloudflare Pages

Este proyecto es compatible con Cloudflare mediante **OpenNext** (`@opennextjs/cloudflare`):

```bash
npm install --save-dev @opennextjs/cloudflare wrangler
```

Crea `wrangler.toml`:

```toml
name = "nebula"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".open-next/assets"
```

Build y deploy:

```bash
npx opennextjs-cloudflare build
npx wrangler pages deploy
```

Configura `NEXT_PUBLIC_WHATSAPP` en *Settings → Environment variables* del proyecto
de Cloudflare Pages.

> Nota: el alias clásico `@cloudflare/next-on-pages` también funciona, pero
> **OpenNext** es la vía recomendada actualmente para Next.js en Cloudflare.

## Rendimiento y accesibilidad

- El hero 3D se carga de forma diferida (`next/dynamic`, `ssr: false`) y cae a un
  fallback CSS en dispositivos de gama baja, sin WebGL o con `prefers-reduced-motion`.
- Todas las animaciones respetan `prefers-reduced-motion`.
- Solo se animan `transform` y `opacity` para mantener 60fps.
- HTML semántico, foco visible, navegación por teclado y enlace "Saltar al contenido".

## Estructura

```
app/                 layout, page, globals.css, sitemap, robots, og-image, icon
components/
  layout/            Navbar, Footer, Logo, Background, SmoothScroll
  sections/          una sección por archivo (Hero, Services, FAQ, …)
  three/             HeroCanvas (R3F) + HeroFallback
  primitives/        Reveal, MagneticButton, GradientText, SpotlightCard, AnimatedCounter
  ui/                button, accordion, section (helpers)
  icons.tsx          mapa de íconos + glifos de marca (WhatsApp, Instagram, LinkedIn)
lib/                 site.ts (contenido), utils.ts, design-tokens.ts
messages/            es.json (base para i18n)
public/              logo.png, llms.txt
```
