# Wallora

A production-oriented, mobile-first wallpaper platform built with Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and S3-compatible media storage.

## Architecture

- `src/app`: route segments, metadata, loading, error, and API endpoints.
- `src/components`: accessible presentational building blocks and feature components.
- `src/features`: server-side querying and domain-specific application logic.
- `src/lib`: environment validation, Prisma client, SEO, storage, auth boundaries, and utilities.
- `prisma`: relational schema and deterministic development seed.

Public content is server-rendered with cache revalidation. Images use `next/image` and emit AVIF/WebP where the optimizer is available. The upload route is admin-gated at the application boundary and validates file type/size before storage; connect it to your identity provider in `src/lib/auth.ts` before deployment.

## Run locally

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. Start PostgreSQL, then run `pnpm install`, `pnpm db:migrate`, `pnpm db:seed`, and `pnpm dev`.
3. Validate with `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build`.

## Deployment assumptions

Deploy on a Node.js-compatible host with PostgreSQL and an S3-compatible bucket/CDN. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin. Configure lifecycle rules for originals, restrict bucket writes to application credentials, and use a managed identity provider to populate the admin session/role. Run migrations in CI before application rollout.
