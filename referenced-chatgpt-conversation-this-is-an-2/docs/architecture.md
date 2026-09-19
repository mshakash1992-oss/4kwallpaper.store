# Production architecture

## Data and delivery

PostgreSQL is the source of truth. Prisma owns transactional catalog reads/writes. Upload originals are private object-store objects; public optimized derivatives use immutable content-addressed keys and a CDN domain. `imageUrl` stores the primary delivery URL, while `variants` preserves dimensions, formats and keys for responsive delivery. A queue worker (outside the request lifecycle) runs Sharp transforms and moderation/metadata extraction.

## Security

Use authenticated, role-checked server actions or route handlers for admin mutations; validate every payload with Zod; rate-limit public search/download endpoints; enforce upload limits before and after image decoding; issue signed upload/download URLs from the storage provider; use CSP, `nosniff`, secure cookies and database least-privilege credentials. Never trust client-provided image metadata or an admin role.

## Caching and rendering

Home, category, collection and detail routes are ISR (`revalidate = 3600`) and are invalidated by publish mutations. Paginated listings are parameterized server renders. Search is dynamic and noindexed. CDN images are lazy-loaded except the LCP hero card, which has a reserved aspect ratio to prevent layout shift.

## Component boundaries

`SiteHeader`, `MobileNav`, `Footer`, `WallpaperGrid`, `WallpaperCard`, `Section`, `Breadcrumbs`, `JsonLd`, and `EmptyState` are shared. Feature modules expose data queries and pure view composition; routes are thin orchestration layers. Admin uses dedicated layout, tables and review forms so public bundles do not include back-office UI.
