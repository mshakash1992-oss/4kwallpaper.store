# Wallora architecture and implementation plan

## Route map

Public routes: `/`, `/wallpapers/{latest|popular|4k|hd|amoled|trending}`, `/wallpapers/[slug]`, `/categories`, `/categories/[slug]`, `/collections`, `/collections/[slug]`, `/iphone-wallpapers`, `/android-wallpapers`, `/search`, `/blog`, and the static/legal pages. Operations routes live under `/admin`; APIs are isolated beneath `/api`.

## Domain and data

Prisma models normalize wallpaper-to-category, wallpaper-to-tag, and collection membership. `WallpaperAsset` preserves original/display/thumbnail variants. Published content is indexed by status/publication time, category joins, and downloads. Search deliberately starts with indexed database contains queries; introduce PostgreSQL `pg_trgm` or full-text indexes at scale.

## Delivery and SEO

The app uses server components, route-level revalidation, `next/image`, responsive `sizes`, AVIF/WebP output, canonical metadata, OG/Twitter cards, JSON-LD, robots, standard sitemap, and an image sitemap. Serve public object URLs through a CDN domain and preserve immutable cache headers.

## Admin pipeline

Bulk uploads are role-gated and accept bounded batches. Each image is validated before Sharp generates display and thumbnail WebP derivatives. All assets go through the object-storage interface and records enter `REVIEW`, separating ingestion from publication. Implement the identity adapter in `src/lib/auth.ts`, then add editors that update only validated server actions.

## Production checklist

Use a managed PostgreSQL database, S3/R2 bucket with private write credentials and public CDN reads, HTTPS canonical origin, a real auth provider with admin RBAC, error monitoring, rate limiting on APIs, database backups, CSP/security headers at the edge, and a migration step in CI/CD.
