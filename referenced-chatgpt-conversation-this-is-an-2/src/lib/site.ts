export const siteConfig = {
  name: "Aurora Wallpapers",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aurorawallpapers.com",
  description: "Premium 4K and HD mobile wallpapers for iPhone and Android.",
  socialImage: "/og-default.jpg",
};
export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
