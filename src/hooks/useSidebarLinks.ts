import type { SidebarLinkType } from "../components/Sidebar/Sidebar";

export function useSidebarLinks(): SidebarLinkType[] {
  return [
    { path: "/", label: "Inicio", icon: "home.svg" },
    { path: "/about", label: "Sobre mí", icon: "person.svg" },
  ];
}
