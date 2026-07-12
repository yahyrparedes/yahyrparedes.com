// SEO helpers
const SITE_NAME = 'Yahyr Paredes · Software developer';
const DEFAULT_OG_IMAGE = '/og-default.png';
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
  const fullTitle = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
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
    knowsAbout: ['Android', 'Kotlin', 'Java', 'Spring Boot', 'AWS', 'GCP', 'Mobile Development', 'Backend Development'],
    knowsLanguage: ['es', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cortijos Nuevos',
      addressRegion: 'Jaén',
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
    inLanguage: 'es-ES',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
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
    category: `Plugin SEO para ${plugin.platform}`,
    offers: {
      '@type': 'Offer',
      price: plugin.price,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plugin.price,
        priceCurrency: 'EUR',
        unitText: plugin.priceUnit,
      },
      availability: 'https://schema.org/InStock',
    },
  };
}
