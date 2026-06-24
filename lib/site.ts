/**
 * NÉBULA · Single source of truth for site content.
 * Edit copy, pricing, testimonials and contact here. Strings are kept in
 * Spanish; the shape is i18n-ready (see messages/es.json for the mirror).
 *
 * ⚠️ EDITABLE: placeholders for metrics/testimonials are marked below.
 */

export type IconKey =
  | "whatsapp"
  | "web"
  | "seo"
  | "bot"
  | "shield"
  | "zap"
  | "calendar"
  | "chart"
  | "sparkles"
  | "target"
  | "plug"
  | "clock"
  | "store"
  | "utensils"
  | "heart"
  | "building"
  | "briefcase"
  | "graduation"
  | "users"
  | "book"
  | "message"
  | "workflow"
  | "rocket"
  | "search"
  | "phone"
  | "mapPin"
  | "layers";

export const site = {
  name: "Nébula",
  legalName: "Nébula",
  domain: "https://nebula.ai", // ⚠️ EDITABLE: dominio final
  url: "https://nebula.ai",
  locale: "es_CO",
  tagline: "Inteligencia artificial que trabaja por ti, 24/7",
  description:
    "Nébula construye agentes de IA para WhatsApp, páginas web de alta conversión y posicionamiento SEO/GEO para que tu negocio venda y atienda de forma automática, todo el día.",
  // ⚠️ EDITABLE: número de WhatsApp (formato internacional, solo dígitos).
  // Se sobreescribe con la variable de entorno NEXT_PUBLIC_WHATSAPP.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP ?? "573000000000",
  email: "santiagocifuentesss1@gmail.com",
  social: {
    instagram: "https://instagram.com/", // ⚠️ EDITABLE
    linkedin: "https://linkedin.com/", // ⚠️ EDITABLE
  },
} as const;

/** Build a wa.me link with a prefilled message. */
export function whatsappUrl(message?: string) {
  const text = message ?? "Hola Nébula 👋, quiero agendar una demo.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav: { label: string; href: string }[] = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo funciona", href: "/#proceso" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Precios", href: "/#servicios" },
  { label: "FAQ", href: "/#faq" },
];

export type Plan = {
  name: string;
  highlight?: boolean;
  /** Primary one-off cost. */
  setup: { label: string; amount: number };
  /** Recurring cost. */
  recurring?: { label: string; amount: number };
  features: string[];
};

export type Service = {
  id: string;
  icon: IconKey;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  plans: Plan[];
  /** bento span hint */
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "agente-whatsapp",
    icon: "whatsapp",
    eyebrow: "Producto estrella",
    title: "Agente de WhatsApp con IA",
    description:
      "Automatiza tu atención, califica prospectos y vende 24/7 sin detenerte. Un agente entrenado con tu negocio que responde en segundos, agenda citas y cierra ventas.",
    bullets: [
      "Respuestas instantáneas, todo el día",
      "Calificación y seguimiento de prospectos",
      "Agendamiento automático de citas",
      "Integración con tu catálogo y CRM",
    ],
    featured: true,
    plans: [
      {
        name: "Básico",
        setup: { label: "Implementación", amount: 800000 },
        recurring: { label: "Mensualidad", amount: 150000 },
        features: [
          "Agente de atención al cliente",
          "Respuestas 24/7 entrenadas con tu negocio",
          "Hasta 1 número de WhatsApp",
          "Reportes mensuales",
        ],
      },
      {
        name: "Avanzado",
        highlight: true,
        setup: { label: "Implementación", amount: 1500000 },
        recurring: { label: "Mensualidad", amount: 250000 },
        features: [
          "Todo lo del plan Básico",
          "Ventas y cierre asistido por IA",
          "Servicio al cliente avanzado",
          "Agendamiento automatizado de citas",
          "Integraciones a medida",
        ],
      },
    ],
  },
  {
    id: "paginas-web",
    icon: "web",
    eyebrow: "Presencia digital",
    title: "Páginas Web",
    description:
      "Desarrollo a medida, optimizado y con diseño de alta conversión. Sitios rápidos, impecables en móvil y pensados para convertir visitantes en clientes.",
    bullets: [
      "Diseño premium a medida",
      "Optimización de velocidad y SEO técnico",
      "100% responsive",
      "Analítica y mejoras continuas",
    ],
    plans: [
      {
        name: "Básico",
        setup: { label: "Inversión inicial", amount: 600000 },
        features: [
          "Sitio de alta conversión",
          "Diseño responsive premium",
          "SEO técnico de base",
          "Formularios y WhatsApp integrados",
        ],
      },
      {
        name: "Avanzado",
        highlight: true,
        setup: { label: "Inversión inicial", amount: 1200000 },
        recurring: { label: "Mantenimiento mensual", amount: 200000 },
        features: [
          "Todo lo del plan Básico",
          "Dominio y hosting incluidos",
          "Página profesional, animada y avanzada",
          "Pagos directos en la página",
          "Posicionamiento SEO + GEO (citable por IA)",
          "Google Business Profile / Maps",
        ],
      },
    ],
  },
];

export type Step = {
  n: string;
  title: string;
  description: string;
  icon: IconKey;
};

export const steps: Step[] = [
  {
    n: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu negocio, tus canales y tus cuellos de botella para diseñar la solución con mayor impacto.",
    icon: "target",
  },
  {
    n: "02",
    title: "Diseño y entrenamiento",
    description:
      "Construimos y entrenamos tu agente, web o estrategia con tu información, tu tono y tus objetivos.",
    icon: "sparkles",
  },
  {
    n: "03",
    title: "Integración",
    description:
      "Conectamos WhatsApp, tu sitio, tu CRM y tus herramientas para que todo funcione como un solo sistema.",
    icon: "plug",
  },
  {
    n: "04",
    title: "Optimización continua",
    description:
      "Medimos, iteramos y mejoramos cada mes. Tu sistema se vuelve más inteligente con el tiempo.",
    icon: "chart",
  },
];

// ⚠️ EDITABLE: métricas de ejemplo. Reemplazar con datos reales.
export type Metric = { value: number; suffix?: string; prefix?: string; label: string };
export const metrics: Metric[] = [
  { prefix: "+", value: 40, suffix: "%", label: "Más conversiones" },
  { value: 24, suffix: "/7", label: "Atención sin pausa" },
  { value: 10, suffix: "×", label: "Velocidad de respuesta" },
  { prefix: "-", value: 65, suffix: "%", label: "Tiempo de respuesta" },
];

// ⚠️ EDITABLE: testimonios de ejemplo. Reemplazar con clientes reales.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      "El agente de WhatsApp atiende a todos nuestros clientes al instante. Triplicamos las reservas sin contratar más personal.",
    name: "Valentina Ríos",
    role: "Gerente · Hotel boutique",
    initials: "VR",
  },
  {
    quote:
      "Pasamos de responder en horas a responder en segundos. Las ventas por WhatsApp se dispararon desde el primer mes.",
    name: "Andrés Mejía",
    role: "Fundador · Retail",
    initials: "AM",
  },
  {
    quote:
      "La nueva web y el SEO nos pusieron primeros en Google en nuestra ciudad. Llegan clientes nuevos todos los días.",
    name: "Camila Torres",
    role: "Directora comercial · Servicios",
    initials: "CT",
  },
];

export type Tech = { name: string; note: string };
export const techStack: Tech[] = [
  { name: "OpenAI · GPT", note: "Razonamiento y lenguaje" },
  { name: "Anthropic · Claude", note: "Agentes confiables" },
  { name: "WhatsApp Business", note: "Mensajería oficial" },
  { name: "Google", note: "Búsqueda y Maps" },
  { name: "Next.js", note: "Webs ultrarrápidas" },
  { name: "Vercel · Cloudflare", note: "Infraestructura global" },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Un agente de WhatsApp suele estar operativo en 1 a 2 semanas. Las páginas web, según el alcance, entre 2 y 4 semanas. Te damos un cronograma claro desde el diagnóstico.",
  },
  {
    q: "¿El agente de IA suena natural?",
    a: "Sí. Entrenamos el agente con la información, el tono y las preguntas frecuentes de tu negocio para que las conversaciones se sientan humanas y precisas.",
  },
  {
    q: "¿Se integra con mis herramientas actuales?",
    a: "Conectamos WhatsApp, tu sitio web, tu CRM, calendarios y catálogos. Si usas una herramienta específica, la evaluamos y la integramos cuando es posible.",
  },
  {
    q: "¿Qué pasa si una conversación es muy compleja?",
    a: "El agente deriva automáticamente a una persona de tu equipo cuando detecta casos que requieren atención humana, sin perder el contexto de la conversación.",
  },
  {
    q: "¿Los precios incluyen IVA?",
    a: "Los valores mostrados son de referencia en pesos colombianos (COP). Te entregamos una cotización formal y detallada según tu caso antes de iniciar.",
  },
  {
    q: "¿Tengo que firmar una permanencia larga?",
    a: "No exigimos permanencias forzadas. La mensualidad cubre operación, soporte y mejoras; trabajamos para que renueves por resultados, no por contrato.",
  },
];
