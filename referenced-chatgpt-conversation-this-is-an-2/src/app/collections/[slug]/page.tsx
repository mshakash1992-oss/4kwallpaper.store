import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { wallpapers } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
const collections: Record<string,{name:string;description:string}>={"deep-space":{name:"Deep Space",description:"Dark cosmic backgrounds for a calm, cinematic phone."},"oled-nights":{name:"OLED Nights",description:"Deep blacks and rich highlights, picked for AMOLED displays."}};
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const collection=collections[slug];return collection?pageMetadata({title:collection.name,description:collection.description,path:`/collections/${slug}`}):{}}
export default async function CollectionPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const collection=collections[slug];if(!collection)notFound();return <Section title={collection.name}><p className="mb-6 text-zinc-300">{collection.description}</p><WallpaperGrid wallpapers={slug==="deep-space"?wallpapers.filter(w=>w.categories.includes("space")):wallpapers.filter(w=>w.isAmoled)}/></Section>}
