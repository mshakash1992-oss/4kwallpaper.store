import { Section } from "@/components/section";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { wallpapers } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata=pageMetadata({title:"Android Wallpapers – 4K & HD",description:"Download high-resolution Android wallpapers for every screen size.",path:"/android-wallpapers"});
export default function AndroidPage(){return <Section title="Android wallpapers"><p className="mb-6 text-zinc-300">High-definition wallpapers for modern Android phones.</p><WallpaperGrid wallpapers={wallpapers.filter((item)=>item.deviceTarget!=="IPHONE")}/></Section>}
