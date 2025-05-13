import { PageHeader } from "../components/";

const PredictorPage = () => {
  return (
    <>
      <PageHeader
        title="Pico y Placa Predictor"
        subtitle="Check if your vehicle can circulate on a specific date and time"
      />
      <input type="date" value={""} className="input" />
    </>
  );
};

export default PredictorPage;
