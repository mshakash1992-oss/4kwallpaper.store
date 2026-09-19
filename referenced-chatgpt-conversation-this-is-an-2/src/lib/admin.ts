export const ADMIN_ROUTES = ["/admin","/admin/wallpapers","/admin/wallpapers/new","/admin/wallpapers/bulk","/admin/categories","/admin/tags","/admin/collections","/admin/users","/admin/downloads","/admin/search-queries","/admin/seo"] as const;
export function assertAdmin() { /* Integrate your session provider here; reject users without ADMIN or EDITOR roles before mutations. */ return true; }
