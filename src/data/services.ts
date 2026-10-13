// services.ts — servicios freelance (ES / EN). Una sola fuente para el índice y el detalle.
// `proof` enlaza cada servicio con roles reales de career.ts (#id en /experiencia).
import type { Localized } from './career.ts';

export interface ServiceDetail {
  slug: string;
  icon: 'web' | 'mobile' | 'stack' | 'wrench' | 'sparkles';
  name: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  features: Localized<string[]>;
  stack: string[];
  process: Localized<{ title: string; description: string }[]>;
  idealFor: Localized<string>;
  notFor: Localized<string>;
  pricing: Localized<string>;
  faq: Localized<{ question: string; answer: string }[]>;
  proof: { roleId: string; note: Localized<string> }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'webs',
    icon: 'web',
    name: { es: 'Webs de alto rendimiento', en: 'High-performance websites' },
    tagline: {
      es: 'Sitios web rápidos, optimizados para SEO y pensados para convertir.',
      en: 'Fast, SEO-ready websites built to convert.',
    },
    description: {
      es: 'Diseño y desarrollo de webs modernas con Astro, Next.js o lo que tu proyecto necesite. Desde landing pages hasta plataformas completas con backend y e-commerce.',
      en: 'Design and development of modern websites with Astro, Next.js or whatever your project needs. From landing pages to full platforms with a backend and e-commerce.',
    },
    features: {
      es: [
        'Static-first para cargas muy rápidas (LCP por debajo de 1 s)',
        'SEO técnico completo: meta tags, schema, sitemap y Open Graph',
        'Diseño responsive mobile-first',
        'CMS opcional (Decap, Sanity o Strapi) para editar sin código',
        'Hosting optimizado: Coolify y CDN de Cloudflare',
        'Analítica respetuosa con la privacidad (Umami o Plausible)',
      ],
      en: [
        'Static-first for very fast loads (LCP under 1 s)',
        'Full technical SEO: meta tags, schema, sitemap and Open Graph',
        'Responsive, mobile-first design',
        'Optional CMS (Decap, Sanity or Strapi) to edit without code',
        'Optimized hosting: Coolify and Cloudflare CDN',
        'Privacy-friendly analytics (Umami or Plausible)',
      ],
    },
    stack: ['Astro', 'Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Cloudflare'],
    process: {
      es: [
        { title: 'Descubrimiento', description: 'Entiendo tu negocio, tu audiencia y tus objetivos en una sesión de una hora.' },
        { title: 'Diseño', description: 'Wireframes y mockups en Figma. Iteramos hasta que encaje.' },
        { title: 'Desarrollo', description: 'Construcción iterativa con despliegues semanales para que veas el progreso real.' },
        { title: 'Lanzamiento', description: 'Despliegue, DNS, SSL, monitorización y entrega con documentación.' },
      ],
      en: [
        { title: 'Discovery', description: 'I learn about your business, audience and goals in a one-hour session.' },
        { title: 'Design', description: 'Wireframes and mockups in Figma. We iterate until it fits.' },
        { title: 'Development', description: 'Iterative build with weekly deployments so you see real progress.' },
        { title: 'Launch', description: 'Deployment, DNS, SSL, monitoring and handover with documentation.' },
      ],
    },
    idealFor: {
      es: 'Negocios que necesitan una web rápida para captar clientes o mostrar su producto.',
      en: 'Businesses that need a fast website to win customers or showcase their product.',
    },
    notFor: {
      es: 'Webs corporativas de muchas páginas estáticas sin necesidad de rendimiento: ahí una plantilla es más barata.',
      en: 'Large static corporate sites with no performance needs: a template is cheaper there.',
    },
    pricing: {
      es: 'Desde 1.500 € una landing. Desde 4.500 € un sitio completo con CMS.',
      en: 'From €1,500 for a landing page. From €4,500 for a full site with a CMS.',
    },
    faq: {
      es: [
        { question: '¿Cuánto tarda una web?', answer: 'Una landing, 2 o 3 semanas. Un sitio completo, de 6 a 10 semanas.' },
        { question: '¿Puedo editar el contenido yo?', answer: 'Sí. Integramos un CMS (Decap, Sanity o Strapi) y te enseño a usarlo.' },
        { question: '¿Y si ya tengo un sitio?', answer: 'Migramos el contenido y el SEO sin perder posiciones en Google.' },
      ],
      en: [
        { question: 'How long does a website take?', answer: 'A landing page, 2 to 3 weeks. A full site, 6 to 10 weeks.' },
        { question: 'Can I edit the content myself?', answer: 'Yes. We add a CMS (Decap, Sanity or Strapi) and I show you how to use it.' },
        { question: 'What if I already have a site?', answer: 'We migrate the content and the SEO without losing Google rankings.' },
      ],
    },
    proof: [
      { roleId: 'atlas', note: { es: 'E-commerce de Calzado Atlas con WordPress, Magento y PrestaShop, pasarelas PAYU y CULQI.', en: 'Calzado Atlas e-commerce with WordPress, Magento and PrestaShop, PAYU and CULQI payments.' } },
      { roleId: 'interseguro', note: { es: 'Frontends en Vue y Nuxt para la venta online de seguros.', en: 'Vue and Nuxt frontends for online insurance sales.' } },
    ],
  },
  {
    slug: 'apps',
    icon: 'mobile',
    name: { es: 'Apps móviles nativas e híbridas', en: 'Native & hybrid mobile apps' },
    tagline: {
      es: 'Apps Android e iOS que la gente quiere usar.',
      en: 'Android and iOS apps people want to use.',
    },
    description: {
      es: 'Desarrollo de apps móviles con foco en experiencia de usuario y rendimiento. Android nativo con Kotlin es mi especialidad; Kotlin Multiplatform, iOS y Flutter cuando tiene sentido.',
      en: 'Mobile app development focused on user experience and performance. Native Android with Kotlin is my specialty; Kotlin Multiplatform, iOS and Flutter when it makes sense.',
    },
    features: {
      es: [
        'Android nativo con Kotlin y Jetpack Compose',
        'Kotlin Multiplatform para compartir lógica con iOS (SwiftUI)',
        'Flutter o React Native si el equipo lo prefiere',
        'Integración con APIs REST y GraphQL',
        'Notificaciones push (FCM / APNs) y deep links',
        'Seguridad: ofuscación, SSL pinning, detección de root',
        'Publicación en Google Play y App Store',
      ],
      en: [
        'Native Android with Kotlin and Jetpack Compose',
        'Kotlin Multiplatform to share logic with iOS (SwiftUI)',
        'Flutter or React Native if the team prefers',
        'REST and GraphQL API integration',
        'Push notifications (FCM / APNs) and deep links',
        'Security: obfuscation, SSL pinning, root detection',
        'Publishing to Google Play and the App Store',
      ],
    },
    stack: ['Kotlin', 'Jetpack Compose', 'KMP', 'SwiftUI', 'Coroutines', 'Room', 'Ktor', 'Firebase'],
    process: {
      es: [
        { title: 'Concepto', description: 'Definimos el MVP y descartamos lo que no aporta.' },
        { title: 'Diseño UX/UI', description: 'Flujos de usuario en Figma y prototipo navegable.' },
        { title: 'Desarrollo iterativo', description: 'Sprints de dos semanas con demo al final de cada uno.' },
        { title: 'QA y lanzamiento', description: 'Pruebas en dispositivos reales y publicación en las tiendas.' },
      ],
      en: [
        { title: 'Concept', description: 'We define the MVP and drop what does not add value.' },
        { title: 'UX/UI design', description: 'User flows in Figma and a clickable prototype.' },
        { title: 'Iterative development', description: 'Two-week sprints with a demo at the end of each.' },
        { title: 'QA and launch', description: 'Testing on real devices and publishing to the stores.' },
      ],
    },
    idealFor: {
      es: 'Productos digitales mobile-first o negocios que necesitan una app para fidelizar clientes.',
      en: 'Mobile-first digital products or businesses that need an app to retain customers.',
    },
    notFor: {
      es: 'Herramientas internas muy simples: ahí basta con una web app responsive.',
      en: 'Very simple internal tools: a responsive web app is enough there.',
    },
    pricing: {
      es: 'Desde 8.000 € un MVP Android. Desde 14.000 € un MVP Android + iOS.',
      en: 'From €8,000 for an Android MVP. From €14,000 for an Android + iOS MVP.',
    },
    faq: {
      es: [
        { question: '¿Nativo o multiplataforma?', answer: 'Para la mayoría de casos, nativo o KMP: lógica compartida e interfaz nativa en cada plataforma. Flutter si necesitas lanzar en ambas muy rápido y el equipo lo conoce.' },
        { question: '¿Cuánto tarda?', answer: 'Un MVP, de 2 a 4 meses. Una app completa, de 4 a 8 meses.' },
        { question: '¿Y el mantenimiento?', answer: 'Ofrezco planes mensuales de mantenimiento desde 500 €.' },
      ],
      en: [
        { question: 'Native or cross-platform?', answer: 'For most cases, native or KMP: shared logic with a native UI on each platform. Flutter if you need both platforms very fast and the team knows it.' },
        { question: 'How long does it take?', answer: 'An MVP, 2 to 4 months. A full app, 4 to 8 months.' },
        { question: 'What about maintenance?', answer: 'I offer monthly maintenance plans from €500.' },
      ],
    },
    proof: [
      { roleId: 'starbucks', note: { es: 'Reescritura de la app de Starbucks Perú (1M+ descargas) en Kotlin, Compose y KMP.', en: 'Rewrite of the Starbucks Peru app (1M+ downloads) in Kotlin, Compose and KMP.' } },
      { roleId: 'kwema', note: { es: 'App de seguridad laboral con wearables BLE, ahora en KMP para Android e iOS.', en: 'Workplace-safety app with BLE wearables, now moving to KMP for Android and iOS.' } },
      { roleId: 'urbaner', note: { es: 'Apps de clientes y mensajeros de una plataforma de courier.', en: 'Customer and courier apps for a delivery platform.' } },
    ],
  },
  {
    slug: 'ecosistema',
    icon: 'stack',
    name: { es: 'Ecosistema completo de producto', en: 'End-to-end product ecosystem' },
    tagline: {
      es: 'Web, backend, infraestructura y apps, todo conectado.',
      en: 'Web, backend, infrastructure and apps, all connected.',
    },
    description: {
      es: 'Para proyectos que necesitan toda la stack: frontend, backend, infraestructura cloud y mobile, en AWS o GCP según lo que indique tu presupuesto.',
      en: 'For projects that need the whole stack: frontend, backend, cloud infrastructure and mobile, on AWS or GCP depending on your budget.',
    },
    features: {
      es: [
        'Arquitectura completa: backend, frontend, mobile e infraestructura',
        'Infraestructura como código (AWS CDK o Terraform)',
        'CI/CD con GitHub Actions',
        'Monitorización con CloudWatch, New Relic o Cloud Logging',
        'Costes optimizados (serverless cuando conviene)',
        'Documentación técnica y runbooks',
      ],
      en: [
        'Full architecture: backend, frontend, mobile and infrastructure',
        'Infrastructure as code (AWS CDK or Terraform)',
        'CI/CD with GitHub Actions',
        'Monitoring with CloudWatch, New Relic or Cloud Logging',
        'Optimized costs (serverless when it pays off)',
        'Technical documentation and runbooks',
      ],
    },
    stack: ['AWS', 'GCP', 'Go', 'Spring Boot', 'Node.js', 'Kotlin', 'AWS CDK', 'Docker'],
    process: {
      es: [
        { title: 'Arquitectura', description: 'Diagramas, decisiones técnicas documentadas y estimación de costes cloud.' },
        { title: 'Implementación por fases', description: 'Dividimos en entregables y pagas por fase completada.' },
        { title: 'QA y seguridad', description: 'Revisión del OWASP Top 10 y hardening básico.' },
        { title: 'Operación', description: 'Monitorización, alertas, runbooks y traspaso al equipo.' },
      ],
      en: [
        { title: 'Architecture', description: 'Diagrams, documented technical decisions and a cloud cost estimate.' },
        { title: 'Phased delivery', description: 'We split the work into milestones and you pay per completed phase.' },
        { title: 'QA and security', description: 'OWASP Top 10 review and basic hardening.' },
        { title: 'Operations', description: 'Monitoring, alerts, runbooks and handover to the team.' },
      ],
    },
    idealFor: {
      es: 'Startups con producto digital, empresas digitalizando procesos y productos SaaS.',
      en: 'Startups with a digital product, companies digitizing processes and SaaS products.',
    },
    notFor: {
      es: 'Proyectos sin presupuesto claro o sin una persona responsable del lado del cliente.',
      en: 'Projects without a clear budget or without an owner on the client side.',
    },
    pricing: {
      es: 'A medida. Normalmente entre 20.000 € y 80.000 € según el alcance.',
      en: 'Custom. Usually between €20,000 and €80,000 depending on scope.',
    },
    faq: {
      es: [
        { question: '¿AWS o GCP?', answer: 'Lo que tu equipo prefiera o lo que tenga más sentido por coste. He trabajado en producción con ambos.' },
        { question: '¿Puedo pagar por fases?', answer: 'Sí, divido el trabajo en entregables de 2 a 4 semanas con pago por entrega.' },
        { question: '¿Y después?', answer: 'Puedo seguir con un acuerdo mensual de mantenimiento y evolución.' },
      ],
      en: [
        { question: 'AWS or GCP?', answer: 'Whatever your team prefers or whatever makes more sense cost-wise. I have run production on both.' },
        { question: 'Can I pay in phases?', answer: 'Yes, I split the work into 2- to 4-week milestones paid on delivery.' },
        { question: 'And afterwards?', answer: 'I can continue on a monthly retainer for maintenance and evolution.' },
      ],
    },
    proof: [
      { roleId: 'starbucks', note: { es: 'Sincronización de la carta (120+ tiendas), Cognito y pagos con Niubiz sobre AWS.', en: 'Menu sync (120+ stores), Cognito and Niubiz payments on AWS.' } },
      { roleId: 'interseguro', note: { es: 'Microservicios en Go sobre Cloud Run y procesos batch con Spring Batch.', en: 'Go microservices on Cloud Run and Spring Batch jobs.' } },
      { roleId: 'kwema', note: { es: 'App, APIs en Django y AWS IoT Core para dispositivos conectados.', en: 'App, Django APIs and AWS IoT Core for connected devices.' } },
    ],
  },
  {
    slug: 'hot-fixes',
    icon: 'wrench',
    name: { es: 'Hot fixes y mejoras', en: 'Hot fixes & improvements' },
    tagline: {
      es: 'Tu proyecto ya está en producción y necesita arreglos o nuevas funcionalidades.',
      en: 'Your project is live and needs fixes or new features.',
    },
    description: {
      es: 'Cuando el proyecto ya está vivo y necesitas añadir funcionalidad, corregir errores, refactorizar código heredado o mejorar el rendimiento sin tirarlo todo.',
      en: 'When the project is already live and you need new features, bug fixes, legacy refactoring or better performance without starting over.',
    },
    features: {
      es: [
        'Análisis rápido del código existente',
        'Refactor sin cambios que rompan, siempre que sea posible',
        'Nuevas funcionalidades integradas en el código existente',
        'Mejoras de rendimiento (consultas, caché, etc.)',
        'Code review del equipo',
        'Documentación de los cambios',
      ],
      en: [
        'Quick analysis of the existing code',
        'Non-breaking refactors whenever possible',
        'New features integrated into the existing code',
        'Performance improvements (queries, caching, etc.)',
        'Code review for the team',
        'Documentation of the changes',
      ],
    },
    stack: ['Kotlin', 'Java', 'Go', 'Python', 'Node.js', 'PHP'],
    process: {
      es: [
        { title: 'Diagnóstico', description: 'Auditoría rápida del código, de 2 a 4 horas. Te cuento qué veo.' },
        { title: 'Plan de trabajo', description: 'Lista priorizada de cambios con estimaciones.' },
        { title: 'Implementación', description: 'Pull requests pequeños y fáciles de revisar.' },
      ],
      en: [
        { title: 'Diagnosis', description: 'A quick code audit of 2 to 4 hours. I tell you what I see.' },
        { title: 'Work plan', description: 'A prioritized list of changes with estimates.' },
        { title: 'Implementation', description: 'Small pull requests that are easy to review.' },
      ],
    },
    idealFor: {
      es: 'Proyectos en producción que necesitan evolucionar sin reescribirse desde cero.',
      en: 'Live projects that need to evolve without a rewrite from scratch.',
    },
    notFor: {
      es: 'Sistemas tan rotos que necesitan reescritura completa: ahí encaja mejor "Ecosistema completo".',
      en: 'Systems so broken they need a full rewrite: "End-to-end ecosystem" fits better there.',
    },
    pricing: {
      es: 'Desde 80 €/hora. Diagnóstico inicial: 200 € (se descuenta del trabajo posterior).',
      en: 'From €80/hour. Initial diagnosis: €200 (deducted from the follow-up work).',
    },
    faq: {
      es: [
        { question: '¿Trabajas con código heredado?', answer: 'Sí, es gran parte de mi experiencia: PHP antiguo, Java, apps Android anteriores a Compose.' },
        { question: '¿Cuánto tarda?', answer: 'Depende del alcance. Cambios pequeños, de 1 a 3 días. Funcionalidades medianas, 1 o 2 semanas.' },
        { question: '¿Puedo contratarte solo para code review?', answer: 'Sí, a 80 €/h, con revisión detallada de PRs y sugerencias concretas.' },
      ],
      en: [
        { question: 'Do you work with legacy code?', answer: 'Yes, it is a big part of my experience: old PHP, Java, pre-Compose Android apps.' },
        { question: 'How long does it take?', answer: 'It depends on scope. Small changes, 1 to 3 days. Medium features, 1 to 2 weeks.' },
        { question: 'Can I hire you just for code review?', answer: 'Yes, at €80/h, with detailed PR reviews and concrete suggestions.' },
      ],
    },
    proof: [
      { roleId: 'interseguro', note: { es: 'Migración del SOAT de PHP 5 a Go: errores de emisión del ~50% al ~10%.', en: 'SOAT migration from PHP 5 to Go: issuance errors down from ~50% to ~10%.' } },
      { roleId: 'kwema', note: { es: 'Modernización de una app Android heredada de Java a Kotlin, que sigue en producción.', en: 'Modernized a legacy Android app from Java to Kotlin, still in production.' } },
    ],
  },
  {
    slug: 'ai-rescue',
    icon: 'sparkles',
    name: { es: 'Rescate de proyectos hechos con IA', en: 'Rescue for AI-built projects' },
    tagline: {
      es: 'Tu proyecto generado con IA no funciona como debería. Lo ponemos en orden.',
      en: 'Your AI-generated project does not work as it should. Let’s put it in order.',
    },
    description: {
      es: 'Si el proyecto se construyó con Cursor, Claude Code, Bolt, v0 o similares y ahora se cae, tiene huecos de seguridad o no escala, lo audito y lo llevo a un estado mantenible.',
      en: 'If the project was built with Cursor, Claude Code, Bolt, v0 or similar tools and now crashes, has security holes or does not scale, I audit it and bring it to a maintainable state.',
    },
    features: {
      es: [
        'Auditoría del código generado',
        'Refactor a código mantenible y entendible',
        'Tests que verifican lo importante',
        'CI/CD básico y despliegue reproducible',
        'Hardening de seguridad',
        'Documentación de qué hace el código',
      ],
      en: [
        'Audit of the generated code',
        'Refactor into maintainable, understandable code',
        'Tests that check what matters',
        'Basic CI/CD and reproducible deployments',
        'Security hardening',
        'Documentation of what the code does',
      ],
    },
    stack: ['Node.js', 'Next.js', 'Python', 'Java', 'Go', 'Kotlin'],
    process: {
      es: [
        { title: 'Auditoría inicial', description: 'Reviso el código y te digo qué está roto y qué se puede salvar.' },
        { title: 'Plan de rescate', description: 'Qué arreglar, qué reescribir y qué descartar, por prioridad.' },
        { title: 'Implementación', description: 'Refactor por fases, sin tirar la app.' },
        { title: 'Tests y despliegue', description: 'Tests que demuestran que funciona y despliegue reproducible.' },
      ],
      en: [
        { title: 'Initial audit', description: 'I review the code and tell you what is broken and what can be saved.' },
        { title: 'Rescue plan', description: 'What to fix, what to rewrite and what to drop, by priority.' },
        { title: 'Implementation', description: 'Phased refactor, without throwing the app away.' },
        { title: 'Tests and deployment', description: 'Tests that prove it works and a reproducible deployment.' },
      ],
    },
    idealFor: {
      es: 'Proyectos generados con Cursor, Claude Code, Bolt, v0 o Windsurf que ya no avanzan.',
      en: 'Projects generated with Cursor, Claude Code, Bolt, v0 or Windsurf that are stuck.',
    },
    notFor: {
      es: 'Prototipos de juguete o si esperas que la IA lo resuelva sola.',
      en: 'Toy prototypes, or expecting the AI to solve it on its own.',
    },
    pricing: {
      es: 'Auditoría inicial: 300 € (se descuenta del trabajo). Después, desde 80 €/hora o precio cerrado.',
      en: 'Initial audit: €300 (deducted from the work). Then from €80/hour or a fixed price.',
    },
    faq: {
      es: [
        { question: '¿Cuánto cuesta arreglar un proyecto hecho con IA?', answer: 'Depende del estado. Para proyectos medianos, entre 500 € y 3.000 €. Te doy precio cerrado tras la auditoría.' },
        { question: '¿Me enseñas a usar mejor la IA?', answer: 'Sí, incluyo 2 horas de pair programming con IA al final del proyecto.' },
        { question: '¿Trabajas con mi stack?', answer: 'Con casi cualquier stack moderno: Node, Python, Java, Go, Kotlin o PHP.' },
      ],
      en: [
        { question: 'How much does it cost to fix an AI-built project?', answer: 'It depends on its state. For medium projects, between €500 and €3,000. I give you a fixed price after the audit.' },
        { question: 'Can you teach me to use AI better?', answer: 'Yes, I include 2 hours of AI pair programming at the end of the project.' },
        { question: 'Do you work with my stack?', answer: 'With almost any modern stack: Node, Python, Java, Go, Kotlin or PHP.' },
      ],
    },
    proof: [
      { roleId: 'groway', note: { es: 'Docencia de arquitectura de microservicios, Docker y Kubernetes.', en: 'Taught microservice architecture, Docker and Kubernetes.' } },
      { roleId: 'interseguro', note: { es: 'Template base de servicios en Go que adoptaron otros equipos.', en: 'Base Go service template adopted by other teams.' } },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
