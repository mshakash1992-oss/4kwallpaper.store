import Link from "next/link";
export default function NotFound() { return <div className="container-page py-24 text-center"><p className="eyebrow">404</p><h1 className="mt-2 text-3xl font-black">This wallpaper is unavailable.</h1><Link href="/" className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 font-bold text-black">Explore wallpapers</Link></div>; }
