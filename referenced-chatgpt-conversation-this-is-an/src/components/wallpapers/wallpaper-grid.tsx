import { WallpaperCard } from "./wallpaper-card";
import type { Wallpaper, Category, Tag } from "@prisma/client";
type Item = Wallpaper & { categories: { category: Category }[]; tags: { tag: Tag }[] };
export function WallpaperGrid({ wallpapers }: { wallpapers: Item[] }) { if (!wallpapers.length) return <div className="surface p-10 text-center text-muted">No wallpapers match this view yet. Try another category or search.</div>; return <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{wallpapers.map((wallpaper, index) => <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} priority={index < 2}/>)}</div>; }
