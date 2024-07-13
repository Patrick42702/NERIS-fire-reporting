import {
  Building,
  ClipboardPlus,
  FireExtinguisher,
  LayoutDashboardIcon,
  Siren,
  User,
  Verified,
  Wrench,
} from "lucide-react";

export const COMPANY_NAV_LINKS = [
  {
    name: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    link: "/admin",
  },
  {
    name: "incidents",
    title: "Incidents",
    icon: Siren,
    link: "/admin/incidents",
  },
  {
    name: "hydrants",
    title: "Hydrants",
    icon: FireExtinguisher,
    link: "/admin/hydrants",
  },
  {
    name: "maintenance",
    title: "Maintenance",
    icon: Wrench,
    link: "/admin/maintenance",
  },
  {
    name: "reports",
    title: "Reports",
    icon: ClipboardPlus,
    link: "/admin/reports",
  },
];

export const ADMIN_NAV_LINKS = [
  {
    name: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    link: "/admin",
  },
  {
    name: "verifications",
    title: "Verifications",
    icon: Verified,
    link: "/admin/verifications",
  },
  {
    name: "users",
    title: "Users",
    icon: User,
    link: "/admin/users",
  },
  {
    name: "organizations",
    title: "Organizations",
    icon: Building,
    link: "/admin/organizations",
  },
];
