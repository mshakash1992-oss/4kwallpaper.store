import { metadata } from "@/lib/seo";
export const metadata = metadata({ title: "Wallpaper Guides", description: "Tips and inspiration for selecting great phone wallpapers.", path: "/blog" });
export default function BlogPage() { return <div className="container-page py-10"><p className="eyebrow">Guides</p><h1 className="mt-2 text-3xl font-black">Wallpaper journal</h1><div className="surface mt-8 p-8 text-muted">Editorial guides will appear here as they are published.</div></div>; }
