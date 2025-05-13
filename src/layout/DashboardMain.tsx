import { Outlet } from "react-router-dom";
import "../styles/DashboardMain.css";
import { Container } from "../components/";

export default function DashboardMain() {
  return (
    <main className="dashboard-main">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
