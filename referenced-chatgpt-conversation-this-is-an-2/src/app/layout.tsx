import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: "Mobile Wallpapers – 4K HD Phone Wallpapers", template: "%s | Aurora Wallpapers" }, description: siteConfig.description };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader/><main className="mx-auto min-h-[70vh] max-w-7xl px-4 pb-20">{children}</main><Footer/><MobileNav/></body></html>; }
