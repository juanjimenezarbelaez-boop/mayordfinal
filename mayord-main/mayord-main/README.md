# MayoRD Tire Shop — Next.js + Tailwind CSS

Réplica del sitio [https://www.mayord.us/](https://www.mayord.us/) generada como componentes de React con Tailwind CSS, lista para usar en Next.js (App Router) o para importar en v0.

## Páginas replicadas

| Ruta | Descripción |
|---|---|
| `/` | Home: hero, features, servicios, tallas de llantas, about, reseñas, galería, ubicación y horarios |
| `/tires` | Marcas, cualidades y guía "How to read tire size" |
| `/services` | Hero "Mounted. Repaired. Balanced.", filas de servicios y CTA |
| `/reviews` | Hero naranja con rating Yelp y las 11 reseñas |
| `/about` | Historia, misión y estadísticas |
| `/blog` | Grid con los 3 artículos del blog |
| `/contact` | Info de contacto, horarios, formulario y mapa de Google |

## Estructura

```
app/                  Páginas (App Router) + layout con fuentes de Google
components/
  header.tsx          Navbar sticky con menú móvil (client component)
  footer.tsx          Footer de 4 columnas
  contact-form.tsx    Formulario de contacto (client component, backend pendiente)
  home/               Las 8 secciones de la página de inicio
lib/data.ts           Contenido centralizado: teléfono, horarios, reseñas, blog, URLs de imágenes
tailwind.config.ts    Tokens de marca extraídos del sitio original
```

## Design tokens (extraídos del CSS original)

| Token | Valor |
|---|---|
| `brand-orange` | `#FF5E00` |
| `brand-orange-hover` | `#E05300` |
| `brand-dark` | `#131313` |
| `brand-surface` | `#1B1C1C` |
| `brand-surface-light` | `#2A2A2A` |
| `brand-text` | `#E4E2E1` |
| `brand-text-muted` | `#929393` |

Fuentes (vía `next/font/google`):
- **Work Sans** → `font-sans` (cuerpo)
- **Lexend** → `font-heading` (títulos, aplicada a `h1–h6` en `globals.css`)
- **Space Grotesk** → `font-label` (botones, etiquetas, navegación)

Iconos: [`lucide-react`](https://lucide.dev) — los mismos iconos Lucide que usa el sitio original.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Uso en v0

Puedes pegar cualquier componente de `components/` directamente en v0. Requisitos:
1. Añade los colores `brand.*` y las fuentes del `tailwind.config.ts` a la configuración de Tailwind del proyecto (en Tailwind v4, decláralos como `@theme { --color-brand-orange: #FF5E00; ... }` en el CSS global).
2. `lucide-react` ya está disponible en v0 por defecto.
3. Copia `lib/data.ts` para el contenido compartido.

## Notas

- Las imágenes apuntan a las URLs originales (Firebase Storage del sitio). Para producción conviene descargarlas a `/public` o a tu propio bucket.
- El sitio original usa animaciones GSAP de entrada (fade/slide reveal). No se incluyeron para mantener los componentes simples; se pueden añadir con `framer-motion` o CSS.
- El formulario de contacto es visual: el `handleSubmit` en `components/contact-form.tsx` tiene un `TODO` para conectar tu backend (server action, Formspree, API route, etc.).
- El teléfono (240-595-8547), dirección, horarios y reseñas se editan en un solo lugar: `lib/data.ts`.
