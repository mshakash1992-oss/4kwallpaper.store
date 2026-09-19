import { NextRequest, NextResponse } from "next/server";
import { uploadSchema } from "@/lib/validation";
// This endpoint accepts metadata only. In production, create a signed object-store upload URL after authorization.
export async function POST(request:NextRequest){const body=await request.json().catch(()=>null);const parsed=uploadSchema.safeParse(body);if(!parsed.success)return NextResponse.json({error:"Invalid upload",issues:parsed.error.flatten()},{status:400});return NextResponse.json({status:"PENDING_REVIEW",suggestions:{title:parsed.data.filename.replace(/[-_]/g," ").replace(/\.[^.]+$/, ""),altText:"Phone wallpaper awaiting editorial alt text",categories:[],tags:[]}}, {status:202});}
