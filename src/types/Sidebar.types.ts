export type SidebarLinkType = {
  path: string;
  label: string;
  icon: string;
};

export type SidebarProps = {
  links: SidebarLinkType[];
};
