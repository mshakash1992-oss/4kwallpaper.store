import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type MetaInput = { title: string; description: string; path: string; image?: string; noIndex?: boolean };
export function pageMetadata({ title, description, path, image = siteConfig.socialImage, noIndex }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  return { title, description, alternates: { canonical: url }, robots: noIndex ? { index: false, follow: false } : undefined, openGraph: { type: "website", url, title, description, siteName: siteConfig.name, images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [absoluteUrl(image)] } };
}
export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) });
