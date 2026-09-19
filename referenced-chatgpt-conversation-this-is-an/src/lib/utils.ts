import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const formatBytes = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(bytes > 9_999_999 ? 0 : 1)} MB`;
export const toTitle = (value: string) => value.replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
export const absoluteUrl = (path: string) => new URL(path, process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").toString();
