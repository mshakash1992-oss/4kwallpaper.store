import { SearchForm } from "@/components/search/search-form";
import { WallpaperGrid } from "@/components/wallpapers/wallpaper-grid";
import { Pagination } from "@/components/ui/pagination";
import { listWallpapers } from "@/features/wallpapers/queries";
import { metadata } from "@/lib/seo";
export const metadata = metadata({ title: "Search Mobile Wallpapers", description: "Search high-quality wallpapers by subject, style, and category.", path: "/search" });
export const dynamic = "force-dynamic";
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) { const { q = "", page: rawPage } = await searchParams; const page = Math.max(1, Number(rawPage) || 1); const data = q.trim() ? await listWallpapers({ query: q.trim(), page }) : null; return <div className="container-page py-10"><h1 className="text-3xl font-black">Search wallpapers</h1><div className="mt-6"><SearchForm/></div>{data && <section className="mt-8"><p className="mb-5 text-muted">{data.total} result{data.total === 1 ? "" : "s"} for <span className="text-white">“{q}”</span></p><WallpaperGrid wallpapers={data.items}/><Pagination page={page} pages={data.pages} path={`/search?q=${encodeURIComponent(q)}`}/></section>}</div>; }
