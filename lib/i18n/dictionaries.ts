/**
 * Translation dictionaries.
 *
 * Strings can contain [[double-bracket]] sentinels to mark accent segments —
 * the <Accent /> helper component renders them as inline highlighted spans.
 *
 * Proper nouns (Anthony Pérez, React, Next.js, project names, URLs, emails)
 * are NOT in this file — they're rendered directly.
 */

const enDict = {
  meta: {
    description:
      'Semi Senior Frontend & Full Stack Developer specializing in React, Next.js, SaaS products and AI integrations. Open to remote opportunities.',
    ogDescription: 'Building scalable SaaS products and AI-powered apps',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
    home: 'Anthony Pérez — home',
    eyebrow: 'frontend · full stack',
    hire: 'Hire me',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobile: 'Mobile',
    language: 'Language',
  },
  loading: {
    initializing: 'initializing · session',
  },
  hero: {
    location: 'based in latam · remote · global',
    title: 'Frontend & Full Stack Developer',
    seniority: '─ semi senior',
    subtitle:
      'Building scalable [[SaaS products]], [[AI-powered apps]] and high-performance web experiences with [[React]], [[Next.js]] and modern technologies.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    metaProjectsLabel: 'projects',
    metaProjectsValue: '12',
    metaStackLabel: 'stack',
    metaStackValue: 'react · next',
  },
  about: {
    eyebrow: 'profile',
    index: '01',
    title:
      'A [[semi senior]] developer who ships [[production code]], not demos.',
    description:
      'I work where product, engineering and design overlap — translating ambiguous briefs into shippable software. Comfortable across the stack, deliberate about the parts that ship to users, opinionated about quality.',
    portraitRole: 'anthony pérez · ec · ↗ github.com/mortyec',
    portraitIndex: 'profile',
    focus: {
      saas: {
        label: 'SaaS Platforms',
        desc: 'Multi-tenant dashboards, billing flows and role-based experiences shipped at production grade.',
      },
      ai: {
        label: 'AI Products',
        desc: 'OpenAI-powered features — RAG, agents, streaming UIs and chat interfaces wired end-to-end.',
      },
      mvp: {
        label: 'Startup MVPs',
        desc: 'From zero to first paying user in weeks, not quarters. Tight scope, sharp execution.',
      },
      arch: {
        label: 'Scalable Frontend Architecture',
        desc: 'Component systems, typed contracts and folder structures that survive the second hire.',
      },
      perf: {
        label: 'Performance Optimization',
        desc: 'Core Web Vitals as a habit. INP, LCP, CLS — measured, tuned, defended in CI.',
      },
      e2e: {
        label: 'End-to-End Development',
        desc: 'Frontend, API routes, database schemas, auth, deploy. One person, one accountable surface.',
      },
    },
  },
  projects: {
    eyebrow: 'deploy log',
    title: 'Selected work, indexed by [[production]] deploy.',
    description:
      'Twelve live projects across automotive, real estate, education and industrial sectors. Built, shipped, maintained — links go to production.',
    countLabel: 'projects · all live',
    cardIndex: 'project',
    cardStatus: 'live',
    cardVisit: 'Visit website',
    cardStage: 'production',
    items: {
      lynkco:
        'Modern automotive brand website focused on premium UX, responsive performance and scalable frontend architecture.',
      vehicentroEc:
        'Enterprise automotive platform with optimized UX, fast-loading pages and modern responsive UI.',
      vehicentroCo:
        'Corporate automotive website built for scalability, brand presence and cross-device experience.',
      autazo:
        'Modern automotive marketplace platform with scalable frontend architecture and conversion-focused experience.',
      waikiki:
        'Educational platform designed for digital learning experiences, accessibility and scalable content management.',
      unbuenlugar:
        'Real estate marketplace platform for buying, selling and renting properties with modern UI and optimized search experience.',
      sinotrukCo:
        'Heavy machinery and automotive enterprise website with strong branding and responsive design.',
      sinotrukEc:
        'Corporate automotive platform with performance optimization and modern frontend implementation.',
      sunward:
        'Industrial machinery platform with responsive architecture and clean enterprise UI.',
      case: 'Enterprise-level industrial machinery website focused on usability and modern digital presence.',
      avaluos:
        'Real estate appraisal platform for Ecuador focused on property valuation workflows and digital accessibility.',
      mokenla:
        'Innovation school and digital education platform for Latin America with scalable educational infrastructure.',
    },
  },
  techstack: {
    eyebrow: 'stack',
    title: 'The tools [[I reach for]] when the clock is ticking.',
    description:
      'Boring is good. These are the technologies I trust to ship and maintain — chosen for ecosystem maturity, performance and developer ergonomics.',
    sub: {
      react: 'UI library',
      next: 'app router · 16',
      typescript: 'strict mode',
      tailwind: 'design system',
      node: 'runtime · api',
      supabase: 'db · auth · realtime',
      openai: 'llm · embeddings',
      vercel: 'edge · deploy',
    },
  },
  whyme: {
    eyebrow: 'advantage',
    title: 'Why teams pick me [[over the next CV]].',
    description:
      "Six things I bring to a team — beyond the stack list. These are the bets I'd make on myself if I were hiring.",
    reasons: {
      startup: {
        title: 'Startup Mindset',
        desc: 'Comfortable with ambiguity. I move from spec to deploy without waiting for permission to think.',
      },
      fast: {
        title: 'Fast Execution',
        desc: 'Sprint-ready. I scope tight, ship in small slices, and unblock review the same day.',
      },
      ui: {
        title: 'Modern UI / UX',
        desc: 'Interfaces that feel like premium software — not template starter kits. Craft visible in the details.',
      },
      ai: {
        title: 'AI-Ready Development',
        desc: 'LLM APIs, streaming UIs, embeddings, vector stores. AI as a feature, not a sticker on the homepage.',
      },
      saas: {
        title: 'Scalable SaaS Architecture',
        desc: 'Multi-tenant from day one. Auth boundaries, billing, role hierarchies, typed contracts end-to-end.',
      },
      remote: {
        title: 'Remote Collaboration',
        desc: 'Async-first by default. Strong written communication in English and Spanish — Slack, Linear, GitHub.',
      },
    },
  },
  remote: {
    eyebrow: 'open to remote opportunities',
    title: 'Looking for someone to [[ship the next thing]]?',
    description:
      'Targeted to US startups, AI teams and international product companies hiring remote engineers. Founder-friendly, ownership-minded, build-fast oriented.',
    items: {
      remote: { label: 'Global remote', value: 'available worldwide' },
      async: { label: 'Async first', value: 'overlaps US / EU' },
      based: { label: 'Based in', value: 'latam (GMT-5)' },
      languages: { label: 'Languages', value: 'english · spanish' },
    },
    heading: "Let's build something worth shipping.",
    contactDescription:
      "Drop a line about your product, team size and what you're trying to ship. I respond within 24 hours.",
    whatsappLabel: 'WhatsApp',
    whatsappNumber: '+593 999 051 864',
    socialFooter: 'or find me on',
  },
  footer: {
    role: 'Frontend · Full Stack Developer',
    navigate: 'navigate',
    channels: 'channels',
    nav: {
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
    },
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    copyright: '© 2026 Anthony Pérez. Built with Next.js & ❤️',
  },
}

export type Dictionary = typeof enDict

export const en: Dictionary = enDict

export const es: Dictionary = {
  meta: {
    description:
      'Frontend & Full Stack Developer Semi Senior, especializado en React, Next.js, productos SaaS e integraciones con IA. Disponible para oportunidades remotas.',
    ogDescription: 'Construyendo productos SaaS escalables y apps con IA',
  },
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    stack: 'Stack',
    contact: 'Contacto',
    home: 'Anthony Pérez — inicio',
    eyebrow: 'frontend · full stack',
    hire: 'Contrátame',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mobile: 'Móvil',
    language: 'Idioma',
  },
  loading: {
    initializing: 'inicializando · sesión',
  },
  hero: {
    location: 'basado en latam · remoto · global',
    title: 'Frontend & Full Stack Developer',
    seniority: '─ semi senior',
    subtitle:
      'Construyendo [[productos SaaS escalables]], [[apps con IA]] y experiencias web de alto rendimiento con [[React]], [[Next.js]] y tecnologías modernas.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contáctame',
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    metaProjectsLabel: 'proyectos',
    metaProjectsValue: '12',
    metaStackLabel: 'stack',
    metaStackValue: 'react · next',
  },
  about: {
    eyebrow: 'perfil',
    index: '01',
    title:
      'Un developer [[semi senior]] que entrega [[código en producción]], no demos.',
    description:
      'Trabajo en la intersección de producto, ingeniería y diseño — convirtiendo briefs ambiguos en software que se entrega. Cómodo en todo el stack, deliberado con lo que llega al usuario, exigente con la calidad.',
    portraitRole: 'anthony pérez · ec · ↗ github.com/mortyec',
    portraitIndex: 'perfil',
    focus: {
      saas: {
        label: 'Plataformas SaaS',
        desc: 'Dashboards multi-tenant, flujos de billing y experiencias basadas en roles, listas para producción.',
      },
      ai: {
        label: 'Productos con IA',
        desc: 'Features con OpenAI — RAG, agentes, UIs con streaming y chat conectados de punta a punta.',
      },
      mvp: {
        label: 'MVPs de Startup',
        desc: 'De cero al primer cliente pagando en semanas, no trimestres. Scope ajustado, ejecución filosa.',
      },
      arch: {
        label: 'Arquitectura Frontend Escalable',
        desc: 'Sistemas de componentes, contratos tipados y estructuras de carpetas que sobreviven al segundo developer.',
      },
      perf: {
        label: 'Optimización de Performance',
        desc: 'Core Web Vitals como hábito. INP, LCP, CLS — medidos, ajustados y defendidos en CI.',
      },
      e2e: {
        label: 'Desarrollo End-to-End',
        desc: 'Frontend, rutas de API, esquemas de base de datos, auth, deploy. Una persona, una superficie responsable.',
      },
    },
  },
  projects: {
    eyebrow: 'deploy log',
    title: 'Trabajo seleccionado, indexado por deploy en [[producción]].',
    description:
      'Doce proyectos en vivo: automotriz, real estate, educación e industria. Construidos, lanzados y mantenidos — los links van a producción.',
    countLabel: 'proyectos · todos en vivo',
    cardIndex: 'proyecto',
    cardStatus: 'en vivo',
    cardVisit: 'Visitar sitio',
    cardStage: 'producción',
    items: {
      lynkco:
        'Sitio de marca automotriz moderno, enfocado en UX premium, performance responsive y arquitectura frontend escalable.',
      vehicentroEc:
        'Plataforma automotriz empresarial con UX optimizada, páginas de carga rápida y UI moderna y responsive.',
      vehicentroCo:
        'Sitio corporativo automotriz construido para escalabilidad, presencia de marca y experiencia cross-device.',
      autazo:
        'Marketplace automotriz moderno con arquitectura frontend escalable y experiencia enfocada en conversión.',
      waikiki:
        'Plataforma educativa diseñada para experiencias de aprendizaje digital, accesibilidad y gestión de contenido escalable.',
      unbuenlugar:
        'Marketplace inmobiliario para compra, venta y alquiler de propiedades, con UI moderna y búsqueda optimizada.',
      sinotrukCo:
        'Sitio empresarial de maquinaria pesada y automotriz con branding fuerte y diseño responsive.',
      sinotrukEc:
        'Plataforma corporativa automotriz con optimización de performance e implementación frontend moderna.',
      sunward:
        'Plataforma de maquinaria industrial con arquitectura responsive y UI empresarial limpia.',
      case: 'Sitio empresarial de maquinaria industrial enfocado en usabilidad y presencia digital moderna.',
      avaluos:
        'Plataforma de avalúos inmobiliarios para Ecuador, enfocada en flujos de valuación y accesibilidad digital.',
      mokenla:
        'Escuela de innovación y plataforma de educación digital para Latinoamérica, con infraestructura educativa escalable.',
    },
  },
  techstack: {
    eyebrow: 'stack',
    title: 'Las herramientas a las que [[recurro]] cuando el reloj corre.',
    description:
      'Aburrido es bueno. Estas son las tecnologías en las que confío para lanzar y mantener — elegidas por madurez de ecosistema, performance y ergonomía para developers.',
    sub: {
      react: 'librería UI',
      next: 'app router · 16',
      typescript: 'strict mode',
      tailwind: 'design system',
      node: 'runtime · api',
      supabase: 'db · auth · realtime',
      openai: 'llm · embeddings',
      vercel: 'edge · deploy',
    },
  },
  whyme: {
    eyebrow: 'ventaja',
    title: 'Por qué los equipos me eligen [[sobre el siguiente CV]].',
    description:
      'Seis cosas que aporto a un equipo — más allá del listado de stack. Son las apuestas que haría sobre mí mismo si estuviera contratando.',
    reasons: {
      startup: {
        title: 'Mentalidad Startup',
        desc: 'Cómodo con la ambigüedad. Voy de la spec al deploy sin esperar permiso para pensar.',
      },
      fast: {
        title: 'Ejecución Rápida',
        desc: 'Listo para sprint. Acoto el alcance, entrego en slices pequeñas y libero el review el mismo día.',
      },
      ui: {
        title: 'UI / UX Moderno',
        desc: 'Interfaces que se sienten como software premium — no kits de template. El detalle se nota.',
      },
      ai: {
        title: 'Desarrollo Listo para IA',
        desc: 'APIs LLM, UIs con streaming, embeddings, vector stores. IA como feature, no como sticker en la home.',
      },
      saas: {
        title: 'Arquitectura SaaS Escalable',
        desc: 'Multi-tenant desde el día uno. Auth, billing, jerarquías de roles, contratos tipados end-to-end.',
      },
      remote: {
        title: 'Colaboración Remota',
        desc: 'Async por defecto. Comunicación escrita sólida en inglés y español — Slack, Linear, GitHub.',
      },
    },
  },
  remote: {
    eyebrow: 'abierto a oportunidades remotas',
    title: '¿Buscas a alguien para [[lanzar lo próximo]]?',
    description:
      'Apuntando a startups de US, equipos de IA y empresas internacionales de producto que contratan ingenieros remotos. Cercano a founders, con ownership, orientado a construir rápido.',
    items: {
      remote: { label: 'Remoto global', value: 'disponible mundialmente' },
      async: { label: 'Async primero', value: 'overlap con US / EU' },
      based: { label: 'Basado en', value: 'latam (GMT-5)' },
      languages: { label: 'Idiomas', value: 'inglés · español' },
    },
    heading: 'Construyamos algo que valga la pena entregar.',
    contactDescription:
      'Cuéntame sobre tu producto, el tamaño del equipo y qué intentas lanzar. Respondo en menos de 24 horas.',
    whatsappLabel: 'WhatsApp',
    whatsappNumber: '+593 999 051 864',
    socialFooter: 'o encuéntrame en',
  },
  footer: {
    role: 'Frontend · Full Stack Developer',
    navigate: 'navegar',
    channels: 'canales',
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      stack: 'Stack',
      contact: 'Contacto',
    },
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    copyright: '© 2026 Anthony Pérez. Hecho con Next.js & ❤️',
  },
}

export const dictionaries = { es, en } as const

