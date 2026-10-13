// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  site: 'https://yahyrparedes.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true, // /es/ y /en/, no /about
      // redirectToDefaultLocale: false → nginx (302 por Accept-Language) y src/pages/index.astro resuelven "/"
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      entryLimit: 45000,
      filter: (page) =>
        page !== 'https://yahyrparedes.com/' &&
        !page.includes('/404') &&
        !page.includes('/500') &&
        !page.includes('/admin') &&
        !page.includes('/plugins') &&
        // módulos Tiger: ocultos del índice hasta reorganizar la colección
        !/\/open-source\/(google-shopping|rich-snippets|pixel-suite|meta-shop|search-console)\//.test(page) &&
        !page.includes('/_astro'),
      /** @param {import('@astrojs/sitemap').SitemapItem} item @returns {any} */
      serialize(item) {
        const url = item.url;
        const path = new URL(url).pathname;

        if (path === '/' || path === '/es/' || path === '/en/') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }

        if (path.includes('/experiencia') || path.includes('/experience') || path.includes('/profile')) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        if (path.includes('/sobre-mi') || path.includes('/about')) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        if (path.includes('/perfil')) return { ...item, changefreq: 'monthly', priority: 0.8 };

        if (
          path.includes('/servicios/webs') ||
          path.includes('/services/webs') ||
          path.includes('/servicios/apps') ||
          path.includes('/services/apps') ||
          path.includes('/servicios/ecosistema') ||
          path.includes('/services/ecosistema') ||
          path.includes('/servicios/ai-rescue') ||
          path.includes('/services/ai-rescue')
        ) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        if (path.includes('/servicios/hot-fixes') || path.includes('/services/hot-fixes')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }
        if (path.includes('/servicios') || path.includes('/services')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }

        if (path.includes('/open-source/') && !path.endsWith('/open-source/')) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        if (path.includes('/open-source')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }

        if (path.includes('/blog/') && !path.endsWith('/blog/')) {
          return { ...item, changefreq: 'monthly', priority: 0.6 };
        }
        if (path.includes('/blog')) return { ...item, changefreq: 'monthly', priority: 0.5 };

        if (path.includes('/contacto') || path.includes('/contact')) {
          return { ...item, changefreq: 'monthly', priority: 0.6 };
        }
        if (
          path.includes('/privacidad') ||
          path.includes('/privacy') ||
          path.includes('/aviso-legal') ||
          path.includes('/terms') ||
          path.includes('/cookies')
        ) {
          return { ...item, changefreq: 'yearly', priority: 0.3 };
        }

        return { ...item, changefreq: 'monthly', priority: 0.5 };
      },
    }),
  ],
  vite: {
    // @ts-expect-error — desajuste de tipos entre la versión de Vite de Astro y la de @tailwindcss/vite
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': srcDir,
        '@components': `${srcDir}/components`,
        '@layouts': `${srcDir}/layouts`,
        '@lib': `${srcDir}/lib`,
        '@styles': `${srcDir}/styles`,
        '@data': `${srcDir}/data`,
        '@content': `${srcDir}/content`,
        '@i18n': `${srcDir}/i18n`,
      },
    },
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
