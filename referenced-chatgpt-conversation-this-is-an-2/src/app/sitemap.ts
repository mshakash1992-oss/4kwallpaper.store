import type { MetadataRoute } from "next";
import { categories, wallpapers } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["","/iphone-wallpapers","/android-wallpapers","/about","/contact"].map((path)=>({url:absoluteUrl(path),lastModified:new Date(),changeFrequency:"weekly",priority:path===""?1:0.7})).concat(categories.map((slug)=>({url:absoluteUrl(`/categories/${slug}`),lastModified:new Date(),changeFrequency:"weekly" as const,priority:0.8})),wallpapers.map((wallpaper)=>({url:absoluteUrl(`/wallpapers/${wallpaper.slug}`),lastModified:new Date(wallpaper.publishedAt),changeFrequency:"monthly" as const,priority:0.9}))); }
