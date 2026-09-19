import Link from "next/link";
export default function NewWallpaper(){return <><h1 className="text-3xl font-black">Add wallpaper</h1><p className="mt-2 text-zinc-400">Single uploads use the same validation and review process as bulk uploads.</p><Link href="/admin/wallpapers/bulk" className="mt-6 inline-block rounded-xl bg-violet-500 px-4 py-2 font-bold">Open uploader</Link></>}
