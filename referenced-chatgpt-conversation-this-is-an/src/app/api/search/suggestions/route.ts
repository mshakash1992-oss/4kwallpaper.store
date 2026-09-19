import { NextRequest, NextResponse } from "next/server";
import { searchSuggestions } from "@/features/wallpapers/queries";
export async function GET(request: NextRequest) { const query = request.nextUrl.searchParams.get("q")?.trim() ?? ""; return NextResponse.json({ suggestions: await searchSuggestions(query) }, { headers: { "Cache-Control": "public, max-age=60, s-maxage=300" } }); }
