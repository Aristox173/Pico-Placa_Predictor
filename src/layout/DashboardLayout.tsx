import { Sidebar } from "../components";
import DashboardMain from "./DashboardMain";
import { useSidebarLinks } from "../hooks/";
import "../styles/DashboardLayout.css";

export default function DashboardLayout() {
  const links = useSidebarLinks();

  return (
    <div className="dashboard-layout">
      <Sidebar links={links} />
      <DashboardMain />
    </div>
  );
}
