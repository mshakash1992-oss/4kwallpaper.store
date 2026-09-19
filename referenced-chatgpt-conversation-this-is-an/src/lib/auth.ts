import { redirect } from "next/navigation";
/** Replace with your auth provider's server session lookup in production. */
export async function currentUser() { return null as { id: string; email: string; role: "ADMIN" | "USER" } | null; }
export async function requireAdmin() { const user = await currentUser(); if (!user || user.role !== "ADMIN") redirect("/"); return user; }
