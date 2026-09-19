import Link from "next/link";
import { getCollections } from "@/features/collections/queries";
import { metadata } from "@/lib/seo";
export const metadata = metadata({ title: "Wallpaper Collections", description: "Explore curated collections of mobile wallpapers.", path: "/collections" });
export const dynamic = "force-dynamic";
export default async function CollectionsPage() { const collections = await getCollections(); return <div className="container-page py-10"><p className="eyebrow">Curated sets</p><h1 className="mt-2 text-3xl font-black">Collections</h1><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{collections.length ? collections.map((collection) => <Link className="surface p-6 hover:border-brand" href={`/collections/${collection.slug}`} key={collection.id}><h2 className="font-bold">{collection.name}</h2><p className="mt-2 text-sm text-muted">{collection.description}</p><p className="mt-4 text-xs text-brand">{collection._count.wallpapers} wallpapers</p></Link>) : <p className="text-muted">New collections are on the way.</p>}</div></div>; }
