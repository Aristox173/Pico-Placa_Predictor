import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import PredictorPage from "../pages/PredictorPage";
import AboutPage from "../pages/AboutPage";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<PredictorPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
