import { useState } from "react";
import { PageHeader, Input, DateInput, Button } from "../components/";
import TimeInput from "../components/TimeInput";
import "../styles/PredictorPage.css";

const PredictorPage = () => {
  const [plateLetters, setPlateLetters] = useState("");
  const [plateNumbers, setPlateNumbers] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState("08:00 AM");

  const plate = `${plateLetters}-${plateNumbers}`;

  const isFormValid =
    plateLetters.trim().length === 3 &&
    plateNumbers.trim().length === 4 &&
    date !== null &&
    time.trim() !== "";

  const handlePredict = () => {
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    console.log("Placa:", plate);
    console.log("Fecha:", formattedDate);
    console.log("Hora:", time);
  };

  return (
    <>
      <PageHeader
        title="Pico y Placa Predictor"
        subtitle="Check if your vehicle can circulate on a specific date and time"
      />

      <div className="predictor-page">
        <div className="predictor-form">
          <div className="plate-input-container">
            <label className="plate-input-label">Placa</label>
            <div className="plate-input-group">
              <Input
                name="plate-letters"
                placeholder="PBA"
                maxLength={3}
                value={plateLetters}
                onChange={(e) => setPlateLetters(e.target.value.toUpperCase())}
                onlyLetters
                required
              />
              <span className="plate-separator">-</span>
              <Input
                name="plate-numbers"
                placeholder="1234"
                maxLength={4}
                value={plateNumbers}
                onChange={(e) => setPlateNumbers(e.target.value)}
                onlyNumbers
                required
              />
            </div>
          </div>

          <DateInput
            label="Date"
            value={date}
            onChange={(newDate: Date) => setDate(newDate)}
            required
          />
          <TimeInput
            label="Time"
            value={time}
            onChange={(val) => setTime(val ?? "")}
            required
          />
          <Button
            label="Predict"
            onClick={handlePredict}
            variant="primary"
            disabled={!isFormValid}
          />
        </div>
      </div>
    </>
  );
};

export default PredictorPage;
