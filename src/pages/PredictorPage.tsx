import { useState } from "react";
import { PageHeader, Input, DateInput } from "../components/";

const PredictorPage = () => {
  const [plate, setPlate] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <PageHeader
        title="Pico y Placa Predictor"
        subtitle="Check if your vehicle can circulate on a specific date and time"
      />

      <div className="p-6 max-w-md flex flex-col gap-4">
        <Input
          name="plate"
          label="Placa"
          placeholder="Ej: PBA-1234"
          value={plate}
          onChange={(e) => {
            console.log("Placa ingresada:", e.target.value);
            setPlate(e.target.value);
          }}
          required
        />

        <DateInput
          label="Fecha"
          value={date}
          onChange={(newDate: Date) => {
            console.log("Fecha seleccionada:", newDate);
            setDate(newDate);
          }}
          required
        />
      </div>
    </>
  );
};

export default PredictorPage;
