import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
const links = ["Wallpapers", "Bulk upload", "Categories", "Tags", "Collections", "Users", "Downloads", "Search queries", "SEO settings"];
export default async function AdminLayout({ children }: { children: React.ReactNode }) { await requireAdmin(); return <div className="container-page grid gap-8 py-8 md:grid-cols-[13rem_1fr]"><aside className="surface h-fit p-4"><p className="px-3 text-sm font-black">Admin</p><nav className="mt-3 grid">{links.map((label) => <Link key={label} className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-white" href={`/admin/${label.toLowerCase().replace(/ /g, "-")}`}>{label}</Link>)}</nav></aside><section>{children}</section></div>; }
