// ─────────────────────────────────────────────────────────────────────────────
// career.ts — ÚNICA fuente de verdad de la trayectoria profesional (ES / EN).
//
// Origen: cv-yahyrparedes/master-info/master-cv.md (actualizado 2026-10-08)
// Reglas:
//   · No inventar empresas, títulos, fechas ni métricas. Solo datos del CV maestro
//     o confirmados por Yahyr.
//   · Las experiencias cortas 2016–2019 se agrupan en un solo bloque.
//   · Los testimonios solo se publican cuando `status: 'published'` (datos reales).
//   · Para añadir un idioma: añadir la clave al tipo `Locale` y completar los textos.
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = 'es' | 'en';
export type Localized<T> = Record<Locale, T>;

export type Track = 'mobile' | 'backend' | 'fullstack' | 'cloud' | 'lead' | 'teaching';

export interface Company {
  id: string;
  name: string;
  /** Texto corto que acompaña al nombre (marca, grupo, etc.) */
  context?: Localized<string>;
  url?: string;
  /** Icono cuadrado para la línea de tiempo (sobre fondo blanco). */
  mark?: string;
  /** Logotipo horizontal para la franja de confianza. */
  wordmark?: string;
  /** Si el wordmark necesita fondo oscuro (logo blanco). */
  wordmarkOnDark?: boolean;
  /** Color de marca oficial (acentos, bordes, puntos de la línea de tiempo). */
  color: string;
  industry: Localized<string>;
  about: Localized<string>;
}

export interface Testimonial {
  quote: Localized<string>;
  author: string;
  role: Localized<string>;
  linkedin?: string;
  /** 'draft' = no se publica (solo visible con PUBLIC_SHOW_DRAFT_TESTIMONIALS=true). */
  status: 'draft' | 'published';
}

export interface Role {
  id: string;
  companyId: string;
  title: Localized<string>;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM o null = actualidad */
  end: string | null;
  location: Localized<string>;
  employment: Localized<string>;
  summary: Localized<string>;
  highlights: Localized<string[]>;
  stack: string[];
  tracks: Track[];
  /** Destacado en la Home / casos de estudio */
  featured?: boolean;
  links?: { label: Localized<string>; href: string }[];
  /** Para bloques agrupados (experiencia previa) */
  group?: { company: string; role: Localized<string>; years: string; note: Localized<string> }[];
  testimonial?: Testimonial;
  /** Rol a tiempo parcial en paralelo con otro principal */
  partTime?: boolean;
}

// ─── Empresas ────────────────────────────────────────────────────────────────

export const companies: Record<string, Company> = {
  starbucks: {
    id: 'starbucks',
    name: 'Starbucks Perú',
    context: { es: 'vía DELOSI', en: 'via DELOSI' },
    url: 'https://www.starbucks.pe/',
    mark: '/images/brands/starbucks-siren.svg',
    wordmark: '/images/brands/starbucks-siren.svg',
    color: '#00704A',
    industry: { es: 'Food & beverage · Retail', en: 'Food & beverage · Retail' },
    about: {
      es: 'DELOSI es el grupo peruano, fundado en 1981, que opera en Perú franquicias de restauración como Starbucks, KFC o Burger King. Trabajé en la app Starbucks Rewards Perú, con más de 1 millón de descargas en Google Play.',
      en: 'DELOSI is the Peruvian group, founded in 1981, that operates restaurant franchises such as Starbucks, KFC and Burger King in Peru. I worked on the Starbucks Rewards Peru app, with over 1 million downloads on Google Play.',
    },
  },
  kwema: {
    id: 'kwema',
    name: 'Kwema Inc.',
    url: 'https://www.kwema.co/',
    mark: '/images/brands/kwema-isotipo.png',
    wordmark: '/images/brands/kwema-wordmark.png',
    color: '#CE0081',
    industry: { es: 'Workplace safety · IoT', en: 'Workplace safety · IoT' },
    about: {
      es: 'Startup de EE. UU. de seguridad laboral: wearables con botón de pánico conectados por Bluetooth a una app móvil y a un dashboard para equipos de respuesta.',
      en: 'US workplace-safety startup: wearable panic buttons connected over Bluetooth to a mobile app and a dashboard for response teams.',
    },
  },
  interseguro: {
    id: 'interseguro',
    name: 'Interseguro',
    context: { es: 'Grupo Intercorp', en: 'Intercorp group' },
    url: 'https://www.interseguro.pe/',
    mark: '/images/brands/interseguro-isotipo.svg',
    wordmark: '/images/brands/interseguro.svg',
    color: '#0855C4',
    industry: { es: 'Seguros · Insurtech', en: 'Insurance · Insurtech' },
    about: {
      es: 'Compañía de seguros peruana del grupo Intercorp. Entre sus productos digitales están el SOAT (seguro vehicular obligatorio, 100% online) y el seguro vehicular.',
      en: 'Peruvian insurance company in the Intercorp group. Its digital products include SOAT (mandatory motor insurance, 100% online) and car insurance.',
    },
  },
  silabuz: {
    id: 'silabuz',
    name: 'Silabuz',
    context: { es: 'Aprendizaje Digital S.A.C.', en: 'Aprendizaje Digital S.A.C.' },
    color: '#7C3AED',
    industry: { es: 'Edtech · HR tech', en: 'Edtech · HR tech' },
    about: {
      es: 'Startup peruana nacida como edtech de programación para jóvenes, que evolucionó hacia la contratación de talento tech (HR tech).',
      en: 'Peruvian startup that began as a coding edtech for young people and evolved into tech hiring (HR tech).',
    },
  },
  groway: {
    id: 'groway',
    name: 'Groway Studio',
    url: 'https://groway.studio/',
    mark: '/images/brands/groway.svg',
    color: '#F08B28',
    industry: { es: 'Software factory', en: 'Software factory' },
    about: {
      es: 'Software factory peruana: desarrollo de productos a medida para clientes y formación técnica.',
      en: 'Peruvian software factory: custom product development for clients and technical training.',
    },
  },
  urbaner: {
    id: 'urbaner',
    name: 'Urbaner',
    url: 'https://www.urbaner.com/',
    mark: '/images/brands/urbaner-isotipo.png',
    wordmark: '/images/brands/urbaner-wordmark.png',
    color: '#00CE8E',
    industry: { es: 'Logística · Última milla', en: 'Logistics · Last mile' },
    about: {
      es: 'Plataforma peruana de courier y logística de última milla bajo demanda, con apps para clientes y para mensajeros.',
      en: 'Peruvian on-demand courier and last-mile logistics platform, with apps for customers and couriers.',
    },
  },
  atlas: {
    id: 'atlas',
    name: 'Calzado Atlas',
    context: { es: 'Zapatillas Tigre · Lynx', en: 'Zapatillas Tigre · Lynx' },
    url: 'https://zapatillastigre.com/',
    mark: '/images/brands/tigre.png',
    wordmark: '/images/brands/tigre.png',
    color: '#F7812D',
    industry: { es: 'Retail · E-commerce', en: 'Retail · E-commerce' },
    about: {
      es: 'Fabricante peruano de calzado, dueño de marcas como Zapatillas Tigre y Lynx. Lideré su transformación digital y su canal e-commerce.',
      en: 'Peruvian footwear manufacturer behind brands such as Zapatillas Tigre and Lynx. I led its digital transformation and e-commerce channel.',
    },
  },
  previous: {
    id: 'previous',
    name: 'Android & mobile',
    color: '#3B82F6',
    industry: { es: 'Agencias, salud, educación, logística', en: 'Agencies, health, education, logistics' },
    about: {
      es: 'Primeros años como desarrollador Android y mobile en agencias de software y proyectos de corta duración.',
      en: 'Early years as an Android and mobile developer at software agencies and short-term projects.',
    },
  },
  iberotec: {
    id: 'iberotec',
    name: 'IBEROTEC / IDAT',
    color: '#64748B',
    industry: { es: 'Educación', en: 'Education' },
    about: {
      es: 'Instituto técnico superior en Lima donde estudié Telemática e hice mis primeras prácticas en sistemas.',
      en: 'Technical institute in Lima where I studied Telematics and did my first systems internship.',
    },
  },
};

// ─── Roles (más reciente primero) ────────────────────────────────────────────

export const roles: Role[] = [
  {
    id: 'starbucks',
    companyId: 'starbucks',
    title: { es: 'Android Engineer', en: 'Android Engineer' },
    start: '2024-09',
    end: '2026-08',
    location: { es: 'Lima, Perú · remoto desde España', en: 'Lima, Peru · remote from Spain' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    summary: {
      es: 'Fui responsable de la app Android de Starbucks Rewards Perú. La reescribí por completo en Kotlin y Jetpack Compose dentro de la migración de toda la plataforma de Azure a AWS. Los tres primeros meses trabajé en el equipo backend.',
      en: 'I owned the Starbucks Rewards Peru Android app. I rewrote it from scratch in Kotlin and Jetpack Compose as part of the whole platform’s migration from Azure to AWS. I spent my first three months on the backend team.',
    },
    highlights: {
      es: [
        'Reescritura completa de la app Android (más de 1M de descargas) en Kotlin y Jetpack Compose, con lógica compartida en KMP y arquitectura modular por features (MVVM). Publicada en noviembre de 2025 tras un año de migración.',
        'Releases aproximadamente mensuales, de la versión 4.0.0 a la 4.0.19.',
        'Seguridad con Dexguard: SSL pinning, detección de root y modo desarrollador, y ofuscación de código.',
        'Analítica y tracking de marketing con Firebase, GA4, Meta Pixel y TikTok.',
        'Etapa backend: sincronización de la carta de productos para más de 120 tiendas (ETL diario y bajo demanda, ~5 min por ejecución), que antes no existía.',
        'Módulo de pagos con Niubiz con datos MDD (Merchant Defined Data) para reducir el riesgo de fraude.',
        'Coordinaba las reuniones del equipo mobile: viabilidad, alcance y tiempos de las funcionalidades para Android e iOS.',
      ],
      en: [
        'Full rewrite of the Android app (1M+ downloads) in Kotlin and Jetpack Compose, with KMP shared logic and a feature-modular MVVM architecture. Shipped in November 2025 after a one-year migration.',
        'Roughly monthly releases, from version 4.0.0 to 4.0.19.',
        'Security hardening with Dexguard: SSL pinning, root and developer-mode detection, and code obfuscation.',
        'Analytics and marketing tracking with Firebase, GA4, Meta Pixel and TikTok.',
        'Backend stint: product-menu sync for 120+ stores (daily and on-demand ETL, ~5 min per run), which did not exist before.',
        'Niubiz payments module with Merchant Defined Data (MDD) to reduce fraud risk.',
        'I ran the mobile team syncs: feasibility, scope and timelines for Android and iOS features.',
      ],
    },
    stack: ['Kotlin', 'Jetpack Compose', 'KMP', 'Ktor', 'Dexguard', 'Firebase', 'GA4', 'Google Maps', 'Node.js', 'TypeScript', 'AWS CDK', 'Cognito', 'Lambda', '.NET 8 AOT', 'GitHub Actions'],
    tracks: ['mobile', 'backend', 'cloud'],
    featured: true,
    links: [
      { label: { es: 'Google Play', en: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=com.starbucks.peru' },
      { label: { es: 'App Store', en: 'App Store' }, href: 'https://apps.apple.com/pe/app/starbucks-per%C3%BA/id1409811746' },
      { label: { es: 'Web', en: 'Website' }, href: 'https://www.starbucks.pe/' },
    ],
    testimonial: {
      status: 'draft',
      quote: { es: 'Pendiente: recomendación real de un compañero o responsable.', en: 'Pending: real recommendation from a teammate or manager.' },
      author: 'Nombre Apellido',
      role: { es: 'Cargo · Starbucks Perú', en: 'Role · Starbucks Peru' },
    },
  },
  {
    id: 'interseguro',
    companyId: 'interseguro',
    title: { es: 'Full Stack Engineer II', en: 'Full Stack Engineer II' },
    start: '2023-01',
    end: '2024-08',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    summary: {
      es: 'Backend con Go y Java/Spring sobre GCP en los squads de Nuevas Iniciativas, SOAT y Seguro Vehicular. Fui de los primeros en introducir Go en la compañía.',
      en: 'Backend with Go and Java/Spring on GCP in the New Initiatives, SOAT and Car Insurance squads. I was one of the first engineers to introduce Go at the company.',
    },
    highlights: {
      es: [
        'Migré la venta del SOAT (cientos o miles de pólizas digitales al día) de PHP 5 a Go sobre MySQL, con monitorización en New Relic.',
        'Reduje los rechazos y errores en la emisión de pólizas y el envío de documentos legales del ~50% al ~10%.',
        'Creé el template base de servicios Go sobre Cloud Run que adoptaron los equipos.',
        'Decenas de APIs para dos flujos de compra: venta exprés para clientes recurrentes y venta completa para clientes nuevos.',
        'Extraje el cotizador vehicular del monolito Java a un microservicio en Go: respuestas más rápidas y reglas nuevas sin tocar el monolito.',
        'Microservicios en Go para cupones y leads, y procesos batch nocturnos con Spring Batch.',
        'Tarjeta digital del SOAT estilo boarding pass en Google Wallet.',
      ],
      en: [
        'Migrated SOAT sales (hundreds to thousands of digital policies a day) from PHP 5 to Go on MySQL, with New Relic monitoring.',
        'Cut rejections and errors in policy issuance and legal-document delivery from ~50% to ~10%.',
        'Created the base Go service template on Cloud Run adopted across teams.',
        'Dozens of APIs for two purchase paths: express checkout for returning customers and full checkout for new ones.',
        'Extracted the vehicle quote engine from the Java monolith into a Go microservice: faster responses and new rules without touching the monolith.',
        'Go microservices for coupons and leads, plus nightly Spring Batch jobs.',
        'Boarding-pass-style digital SOAT card in Google Wallet.',
      ],
    },
    stack: ['Go', 'GORM', 'Fiber', 'Java 17', 'Spring Boot', 'Spring Batch', 'PHP Laravel', 'Vue / Nuxt', 'GCP Cloud Run', 'MySQL', 'PostgreSQL', 'MongoDB', 'New Relic', 'Docker'],
    tracks: ['backend', 'fullstack', 'cloud'],
    featured: true,
    links: [
      { label: { es: 'SOAT digital', en: 'Digital SOAT' }, href: 'https://www.interseguro.pe/soat-digital/' },
      { label: { es: 'Web', en: 'Website' }, href: 'https://www.interseguro.pe/' },
    ],
    testimonial: {
      status: 'draft',
      quote: { es: 'Pendiente: recomendación real de un compañero o responsable.', en: 'Pending: real recommendation from a teammate or manager.' },
      author: 'Nombre Apellido',
      role: { es: 'Cargo · Interseguro', en: 'Role · Interseguro' },
    },
  },
  {
    id: 'silabuz',
    companyId: 'silabuz',
    title: { es: 'Backend Developer (Django)', en: 'Backend Developer (Django)' },
    start: '2022-11',
    end: '2023-01',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Contrato por servicios', en: 'Service contract' },
    summary: {
      es: 'Backend en Django para su plataforma de contratación de talento.',
      en: 'Django backend for their talent-hiring platform.',
    },
    highlights: {
      es: [
        'Funcionalidades multi-tenant, multi-idioma y multi-moneda.',
        'Mantenimiento de la arquitectura, servidores e integraciones existentes.',
        'Documentación técnica del software existente y nuevo.',
      ],
      en: [
        'Multi-tenant, multi-language and multi-currency features.',
        'Maintained the existing architecture, servers and integrations.',
        'Technical documentation for existing and new software.',
      ],
    },
    stack: ['Python', 'Django', 'Django REST Framework', 'Docker', 'PostgreSQL'],
    tracks: ['backend'],
  },
  {
    id: 'groway',
    companyId: 'groway',
    title: { es: 'Full Stack Developer y docente', en: 'Full Stack Developer & instructor' },
    start: '2021-09',
    end: '2022-02',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    summary: {
      es: 'Proyectos a medida con React, Angular, Django y Spring Boot, y formación técnica para otros desarrolladores.',
      en: 'Custom projects with React, Angular, Django and Spring Boot, plus technical training for other developers.',
    },
    highlights: {
      es: [
        'Modifiqué los fields del ORM de Django para cifrar datos sensibles.',
        'Keycloak como proveedor de identidad e integración con APIs de Google.',
        'Microservicios con Node.js.',
        'Docente de Python, Flask/Django, arquitectura de microservicios, Docker y Kubernetes.',
      ],
      en: [
        'Customized Django ORM fields to encrypt sensitive data.',
        'Keycloak as identity provider and Google API integrations.',
        'Node.js microservices.',
        'Taught Python, Flask/Django, microservice architecture, Docker and Kubernetes.',
      ],
    },
    stack: ['React', 'Angular', 'Django', 'Spring Boot', 'Keycloak', 'Node.js', 'Docker', 'Kubernetes', 'Flutter'],
    tracks: ['fullstack', 'teaching'],
  },
  {
    id: 'kwema',
    companyId: 'kwema',
    title: { es: 'Android & Python Backend Engineer', en: 'Android & Python Backend Engineer' },
    start: '2021-08',
    end: null,
    location: { es: 'EE. UU. · remoto', en: 'USA · remote' },
    employment: { es: 'Contractor part-time', en: 'Part-time contractor' },
    partTime: true,
    summary: {
      es: 'App móvil y backend de una plataforma de seguridad laboral: wearables BLE con botón de pánico, alertas en tiempo real y dashboard. Ahora estoy modernizando la app por segunda vez, esta vez para Android e iOS con Kotlin Multiplatform.',
      en: 'Mobile app and backend for a workplace-safety platform: BLE wearable panic buttons, real-time alerts and a dashboard. I am now modernizing the app for the second time, this time for Android and iOS with Kotlin Multiplatform.',
    },
    highlights: {
      es: [
        'Modernicé la app heredada: de Java, XML y Volley con lógica en la UI a Kotlin, Retrofit y Clean Architecture, con soporte de Android 6 a 11+. Esa versión sigue en producción.',
        'Segunda modernización en curso: una sola app para Android e iOS con KMP, Jetpack Compose y SwiftUI. La lógica de negocio es compartida y cada plataforma conserva su interfaz nativa, para mejorar el servicio.',
        'Flujo de alertas de pánico desde wearables BLE/iBeacon con servicios en primer y segundo plano, que garantiza la alerta incluso tras reiniciar el teléfono.',
        'AWS IoT Core (device shadows, MQTT) y APIs en Python/Django para el dashboard, la app e integraciones, documentadas con OpenAPI.',
      ],
      en: [
        'Modernized the legacy app from Java, XML and Volley with UI-bound logic to Kotlin, Retrofit and Clean Architecture, supporting Android 6 to 11+. That version is still in production.',
        'Second modernization in progress: one app for Android and iOS with KMP, Jetpack Compose and SwiftUI. Business logic is shared while each platform keeps its native UI, to improve the service.',
        'Panic-alert flow from BLE/iBeacon wearables with foreground and background services, guaranteeing delivery even after a phone reboot.',
        'AWS IoT Core (device shadows, MQTT) and Python/Django APIs for the dashboard, app and integrations, documented with OpenAPI.',
      ],
    },
    stack: ['Kotlin', 'KMP', 'Jetpack Compose', 'SwiftUI', 'Java', 'BLE', 'iBeacon', 'AWS IoT Core', 'MQTT', 'gRPC', 'Python', 'Django', 'DRF', 'OpenAPI', 'Firebase'],
    tracks: ['mobile', 'backend'],
    featured: true,
    links: [
      { label: { es: 'Google Play', en: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=inc.kwema.kwema2' },
      { label: { es: 'Web', en: 'Website' }, href: 'https://www.kwema.co/' },
    ],
    testimonial: {
      status: 'draft',
      quote: { es: 'Pendiente: recomendación real.', en: 'Pending: real recommendation.' },
      author: 'Nombre Apellido',
      role: { es: 'Cargo · Kwema', en: 'Role · Kwema' },
    },
  },
  {
    id: 'urbaner',
    companyId: 'urbaner',
    title: { es: 'Software Engineer · Android & Go', en: 'Software Engineer · Android & Go' },
    start: '2019-09',
    end: '2021-08',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    summary: {
      es: 'Segunda etapa en Urbaner: apps Android de clientes y mensajeros, y el servicio de tracking en Go.',
      en: 'Second stint at Urbaner: Android apps for customers and couriers, and the Go tracking service.',
    },
    highlights: {
      es: [
        'Corrección y evolución de las apps Android de clientes y mensajeros.',
        'Optimización y corrección de bugs del tracking escrito en Go.',
        'Validaciones de SOAT mediante web scraping desde la app Android.',
        'Google Maps, QR, Google Calendar y Firebase Crashlytics; versión en Flutter de una de las apps.',
        'Soporte en campañas de alto volumen como Black Friday.',
      ],
      en: [
        'Fixed and evolved the customer and courier Android apps.',
        'Optimized and debugged the Go tracking service.',
        'SOAT validation via web scraping from the Android app.',
        'Google Maps, QR, Google Calendar and Firebase Crashlytics; Flutter version of one of the apps.',
        'Support for high-volume campaigns such as Black Friday.',
      ],
    },
    stack: ['Kotlin', 'Java', 'Android', 'Go', 'Python', 'Django', 'Flask', 'Flutter', 'Docker', 'Google Maps', 'Crashlytics'],
    tracks: ['mobile', 'backend'],
    featured: true,
    links: [
      { label: { es: 'Google Play', en: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=com.urbaner.client.app' },
      { label: { es: 'Web', en: 'Website' }, href: 'https://www.urbaner.com/' },
    ],
  },
  {
    id: 'atlas',
    companyId: 'atlas',
    title: { es: 'Líder técnico · E-commerce y mobile', en: 'Technical Lead · E-commerce & mobile' },
    start: '2019-02',
    end: '2020-08',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    summary: {
      es: 'Lideré la transformación digital de la empresa: canal e-commerce, infraestructura, pagos y equipo técnico.',
      en: 'Led the company’s digital transformation: e-commerce channel, infrastructure, payments and the tech team.',
    },
    highlights: {
      es: [
        'Migración y evolución del e-commerce (WordPress, Magento y PrestaShop).',
        'Pasarelas de pago PAYU y CULQI.',
        'Amazon SES con DKIM, SPF y DMARC para emails transaccionales.',
        'App híbrida con Ionic para catálogo y pedidos.',
        'Presupuesto del área de innovación, contratación y gestión del equipo técnico.',
      ],
      en: [
        'Migrated and evolved the e-commerce platform (WordPress, Magento and PrestaShop).',
        'PAYU and CULQI payment gateways.',
        'Amazon SES with DKIM, SPF and DMARC for transactional email.',
        'Hybrid Ionic app for catalog and orders.',
        'Innovation budget, hiring and management of the tech team.',
      ],
    },
    stack: ['PrestaShop', 'WordPress', 'Magento', 'PHP', 'Ionic', 'AWS', 'Amazon SES', 'PAYU', 'CULQI'],
    tracks: ['lead', 'fullstack', 'cloud'],
    featured: true,
    links: [{ label: { es: 'Zapatillas Tigre', en: 'Zapatillas Tigre' }, href: 'https://zapatillastigre.com/' }],
  },
  {
    id: 'previous',
    companyId: 'previous',
    title: { es: 'Android Developer · Líder técnico móvil', en: 'Android Developer · Mobile Tech Lead' },
    start: '2016-08',
    end: '2019-02',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Varias empresas', en: 'Several companies' },
    summary: {
      es: 'Mis primeros años profesionales, construyendo y publicando apps Android nativas e híbridas en agencias y proyectos de corta duración.',
      en: 'My first professional years, building and shipping native and hybrid Android apps at agencies and short-term projects.',
    },
    highlights: {
      es: [
        'Apps Android con Clean Architecture y MVP publicadas en Google Play y App Store.',
        'Líder técnico móvil en Avances Tecnológicos: estándares de commits y README, charlas internas y mentoring a dos desarrolladores junior.',
        'Uso temprano de Kotlin en Android (2017).',
      ],
      en: [
        'Android apps with Clean Architecture and MVP shipped to Google Play and the App Store.',
        'Mobile tech lead at Avances Tecnológicos: commit and README standards, internal talks and mentoring two junior developers.',
        'Early adoption of Kotlin on Android (2017).',
      ],
    },
    stack: ['Java', 'Kotlin', 'Android', 'Ionic', 'Cordova', 'Firebase', 'Node.js', 'Angular', 'Laravel', 'AWS', 'Vuforia'],
    tracks: ['mobile', 'lead'],
    group: [
      {
        company: 'ESAN',
        role: { es: 'Mobile Developer', en: 'Mobile Developer' },
        years: '2018–2019',
        note: { es: 'Apps Android e iOS de la universidad y realidad aumentada con Vuforia para orientarse en el campus.', en: 'University Android and iOS apps, plus Vuforia augmented reality for campus wayfinding.' },
      },
      {
        company: 'Force Close',
        role: { es: 'Android Developer', en: 'Android Developer' },
        years: '2018',
        note: { es: 'Tracking y routing para una app tipo Waze orientada a corredores.', en: 'Tracking and routing for a Waze-like app for runners.' },
      },
      {
        company: 'Avances Tecnológicos',
        role: { es: 'Líder técnico móvil', en: 'Mobile Tech Lead' },
        years: '2017–2018',
        note: { es: 'Apps nativas e híbridas (Ionic), deploys en AWS y mentoring a juniors.', en: 'Native and hybrid (Ionic) apps, AWS deployments and mentoring juniors.' },
      },
      {
        company: 'Sistemas Integrales 7A · MAP Salud',
        role: { es: 'Desarrollador móvil y web', en: 'Mobile & web developer' },
        years: '2017',
        note: { es: 'Apps Android modulares, Angular 4 y backends REST en Node.js.', en: 'Modular Android apps, Angular 4 and Node.js REST backends.' },
      },
      {
        company: 'Intercorp · Clínica Aviva',
        role: { es: 'Desarrollador de apps móviles', en: 'Mobile app developer' },
        years: '2017',
        note: { es: 'App en Ionic 3 publicada en Play Store, con rol cercano a Product Owner y Design Thinking.', en: 'Ionic 3 app shipped to the Play Store, in a role close to Product Owner, using Design Thinking.' },
      },
      {
        company: 'Urbaner',
        role: { es: 'Android Developer', en: 'Android Developer' },
        years: '2016–2017',
        note: { es: 'Primera etapa: app Android del courier desde cero con MVP y Firebase.', en: 'First stint: the courier’s Android app from scratch with MVP and Firebase.' },
      },
    ],
  },
  {
    id: 'iberotec',
    companyId: 'iberotec',
    title: { es: 'Prácticas en sistemas', en: 'Systems intern' },
    start: '2015-08',
    end: '2015-12',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    employment: { es: 'Prácticas', en: 'Internship' },
    summary: {
      es: 'Mis primeras prácticas: soporte y mantenimiento de los sistemas del instituto.',
      en: 'My first internship: support and maintenance of the institute’s systems.',
    },
    highlights: {
      es: [
        'Reportes con Jasper Server para el área académica.',
        'Administración del aula virtual en Moodle.',
        'Bolsa de trabajo institucional en WordPress y mantenimiento en PHP y Java Spring MVC.',
      ],
      en: [
        'Jasper Server reports for the academic area.',
        'Moodle virtual classroom administration.',
        'Institutional job board in WordPress and maintenance in PHP and Java Spring MVC.',
      ],
    },
    stack: ['PHP', 'Java', 'Spring MVC', 'MyBatis', 'Jasper Reports', 'Moodle', 'WordPress'],
    tracks: ['fullstack'],
  },
];

// ─── Formación, certificaciones, idiomas ─────────────────────────────────────

export const education = [
  {
    title: { es: 'Técnico Superior en Telemática', en: 'Higher Technical Degree in Telematics' },
    school: 'IBEROTEC / IDAT',
    period: '2014 – 2016',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    note: {
      es: 'Formación en redes, programación, microcontroladores, PLC, KNX e IoT.',
      en: 'Training in networking, programming, microcontrollers, PLC, KNX and IoT.',
    },
  },
];

export const certifications = [
  { name: 'Workshop AlloyDB', issuer: 'TEC', year: '2023' },
  { name: 'Deepweb & Darknet', issuer: 'ENHACKE Academy', year: '2024' },
  { name: 'Spring Boot Microservices', issuer: 'Platzi', year: '' },
  { name: 'Android con Kotlin y Jetpack Compose', issuer: 'Platzi', year: '' },
  { name: 'AWS Cloud Practitioner', issuer: 'AWS', year: '', inProgress: true },
  { name: 'CCNA I / II', issuer: 'Cisco', year: '' },
  { name: 'ITIL Foundations', issuer: '', year: '' },
];

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B1 (MCER) · en mejora', en: 'B1 (CEFR) · improving' } },
];

export const skillGroups: { name: Localized<string>; items: string[] }[] = [
  { name: { es: 'Android', en: 'Android' }, items: ['Kotlin', 'Java', 'Jetpack Compose', 'KMP', 'Coroutines / Flow', 'Room', 'Retrofit', 'Ktor', 'MVVM / MVI', 'Clean Architecture', 'Dexguard', 'BLE / iBeacon'] },
  { name: { es: 'Backend', en: 'Backend' }, items: ['Go', 'Java / Spring Boot', 'Spring Batch', 'Python / Django', 'Node.js / TypeScript', 'PHP / Laravel', '.NET 8', 'REST / OpenAPI', 'gRPC', 'MQTT'] },
  { name: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' }, items: ['AWS (CDK, Lambda, Cognito, SQS, DynamoDB, IoT Core)', 'GCP (Cloud Run, Cloud SQL)', 'Docker', 'GitHub Actions', 'New Relic', 'CloudWatch'] },
  { name: { es: 'Datos', en: 'Data' }, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'] },
  { name: { es: 'Web e híbrido', en: 'Web & hybrid' }, items: ['React', 'Angular', 'Vue / Nuxt', 'Astro', 'Ionic', 'Flutter'] },
  { name: { es: 'Forma de trabajo', en: 'Ways of working' }, items: ['Scrum', 'Kanban', 'Code review', 'Mentoring', 'IA aplicada (Claude Code, Cursor, Copilot)'] },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const CAREER_START = '2016-08';

const MONTHS: Localized<string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export function formatMonth(ym: string | null, lang: Locale): string {
  if (!ym) return lang === 'es' ? 'Actualidad' : 'Present';
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[lang][m - 1]} ${y}`;
}

export function formatPeriod(role: Role, lang: Locale): string {
  return `${formatMonth(role.start, lang)} – ${formatMonth(role.end, lang)}`;
}

function monthsBetween(start: string, end: string | null, now = new Date()): number {
  const [sy, sm] = start.split('-').map(Number);
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

export function formatDuration(role: Role, lang: Locale): string {
  const total = monthsBetween(role.start, role.end);
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts: string[] = [];
  if (y) parts.push(lang === 'es' ? `${y} ${y === 1 ? 'año' : 'años'}` : `${y} ${y === 1 ? 'yr' : 'yrs'}`);
  if (m) parts.push(lang === 'es' ? `${m} ${m === 1 ? 'mes' : 'meses'}` : `${m} ${m === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
}

/** Años completos de experiencia profesional (desde 08/2016). */
export function yearsOfExperience(now = new Date()): number {
  return Math.floor(monthsBetween(CAREER_START, null, now) / 12);
}

export function getCompany(role: Role): Company {
  return companies[role.companyId];
}

export function isTestimonialVisible(t?: Testimonial): t is Testimonial {
  if (!t) return false;
  return t.status === 'published' || import.meta.env.PUBLIC_SHOW_DRAFT_TESTIMONIALS === 'true';
}

export const featuredRoles = roles.filter((r) => r.featured);

/** Empresas para la franja de logos (orden de relevancia). */
export const trustedBy = ['starbucks', 'interseguro', 'kwema', 'urbaner', 'atlas'].map((id) => companies[id]);

export const industriesCount = new Set(
  roles.filter((r) => r.companyId !== 'previous' && r.companyId !== 'iberotec').map((r) => companies[r.companyId].industry.es),
).size;
