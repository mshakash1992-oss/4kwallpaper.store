import { SearchForm } from "@/components/search-form";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { filterWallpapers } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({title:"Search wallpapers",description:"Search the Aurora Wallpapers catalog.",path:"/search",noIndex:true});
export default async function SearchPage({searchParams}:{searchParams:Promise<{q?:string}>}) { const {q=""}=await searchParams; const items=filterWallpapers(q); return <section className="py-8"><h1 className="text-3xl font-black">Search wallpapers</h1><div className="mt-5"><SearchForm large/></div>{q ? <><p className="mt-8 text-zinc-300">{items.length} result{items.length===1?"":"s"} for <strong className="text-white">{q}</strong></p><div className="mt-5"><WallpaperGrid wallpapers={items}/></div></> : <p className="mt-8 text-zinc-400">Search by color, style, category or theme.</p>}</section>; }
