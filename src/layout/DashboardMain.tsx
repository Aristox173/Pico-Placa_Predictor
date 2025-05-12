import { Outlet } from "react-router-dom";
import "../styles/DashboardMain.css";

export default function DashboardMain() {
  return (
    <main className="dashboard-main">
      <Outlet />
    </main>
  );
}
