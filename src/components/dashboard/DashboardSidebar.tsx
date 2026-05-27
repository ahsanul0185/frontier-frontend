// import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { getNavItemsByRole } from "@/lib/navItems"

import { NavSection } from "@/types/dashboard.types"
import DashboardSidebarContent from "./DashboardSidebarContent"
import { getUserInfo } from "@/services/auth.service"
import { UserInfo } from "@/types/user.types"

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo() as UserInfo;
  const role = userInfo?.role;
  const navItems : NavSection[] = getNavItemsByRole()

//   const dashboardHome = getDefaultDashboardRoute(role)
  const dashboardHome = "/dashboard"
  return (
    <DashboardSidebarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome}/>
  )
}

export default DashboardSidebar