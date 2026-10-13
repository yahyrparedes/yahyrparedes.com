// Site profile data for Yahyr Paredes · yahyrparedes.com

export interface Social {
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'email' | 'instagram' | 'youtube';
}

export interface Plugin {
  slug: string;
  name: string;
  moduleName?: string;
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

// La trayectoria (empresas, roles, formación, skills) vive en ./career.ts
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
  image?: string;
  plugins: Plugin[];
  photos: PhotoGroup[];
}

export const site: SiteProfile = {
  name: 'Yahyr Paredes',
  handle: 'yahyrparedes',
  role: 'Senior Software Engineer · Android & Backend',
  tagline: 'Ingeniero Android y backend',
  location: 'Cortijos Nuevos, Jaén, Andalucía',
  country: 'España',
  email: 'yahyrparedesarteaga@gmail.com',
  bio: 'Ingeniero de software Android y backend (Kotlin, Go, Java, Python) con más de 10 años de experiencia. Disponible para nuevas oportunidades en España, en remoto o presencial.',
  longBio: `Nacido en Perú, llegué a España con mi familia en busca de nuevas oportunidades. Llevo más de 10 años construyendo software: empecé en Android, sumé backend con Go, Java/Spring y Python, y ahora combino ambos mundos con infraestructura cloud (AWS, GCP) y desarrollo full-stack.

Mi enfoque es pragmático: menos buzzwords, más producto funcionando. Disfruto tanto de una arquitectura limpia como de un hot fix a las 2am que salva un deploy.

Ahora mismo estoy basado en Cortijos Nuevos (Jaén, Andalucía) y disponible para proyectos en remoto o presencial en España.`,
  origin: 'Perú → Jaén, España',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yahyrparedes/', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/yahyrparedes', icon: 'github' },
    { label: 'Email', url: 'mailto:yahyrparedesarteaga@gmail.com', icon: 'email' },
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
