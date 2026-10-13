// SEO helpers
const SITE_NAME = 'Yahyr Paredes';
const DEFAULT_OG_IMAGE = '/images/og-default.png';
const SITE_URL = 'https://yahyrparedes.com';

export interface SeoMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'profile' | 'article';
  publishedTime?: string;
  author?: string;
  noindex?: boolean;
}

export function buildMeta({
  title, description, image, url, type = 'website', publishedTime, author, noindex = false,
}: SeoMeta) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image
    ? image.startsWith('http') ? image : `${SITE_URL}${image}`
    : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return { fullTitle, fullUrl, ogImage, type, publishedTime, author, noindex };
}

export function personJsonLd(profile: {
  name: string; handle: string; bio: string; image?: string; email?: string; sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.handle,
    description: profile.bio,
    image: profile.image,
    email: profile.email,
    url: SITE_URL,
    sameAs: profile.sameAs,
    jobTitle: 'Senior Software Engineer (Android & Backend)',
    alumniOf: { '@type': 'EducationalOrganization', name: 'IBEROTEC / IDAT' },
    nationality: { '@type': 'Country', name: 'Peru' },
    knowsAbout: ['Android', 'Kotlin', 'Jetpack Compose', 'Kotlin Multiplatform', 'Go', 'Java', 'Spring Boot', 'Python', 'Django', 'AWS', 'GCP', 'Mobile Development', 'Backend Development'],
    knowsLanguage: ['es', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaén',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yahyr Paredes',
    alternateName: 'yahyrparedes',
    url: SITE_URL,
    inLanguage: ['es-ES', 'en'],
  };
}

export function serviceJsonLd(service: { name: string; description: string; provider: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@type': 'Person', name: service.provider },
    areaServed: { '@type': 'Country', name: 'Spain' },
  };
}

export function productJsonLd(plugin: {
  name: string; description: string; price: string; priceUnit: string; platform: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plugin.name,
    description: plugin.description,
    brand: { '@type': 'Brand', name: 'Yahyr Paredes' },
    category: `Módulo SEO para ${plugin.platform}`,
    offers: {
      '@type': 'Offer',
      price: /^\d/.test(plugin.price) ? plugin.price : '0',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: /^\d/.test(plugin.price) ? plugin.price : '0',
        priceCurrency: 'EUR',
        unitText: plugin.priceUnit,
      },
      availability: 'https://schema.org/InStock',
    },
  };
}
