import { NextRequest, NextResponse } from "next/server";
import { filterWallpapers } from "@/lib/data";
export function GET(request:NextRequest){const query=request.nextUrl.searchParams.get("q")?.trim()??"";if(query.length<2)return NextResponse.json([]);return NextResponse.json(filterWallpapers(query).slice(0,6).map(({title,slug})=>({title,slug})),{headers:{"Cache-Control":"public, max-age=60"}})}
