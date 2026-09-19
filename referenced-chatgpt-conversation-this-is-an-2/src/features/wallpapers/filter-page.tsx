import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { wallpapers } from "@/lib/data";
import { titleCase } from "@/lib/utils";
export function FilterPage({ filter }: { filter: "latest"|"popular"|"4k"|"hd"|"amoled"|"trending" }) { const sorted = filter === "latest" ? [...wallpapers].reverse() : filter === "popular" || filter === "trending" ? [...wallpapers].sort((a,b) => b.downloads-a.downloads) : filter === "amoled" ? wallpapers.filter((w) => w.isAmoled) : wallpapers; return <><Breadcrumbs items={[{name:"Home",href:"/"},{name:"Wallpapers"},{name:titleCase(filter)}]}/><Section title={`${titleCase(filter)} wallpapers`}><WallpaperGrid wallpapers={sorted}/></Section></>; }
