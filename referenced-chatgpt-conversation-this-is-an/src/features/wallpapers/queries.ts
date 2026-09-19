import { Prisma, WallpaperStatus } from "@prisma/client";
import { db } from "@/lib/prisma";
import type { ListingKind } from "./types";
export const wallpaperInclude = { categories: { include: { category: true } }, tags: { include: { tag: true } } } satisfies Prisma.WallpaperInclude;
const published = { status: WallpaperStatus.PUBLISHED } satisfies Prisma.WallpaperWhereInput;
export async function listWallpapers({ page = 1, take = 20, kind, category, query }: { page?: number; take?: number; kind?: ListingKind; category?: string; query?: string }) {
  const where: Prisma.WallpaperWhereInput = { ...published, ...(category ? { categories: { some: { category: { slug: category } } } } : {}), ...(query ? { OR: [{ title: { contains: query, mode: "insensitive" } }, { description: { contains: query, mode: "insensitive" } }, { tags: { some: { tag: { name: { contains: query, mode: "insensitive" } } } } }, { categories: { some: { category: { name: { contains: query, mode: "insensitive" } } } } }] } : {}) };
  const orderBy: Prisma.WallpaperOrderByWithRelationInput = kind === "popular" ? { downloads: "desc" } : kind === "trending" ? { views: "desc" } : { publishedAt: "desc" };
  const [items, total] = await db.$transaction([db.wallpaper.findMany({ where, include: wallpaperInclude, orderBy, skip: (page - 1) * take, take }), db.wallpaper.count({ where })]);
  return { items, total, pages: Math.ceil(total / take) };
}
export async function getWallpaper(slug: string) { return db.wallpaper.findFirst({ where: { slug, ...published }, include: { ...wallpaperInclude, assets: true } }); }
export async function relatedWallpapers(id: string, categoryIds: string[]) { return db.wallpaper.findMany({ where: { ...published, id: { not: id }, categories: { some: { categoryId: { in: categoryIds } } } }, include: wallpaperInclude, take: 8, orderBy: { publishedAt: "desc" } }); }
export async function searchSuggestions(query: string) { if (query.length < 2) return []; const result = await db.wallpaper.findMany({ where: { ...published, title: { contains: query, mode: "insensitive" } }, select: { title: true, slug: true }, take: 6 }); return result; }
