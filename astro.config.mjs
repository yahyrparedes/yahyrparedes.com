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
      // redirectToDefaultLocale: false → mi src/pages/index.astro hace el redirect con detección de navegador
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      entryLimit: 45000,
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/admin') &&
        !page.includes('/_astro'),
      serialize(item) {
        const url = item.url;
        if (url.endsWith('yahyrparedes.com/') || url.endsWith('yahyrparedes.com')) {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        if (url.includes('/sobre-mi')) return { ...item, changefreq: 'monthly', priority: 0.9 };
        if (url.includes('/perfil')) return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (url.includes('/servicios/webs')) return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (url.includes('/servicios/apps')) return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (url.includes('/servicios/ecosistema')) return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (url.includes('/servicios/hot-fixes')) return { ...item, changefreq: 'monthly', priority: 0.7 };
        if (url.includes('/servicios/ai-rescue')) return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (url.includes('/servicios')) return { ...item, changefreq: 'monthly', priority: 0.7 };
        if (url.includes('/plugins/') && !url.endsWith('/plugins/')) return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (url.includes('/plugins')) return { ...item, changefreq: 'monthly', priority: 0.7 };
        if (url.includes('/blog/') && !url.endsWith('/blog/')) return { ...item, changefreq: 'monthly', priority: 0.6 };
        if (url.includes('/blog')) return { ...item, changefreq: 'monthly', priority: 0.5 };
        if (url.includes('/contacto')) return { ...item, changefreq: 'monthly', priority: 0.6 };
        return { ...item, changefreq: 'monthly', priority: 0.5 };
      },
    }),
  ],
  vite: {
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
