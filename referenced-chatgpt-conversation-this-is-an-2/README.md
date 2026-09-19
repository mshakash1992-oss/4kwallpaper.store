# Aurora Wallpapers

Production-oriented, mobile-first wallpaper platform built with Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL and Prisma.

## Architecture

```
src/
  app/             # Route shells, server pages, route handlers and metadata
  components/      # Small presentational and interactive UI primitives
  features/        # Domain logic grouped by wallpapers, search and admin
  lib/             # Database, SEO, auth, validation and shared utilities
prisma/            # PostgreSQL schema and seed data
docs/              # Operational architecture decisions
```

Public pages use server rendering with cache revalidation; only the search field, download interaction and admin review controls hydrate on the client. Images are stored as immutable originals and generated WebP/AVIF derivatives behind `IMAGE_CDN_URL`. Configure the CDN to honor `Accept`, cache immutable paths long-term, and restrict originals to signed administrative access.

## Route map

| Area | Routes |
| --- | --- |
| Discovery | `/`, `/wallpapers/{latest,popular,4k,hd,amoled,trending}`, `/categories/[slug]`, `/collections/[slug]`, `/iphone-wallpapers`, `/android-wallpapers`, `/search` |
| Content | `/wallpapers/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/dmca` |
| Admin | `/admin`, `/admin/wallpapers`, `/admin/wallpapers/new`, `/admin/wallpapers/bulk`, `/admin/categories`, `/admin/tags`, `/admin/collections`, `/admin/users`, `/admin/downloads`, `/admin/search-queries`, `/admin/seo` |
| SEO/API | `/sitemap.xml`, `/image-sitemap.xml`, `/robots.txt`, `/api/search/suggestions`, `/api/downloads/[id]`, `/api/admin/uploads` |

## Admin workflow

Admins upload image files to a quarantined prefix. The API validates MIME, byte size and decoded dimensions; a worker generates normalized thumbnails and AVIF/WebP variants, extracts metadata, writes a `PENDING_REVIEW` wallpaper, and suggests copy/taxonomy. An editor confirms tags, categories, alt text and licensing before changing status to `PUBLISHED`. Authorization must be supplied by the host application's session provider; all mutations are validated server-side and audited.

## Setup

Copy `.env.example` to `.env`, provision PostgreSQL and an S3-compatible object store, then run `pnpm install`, `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:seed`, and `pnpm dev`.
