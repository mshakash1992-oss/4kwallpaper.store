import Link from "next/link";
import { Home, Search, Sparkles, UserRound } from "lucide-react";
const items = [["/", "Home", Home], ["/wallpapers/trending", "Trending", Sparkles], ["/search", "Search", Search], ["/admin", "Admin", UserRound]] as const;
export function MobileNav() { return <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-white/10 bg-zinc-950/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">{items.map(([href, label, Icon]) => <Link key={href} href={href} className="grid min-w-14 place-items-center gap-1 rounded-lg px-2 py-1 text-[10px] text-zinc-300"><Icon className="size-5"/><span>{label}</span></Link>)}</nav>; }
