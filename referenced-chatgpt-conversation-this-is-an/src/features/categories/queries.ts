import { db } from "@/lib/prisma";
export const getCategories = () => db.category.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }], include: { _count: { select: { wallpapers: true } } } });
export const getCategory = (slug: string) => db.category.findUnique({ where: { slug }, include: { parent: true, children: true, _count: { select: { wallpapers: true } } } });
