// src/i18n/ui.ts — Dictionary ES/EN para textos cortos
// Usar: <span set:html={t(Astro.url, 'nav.work')} /> o importar { t }

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLanguage = 'es';

export type Language = keyof typeof languages;

export type RouteId =
  | 'home'
  | 'about'
  | 'profile'
  | 'experience'
  | 'services'
  | 'serviceDetail'
  | 'openSource'
  | 'flowGm'
  | 'openSourceItem'
  | 'blog'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies';

type RouteParams = Record<string, string>;
type LocalizedRoute = {
  id: RouteId;
  paths: Partial<Record<Language, string>>;
  fallbackId?: RouteId;
};

export const routeMap: LocalizedRoute[] = [
  { id: 'home', paths: { es: '/', en: '/' } },
  { id: 'about', paths: { es: '/sobre-mi', en: '/about' } },
  { id: 'profile', paths: { es: '/perfil', en: '/profile' } },
  { id: 'experience', paths: { es: '/experiencia', en: '/experience' } },
  { id: 'services', paths: { es: '/servicios', en: '/services' } },
  { id: 'serviceDetail', paths: { es: '/servicios/:slug', en: '/services/:slug' }, fallbackId: 'services' },
  { id: 'openSource', paths: { es: '/open-source', en: '/open-source' } },
  { id: 'flowGm', paths: { es: '/open-source/flow-gm', en: '/open-source/flow-gm' }, fallbackId: 'openSource' },
  { id: 'openSourceItem', paths: { es: '/open-source/:slug', en: '/open-source/:slug' }, fallbackId: 'openSource' },
  { id: 'blog', paths: { es: '/blog', en: '/blog' } },
  { id: 'contact', paths: { es: '/contacto', en: '/contact' } },
  { id: 'privacy', paths: { es: '/privacidad', en: '/privacy' } },
  { id: 'terms', paths: { es: '/aviso-legal', en: '/terms' } },
  { id: 'cookies', paths: { es: '/cookies', en: '/cookies' } },
];

export const ui = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.profile': 'CV',
    'nav.services': 'Servicios',
    'nav.stack': 'Stack',
    'nav.open_source': 'Open Source',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',

    // Home — Hero
    'hero.eyebrow': 'Ingeniero de producto',
    'hero.headline_start': 'Construyendo productos en los que la gente',
    'hero.headline_trust': 'confía',
    'hero.headline_end': '.',
    'hero.subheadline': 'Diseño y construyo plataformas escalables de mobile, backend y cloud, listas para crecer y no para rehacerse.',
    'hero.currently_label': 'AHORA',
    'hero.currently_title': 'Construyendo productos digitales que generan impacto.',
    'hero.currently_android': 'Android',
    'hero.currently_kmp': 'Kotlin Multiplatform',
    'hero.currently_go': 'Go',
    'hero.currently_aws': 'AWS',
    'hero.currently_architecture': 'Arquitectura limpia',
    'hero.currently_problem_solver': 'Resolución de problemas',
    'hero.currently_footer': 'Siempre aprendiendo.',
    'hero.cta_primary': 'Construyamos juntos',
    'hero.cta_secondary': 'Ver trabajo seleccionado',
    'hero.pill_mobile': 'Mobile',
    'hero.pill_backend': 'Backend',
    'hero.pill_cloud': 'Cloud',
    'hero.pill_ai': 'AI',
    'hero.pill_architecture': 'Arquitectura',
    'hero.pill_product': 'Estrategia de producto',

    // Home — Trust band
    'trust.label': 'CON LA CONFIANZA DE EMPRESAS Y EQUIPOS',

    // Home — Stats
    'stats.years_value': '10+',
    'stats.years_label': 'Años construyendo productos',
    'stats.products_value': '20+',
    'stats.products_label': 'Proyectos entregados',
    'stats.industries_value': '4',
    'stats.industries_label': 'Industrias atendidas',
    'stats.worldwide_label': 'Global',
    'stats.worldwide_sub': 'Colaboración remota',

    // Home — Selected Work
    'work.eyebrow': 'TRABAJO SELECCIONADO',
    'work.title': 'Construyendo productos que importan.',
    'work.view_all': 'Ver todos los proyectos',

    // Home — How I Work
    'how.eyebrow': 'CÓMO TRABAJO',
    'how.title': 'Un proceso pragmático para resultados reales.',
    'how.discover': 'Descubrir',
    'how.discover_desc': 'Entender el negocio, los usuarios y las restricciones.',
    'how.design': 'Diseñar',
    'how.design_desc': 'Arquitectar la solución correcta para el problema.',
    'how.build': 'Construir',
    'how.build_desc': 'Iterar, construir y publicar con calidad.',
    'how.measure': 'Medir',
    'how.measure_desc': 'Decisiones basadas en datos para validar impacto.',
    'how.improve': 'Mejorar',
    'how.improve_desc': 'Evolucionar el producto de forma continua.',

    // Home — CTA final
    'cta.title': 'Construyamos algo',
    'cta.title_strong': 'con sentido',
    'cta.body': 'Siempre estoy abierto a hablar de nuevos proyectos, alianzas o simplemente a tener una buena conversación.',
    'cta.cta_primary': 'Reservar una llamada',
    'cta.cta_secondary': 'Ver mi trabajo',

    // Behind the Engineer (About)








    // Services
    'services.eyebrow': 'SERVICIOS',
    'services.title_start': 'Cómo puedo ayudarte a construir',
    'services.title_strong': 'tu producto',
    'services.title_end': '.',
    'services.subheadline': 'De la idea al crecimiento y más allá. Me asocio con startups y empresas para diseñar, construir y evolucionar productos digitales que generen impacto real.',
    'services.tag_mindset': 'Mentalidad de producto',
    'services.tag_architecture': 'Arquitectura limpia',
    'services.tag_results': 'Resultados que importan',
    'services.ways_label': 'CINCO FORMAS EN LAS QUE PUEDO AYUDAR',
    'services.ways_title': 'Soluciones para cada etapa del viaje de tu producto.',
    'services.view_details': 'Ver detalles',

    'services.1_number': '01',
    'services.1_title_es': 'Webs de alto rendimiento',
    'services.1_title_en': 'High-performance Web Applications',
    'services.1_body': 'Aplicaciones web construidas para velocidad, escalabilidad y una gran experiencia de usuario. Stacks modernos, código limpio y buenas prácticas.',

    'services.2_number': '02',
    'services.2_title_es': 'Apps móviles nativas e híbridas',
    'services.2_title_en': 'Native & Hybrid Mobile Apps',
    'services.2_body': 'Experiencias móviles que a los usuarios les encantan. Nativas o multiplataforma, construidas pensando en rendimiento y calidad.',

    'services.3_number': '03',
    'services.3_title_es': 'Ecosistema completo',
    'services.3_title_en': 'End-to-End Product Ecosystem',
    'services.3_body': 'Diseño y construyo todo el ecosistema: apps, backend, infraestructura cloud e integraciones.',

    'services.4_number': '04',
    'services.4_title_es': 'Hot fixes y mejoras',
    'services.4_title_en': 'Hot Fixes & Improvements',
    'services.4_body': 'Soluciones rápidas y efectivas para corregir problemas, mejorar rendimiento y potenciar funcionalidades existentes.',

    'services.5_number': '05',
    'services.5_title_es': 'Rescate de proyectos IA / Vibe Coding',
    'services.5_title_en': 'Project Rescue & AI / Vibe Coding',
    'services.5_body': 'Rescato proyectos estancados o en riesgo. Aprovecho la IA y flujos de trabajo modernos para avanzar rápido y entregar resultados.',

    'services.from_chaos': 'DEL CAOS',
    'services.to_impact': 'AL IMPACTO',

    'services.cta_title': '¿Tienes un proyecto en mente?',
    'services.cta_body': 'Construyamos algo grande juntos.',
    'services.cta_see_work': 'Ver cómo trabajo',
    'services.cta_lets_talk': 'Hablemos',

    // Open Source
    'os.eyebrow': 'OPEN SOURCE',
    'os.title_start': 'Construyendo en público.',
    'os.title_strong': 'Compartir para crear impacto',
    'os.title_end': '.',
    'os.subheadline': 'El open source es cómo aprendo, colaboro y devuelvo valor a la comunidad de desarrolladores. Creo que el buen software crece cuando construimos juntos.',
    'os.tag_build': 'Construir',
    'os.tag_collaborate': 'Colaborar',
    'os.tag_impact': 'Generar impacto',
    'os.featured_label': 'PROYECTOS DESTACADOS',
    'os.featured_title': 'Algunos proyectos open source de los que me siento orgulloso.',
    'os.view_more': 'Ver más proyectos en GitHub',
    'os.impacts_title': 'Esfuerzo constante, impacto real.',
    'os.impacts_body': 'Contribuyo regularmente a proyectos open source y colaboro con una comunidad global increíble.',
    'os.stack_label': 'TECNOLOGÍAS CON LAS QUE TRABAJO',
    'os.philosophy_eyebrow': 'MI FILOSOFÍA OPEN SOURCE',
    'os.philosophy_quote': 'El open source es más que código. Es transparencia, colaboración y construir un futuro mejor juntos.',
    'os.cta_title_strong': 'juntos',
    'os.cta_body': 'Siempre me entusiasma colaborar en proyectos con sentido y compartir conocimiento con la comunidad.',
    'os.cta_start': 'Iniciar conversación',
    'os.cta_view': 'Ver mi trabajo',

    // Contact
    'contact.eyebrow': 'CONTACTO',
    'contact.title_start': 'Construyamos algo',
    'contact.title_strong': 'increíble juntos',
    'contact.title_end': '.',
    'contact.body': 'Actualmente estoy disponible para nuevas oportunidades y con ganas de trabajar en proyectos con sentido.',
    'contact.email_label': 'Correo',
    'contact.location_label': 'Ubicación',
    'contact.location_value': 'España (remoto)',
    'contact.response_label': 'Tiempo de respuesta',
    'contact.response_value': 'Normalmente en menos de 24h',
    'contact.form_title': 'Iniciar conversación',
    'contact.form_subtitle': 'Cuéntame sobre tu proyecto o saluda sin más.',
    'contact.form_name': 'Nombre',
    'contact.form_email': 'Correo',
    'contact.form_company': 'Empresa (opcional)',
    'contact.form_message': 'Cuéntame sobre tu proyecto...',
    'contact.form_send': 'Enviar mensaje',
    'contact.form_privacy': 'Tu información está segura conmigo. Respeto tu privacidad.',
    'contact.other_ways': 'Otras formas de conectar',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume': 'CV',
    'contact.resume_action': 'Descargar PDF',

    // Footer
    'footer.tagline': 'Construyendo productos digitales que resuelven problemas reales y generan impacto.',
    'footer.location': 'Desde España. Trabajando para el mundo.',
    'footer.available': 'Disponible para trabajar',
    'footer.col_nav': 'Navegación',
    'footer.col_services': 'Servicios',
    'footer.col_legal': 'Legal',
    'footer.col_newsletter': '¿Trabajamos juntos?',
    'footer.col_newsletter_body': 'Escríbeme por correo o revisa mi CV completo. Normalmente respondo en menos de 24 h.',
    'footer.col_newsletter_placeholder': 'Tu correo electrónico',
    'footer.legal_privacy': 'Política de privacidad',
    'footer.legal_terms': 'Términos del servicio',
    'footer.legal_cookies': 'Política de cookies',
    'footer.copyright': '© 2026 Yahyr Paredes. Todos los derechos reservados.',
    'footer.built_with': 'Diseñado y construido con pasión 💙',
    'footer.service_web': 'Desarrollo web',
    'footer.service_apps': 'Apps móviles',
    'footer.service_ecosystem': 'Ingeniería de producto',
    'footer.service_consulting': 'Consultoría técnica',
    'footer.service_devops': 'DevOps y Cloud',
    'footer.service_hotfixes': 'Hot fixes',
    'footer.service_rescue': 'Rescate con IA',

    // 404
    '404.code': '404',
    '404.title': 'Página no encontrada',
    '404.body': 'Parece que esta página tomó otro rumbo. Volvamos al camino.',
    '404.cta': 'Volver al inicio',
    '404.lost_title': '¿Perdido? Encuentra tu camino',
    '404.lost_links': 'Inicio · Sobre mí · Experiencia · Servicios',

    // 500
    '500.code': '500',
    '500.title': 'Algo salió mal',
    '500.body': 'Nuestros servidores tuvieron un pequeño problema. Ya estamos en ello. Inténtalo de nuevo en un momento.',
    '500.cta': 'Volver al inicio',
    '500.issues_title': '¿Sigues teniendo problemas?',
    '500.contact_me': 'Contáctame',

    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Algo salió mal',
    'common.back': 'Volver',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.profile': 'CV',
    'nav.services': 'Services',
    'nav.stack': 'Stack',
    'nav.open_source': 'Open Source',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Let\'s talk',

    // Home — Hero
    'hero.eyebrow': 'Product Engineer',
    'hero.headline_start': 'Engineering products people',
    'hero.headline_trust': 'trust',
    'hero.headline_end': '.',
    'hero.subheadline': 'I design and build scalable mobile, backend and cloud platforms that are ready to grow, not to be rewritten.',
    'hero.currently_label': 'CURRENTLY',
    'hero.currently_title': 'Building digital products that make an impact.',
    'hero.currently_android': 'Android',
    'hero.currently_kmp': 'Kotlin Multiplatform',
    'hero.currently_go': 'Go',
    'hero.currently_aws': 'AWS',
    'hero.currently_architecture': 'Clean Architecture',
    'hero.currently_problem_solver': 'Problem Solver',
    'hero.currently_footer': 'Always learning.',
    'hero.cta_primary': 'Let\'s build together',
    'hero.cta_secondary': 'See selected work',
    'hero.pill_mobile': 'Mobile',
    'hero.pill_backend': 'Backend',
    'hero.pill_cloud': 'Cloud',
    'hero.pill_ai': 'AI',
    'hero.pill_architecture': 'Architecture',
    'hero.pill_product': 'Product Strategy',

    // Home — Trust band
    'trust.label': 'TRUSTED BY COMPANIES AND TEAMS',

    // Home — Stats
    'stats.years_value': '10+',
    'stats.years_label': 'Years building products',
    'stats.products_value': '20+',
    'stats.products_label': 'Projects delivered',
    'stats.industries_value': '4',
    'stats.industries_label': 'Industries served',
    'stats.worldwide_label': 'Worldwide',
    'stats.worldwide_sub': 'Remote collaboration',

    // Home — Selected Work
    'work.eyebrow': 'SELECTED WORK',
    'work.title': 'Building products that matter.',
    'work.view_all': 'View all projects',

    // Home — How I Work
    'how.eyebrow': 'HOW I WORK',
    'how.title': 'A pragmatic process for real results.',
    'how.discover': 'Discover',
    'how.discover_desc': 'Understand the business, users and constraints.',
    'how.design': 'Design',
    'how.design_desc': 'Architect the right solution for the problem.',
    'how.build': 'Build',
    'how.build_desc': 'Iterate, build and ship with quality.',
    'how.measure': 'Measure',
    'how.measure_desc': 'Data-driven decisions to validate impact.',
    'how.improve': 'Improve',
    'how.improve_desc': 'Continuously evolve the product.',

    // Home — CTA final
    'cta.title': 'Let\'s build something',
    'cta.title_strong': 'meaningful',
    'cta.body': 'I\'m always open to discussing new projects, partnerships or just having a good conversation.',
    'cta.cta_primary': 'Book a call',
    'cta.cta_secondary': 'See my work',

    // Behind the Engineer (About)








    // Services
    'services.eyebrow': 'SERVICES',
    'services.title_start': 'How I can help build',
    'services.title_strong': 'your product',
    'services.title_end': '.',
    'services.subheadline': 'From idea to scale and beyond. I partner with startups and companies to design, build and evolve digital products that create real impact.',
    'services.tag_mindset': 'Product mindset',
    'services.tag_architecture': 'Clean architecture',
    'services.tag_results': 'Results that matter',
    'services.ways_label': 'FIVE WAYS I CAN HELP',
    'services.ways_title': 'Solutions for every stage of your product journey.',
    'services.view_details': 'View details',

    'services.1_number': '01',
    'services.1_title_es': 'High-performance Web Applications',
    'services.1_title_en': 'High-performance Web Applications',
    'services.1_body': 'Web applications built for speed, scalability and great user experience. Modern stacks, clean code and best practices.',

    'services.2_number': '02',
    'services.2_title_es': 'Native & Hybrid Mobile Apps',
    'services.2_title_en': 'Native & Hybrid Mobile Apps',
    'services.2_body': 'Mobile experiences that users love. Native or cross-platform, built with performance and quality in mind.',

    'services.3_number': '03',
    'services.3_title_es': 'End-to-End Product Ecosystem',
    'services.3_title_en': 'End-to-End Product Ecosystem',
    'services.3_body': 'I design and build the whole ecosystem: apps, backend, cloud infrastructure and integrations.',

    'services.4_number': '04',
    'services.4_title_es': 'Hot Fixes & Improvements',
    'services.4_title_en': 'Hot Fixes & Improvements',
    'services.4_body': 'Quick, effective solutions to fix issues, improve performance and enhance existing features.',

    'services.5_number': '05',
    'services.5_title_es': 'Project Rescue & AI / Vibe Coding',
    'services.5_title_en': 'Project Rescue & AI / Vibe Coding',
    'services.5_body': 'Rescue projects stuck or at risk. I leverage AI and modern workflows to move fast and deliver results.',

    'services.from_chaos': 'FROM CHAOS',
    'services.to_impact': 'TO IMPACT',

    'services.cta_title': 'Have a project in mind?',
    'services.cta_body': 'Let\'s build something great together.',
    'services.cta_see_work': 'See how I work',
    'services.cta_lets_talk': 'Let\'s talk',

    // Open Source
    'os.eyebrow': 'OPEN SOURCE',
    'os.title_start': 'Building in public.',
    'os.title_strong': 'Sharing to create impact',
    'os.title_end': '.',
    'os.subheadline': 'Open source is how I learn, collaborate and give back to the developer community. I believe that great software grows when we build together.',
    'os.tag_build': 'Build',
    'os.tag_collaborate': 'Collaborate',
    'os.tag_impact': 'Make an impact',
    'os.featured_label': 'FEATURED PROJECTS',
    'os.featured_title': 'Some open source projects I\'m proud of.',
    'os.view_more': 'View more projects on GitHub',
    'os.impacts_title': 'Consistent effort, real impact.',
    'os.impacts_body': 'I contribute regularly to open source projects and collaborate with an amazing global community.',
    'os.stack_label': 'TECHNOLOGIES I WORK WITH',
    'os.philosophy_eyebrow': 'MY OPEN SOURCE PHILOSOPHY',
    'os.philosophy_quote': 'Open source is more than code. It\'s about transparency, collaboration and building a better future together.',
    'os.cta_title_strong': 'together',
    'os.cta_body': 'I\'m always excited to collaborate on meaningful projects and share knowledge with the community.',
    'os.cta_start': 'Start a conversation',
    'os.cta_view': 'View my work',

    // Contact
    'contact.eyebrow': 'CONTACT',
    'contact.title_start': 'Let\'s build something',
    'contact.title_strong': 'amazing together',
    'contact.title_end': '.',
    'contact.body': 'I\'m currently available for new opportunities and excited to work on meaningful projects.',
    'contact.email_label': 'Email',
    'contact.location_label': 'Location',
    'contact.location_value': 'Spain (Remote)',
    'contact.response_label': 'Response time',
    'contact.response_value': 'Usually within 24h',
    'contact.form_title': 'Start a conversation',
    'contact.form_subtitle': 'Tell me about your project or just say hi.',
    'contact.form_name': 'Name',
    'contact.form_email': 'Email',
    'contact.form_company': 'Company (optional)',
    'contact.form_message': 'Tell me about your project...',
    'contact.form_send': 'Send message',
    'contact.form_privacy': 'Your information is safe with me. I respect your privacy.',
    'contact.other_ways': 'Other ways to connect',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume': 'Resume',
    'contact.resume_action': 'Download PDF',

    // Footer
    'footer.tagline': 'Building digital products that solve real problems and create meaningful impact.',
    'footer.location': 'Based in Spain. Working worldwide.',
    'footer.available': 'Available for work',
    'footer.col_nav': 'Navigation',
    'footer.col_services': 'Services',
    'footer.col_legal': 'Legal',
    'footer.col_newsletter': 'Work together?',
    'footer.col_newsletter_body': 'Email me or check my full CV. I usually reply within 24h.',
    'footer.col_newsletter_placeholder': 'Enter your email',
    'footer.legal_privacy': 'Privacy Policy',
    'footer.legal_terms': 'Terms of Service',
    'footer.legal_cookies': 'Cookie Policy',
    'footer.copyright': '© 2026 Yahyr Paredes. All rights reserved.',
    'footer.built_with': 'Designed & built with passion 💙',
    'footer.service_web': 'Web Development',
    'footer.service_apps': 'Mobile Apps',
    'footer.service_ecosystem': 'Product Engineering',
    'footer.service_consulting': 'Technical Consulting',
    'footer.service_devops': 'DevOps & Cloud',
    'footer.service_hotfixes': 'Hot Fixes',
    'footer.service_rescue': 'AI Rescue',

    // 404
    '404.code': '404',
    '404.title': 'Page not found',
    '404.body': 'Looks like this page went on a different journey. Let\'s get you back on track.',
    '404.cta': 'Back to home',
    '404.lost_title': 'Lost? Find your way',
    '404.lost_links': 'Home · About · Experience · Services',

    // 500
    '500.code': '500',
    '500.title': 'Something went wrong',
    '500.body': 'Our servers had a little meltdown. We\'re on it. Please try again in a moment.',
    '500.cta': 'Back to home',
    '500.issues_title': 'Still having issues?',
    '500.contact_me': 'Contact me',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.back': 'Back',
  },
};

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function t(url: URL, key: string): string {
  const lang = getLangFromUrl(url);
  const dictionary = ui[lang as keyof typeof ui] as Record<string, string> | undefined;
  const fallback = ui[defaultLanguage as keyof typeof ui] as Record<string, string> | undefined;
  return dictionary?.[key] || fallback?.[key] || key;
}

export function getPathWithoutLang(pathname: string): string {
  return pathname.replace(/^\/(es|en)/, '') || '/';
}

function normalizeRoutePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

function patternToRegex(pattern: string) {
  const keys: string[] = [];
  const source = normalizeRoutePath(pattern)
    .replace(/:[^/]+/g, (match) => {
      keys.push(match.slice(1));
      return '([^/]+)';
    });

  return {
    keys,
    regex: new RegExp(`^${source}$`),
  };
}

function matchRoute(pathname: string): { route: LocalizedRoute; params: RouteParams } | undefined {
  const path = normalizeRoutePath(pathname);

  for (const route of routeMap) {
    for (const pattern of Object.values(route.paths)) {
      if (pattern && !pattern.includes(':') && normalizeRoutePath(pattern) === path) {
        return { route, params: {} };
      }
    }
  }

  for (const route of routeMap) {
    for (const pattern of Object.values(route.paths)) {
      if (!pattern || !pattern.includes(':')) continue;
      const { keys, regex } = patternToRegex(pattern);
      const match = path.match(regex);
      if (!match) continue;

      return {
        route,
        params: Object.fromEntries(keys.map((key, index) => [key, match[index + 1]])),
      };
    }
  }

  return undefined;
}

function fillRouteParams(path: string, params: RouteParams): string {
  return path.replace(/:([^/]+)/g, (_, key: string) => params[key] || '');
}

export function getLocalizedPath(routeId: RouteId, targetLang: Language, params: RouteParams = {}): string {
  const route = routeMap.find((item) => item.id === routeId);
  const path = route?.paths[targetLang];

  if (path) {
    const localizedPath = fillRouteParams(path, params);
    return localizedPath === '/' ? `/${targetLang}/` : `/${targetLang}${localizedPath}/`;
  }

  if (route?.fallbackId && route.fallbackId !== routeId) {
    return getLocalizedPath(route.fallbackId, targetLang);
  }

  return `/${targetLang}/`;
}

/** Atajo para componentes: ruta localizada según la URL actual. */
export function localePath(url: URL, routeId: RouteId, params: RouteParams = {}): string {
  return getLocalizedPath(routeId, getLangFromUrl(url), params);
}

export function getAlternateUrl(pathname: string, targetLang: Language): string {
  const path = getPathWithoutLang(pathname);
  const match = matchRoute(path);

  if (!match) {
    return getLocalizedPath('home', targetLang);
  }

  return getLocalizedPath(match.route.id, targetLang, match.params);
}
