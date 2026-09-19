import { notFound } from "next/navigation";
import { getCategory } from "@/features/categories/queries";
import { listWallpapers } from "@/features/wallpapers/queries";
import { WallpaperGrid } from "@/components/wallpapers/wallpaper-grid";
import { Pagination } from "@/components/ui/pagination";
import { metadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const category = await getCategory((await params).slug); return category ? metadata({ title: category.seoTitle ?? `${category.name} Wallpapers`, description: category.seoDescription ?? category.description, path: `/categories/${category.slug}`, image: category.image ?? undefined }) : {}; }
export default async function CategoryPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }) { const { slug } = await params; const category = await getCategory(slug); if (!category) notFound(); const page = Math.max(1, Number((await searchParams).page) || 1); const results = await listWallpapers({ category: slug, page }); return <div className="container-page py-10"><p className="eyebrow">Category</p><h1 className="mt-2 text-3xl font-black">{category.name} wallpapers</h1><p className="mt-3 max-w-2xl text-muted">{category.description}</p><div className="mt-8"><WallpaperGrid wallpapers={results.items}/><Pagination page={page} pages={results.pages} path={`/categories/${slug}`}/></div></div>; }
