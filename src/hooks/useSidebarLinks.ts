import type { SidebarLinkType } from "../types/Sidebar.types";

export function useSidebarLinks(): SidebarLinkType[] {
  return [
    { path: "/", label: "Predictor", icon: "car.svg" },
    { path: "/about", label: "About me", icon: "about.svg" },
  ];
}
