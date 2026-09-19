import { Section } from "@/components/section";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { wallpapers } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata=pageMetadata({title:"iPhone Wallpapers – 4K & HD",description:"Download high-resolution iPhone wallpapers, perfectly sized for your device.",path:"/iphone-wallpapers"});
export default function IPhonePage(){return <Section title="iPhone wallpapers"><p className="mb-6 text-zinc-300">Portrait wallpapers selected for iPhone screens.</p><WallpaperGrid wallpapers={wallpapers.filter((item)=>item.deviceTarget!=="ANDROID")}/></Section>}
