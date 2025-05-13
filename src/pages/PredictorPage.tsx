import {
  PageHeader,
  Input,
  DateInput,
  Button,
  TimeInput,
} from "../components/";
import "../styles/PredictorPage.css";
import { usePicoPlacaPredictor } from "../hooks/";

const PredictorPage = () => {
  const {
    plateLetters,
    setPlateLetters,
    plateNumbers,
    setPlateNumbers,
    date,
    setDate,
    time,
    setTime,
    isFormValid,
    handlePredict,
  } = usePicoPlacaPredictor();

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
