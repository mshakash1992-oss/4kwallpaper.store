import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { metadata } from "@/lib/seo";
export const metadata: Metadata = metadata({ title: "Mobile Wallpapers – 4K HD Phone Wallpapers", description: "Download curated 4K, HD, AMOLED, iPhone, and Android wallpapers optimized for every screen." });
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><SiteHeader/><main className="min-h-[70vh] pb-16 md:pb-0">{children}</main><SiteFooter/><MobileNav/></body></html>; }
