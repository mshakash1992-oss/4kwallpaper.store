import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { categories, wallpapers } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { titleCase } from "@/lib/utils";
export const revalidate = 3600;
export function generateStaticParams() { return categories.map((slug) => ({ slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const name=titleCase(slug); return pageMetadata({title:`${name} Phone Wallpapers`,description:`Download beautiful ${name.toLowerCase()} wallpapers in HD and 4K for iPhone and Android.`,path:`/categories/${slug}`}); }
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; if (!categories.includes(slug)) notFound(); const name=titleCase(slug); const items=wallpapers.filter((wallpaper)=>wallpaper.categories.includes(slug)); return <><Breadcrumbs items={[{name:"Home",href:"/"},{name:"Categories"},{name}]}/><Section title={`${name} wallpapers`}><p className="mb-6 max-w-2xl text-zinc-300">Discover high-quality {name.toLowerCase()} backgrounds, optimized for modern phone screens.</p><WallpaperGrid wallpapers={items}/></Section></>; }
