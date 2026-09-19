import { db } from "@/lib/prisma";
import { wallpaperInclude } from "@/features/wallpapers/queries";
export const getCollections = () => db.collection.findMany({ include: { _count: { select: { wallpapers: true } } }, orderBy: { updatedAt: "desc" } });
export const getCollection = (slug: string) => db.collection.findUnique({ where: { slug }, include: { wallpapers: { include: { wallpaper: { include: wallpaperInclude } }, orderBy: { position: "asc" } } } });
