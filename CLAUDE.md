# CLAUDE.md

Vue 3 front end for **Canny Kitchens & Interiors (CKI)**, a custom kitchens and interior design business specialising in Wood, Tile and Solid Acrylic Surfaces. The backend is a Cloudflare Worker in the sibling repo `../canny-carpentry-api` (see its `CLAUDE.md`).

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the built app
```

There is no test runner or linter configured.

## Tech stack

- Vue 3, Composition API (`<script setup>`)
- PrimeVue 4 + PrimeIcons (registered in `src/main.js` with `app.use(PrimeVue)`, no preset/theme)
- Tailwind CSS 3 (`tailwind.config.js`, PostCSS)
- Vue Router 4, history mode, lazy-loaded routes in `src/router.js`
- Vite 8; `@` aliases to `src/` (`vite.config.js`)
- `src/services/api.ts` is TypeScript; the rest of the app is plain JS/Vue SFCs

## Layout

```
src/
  main.js, App.vue, router.js, style.css
  pages/         Home, Shop, About, Gallery, Contact, ProductDetail
  pages/services/ ServiceCustomKitchens, ServiceInteriorDesign, ServicePremiumSurfaces
  components/    Navigation, Footer, ProductCard, LandingPage
  services/api.ts  backend API client
  assets/        CKI logos (CKI.svg, CKI.png, CKI_blk_bckgrnd.png), hero.png, QR code
```

Routes: `/`, `/shop`, `/about`, `/gallery`, `/contact`, `/product/:id`, `/services/custom-kitchens`, `/services/interior-design`, `/services/premium-surfaces`.

**Shop must stay its own route** (`/shop`), never embedded in the home page.

## Business details

- Name: Canny Kitchens & Interiors — short name **CKI** (the three letters are the core of the logo; display prominently)
- Phone: +353 87 945 8836
- Address: Kilmaine, Co. Mayo, Ireland
- Email: the footer uses `info@cki.ie` (most recent change); About, Gallery and Contact pages still use `solidsurfaces@cki.ie`. Confirm with the user which is correct before changing either.
- Services: Custom Kitchens, Interior Design, Premium Surfaces (Wood, Tile, Solid Acrylic — countertops and shower surrounds)

## Design system

Use **only** these three brand colours, with dark text on all of them. They are defined as Tailwind colours:

| Token | Hex | Use |
|---|---|---|
| `cki-sage` | `#99B8A3` | Navbar, hero sections, primary CTA buttons |
| `cki-gray` | `#A8A8A8` | Secondary backgrounds, dividers, secondary buttons |
| `cki-beige` | `#F5E9E5` | Light backgrounds, information sections |
| `cki-dark` | `#333333` | Body text |
| `cki-dark-charcoal` | `#1a1a1a` | Text on medium backgrounds |

- Card sections alternate between gray and beige.
- Text must meet WCAG AA contrast (4.5:1).
- Mobile-first; breakpoints: mobile < 768px, tablet 768–1024px (`md:`), desktop > 1024px (`lg:`/`xl:`).

## Conventions

- Use PrimeVue components for UI (Button, Card, Toolbar, Drawer/Sidebar, Divider, InputText, Textarea, Message, Toast, Dialog, DataView, Paginator, MultiSelect, Select, Tag, Chip, Image) and import them per component (`import Button from 'primevue/button'`). Build custom elements with Tailwind only when PrimeVue doesn't fit.
- Style with Tailwind utilities (`bg-cki-sage`, `text-cki-dark`, responsive prefixes) rather than custom CSS.
- Navigation: CKI logo left, links to all pages, sticky, sage background, hamburger + drawer on mobile.
- Use semantic HTML and ARIA labels; show user-friendly error and loading states for anything that calls the API.

## API integration

`src/services/api.ts` exports `apiClient` (and `Product`, `Quote`, `CreateQuotePayload` types):

- `getProducts({ inStock? })` → `GET /api/products`
- `getProductById(id)` → `GET /api/products/:id`
- `createQuote(payload)` → `POST /api/quotes`
- `checkHealth()` → `GET /api/health`

Responses are wrapped as `{ data }`; the client unwraps them. Base URL comes from `VITE_API_URL` (see `.env.example`), defaulting to `https://canny-carpentry-api.naish-oloughlin.workers.dev`; use `http://localhost:8787` when running the API locally with `wrangler dev`.

The `Product` and `Quote` types must mirror `../canny-carpentry-api/src/types.ts`. Products are quartz slabs: `id, name, size_dimensions, price, stock, created_at`. Quote `job_type` is currently `'kitchen' | 'carpentry'` on both sides (enforced by the DB check constraint and API validation); the older Copilot docs described a five-value set (`kitchen`, `interior_design`, `wood`, `tile`, `acrylic`), so a change there needs the schema, API validation and this client updated together.

### Where the API is used

- `pages/Shop.vue`: `getProducts()`, with client-side search, an in-stock filter and sorting. "Request Quote" goes to `/contact?product=<name>`.
- `pages/ProductDetail.vue`: `getProductById()`. The client turns both 404 and 400 (invalid UUID) into a `'Product not found'` error.
- `pages/Contact.vue`: `createQuote()`. The form's project types (kitchen/interior/surfaces/other) map to `job_type` `kitchen` or `carpentry`, and the chosen type is added to the start of `job_details` so it isn't lost.
- Prices arrive as strings (Postgres NUMERIC); format them with `formatPrice` from `src/utils/format.js` (EUR) and convert them with `Number()` before sorting.
- Products have no category, image or description in the API, so the shop has no category filter or product images.