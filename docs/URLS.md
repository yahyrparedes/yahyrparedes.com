# Mapa de URLs · yahyrparedes.com

Fuente de verdad en código: `routeMap` en `src/i18n/ui.ts`. Para enlazar una página
usa siempre `getLocalizedPath(id, lang)` (nunca rutas escritas a mano). Todas las URLs
terminan en `/`. Las redirecciones viven en `nginx.conf`.

## Páginas publicadas

| id (routeMap)   | Español                         | English                          | Estado |
|-----------------|---------------------------------|----------------------------------|--------|
| home            | /es/                            | /en/                             | ✅ |
| about           | /es/sobre-mi/                   | /en/about/                       | ✅ (contenido: fase 4) |
| experience      | /es/experiencia/                | /en/experience/                  | ✅ nueva línea de tiempo |
| profile (CV)    | /es/perfil/                     | /en/profile/                     | ✅ nueva, imprimible a PDF |
| services        | /es/servicios/                  | /en/services/                    | ✅ |
| serviceDetail   | /es/servicios/{slug}/           | /en/services/{slug}/             | ⚠️ EN redirige a ES (fase 5: traducir) |
| openSource      | /es/open-source/                | /en/open-source/                 | ✅ |
| openSourceItem  | /es/open-source/{slug}/         | /en/open-source/{slug}/          | ✅ |
| flowGm          | /es/open-source/flow-gm/        | /en/open-source/flow-gm/         | ✅ |
| blog            | /es/blog/                       | /en/blog/                        | ✅ "próximamente" (fase 8) |
| stack           | /es/stack/                      | /en/stack/                       | ⚠️ huérfana: nadie enlaza aquí. Decidir: integrar en Perfil o eliminar |
| contact         | /es/contacto/                   | /en/contact/                     | ✅ formulario funcional |
| privacy         | /es/privacidad/                 | /en/privacy/                     | ✅ |
| terms           | /es/aviso-legal/                | /en/terms/                       | ✅ |
| cookies         | /es/cookies/                    | /en/cookies/                     | ✅ |

Slugs de servicios: `webs`, `apps`, `ecosistema`, `hot-fixes`, `ai-rescue`.
Slugs open source: `google-shopping`, `rich-snippets`, `pixel-suite`, `meta-shop`, `search-console`, `flow-gm`.

## Raíz y errores

| URL | Comportamiento |
|-----|----------------|
| `/` | 302 a `/es/` o `/en/` según el idioma del navegador (nginx). Sin servidor: `src/pages/index.astro` hace lo mismo con JS. |
| `/es/...` inexistente | 404 real con `/404.html` (español) |
| `/en/...` inexistente | 404 real con `/en/404/` (inglés) |
| Error 5xx | `/500.html` o `/en/500/` |

Antes, cualquier URL inexistente devolvía la portada con código 200 (soft-404).

## Eliminadas → redirección 301

| URL antigua | Destino |
|-------------|---------|
| /es/experience/ | /es/experiencia/ |
| /en/behind-the-engineer/ | /en/about/ |
| /es/plugins/, /es/plugins/{slug}/ | /es/open-source/, /es/open-source/{slug}/ |
| /en/plugins/... | /en/open-source/... |
| /blog/ (sin idioma) | /es/blog/ |
| /sobre-mi/, /perfil/, /servicios/..., /contacto/, /stack/, /open-source/..., /privacidad/, /aviso-legal/, /cookies/, /experiencia/ (primera versión del sitio, sin idioma) | mismo path bajo /es/ |
| /plugins/... | /es/open-source/... |
| /about/, /experience/, /services/..., /contact/, /privacy/, /terms/ | mismo path bajo /en/ |
| /es/services/, /es/contact/, /es/privacy/, /es/terms/ | equivalente en español |
| /en/servicios/, /en/contacto/, /en/privacidad/, /en/aviso-legal/, /en/experiencia/ | equivalente en inglés |
| /es, /en (sin barra) | /es/, /en/ |

## Añadir un idioma (p. ej. pt)

1. `languages` y `paths` de cada ruta en `src/i18n/ui.ts` + diccionario `ui.pt`.
2. Textos `Localized` en `src/data/career.ts` (tipo `Locale`).
3. Carpeta `src/pages/pt/` con los mismos wrappers que `en/`.
4. `i18n.locales` en `astro.config.mjs` y bloque `location /pt/` con su 404 en `nginx.conf`.
