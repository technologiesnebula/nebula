/**
 * NÉBULA · Navegación de mega-menú y contenido de páginas internas.
 *
 * Inspirado en la estructura de navegación tipo Decagon (Producto / Industrias /
 * Compañía), pero con copy, paleta y contexto propios de Nébula (Colombia · IA
 * para WhatsApp, web y posicionamiento SEO/GEO).
 *
 * Una sola fuente de verdad: el navbar, las páginas de overview (`/producto`,
 * `/industrias`, `/compania`) y las páginas de detalle leen de aquí.
 */

import type { IconKey } from "@/lib/site";

/* ----------------------------- Tipos ----------------------------- */

export type MenuItem = {
  /** slug relativo dentro del grupo, p. ej. "agente-whatsapp" */
  slug: string;
  label: string;
  /** descripción corta para el mega-menú */
  blurb: string;
  icon: IconKey;
};

export type MenuGroup = {
  /** clave de ruta sin acentos: "producto" | "industrias" | "compania" */
  key: "producto" | "industrias" | "compania";
  label: string;
  /** ruta de la página de overview del grupo */
  href: string;
  /** descripción del grupo (cabecera del mega-menú) */
  blurb: string;
  /** layout del panel desktop */
  layout: "grid" | "list";
  /** copy de la página de overview del grupo. Usa `|` para el gradiente. */
  overview: { title: string; subtitle: string };
  items: MenuItem[];
};

export type Feature = {
  icon: IconKey;
  title: string;
  description: string;
};

export type Step = {
  n: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type PageContent = {
  /** ruta completa: `${group.key}/${slug}` */
  id: string;
  group: MenuGroup["key"];
  eyebrow: string;
  /** título; usar `|` para marcar la parte con gradiente */
  title: string;
  lead: string;
  intro: string;
  icon: IconKey;
  features: Feature[];
  highlights: string[];
  steps?: Step[];
  stats?: Stat[];
  cta: {
    title: string;
    subtitle: string;
    /** mensaje prellenado de WhatsApp */
    message: string;
  };
};

/* --------------------------- Mega-menú --------------------------- */

export const menuGroups: MenuGroup[] = [
  {
    key: "producto",
    label: "Producto",
    href: "/producto",
    blurb: "Soluciones de IA, web y posicionamiento que trabajan por ti 24/7.",
    layout: "grid",
    overview: {
      title: "Un sistema completo para | vender y atender con IA",
      subtitle:
        "Agentes de WhatsApp, páginas web de alta conversión, posicionamiento SEO/GEO y automatizaciones que funcionan solas o juntas como un solo sistema.",
    },
    items: [
      {
        slug: "agente-whatsapp",
        label: "Agente de WhatsApp con IA",
        blurb: "Atiende, califica y vende automáticamente.",
        icon: "whatsapp",
      },
      {
        slug: "paginas-web",
        label: "Páginas Web de alta conversión",
        blurb: "Sitios rápidos, premium y hechos para convertir.",
        icon: "web",
      },
      {
        slug: "seo-geo",
        label: "Posicionamiento SEO & GEO",
        blurb: "Visible en Google y citado por la IA.",
        icon: "seo",
      },
      {
        slug: "automatizacion",
        label: "Automatización & Integraciones",
        blurb: "Conecta WhatsApp, tu CRM y tus herramientas.",
        icon: "workflow",
      },
    ],
  },
  {
    key: "industrias",
    label: "Industrias",
    href: "/industrias",
    blurb: "Inteligencia artificial aplicada a la realidad de tu sector.",
    layout: "grid",
    overview: {
      title: "IA pensada para | tu sector",
      subtitle:
        "Cada industria tiene sus propios retos. Adaptamos los agentes de IA, la web y el posicionamiento a la forma en que tu negocio realmente atiende y vende.",
    },
    items: [
      {
        slug: "retail",
        label: "Comercio y Retail",
        blurb: "Vende por WhatsApp y atiende sin filas.",
        icon: "store",
      },
      {
        slug: "restaurantes",
        label: "Restaurantes y Hostelería",
        blurb: "Reservas y pedidos automáticos.",
        icon: "utensils",
      },
      {
        slug: "salud",
        label: "Salud y Bienestar",
        blurb: "Agenda citas y reduce inasistencias.",
        icon: "heart",
      },
      {
        slug: "inmobiliaria",
        label: "Inmobiliaria",
        blurb: "Califica interesados y agenda visitas.",
        icon: "building",
      },
      {
        slug: "servicios-profesionales",
        label: "Servicios Profesionales",
        blurb: "Cotiza y agenda sin perder leads.",
        icon: "briefcase",
      },
      {
        slug: "educacion",
        label: "Educación",
        blurb: "Resuelve admisiones e inscripciones.",
        icon: "graduation",
      },
    ],
  },
  {
    key: "compania",
    label: "Compañía",
    href: "/compania",
    blurb: "El equipo y la visión detrás de Nébula.",
    layout: "list",
    overview: {
      title: "El equipo detrás de | Nébula",
      subtitle:
        "Somos una agencia colombiana de IA, diseño y estrategia. Conoce quiénes somos, únete al equipo o escríbenos para empezar tu proyecto.",
    },
    items: [
      {
        slug: "acerca",
        label: "Acerca de Nébula",
        blurb: "Quiénes somos y cómo trabajamos.",
        icon: "book",
      },
      {
        slug: "carreras",
        label: "Trabaja con nosotros",
        blurb: "Únete a un equipo que construye con IA.",
        icon: "users",
      },
      {
        slug: "contacto",
        label: "Contacto",
        blurb: "Hablemos de tu proyecto hoy.",
        icon: "message",
      },
    ],
  },
];

/** Helper: encuentra un grupo por su clave de ruta. */
export function getGroup(key: MenuGroup["key"]) {
  return menuGroups.find((g) => g.key === key)!;
}

/* ----------------------- Contenido de páginas ----------------------- */

const pages: PageContent[] = [
  /* ===================== PRODUCTO ===================== */
  {
    id: "producto/agente-whatsapp",
    group: "producto",
    eyebrow: "Producto · Agente de IA",
    title: "Tu mejor vendedor vive en | WhatsApp",
    lead: "Un agente de IA entrenado con tu negocio que responde en segundos, califica prospectos, agenda citas y cierra ventas. Sin pausas, sin festivos, sin perder un solo mensaje.",
    intro:
      "El 90% de los colombianos abre WhatsApp todos los días, pero la mayoría de los negocios responde tarde o no responde. Nébula convierte ese canal en una máquina de atención y ventas que trabaja por ti las 24 horas, con el tono y la información de tu marca.",
    icon: "whatsapp",
    features: [
      {
        icon: "zap",
        title: "Respuestas en segundos",
        description:
          "Atiende a todos tus clientes al instante, incluso de madrugada o cuando tu equipo está ocupado.",
      },
      {
        icon: "target",
        title: "Califica prospectos",
        description:
          "Detecta quién está listo para comprar, recoge sus datos y los organiza para tu equipo de ventas.",
      },
      {
        icon: "calendar",
        title: "Agenda citas solo",
        description:
          "Se conecta con tu calendario para reservar, confirmar y recordar citas sin intervención humana.",
      },
      {
        icon: "plug",
        title: "Integrado con todo",
        description:
          "Catálogo, CRM, pagos y sistemas internos: el agente conversa con tus herramientas, no solo con tus clientes.",
      },
    ],
    highlights: [
      "Entrenado con tu información, tono y preguntas frecuentes",
      "Deriva a una persona cuando el caso lo requiere, sin perder contexto",
      "Soporta múltiples conversaciones a la vez",
      "Reportes mensuales de conversaciones y conversiones",
    ],
    stats: [
      { value: "24/7", label: "Atención sin pausa" },
      { value: "10×", label: "Más rápido al responder" },
      { value: "+40%", label: "Más conversiones" },
    ],
    cta: {
      title: "¿Listo para que WhatsApp venda por ti?",
      subtitle:
        "Agenda una demo y verás tu propio agente respondiendo como tu mejor asesor.",
      message:
        "Hola Nébula 👋, quiero una demo del Agente de WhatsApp con IA.",
    },
  },
  {
    id: "producto/paginas-web",
    group: "producto",
    eyebrow: "Producto · Web",
    title: "Páginas web que | convierten visitantes en clientes",
    lead: "Desarrollo a medida, ultrarrápido y con diseño premium. Sitios impecables en móvil, optimizados para SEO y pensados para que cada visita se convierta en una oportunidad.",
    intro:
      "Una web bonita no basta: tiene que cargar rápido, verse perfecta en el celular y guiar al visitante hacia la acción. En Nébula diseñamos y desarrollamos sitios a medida con la misma tecnología que usan las mejores empresas del mundo.",
    icon: "web",
    features: [
      {
        icon: "rocket",
        title: "Velocidad extrema",
        description:
          "Construidas con Next.js y desplegadas en infraestructura global para cargar en menos de un segundo.",
      },
      {
        icon: "sparkles",
        title: "Diseño premium",
        description:
          "Interfaces animadas, modernas y a medida que transmiten la calidad real de tu marca.",
      },
      {
        icon: "seo",
        title: "SEO técnico de base",
        description:
          "Estructura, metadatos y rendimiento optimizados para que Google te encuentre desde el día uno.",
      },
      {
        icon: "whatsapp",
        title: "Conversión integrada",
        description:
          "Formularios, pagos y botones de WhatsApp conectados para capturar cada oportunidad.",
      },
    ],
    highlights: [
      "100% responsive: impecable en móvil, tablet y escritorio",
      "Dominio, hosting y certificado de seguridad incluidos",
      "Pagos directos en la página (opcional)",
      "Analítica y mejoras continuas mes a mes",
    ],
    stats: [
      { value: "<1s", label: "Tiempo de carga" },
      { value: "100", label: "Responsive total" },
      { value: "SEO+GEO", label: "Listo para buscadores e IA" },
    ],
    cta: {
      title: "Construyamos tu próxima web",
      subtitle:
        "Cuéntanos tu proyecto y te mostramos cómo se vería tu sitio de alta conversión.",
      message: "Hola Nébula 👋, quiero una página web de alta conversión.",
    },
  },
  {
    id: "producto/seo-geo",
    group: "producto",
    eyebrow: "Producto · Visibilidad",
    title: "Que te encuentren en Google | y en la IA",
    lead: "Posicionamiento SEO tradicional + GEO (Generative Engine Optimization) para que tu negocio aparezca tanto en los buscadores como en las respuestas de ChatGPT, Gemini y Perplexity.",
    intro:
      "La búsqueda cambió: cada vez más personas preguntan a una IA antes que a Google. El SEO te posiciona en los buscadores; el GEO hace que las inteligencias artificiales te citen como respuesta. Nébula trabaja ambos frentes para multiplicar tu visibilidad.",
    icon: "seo",
    features: [
      {
        icon: "search",
        title: "SEO técnico y de contenido",
        description:
          "Optimizamos estructura, velocidad, palabras clave y contenido para escalar en Google.",
      },
      {
        icon: "sparkles",
        title: "GEO: citable por IA",
        description:
          "Estructuramos tu información para que ChatGPT, Gemini y Perplexity te recomienden.",
      },
      {
        icon: "mapPin",
        title: "Presencia local",
        description:
          "Google Business Profile y Maps optimizados para que te encuentren en tu ciudad.",
      },
      {
        icon: "chart",
        title: "Medición real",
        description:
          "Reportes claros de posiciones, tráfico y menciones para ver el avance mes a mes.",
      },
    ],
    highlights: [
      "Auditoría inicial de SEO y visibilidad en IA",
      "Optimización de contenido y datos estructurados (schema)",
      "Generación de llms.txt y contenido citable",
      "Estrategia de palabras clave y autoridad de marca",
    ],
    stats: [
      { value: "#1", label: "Meta en tu ciudad" },
      { value: "SGE", label: "Optimizado para IA" },
      { value: "30d", label: "Primeros resultados" },
    ],
    cta: {
      title: "Hagamos que te encuentren",
      subtitle:
        "Solicita una auditoría gratuita de tu visibilidad en Google y en la IA.",
      message:
        "Hola Nébula 👋, quiero mejorar mi posicionamiento SEO y GEO.",
    },
  },
  {
    id: "producto/automatizacion",
    group: "producto",
    eyebrow: "Producto · Automatización",
    title: "Conecta tus herramientas y | deja que trabajen solas",
    lead: "Integramos WhatsApp, tu CRM, tu calendario, tus pagos y tus catálogos en un solo sistema que funciona como un equipo invisible que nunca descansa.",
    intro:
      "Las tareas repetitivas frenan a tu equipo: copiar datos, responder lo mismo, agendar, hacer seguimiento. Automatizamos esos procesos y conectamos tus herramientas para que la información fluya sola y tu gente se enfoque en lo que de verdad importa.",
    icon: "workflow",
    features: [
      {
        icon: "plug",
        title: "Integraciones a medida",
        description:
          "Conectamos las herramientas que ya usas para que conversen entre sí sin trabajo manual.",
      },
      {
        icon: "zap",
        title: "Flujos automáticos",
        description:
          "Seguimientos, recordatorios y respuestas que se disparan solos según lo que pase en tu negocio.",
      },
      {
        icon: "chart",
        title: "Datos en un solo lugar",
        description:
          "Cada conversación y venta queda registrada y organizada, lista para analizar.",
      },
      {
        icon: "shield",
        title: "Confiable y seguro",
        description:
          "Procesos robustos, con controles y respaldo para que nada se pierda en el camino.",
      },
    ],
    highlights: [
      "Conexión con WhatsApp, CRM, calendarios y catálogos",
      "Automatización de seguimientos y recordatorios",
      "Sincronización de datos en tiempo real",
      "Paneles de control a tu medida",
    ],
    cta: {
      title: "Automaticemos tu operación",
      subtitle:
        "Te ayudamos a identificar qué procesos puedes dejar en manos de la IA.",
      message:
        "Hola Nébula 👋, quiero automatizar e integrar mis herramientas.",
    },
  },

  /* ===================== INDUSTRIAS ===================== */
  {
    id: "industrias/retail",
    group: "industrias",
    eyebrow: "Industria · Retail",
    title: "Vende más por WhatsApp, | sin contratar más personal",
    lead: "Para tiendas y comercios que reciben decenas de mensajes al día. El agente de Nébula responde dudas, muestra tu catálogo, toma pedidos y libera a tu equipo.",
    intro:
      "En retail, cada mensaje sin responder es una venta que se va a la competencia. Nébula atiende a todos tus clientes al instante, recomienda productos y cierra pedidos directamente en el chat, mientras tu equipo se enfoca en la tienda.",
    icon: "store",
    features: [
      {
        icon: "whatsapp",
        title: "Catálogo en el chat",
        description:
          "Muestra productos, precios y disponibilidad sin que el cliente salga de WhatsApp.",
      },
      {
        icon: "zap",
        title: "Pedidos sin filas",
        description:
          "Toma el pedido, calcula el total y coordina la entrega de forma automática.",
      },
      {
        icon: "target",
        title: "Recupera carritos",
        description:
          "Hace seguimiento a quienes preguntaron y no compraron para cerrar la venta.",
      },
    ],
    highlights: [
      "Respuesta inmediata en horas pico y de madrugada",
      "Recomendaciones según lo que busca el cliente",
      "Integración con tu inventario y medios de pago",
      "Más ventas sin ampliar el equipo",
    ],
    stats: [
      { value: "+40%", label: "Más conversiones" },
      { value: "0", label: "Mensajes sin responder" },
      { value: "24/7", label: "Tienda siempre abierta" },
    ],
    cta: {
      title: "Convierte tu WhatsApp en tu mejor tienda",
      subtitle: "Te mostramos cómo vendería tu negocio con un agente de IA.",
      message:
        "Hola Nébula 👋, tengo un comercio y quiero vender más por WhatsApp.",
    },
  },
  {
    id: "industrias/restaurantes",
    group: "industrias",
    eyebrow: "Industria · Hostelería",
    title: "Reservas y pedidos | en piloto automático",
    lead: "Para restaurantes, cafés y hoteles. El agente de Nébula gestiona reservas, responde el menú y toma pedidos sin saturar a tu personal en el momento de mayor demanda.",
    intro:
      "Cuando el local está lleno, nadie alcanza a contestar el teléfono ni WhatsApp. Nébula atiende esas conversaciones por ti: confirma reservas, resuelve dudas del menú y coordina domicilios, para que no pierdas clientes en las horas pico.",
    icon: "utensils",
    features: [
      {
        icon: "calendar",
        title: "Reservas automáticas",
        description:
          "Toma, confirma y recuerda reservas conectándose con tu disponibilidad real.",
      },
      {
        icon: "whatsapp",
        title: "Menú y pedidos",
        description:
          "Responde el menú, sugiere platos y toma pedidos para domicilio o recoger.",
      },
      {
        icon: "clock",
        title: "Sin saturar al equipo",
        description:
          "Atiende decenas de chats a la vez justo cuando tu personal está más ocupado.",
      },
    ],
    highlights: [
      "Confirmaciones y recordatorios para reducir inasistencias",
      "Respuestas a preguntas frecuentes (horarios, ubicación, menú)",
      "Coordinación de domicilios y reservas de grupos",
      "Más mesas ocupadas, menos llamadas perdidas",
    ],
    stats: [
      { value: "-50%", label: "Inasistencias" },
      { value: "24/7", label: "Reservas abiertas" },
      { value: "+30%", label: "Pedidos atendidos" },
    ],
    cta: {
      title: "Llena tu local sin llenar de trabajo a tu equipo",
      subtitle: "Agenda una demo pensada para tu restaurante u hotel.",
      message:
        "Hola Nébula 👋, tengo un restaurante/hotel y quiero automatizar reservas y pedidos.",
    },
  },
  {
    id: "industrias/salud",
    group: "industrias",
    eyebrow: "Industria · Salud",
    title: "Agenda citas y reduce | las inasistencias",
    lead: "Para clínicas, consultorios y centros de bienestar. El agente de Nébula agenda, confirma y recuerda citas, y responde dudas frecuentes con un trato cálido y profesional.",
    intro:
      "En salud, una agenda desordenada y las inasistencias cuestan dinero y tiempo. Nébula automatiza la programación de citas, envía recordatorios y resuelve las preguntas de tus pacientes, para que tu equipo se concentre en atender, no en contestar el teléfono.",
    icon: "heart",
    features: [
      {
        icon: "calendar",
        title: "Citas sin fricción",
        description:
          "Agenda, reprograma y confirma citas conectándose con tu calendario.",
      },
      {
        icon: "clock",
        title: "Recordatorios automáticos",
        description:
          "Reduce las inasistencias con recordatorios oportunos y amables.",
      },
      {
        icon: "shield",
        title: "Trato profesional",
        description:
          "Responde con un tono cuidado y deriva a una persona en casos sensibles.",
      },
    ],
    highlights: [
      "Programación y reprogramación de citas 24/7",
      "Recordatorios que disminuyen las inasistencias",
      "Respuestas a preguntas frecuentes de pacientes",
      "Manejo cuidadoso y derivación humana cuando se necesita",
    ],
    stats: [
      { value: "-60%", label: "Inasistencias" },
      { value: "24/7", label: "Agenda disponible" },
      { value: "+35%", label: "Citas confirmadas" },
    ],
    cta: {
      title: "Optimiza tu agenda médica",
      subtitle:
        "Te mostramos cómo Nébula ordena tus citas y mejora la experiencia del paciente.",
      message:
        "Hola Nébula 👋, tengo un consultorio/clínica y quiero automatizar mis citas.",
    },
  },
  {
    id: "industrias/inmobiliaria",
    group: "industrias",
    eyebrow: "Industria · Inmobiliaria",
    title: "Califica interesados y | agenda visitas solo",
    lead: "Para constructoras, inmobiliarias y agentes. El agente de Nébula responde por cada propiedad, filtra a los interesados reales y agenda las visitas mientras tú cierras negocios.",
    intro:
      "Un proyecto inmobiliario genera muchos contactos, pero pocos están listos para comprar. Nébula atiende cada consulta al instante, filtra por presupuesto e interés, comparte información de las propiedades y agenda visitas con los prospectos que de verdad valen la pena.",
    icon: "building",
    features: [
      {
        icon: "target",
        title: "Leads calificados",
        description:
          "Filtra interesados por presupuesto, zona y necesidad antes de pasar a tu equipo.",
      },
      {
        icon: "calendar",
        title: "Visitas agendadas",
        description:
          "Coordina y confirma visitas según la disponibilidad de tus asesores.",
      },
      {
        icon: "whatsapp",
        title: "Fichas al instante",
        description:
          "Comparte fotos, precios y detalles de cada propiedad directo en el chat.",
      },
    ],
    highlights: [
      "Atención inmediata a cada consulta de cada portal o anuncio",
      "Calificación automática de prospectos",
      "Seguimiento a interesados que no respondieron",
      "Tu equipo dedica el tiempo solo a quien está listo para comprar",
    ],
    stats: [
      { value: "3×", label: "Más visitas agendadas" },
      { value: "24/7", label: "Atención a leads" },
      { value: "+50%", label: "Leads calificados" },
    ],
    cta: {
      title: "Vende más inmuebles con menos esfuerzo",
      subtitle: "Agenda una demo pensada para tu proyecto inmobiliario.",
      message:
        "Hola Nébula 👋, soy del sector inmobiliario y quiero calificar leads y agendar visitas.",
    },
  },
  {
    id: "industrias/servicios-profesionales",
    group: "industrias",
    eyebrow: "Industria · Servicios",
    title: "No vuelvas a perder un lead | por responder tarde",
    lead: "Para abogados, contadores, agencias y consultores. El agente de Nébula responde al instante, explica tus servicios, cotiza y agenda reuniones para que cada contacto se convierta en cliente.",
    intro:
      "En servicios profesionales, el primero que responde suele ganar el cliente. Nébula contesta cada consulta en segundos, explica tu propuesta de valor, recoge la información del caso y agenda la reunión, para que tú dediques tu tiempo a entregar resultados.",
    icon: "briefcase",
    features: [
      {
        icon: "zap",
        title: "Respuesta inmediata",
        description:
          "Atiende cada consulta al instante, incluso fuera del horario de oficina.",
      },
      {
        icon: "target",
        title: "Cotiza y filtra",
        description:
          "Recoge los datos del caso, da un primer estimado y prioriza a los clientes ideales.",
      },
      {
        icon: "calendar",
        title: "Reuniones agendadas",
        description:
          "Coordina llamadas o reuniones conectándose con tu calendario.",
      },
    ],
    highlights: [
      "Atención profesional con el tono de tu firma",
      "Explicación clara de servicios y honorarios",
      "Recolección de información del caso antes de la reunión",
      "Seguimiento automático a cotizaciones enviadas",
    ],
    stats: [
      { value: "<1min", label: "Tiempo de respuesta" },
      { value: "24/7", label: "Disponibilidad" },
      { value: "+45%", label: "Leads atendidos" },
    ],
    cta: {
      title: "Convierte más consultas en clientes",
      subtitle: "Te mostramos cómo Nébula atiende y agenda por tu firma.",
      message:
        "Hola Nébula 👋, ofrezco servicios profesionales y quiero atender mejor mis leads.",
    },
  },
  {
    id: "industrias/educacion",
    group: "industrias",
    eyebrow: "Industria · Educación",
    title: "Resuelve admisiones e | inscripciones sin saturarte",
    lead: "Para colegios, universidades y academias. El agente de Nébula responde dudas de admisiones, guía inscripciones y hace seguimiento a aspirantes durante todo el proceso.",
    intro:
      "Las temporadas de admisión generan miles de preguntas repetidas. Nébula responde de inmediato sobre programas, costos, fechas y requisitos, guía a los aspirantes paso a paso y hace seguimiento, para que tu equipo administrativo no colapse.",
    icon: "graduation",
    features: [
      {
        icon: "message",
        title: "Admisiones al instante",
        description:
          "Responde sobre programas, costos, becas, fechas y requisitos sin esperas.",
      },
      {
        icon: "users",
        title: "Guía la inscripción",
        description:
          "Acompaña al aspirante paso a paso durante todo el proceso de matrícula.",
      },
      {
        icon: "target",
        title: "Seguimiento a aspirantes",
        description:
          "Recuerda fechas y reactiva a quienes empezaron y no terminaron de inscribirse.",
      },
    ],
    highlights: [
      "Respuestas 24/7 durante toda la temporada de admisiones",
      "Información siempre actualizada y consistente",
      "Acompañamiento en el proceso de matrícula",
      "Menos carga para el equipo administrativo",
    ],
    stats: [
      { value: "24/7", label: "Admisiones abiertas" },
      { value: "+30%", label: "Inscripciones completadas" },
      { value: "0", label: "Preguntas sin responder" },
    ],
    cta: {
      title: "Haz que cada aspirante reciba respuesta",
      subtitle: "Agenda una demo pensada para tu institución educativa.",
      message:
        "Hola Nébula 👋, soy de una institución educativa y quiero automatizar admisiones e inscripciones.",
    },
  },

  /* ===================== COMPAÑÍA ===================== */
  {
    id: "compania/acerca",
    group: "compania",
    eyebrow: "Compañía · Nosotros",
    title: "Somos Nébula. | Hacemos que la IA trabaje por ti",
    lead: "Una agencia colombiana de inteligencia artificial, diseño y estrategia. Construimos agentes de WhatsApp, páginas web de alta conversión y posicionamiento SEO/GEO para que tu negocio venda y atienda de forma automática.",
    intro:
      "Nébula nació para acercar la inteligencia artificial a los negocios reales: comercios, restaurantes, consultorios, inmobiliarias y profesionales que no tienen por qué saber de tecnología, pero sí merecen sus beneficios. Combinamos lo último en IA con diseño y estrategia para entregar resultados medibles, no promesas.",
    icon: "book",
    features: [
      {
        icon: "target",
        title: "Resultados, no humo",
        description:
          "Cada solución se mide por su impacto real: más ventas, más citas, más visibilidad.",
      },
      {
        icon: "sparkles",
        title: "Tecnología de punta",
        description:
          "Trabajamos con lo mejor en IA, web e infraestructura, al alcance de tu negocio.",
      },
      {
        icon: "users",
        title: "Cerca de ti",
        description:
          "Acompañamiento humano y cercano en español, entendiendo tu contexto local.",
      },
    ],
    highlights: [
      "Especialistas en IA para WhatsApp, web y SEO/GEO",
      "Enfoque en pequeñas y medianas empresas de Colombia",
      "Mejora continua mes a mes, no proyectos que se abandonan",
      "Tecnología global con trato local y cercano",
    ],
    stats: [
      { value: "IA", label: "En el centro de todo" },
      { value: "CO", label: "Hecho en Colombia" },
      { value: "24/7", label: "Soluciones que no paran" },
    ],
    cta: {
      title: "Conozcamos tu negocio",
      subtitle:
        "Cuéntanos qué quieres lograr y diseñamos la solución con mayor impacto.",
      message: "Hola Nébula 👋, quiero conocer más sobre ustedes y sus servicios.",
    },
  },
  {
    id: "compania/carreras",
    group: "compania",
    eyebrow: "Compañía · Carreras",
    title: "Construye el futuro | de la IA con nosotros",
    lead: "Buscamos personas curiosas y obsesionadas con hacer cosas bien hechas. Si te emociona la inteligencia artificial, el diseño o el crecimiento de negocios, queremos conocerte.",
    intro:
      "En Nébula trabajamos con autonomía, herramientas de primer nivel y proyectos que de verdad cambian negocios. No importa solo tu título: importa cómo piensas, qué construyes y qué tan lejos quieres llegar. Aún siendo un equipo joven, hay espacio para crecer rápido.",
    icon: "users",
    features: [
      {
        icon: "bot",
        title: "IA & Automatización",
        description:
          "Diseña y entrena agentes conversacionales y flujos automáticos para clientes reales.",
      },
      {
        icon: "web",
        title: "Diseño & Desarrollo Web",
        description:
          "Crea sitios premium, rápidos y de alta conversión con tecnología moderna.",
      },
      {
        icon: "seo",
        title: "SEO/GEO & Growth",
        description:
          "Posiciona marcas en Google y en la IA, y haz crecer su visibilidad.",
      },
    ],
    highlights: [
      "Trabajo remoto y por objetivos",
      "Herramientas de IA de primer nivel para tu día a día",
      "Proyectos con impacto medible en negocios reales",
      "Aprendizaje y crecimiento acelerado",
    ],
    cta: {
      title: "¿Te suena? Hablemos",
      subtitle:
        "Escríbenos con tu perfil, portafolio o LinkedIn y conversemos.",
      message:
        "Hola Nébula 👋, me interesa trabajar con ustedes. Les comparto mi perfil:",
    },
  },
  {
    id: "compania/contacto",
    group: "compania",
    eyebrow: "Compañía · Contacto",
    title: "Hablemos de | tu proyecto",
    lead: "Cuéntanos qué quieres lograr y te respondemos rápido. Una conversación es suficiente para entender cómo la IA puede ayudar a tu negocio a vender y atender mejor.",
    intro:
      "La forma más rápida de empezar es escribirnos por WhatsApp: ahí mismo te asesoramos sin costo y, si quieres, te mostramos una demo en vivo. Prefiere el correo para temas más formales o propuestas detalladas. Estamos en Colombia y atendemos en español.",
    icon: "message",
    features: [
      {
        icon: "whatsapp",
        title: "WhatsApp",
        description:
          "La vía más rápida. Te respondemos y te asesoramos sin costo ni compromiso.",
      },
      {
        icon: "phone",
        title: "Demo en vivo",
        description:
          "Agenda una llamada y te mostramos tu agente o tu web funcionando.",
      },
      {
        icon: "mapPin",
        title: "Desde Colombia",
        description:
          "Atención cercana, en español y con contexto local, para todo el país.",
      },
    ],
    highlights: [
      "Respuesta rápida por WhatsApp",
      "Asesoría inicial sin costo",
      "Demo personalizada de tu solución",
      "Propuesta clara y a tu medida",
    ],
    cta: {
      title: "Escríbenos ahora",
      subtitle:
        "Da el primer paso: en minutos entendemos tu negocio y cómo ayudarte.",
      message: "Hola Nébula 👋, quiero hablar sobre un proyecto.",
    },
  },
];

/** Mapa por id para acceso O(1) desde las rutas. */
export const pageContent: Record<string, PageContent> = Object.fromEntries(
  pages.map((p) => [p.id, p])
);

/** Devuelve el contenido de una página de detalle. */
export function getPage(group: MenuGroup["key"], slug: string) {
  return pageContent[`${group}/${slug}`];
}
