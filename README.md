# yahyrparedes.com

Sitio personal de **Yahyr Paredes** · Software developer disponible para proyectos.

Stack: **Astro 5** · **Tailwind CSS 4** · self-hosted fonts · Deploy en **Coolify**.

## Quickstart (desarrollo local)

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Build producción

```bash
npm run build       # genera /dist
npm run preview     # sirve el build localmente
```

## Estructura

```
.
├── public/
│   ├── fonts/             # Inter + Plus Jakarta Sans (self-hosted)
│   ├── images/            # Logo + fotos personales
│   ├── favicon.svg
│   ├── robots.txt
│   ├── llms.txt
│   ├── humans.txt
│   ├── manifest.json
│   └── .well-known/security.txt
├── src/
│   ├── components/
│   │   ├── Header.astro   # Sticky nav con links a todas las secciones
│   │   └── Footer.astro   # 5 columnas con todos los links SEO
│   ├── data/
│   │   └── site.ts        # Toda la data: profile, services, plugins, photos
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── seo.ts         # JSON-LD helpers
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── sobre-mi.astro        # About me + galería
│   │   ├── perfil.astro          # CV interactivo
│   │   ├── servicios/
│   │   │   ├── index.astro       # Lista de 5 servicios
│   │   │   └── [slug].astro      # Página individual de cada servicio
│   │   ├── plugins/
│   │   │   ├── index.astro       # Catálogo
│   │   │   └── [slug].astro      # Página de cada plugin
│   │   ├── blog/
│   │   │   └── index.astro       # Próximamente
│   │   ├── contacto.astro
│   │   └── 404.astro
│   └── styles/
│       ├── global.css
│       └── fonts.css
├── Dockerfile
├── nginx.conf
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Secciones del sitio

- **/** Home (presenta todo)
- **/sobre-mi/** About + galería de fotos personales
- **/perfil/** CV interactivo (timeline de empresas, skills, proyectos)
- **/servicios/** 5 servicios (webs, apps, ecosistema, hot-fixes, ai-rescue)
- **/plugins/** Catálogo de plugins SEO para PrestaShop
- **/blog/** Próximamente
- **/contacto/** Form + datos de contacto

## Deploy en Coolify

1. Subir repo a GitHub
2. Coolify → New Resource → Application → conectar repo
3. Build pack: Dockerfile
4. Port: 80
5. Dominio: `yahyrparedes.com` + `www.yahyrparedes.com`
6. SSL: automático via Caddy
