import { clsx, type ClassValue } from "clsx";
export const cn = (...inputs: ClassValue[]) => clsx(inputs);
export const formatNumber = (value: number) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
export const titleCase = (value: string) => value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
