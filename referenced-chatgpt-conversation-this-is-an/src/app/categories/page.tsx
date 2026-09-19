import Link from "next/link";
import { getCategories } from "@/features/categories/queries";
import { metadata } from "@/lib/seo";
export const metadata = metadata({ title: "Wallpaper Categories", description: "Explore mobile wallpaper categories from anime to technology.", path: "/categories" });
export const dynamic = "force-dynamic";
export default async function CategoriesPage() { const categories = await getCategories(); return <div className="container-page py-10"><p className="eyebrow">Browse by mood</p><h1 className="mt-2 text-3xl font-black">Wallpaper categories</h1><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <Link className="surface p-5 transition hover:border-brand" href={`/categories/${category.slug}`} key={category.id}><h2 className="font-bold">{category.name}</h2><p className="mt-2 text-sm text-muted">{category.description}</p><p className="mt-4 text-xs text-brand">{category._count.wallpapers} wallpapers</p></Link>)}</div></div>; }
