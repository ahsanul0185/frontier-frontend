import { NavSection } from "@/types/dashboard.types";


export const getNavItemsByRole = (): NavSection[] => {
      return [
        {
            // title : "Dashboard",
            items: [
                {
                    title: "Dashboard",
                    href: "/dashboard",
                    icon: "LayoutDashboard"

                },
                {
                    title: "My Articles",
                    href: `/dashboard/list-articles`,
                    icon: "User",
                },
                {
                    title: "Create Article",
                    href: "/dashboard/create-article",
                    icon: "Plus"
                }
            ]
        },
    ]
}