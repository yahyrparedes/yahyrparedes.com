// Site profile data for Yahyr Paredes · yahyrparedes.com

export interface Social {
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'email' | 'twitter' | 'instagram' | 'youtube';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: 'web' | 'mobile' | 'stack' | 'wrench' | 'sparkles';
  features: string[];
  stack: string[];
  process: { title: string; description: string }[];
  idealFor: string;
  notFor: string;
  pricing: string;
  faq: { question: string; answer: string }[];
}

export interface Plugin {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  platform: 'PrestaShop' | 'WordPress' | 'WooCommerce';
  version: string;
  price: string;
  priceUnit: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  installSteps: string[];
  faq: { question: string; answer: string }[];
  buyUrl: string;
  demoUrl?: string;
  status: 'available' | 'beta' | 'roadmap';
}

export interface PhotoGroup {
  title: string;
  photos: { src: string; alt: string; caption?: string }[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  category: 'mobile' | 'web' | 'iot' | 'fintech' | 'other';
  year: string;
  highlights?: string[];
}

export interface SiteProfile {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  location: string;
  country: string;
  email: string;
  bio: string;
  longBio: string;
  origin: string;
  socials: Social[];
  experience: Experience[];
  education: Education[];
  skills: { category: string; items: string[] }[];
  languages: { name: string; level: string }[];
  services: Service[];
  plugins: Plugin[];
  projects: Project[];
  photos: PhotoGroup[];
}

export const site: SiteProfile = {
  name: 'Yahyr Paredes',
  handle: 'yahyrparedes',
  role: 'Software developer',
  tagline: 'Software developer disponible para proyectos',
  location: 'Cortijos Nuevos, Jaén, Andalucía',
  country: 'España',
  email: 'hola@yahyrparedes.com',
  bio: 'Software developer con background en mobile (Android nativo, Kotlin) y backend (Java/Spring). Disponible para proyectos freelance, consultoría y auditorías.',
  longBio: `Nacido en Perú, llegué a España con mi familia en busca de nuevas oportunidades. Llevo más de 9 años construyendo software — empecé en Android, me especialicé en backend con Java/Spring, y ahora combino ambos mundos con infraestructura cloud (AWS, GCP) y desarrollo full-stack.

Mi enfoque es pragmático: menos buzzwords, más producto funcionando. Disfruto tanto de una arquitectura limpia como de un hot fix a las 2am que salva un deploy.

Ahora mismo estoy basado en Cortijos Nuevos (Jaén, Andalucía) y disponible para proyectos en remoto o presencial en España.`,
  origin: 'Perú → Jaén, España',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yahyrparedes', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/yahyrparedes', icon: 'github' },
    { label: 'Email', url: 'mailto:hola@yahyrparedes.com', icon: 'email' },
  ],
  experience: [
    {
      company: 'Delosi (Starbucks Perú)',
      role: 'Backend / Mobile Software Engineer',
      period: '2024 — 2025',
      location: 'Lima, Perú (remoto desde España)',
      url: 'https://delosi.com.pe',
      description: 'Desarrollo backend y mobile para el ecosistema de apps y sistemas de Starbucks Perú. Microservicios en AWS, autenticación con Cognito, observabilidad con CloudWatch.',
      highlights: [
        'Microservicios en Spring Boot desplegados en AWS Lambda',
        'Autenticación con AWS Cognito + JWT',
        'Apps internas con logging y circuit breaker',
      ],
      current: false,
    },
    {
      company: 'Avances Tecnológicos',
      role: 'Android Tech Lead',
      period: '2018 — 2020',
      location: 'Lima, Perú',
      description: 'Lideré el equipo Android en una empresa de IoT y seguridad. Arquitectura modular con Kotlin, integración con hardware vía Bluetooth y cámara.',
      highlights: [
        'Migré código legacy de Java a Kotlin (30% menos bugs)',
        'Entrené a 2 developers junior que ahora son Tech Lead y SRE',
        'Apps en producción con 50k+ instalaciones',
      ],
      current: false,
    },
    {
      company: 'Bancamóvil Proempresa',
      role: 'Android Developer',
      period: '2017 — 2018',
      location: 'Lima, Perú',
      description: 'App de banca móvil para empresas. Integración con APIs del banco, biometría, y hardening de seguridad.',
      highlights: [
        'Implementé autenticación con biometría (huella, face ID)',
        'Optimización de cold start time de 4.2s a 1.8s',
        'Certificación PCI-DSS de la app',
      ],
      current: false,
    },
    {
      company: 'Kwema',
      role: 'Mobile & IoT Developer',
      period: '2016 — 2017',
      location: 'Lima, Perú',
      description: 'App mobile que se conecta con wearables de seguridad personal. Integración BLE, geofencing, notificaciones críticas.',
      highlights: [
        'Integración Bluetooth Low Energy con wearables',
        'Geofencing + alertas en tiempo real',
        'App React Native (mi primer contacto con hybrid)',
      ],
      current: false,
    },
  ],
  education: [
    {
      institution: 'Universidad Nacional de Ingeniería (UNI)',
      degree: 'Ingeniería de Sistemas',
      period: '2011 — 2016',
      description: 'Formación base en algoritmia, estructuras de datos, redes y arquitectura de software.',
    },
  ],
  skills: [
    { category: 'Mobile', items: ['Kotlin', 'Java', 'Android', 'Jetpack Compose', 'Coroutines', 'Room', 'Retrofit', 'KMP'] },
    { category: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Python', 'Express', 'NestJS', 'Laravel'] },
    { category: 'Frontend', items: ['TypeScript', 'React', 'Astro', 'Next.js', 'Tailwind CSS', 'Vue'] },
    { category: 'Cloud & DevOps', items: ['AWS (Lambda, S3, Cognito, EC2)', 'GCP (Cloud Run, Firebase)', 'Docker', 'GitHub Actions', 'Nginx'] },
    { category: 'E-commerce', items: ['PrestaShop', 'WordPress', 'WooCommerce', 'PHP', 'MySQL', 'MariaDB'] },
    { category: 'Tools', items: ['Git', 'Linux', 'Postman', 'Figma basics', 'Notion'] },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional (lectura técnica, conversación profesional)' },
  ],
  services: [
    {
      slug: 'webs',
      name: 'Webs de alto rendimiento',
      tagline: 'Sitios web rápidos, optimizados para SEO, hechos para convertir.',
      description: 'Diseño y desarrollo de webs modernas con Astro, Next.js o lo que tu proyecto necesite. Desde landing pages hasta plataformas completas con backend.',
      icon: 'web',
      features: [
        'Static-first para velocidad extrema (LCP < 1s)',
        'SEO técnico completo: meta tags, schema, sitemap, Open Graph',
        'Diseño responsive mobile-first',
        'CMS opcional (Decap CMS, Sanity, Strapi) para que edites sin código',
        'Hosting optimizado: Coolify + Cloudflare CDN',
        'Analytics privacy-friendly (Umami o Plausible)',
      ],
      stack: ['Astro', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Astro DB / PostgreSQL', 'Cloudflare'],
      process: [
        { title: 'Discovery', description: 'Entiendo tu negocio, audiencia y objetivos. 1 sesión de 1h.' },
        { title: 'Diseño', description: 'Wireframes + mockups en Figma. Iteramos hasta que encaje.' },
        { title: 'Desarrollo', description: 'Build iterativo, deploys semanales para que veas progreso real.' },
        { title: 'Lanzamiento', description: 'Deploy + DNS + SSL + monitoring + handover con docs.' },
      ],
      idealFor: 'Negocios que necesitan una web rápida para captar clientes o mostrar producto.',
      notFor: 'Webs corporativas de 30 páginas estáticas que no necesitan performance extrema (uso un template más barato).',
      pricing: 'Desde 1.500€ para landing. Desde 4.500€ para sitio completo con CMS.',
      faq: [
        { question: '¿Cuánto tarda una web?', answer: 'Landing: 2-3 semanas. Sitio completo: 6-10 semanas.' },
        { question: '¿Puedo editar el contenido yo?', answer: 'Sí, integramos un CMS (Decap, Sanity o Strapi) y te enseño a usarlo.' },
        { question: '¿Qué pasa si ya tengo un sitio?', answer: 'Migramos el contenido y el SEO, sin perder rankings en Google.' },
      ],
    },
    {
      slug: 'apps',
      name: 'Apps móviles nativas e híbridas',
      tagline: 'Apps Android e iOS que la gente quiere usar.',
      description: 'Desarrollo de apps móviles con foco en UX y performance. Android nativo (Kotlin) es mi fuerte, iOS y React Native/Flutter cuando tiene sentido.',
      icon: 'mobile',
      features: [
        'Android nativo con Kotlin y Jetpack Compose (recomendado)',
        'iOS con Swift o SwiftUI',
        'Kotlin Multiplatform (KMP) si quieres compartir lógica con iOS',
        'React Native o Flutter si el equipo lo prefiere',
        'Integración con APIs REST/GraphQL',
        'Push notifications (FCM / APNs)',
        'Publicación en Google Play y App Store',
      ],
      stack: ['Kotlin', 'Jetpack Compose', 'Swift', 'KMP', 'Coroutines', 'Room', 'Retrofit', 'Firebase'],
      process: [
        { title: 'Concepto', description: 'Definimos features MVP, descartamos lo que no aporta.' },
        { title: 'Diseño UX/UI', description: 'Figma con flows de usuario + prototipado navegable.' },
        { title: 'Desarrollo iterativo', description: 'Sprints de 2 semanas, demo cada viernes.' },
        { title: 'QA + Lanzamiento', description: 'Testing en dispositivos reales, publicación en stores.' },
      ],
      idealFor: 'Negocios con un producto digital mobile-first o que necesitan una app para fidelizar clientes.',
      notFor: 'Apps internas de gestión muy simples (en ese caso una web app responsive es suficiente).',
      pricing: 'Desde 8.000€ para MVP Android. Desde 14.000€ para MVP Android + iOS.',
      faq: [
        { question: '¿Nativo o híbrido?', answer: 'Para 90% de casos, nativo (Kotlin/Swift) gana en UX y performance. Híbrido solo si necesitas lanzar en ambas plataformas rápido y el equipo lo prefiere.' },
        { question: '¿Cuánto tarda?', answer: 'MVP: 2-4 meses. App completa: 4-8 meses.' },
        { question: '¿Mantenimiento después?', answer: 'Ofrezco planes mensuales de mantenimiento. 1-2 días/mes desde 500€.' },
      ],
    },
    {
      slug: 'ecosistema',
      name: 'Ecosistema completo',
      tagline: 'Web + backend + infra + apps, todo conectado.',
      description: 'Para proyectos que necesitan toda la stack: frontend, backend, infraestructura cloud, mobile. AWS o GCP, lo que tu presupuesto indique.',
      icon: 'stack',
      features: [
        'Arquitectura completa: backend + frontend + mobile + infra',
        'Infraestructura como código (Terraform o Pulumi)',
        'CI/CD con GitHub Actions',
        'Monitoreo con CloudWatch / Cloud Logging',
        'Costos optimizados (serverless cuando conviene)',
        'Documentación técnica y runbooks',
      ],
      stack: ['AWS', 'GCP', 'Spring Boot', 'Node.js', 'Astro/Next.js', 'Kotlin', 'Terraform', 'Docker'],
      process: [
        { title: 'Arquitectura', description: 'Diagramas, decisiones técnicas documentadas, estimación de costos cloud.' },
        { title: 'Implementación por fases', description: 'Dividimos en milestones entregables. Pagas por fase completada.' },
        { title: 'QA + Seguridad', description: 'Pentesting básico, OWASP top 10, hardening.' },
        { title: 'Operación', description: 'Monitoring, alertas, runbooks, transferencia al equipo.' },
      ],
      idealFor: 'Startups con producto digital, empresas digitalizando procesos, productos SaaS.',
      notFor: 'Proyectos sin presupuesto claro o sin sponsor dedicado.',
      pricing: 'A medida. Típicamente 20.000€-80.000€ dependiendo del scope.',
      faq: [
        { question: '¿AWS o GCP?', answer: 'Lo que tu equipo prefiera o lo que tenga más sentido por pricing. Trabajo con ambos.' },
        { question: '¿Puedo pagar por fases?', answer: 'Sí, divido en milestones de 2-4 semanas con pago por entrega.' },
        { question: '¿Y después?', answer: 'Opción de retainer mensual para mantenimiento y evolución.' },
      ],
    },
    {
      slug: 'hot-fixes',
      name: 'Hot fixes y mejoras',
      tagline: 'Tu proyecto ya está en producción y necesita arreglos o nuevas features.',
      description: 'Cuando el proyecto ya está vivo y necesitas añadir funcionalidad, corregir bugs, refactorizar legacy, o mejorar performance sin tirar todo a la basura.',
      icon: 'wrench',
      features: [
        'Análisis rápido del código existente',
        'Refactor sin breaking changes cuando es posible',
        'Nuevas features integradas al código existente',
        'Mejoras de performance (DB queries, caching, etc.)',
        'Code review del equipo',
        'Documentación de los cambios',
      ],
      stack: ['Cualquier stack: Java, Kotlin, Node, PHP, Python, etc.'],
      process: [
        { title: 'Diagnóstico', description: 'Auditoría rápida del código, 2-4 horas. Te digo qué veo.' },
        { title: 'Plan de trabajo', description: 'Lista priorizada de cambios con estimaciones.' },
        { title: 'Implementación', description: 'Pull requests pequeños, revisables.' },
      ],
      idealFor: 'Proyectos en producción que necesitan evolucionar sin reescribirse desde cero.',
      notFor: 'Sistemas tan rotos que necesitan reescritura completa (mejor opción "ecosistema").',
      pricing: 'Desde 80€/hora. Diagnóstico inicial: 200€ (se descuenta del trabajo posterior).',
      faq: [
        { question: '¿Trabajas con código legacy?', answer: 'Sí, es mi especialidad. Java EE, PHP legacy, Kotlin pre-Compose, etc.' },
        { question: '¿Cuánto tarda?', answer: 'Depende del scope. Cambios pequeños: 1-3 días. Features medianas: 1-2 semanas.' },
        { question: '¿Puedo contratarte solo para code review?', answer: 'Sí, 80€/h. Te hago review detallada de PRs con sugerencias concretas.' },
      ],
    },
    {
      slug: 'ai-rescue',
      name: 'Rescate de proyectos AI / Vibe Coding',
      tagline: 'Tu proyecto generado con IA no funciona. Te lo arreglo.',
      description: 'Si contrataste a alguien que "programa con IA" o lo hiciste tú mismo con Claude/Copilot, y tienes un Frankenstein que se cae, tiene huecos de seguridad, o simplemente no escala, te lo rescato.',
      icon: 'sparkles',
      features: [
        'Auditoría de código generado con IA',
        'Refactor a código mantenible (no más "lo escribió la IA, no sé cómo funciona")',
        'Implementación de tests (los AI casi nunca los hacen bien)',
        'CI/CD básico (los AI tampoco lo montan)',
        'Hardening de seguridad (los AI meten vulnerabilidades sin saber)',
        'Documentación de qué hace el código',
      ],
      stack: ['Cualquier stack', 'Especialidad: Node.js/Next.js, Python, Java'],
      process: [
        { title: 'Auditoría inicial', description: 'Reviso el código, te digo qué está roto y qué se puede salvar.' },
        { title: 'Plan de rescate', description: 'Estrategia priorizada: qué arreglar, qué reescribir, qué tirar.' },
        { title: 'Implementación', description: 'Refactor por fases, sin tirar la app a la basura.' },
        { title: 'Tests + Deploy', description: 'Tests que verifican que funciona, deploy reproducible.' },
      ],
      idealFor: 'Proyectos generados con Cursor, Claude Code, Bolt.new, v0, Windsurf, etc. que se rompieron.',
      notFor: 'Proyectos de juguete o si esperas que "la IA lo haga sola".',
      pricing: 'Auditoría inicial: 300€ (se descuenta del trabajo). Trabajo: desde 80€/h.',
      faq: [
        { question: '¿Cuánto cuesta "arreglar un proyecto de Bolt/Cursor"?', answer: 'Depende del daño. 500€-3.000€ para proyectos medianos. Te doy precio cerrado tras la auditoría.' },
        { question: '¿Puedes enseñarme a usar mejor la IA mientras?', answer: 'Sí, incluyo 2 horas de pair programming con IA al final del proyecto.' },
        { question: '¿Trabajas con [stack específico]?', answer: 'Trabajo con casi cualquier stack moderno. Si es COBOL, no.' },
      ],
    },
  ],
  plugins: [
    {
      slug: 'google-shopping',
      name: 'Tiger Google Shopping',
      moduleName: 'ps_google_merchant',
      tagline: 'Tu catálogo en Google Shopping, gratis.',
      description: 'Exporta tu catálogo a Google Merchant Center y aparece gratis en Google Shopping, Google Imágenes, YouTube y la red de Display. Compatible con los listados gratuitos, sin pagar publicidad.',
      longDescription: `Los módulos de la competencia cuestan €150-300/mes. Hacer el feed XML a mano es un infierno y se desactualiza siempre. Sin feed, tu tienda es invisible en Google Shopping.

Tiger Google Shopping automatiza todo: genera el feed conforme a Google, lo sube vía Content API (sin tocar la UI de Merchant Center), y se mantiene sincronizado en tiempo real.`,
      icon: '🛒',
      platform: 'PrestaShop',
      version: '1.0.0',
      price: 'Gratis',
      priceUnit: 'Open source (MIT)',
      features: [
        'Generación automática de feed XML conforme a Google',
        'Subida a Google Content API (sin tocar la UI de Merchant Center)',
        'Multi-moneda, multi-idioma, multi-país',
        'Reglas de exclusión (sin stock, sin EAN, por precio mínimo)',
        'Cache inteligente (solo regenera si hay cambios)',
        'Cron automático (cada hora, 6h, 12h, diario)',
        'Compatible con PHP 7.2+ y PrestaShop 1.7.4+',
      ],
      benefits: [
        'Aparece gratis en Google Shopping sin pagar Ads',
        'Tu catálogo siempre actualizado, sin trabajo manual',
        'Ahorra €150-300/mes vs módulos de la competencia',
      ],
      useCases: [
        'Cualquier tienda con catálogo de productos',
        'Tiendas que quieren aparecer en Google Shopping gratis',
        'Tiendas multi-idioma o multi-país',
      ],
      installSteps: [
        '1. Descarga el módulo desde GitHub',
        '2. Sube el .zip en Módulos > Añadir nuevo módulo',
        '3. Configura tu Google Merchant Center ID y API key',
        '4. Activa el cron para mantener el feed sincronizado',
        '5. Verifica en Merchant Center que el feed se subió',
      ],
      faq: [
        { question: '¿Necesito pagar Google Ads?', answer: 'No, los listados gratuitos de Google Shopping funcionan sin pagar Ads. Este módulo te da acceso a ellos.' },
        { question: '¿Es gratis de verdad?', answer: 'Sí, MIT open source. Sin telemetría, sin lock-in, sin costes ocultos.' },
        { question: '¿Compatible con mi versión de PrestaShop?', answer: 'Sí, rama main para PrestaShop 8.x (PHP 7.4+) y rama legacy para PrestaShop 1.7.4 con PHP 7.2.' },
      ],
      buyUrl: 'https://github.com/yahyrparedes/ps_google_merchant',
      status: 'available',
    },
    {
      slug: 'rich-snippets',
      name: 'Tiger Rich Snippets',
      moduleName: 'ps_schema_org',
      tagline: 'Que Google entienda tu tienda y muestre estrellas, precios y productos.',
      description: 'Inyecta Schema.org JSON-LD automáticamente en tu tienda para que Google muestre rich snippets (estrellas, precios, disponibilidad, FAQs) en los resultados.',
      longDescription: `Sin Schema.org, Google no muestra rich snippets → pierdes CTR. El código JSON-LD es técnico y no se puede mantener a mano. La mayoría de módulos de SEO no incluyen schema completo.

Tiger Rich Snippets inyecta automáticamente Organization, Product, BreadcrumbList, WebSite y FAQPage schema en tu tienda, vía el hook displayHeader. Compatible con productcomments para aggregate rating.`,
      icon: '⭐',
      platform: 'PrestaShop',
      version: '1.0.0',
      price: 'Gratis',
      priceUnit: 'Open source (MIT)',
      features: [
        'Organization schema (logo, contacto, redes sociales)',
        'Product schema (precio, marca, stock, reviews)',
        'BreadcrumbList schema',
        'WebSite schema con SearchAction (sitelinks search box)',
        'FAQPage schema',
        'Inyección automática vía hook displayHeader',
        'Compatible con module productcomments (para aggregate rating)',
      ],
      benefits: [
        'Aparece con estrellas y precio en Google',
        'CTR hasta 3x mayor en búsquedas de producto',
        'Sitelinks search box en Google (más clicks)',
      ],
      useCases: [
        'Cualquier tienda que quiera destacar en Google',
        'Tiendas con reseñas de producto',
        'Tiendas con FAQs en páginas de producto',
      ],
      installSteps: [
        '1. Descarga el módulo desde GitHub',
        '2. Sube en Módulos > Añadir nuevo módulo',
        '3. Activa',
        '4. El schema se inyecta automáticamente en todas las páginas',
        '5. Valida en Google Rich Results Test',
      ],
      faq: [
        { question: '¿Necesito Google Merchant Center?', answer: 'No, este módulo es para el schema del sitio. Merchant Center es otra cosa (módulo Tiger Google Shopping).' },
        { question: '¿Funciona con temas custom?', answer: 'Sí, es independiente del tema. Funciona con cualquier PrestaShop.' },
        { question: '¿Soporta múltiples monedas?', answer: 'Sí, schema incluye la moneda correcta según el idioma del visitante.' },
      ],
      buyUrl: 'https://github.com/yahyrparedes/ps_schema_org',
      status: 'available',
    },
    {
      slug: 'pixel-suite',
      name: 'Tiger Pixel Suite',
      moduleName: 'ps_pixel_suite',
      tagline: 'Mide todo lo que importa en Facebook, Google Ads y TikTok.',
      description: 'Implementa Facebook Pixel, Conversions API, Google Ads Conversion y TikTok Pixel con deduplicación de eventos para atribución confiable, incluso con iOS 14+.',
      longDescription: `iOS 14.5+ bloqueó el 70% de los pixels de Facebook. Solo-pixel pierde conversiones que Meta Ads no puede atribuir. Implementar CAPI correctamente requiere developer. Multi-canal requiere config inconsistente en cada plataforma.

Tiger Pixel Suite resuelve los 4 problemas: implementa Facebook Pixel + CAPI con deduplicación, Google Ads Conversion + Enhanced, TikTok Pixel + Events API, todo en un solo módulo. Compatible con GDPR consent mode v2.`,
      icon: '📊',
      platform: 'PrestaShop',
      version: '1.0.0',
      price: 'Gratis',
      priceUnit: 'Open source (MIT)',
      features: [
        'Facebook Pixel + Conversions API con deduplicación',
        'Google Ads Conversion + Enhanced Conversions',
        'TikTok Pixel + Events API',
        'Eventos: ViewContent, AddToCart, InitiateCheckout, Purchase',
        'Deduplicación server/browser vía event_id',
        'Compatible con GDPR (consent mode v2)',
      ],
      benefits: [
        'Atribución correcta pese a iOS 14+',
        'Mejor optimización de campañas en Meta Ads',
        'Conversiones Enhanced en Google Ads (mejor matching)',
      ],
      useCases: [
        'Tiendas con campañas en Facebook/Instagram Ads',
        'Tiendas con Google Ads',
        'Tiendas con TikTok Ads',
        'Cualquier tienda que quiera medir su marketing',
      ],
      installSteps: [
        '1. Descarga el módulo desde GitHub',
        '2. Sube en Módulos',
        '3. Configura los Pixel IDs de cada plataforma',
        '4. Configura los tokens de Conversions API',
        '5. Activa el consent mode v2 si operas en EU',
      ],
      faq: [
        { question: '¿Necesito developer para configurarlo?', answer: 'No, el panel del módulo es visual. Solo necesitas los Pixel IDs y tokens de cada plataforma.' },
        { question: '¿Soporta iOS 14+?', answer: 'Sí, la deduplicación server/browser vía event_id es exactamente para resolver el tracking perdido por iOS 14+.' },
        { question: '¿Es GDPR compliant?', answer: 'Sí, soporta consent mode v2. Integra con módulos de cookies consent.' },
      ],
      buyUrl: 'https://github.com/yahyrparedes/ps_pixel_suite',
      status: 'available',
    },
    {
      slug: 'meta-shop',
      name: 'Tiger Meta Shop',
      moduleName: 'ps_meta_catalog',
      tagline: 'Sincroniza tu catálogo con Instagram Shopping y Facebook Shop.',
      description: 'Sube tu catálogo a Meta Commerce Manager vía GraphQL API para activar Instagram Shopping, Facebook Shop y Dynamic Ads.',
      longDescription: `Hacer el feed CSV a mano es tedioso y propenso a errores. Sin catálogo sincronizado, no puedes usar Dynamic Ads. Instagram Shopping es clave para venta visual. La API antigua de Meta (v2.0 REST) se descontinuó en favor de GraphQL.

Tiger Meta Shop usa la nueva GraphQL Marketing API de Meta para sincronizar tu catálogo automáticamente, compatible con Facebook Shop, Instagram Shopping y WhatsApp. Soporta Dynamic Product Ads para retargeting y lookalike.`,
      icon: '🛍️',
      platform: 'PrestaShop',
      version: '1.0.0',
      price: 'Gratis',
      priceUnit: 'Open source (MIT)',
      features: [
        'Catálogo automático vía Meta GraphQL Marketing API',
        'Compatible con Facebook Shop, Instagram Shopping, WhatsApp',
        'Dynamic Product Ads (retargeting + lookalike)',
        'Multi-currency, multi-locale',
        'Sincronización automática vía cron',
        'Diagnóstico de productos rechazados',
      ],
      benefits: [
        'Activa Instagram Shopping sin trabajo manual',
        'Dynamic Ads en Facebook/Instagram para retargeting efectivo',
        'Aparece en WhatsApp Business catalog',
      ],
      useCases: [
        'Tiendas con Instagram Shopping',
        'Tiendas con Facebook Shop',
        'Tiendas que hacen retargeting con Dynamic Ads',
        'Marcas que venden por WhatsApp Business',
      ],
      installSteps: [
        '1. Descarga el módulo desde GitHub',
        '2. Sube en Módulos',
        '3. Configura tu Meta Business Manager ID',
        '4. Genera el access token de GraphQL Marketing API',
        '5. Activa el cron para mantener el catálogo sincronizado',
      ],
      faq: [
        { question: '¿Necesito Meta Business Manager?', answer: 'Sí, este módulo sincroniza con tu catálogo en Meta Commerce Manager.' },
        { question: '¿Funciona con la API antigua v2.0?', answer: 'No, la API v2.0 REST se descontinuó. Este módulo usa GraphQL Marketing API (la nueva).' },
        { question: '¿Soporta WhatsApp Business catalog?', answer: 'Sí, WhatsApp Business usa el mismo Meta Commerce Manager.' },
      ],
      buyUrl: 'https://github.com/yahyrparedes/ps_meta_catalog',
      status: 'available',
    },
    {
      slug: 'search-console',
      name: 'Tiger Search Console',
      moduleName: 'ps_search_console',
      tagline: 'Tu tienda sincronizada con Google Search Console.',
      description: 'Sincroniza tu tienda con Google Search Console: indexación automática, monitor de cobertura, sitemaps inteligentes y panel de queries — todo desde el backoffice de PrestaShop.',
      longDescription: `Estar entrando a GSC cada día para ver el estado. No saber qué páginas están desindexadas o tienen errores. Perder queries que te estaban funcionando sin darte cuenta. Sitemaps desactualizados con URLs eliminadas.

Tiger Search Console sincroniza tu tienda con GSC: auto-indexación vía Indexing API, monitor de cobertura, sitemaps inteligentes que excluyen 404s y noindex, panel de queries en el backoffice de PrestaShop, y alertas cuando bajan las impresiones.`,
      icon: '🔍',
      platform: 'PrestaShop',
      version: '1.0.0',
      price: 'Gratis',
      priceUnit: 'Open source (MIT)',
      features: [
        'Auto-indexación vía Indexing API',
        'Monitor de cobertura (errores, excluidas, indexadas)',
        'Sitemap inteligente (excluye 404, noindex, deshabilitados)',
        'Panel de queries y páginas en el backoffice',
        'Alertas cuando bajan las impresiones',
      ],
      benefits: [
        'No necesitas entrar a GSC cada día',
        'Detecta problemas de indexación antes que tu competencia',
        'Sitemap siempre limpio y actualizado',
      ],
      useCases: [
        'Tiendas con catálogos grandes (muchas URLs)',
        'Tiendas que cambian productos frecuentemente',
        'Tiendas que quieren alertas automáticas de SEO',
      ],
      installSteps: [
        '1. Descarga el módulo desde GitHub',
        '2. Sube en Módulos',
        '3. Configura tu Google Search Console API key',
        '4. Activa la sincronización automática',
        '5. Configura las alertas (email cuando bajan impressions)',
      ],
      faq: [
        { question: '¿Necesito Search Console verificado?', answer: 'Sí, el módulo usa la API de GSC. Debes tener el dominio verificado.' },
        { question: '¿Reemplaza al sitemap.xml de PrestaShop?', answer: 'Lo mejora. Genera un sitemap inteligente que excluye URLs noindex, 404s y productos deshabilitados.' },
        { question: '¿Las alertas son por email?', answer: 'Sí, configurable. Puedes elegir umbrales (ej: "alertar si impressions bajan 20% en 7 días").' },
      ],
      buyUrl: 'https://github.com/yahyrparedes/ps_search_console',
      status: 'available',
    },
  ],
  projects: [
    {
      name: 'Starbucks Perú (Delosi)',
      description: 'Backend y apps internas para el ecosistema Starbucks Perú.',
      url: 'https://delosi.com.pe',
      category: 'fintech',
      year: '2024-2025',
    },
    {
      name: 'Bancamóvil Proempresa',
      description: 'App de banca móvil empresarial con biometría y hardening PCI-DSS.',
      category: 'mobile',
      year: '2017-2018',
    },
    {
      name: 'Kwema',
      description: 'App de seguridad personal con wearables BLE y geofencing.',
      category: 'iot',
      year: '2016-2017',
    },
    {
      name: 'mavilagm.com',
      description: 'Linktree + sitio oficial de marca para creadora de contenido.',
      url: 'https://mavilagm.com',
      category: 'web',
      year: '2026',
    },
  ],
  photos: [
    {
      title: 'En España',
      photos: [
        { src: '/images/personal-1.png', alt: 'Yahyr en interiores', caption: 'Trabajando desde casa' },
        { src: '/images/personal-2.jpg', alt: 'Yahyr con su hija en casa', caption: 'Con mi hija' },
        { src: '/images/personal-3.png', alt: 'Yahyr con su familia en España', caption: 'Familia en España' },
        { src: '/images/personal-4.jpg', alt: 'Yahyr con su hija en fiesta', caption: 'Celebrando en familia' },
        { src: '/images/personal-5.jpg', alt: 'Yahyr enseñando a su hijo a montar en bici', caption: 'Enseñando a montar en bici' },
        { src: '/images/personal-6.jpg', alt: 'Yahyr con amigos en parque', caption: 'Tiempo con amigos' },
      ],
    },
    {
      title: 'Equipo de trabajo',
      photos: [
        { src: '/images/personal-6.jpg', alt: 'Yahyr con el equipo de trabajo', caption: 'Equipo de desarrollo' },
      ],
    },
  ],
};
