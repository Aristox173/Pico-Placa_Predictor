import Sidebar from "../components/Sidebar/Sidebar";
import DashboardMain from "./DashboardMain";
import { useSidebarLinks } from "../hooks/useSidebarLinks";
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
