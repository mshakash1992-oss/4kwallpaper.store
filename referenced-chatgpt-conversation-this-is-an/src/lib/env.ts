import { z } from "zod";
const schema = z.object({ DATABASE_URL: z.string().url(), NEXT_PUBLIC_SITE_URL: z.string().url(), S3_REGION: z.string().default("auto"), S3_BUCKET: z.string().min(1), S3_ENDPOINT: z.string().url(), S3_ACCESS_KEY_ID: z.string().min(1), S3_SECRET_ACCESS_KEY: z.string().min(1), S3_PUBLIC_BASE_URL: z.string().url() });
export const env = () => schema.parse(process.env);
export const siteUrl = () => process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
