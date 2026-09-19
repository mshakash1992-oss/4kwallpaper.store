import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const categories = ["Anime", "Nature", "Cars", "Gaming", "Space", "Animals", "Abstract", "Minimal", "Sports", "Technology"];
async function main() { for (const [sortOrder, name] of categories.entries()) { await db.category.upsert({ where: { slug: name.toLowerCase() }, update: {}, create: { name, slug: name.toLowerCase(), description: `Explore high-quality ${name.toLowerCase()} mobile wallpapers.`, sortOrder } }); } await db.tag.upsert({ where: { slug: "4k" }, update: {}, create: { name: "4K", slug: "4k" } }); }
main().finally(() => db.$disconnect());
