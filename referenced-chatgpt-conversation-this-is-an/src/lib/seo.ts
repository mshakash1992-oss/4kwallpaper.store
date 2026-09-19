import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
const siteName = "Wallora";
export function metadata({ title, description, path = "/", image }: { title: string; description: string; path?: string; image?: string }): Metadata {
  const url = absoluteUrl(path); const imageUrl = image ?? absoluteUrl("/og-default.png");
  return { title, description, alternates: { canonical: url }, openGraph: { type: "website", siteName, title, description, url, images: [{ url: imageUrl, width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [imageUrl] } };
}
export function breadcrumbJsonLd(items: { name: string; path: string }[]) { return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) }; }
export function wallpaperJsonLd(wallpaper: { title: string; description: string; imageUrl: string; width: number; height: number; mimeType: string; publishedAt: Date | null; createdAt: Date }) { return { "@context": "https://schema.org", "@type": "ImageObject", name: wallpaper.title, description: wallpaper.description, contentUrl: wallpaper.imageUrl, encodingFormat: wallpaper.mimeType, width: wallpaper.width, height: wallpaper.height, uploadDate: (wallpaper.publishedAt ?? wallpaper.createdAt).toISOString(), license: absoluteUrl("/terms") }; }
