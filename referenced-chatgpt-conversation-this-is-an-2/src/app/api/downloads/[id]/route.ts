import { NextResponse } from "next/server";
import { wallpapers } from "@/lib/data";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const wallpaper=wallpapers.find(item=>item.id===id);if(!wallpaper)return NextResponse.json({error:"Wallpaper not found"},{status:404});return NextResponse.redirect(wallpaper.imageUrl,307)}
