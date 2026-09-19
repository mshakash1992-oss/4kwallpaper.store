import { notFound } from "next/navigation";
import { getCollection } from "@/features/collections/queries";
import { WallpaperGrid } from "@/components/wallpapers/wallpaper-grid";
import { metadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const collection = await getCollection((await params).slug); return collection ? metadata({ title: collection.seoTitle ?? `${collection.name} Wallpapers`, description: collection.seoDescription ?? collection.description, path: `/collections/${collection.slug}`, image: collection.coverImage ?? undefined }) : {}; }
export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) { const collection = await getCollection((await params).slug); if (!collection) notFound(); return <div className="container-page py-10"><p className="eyebrow">Collection</p><h1 className="mt-2 text-3xl font-black">{collection.name}</h1><p className="mt-3 max-w-2xl text-muted">{collection.description}</p><div className="mt-8"><WallpaperGrid wallpapers={collection.wallpapers.map(({ wallpaper }) => wallpaper)}/></div></div>; }
