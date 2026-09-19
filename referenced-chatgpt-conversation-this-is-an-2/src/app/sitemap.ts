import type { MetadataRoute } from "next";
import { categories, wallpapers } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";
changeFrequency:"weekly" as const
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/iphone-wallpapers",
    "/android-wallpapers",
    "/about",
    "/contact",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((slug) => ({
    url: absoluteUrl(`/categories/${slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const wallpaperPages: MetadataRoute.Sitemap = wallpapers.map((wallpaper) => ({
    url: absoluteUrl(`/wallpapers/${wallpaper.slug}`),
    lastModified: new Date(wallpaper.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...wallpaperPages];
}
