import { useState } from "react";
import { PageHeader, Input, DateInput, Button } from "../components/";
import TimeInput from "../components/TimeInput";
import "../styles/PredictorPage.css";
import Swal from "sweetalert2";

const PredictorPage = () => {
  const [plateLetters, setPlateLetters] = useState("");
  const [plateNumbers, setPlateNumbers] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState("08:00");

  //const plate = `${plateLetters}-${plateNumbers}`;

  const isFormValid =
    plateLetters.trim().length === 3 &&
    plateNumbers.trim().length === 4 &&
    date !== null &&
    time.trim() !== "";

  const handlePredict = () => {
    const dayMonth = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    });

    const holidays: Record<string, string> = {
      "01/01": "New Year's Day",
      "15/02": "Carnival",
      "16/02": "Carnival",
      "02/04": "Good Friday",
      "30/04": "Labor Day Holiday",
      "01/05": "Labor Day",
      "24/05": "Battle of Pichincha",
      "28/07": "National Holidays",
      "29/07": "National Holidays",
      "09/08": "National Day",
      "08/10": "Guayaquil Independence Holiday",
      "09/10": "Guayaquil Independence",
      "01/11": "Cuenca Independence Holiday",
      "02/11": "All Souls' Day",
      "24/12": "Christmas Eve",
      "25/12": "Christmas",
    };

    const holidayName = holidays[dayMonth];

    if (holidayName) {
      Swal.fire({
        icon: "info",
        title: "Holiday",
        text: `Pico y Placa does not apply today — it's ${holidayName}. You're allowed to drive.`,
      });
      return;
    }

    const lastDigit = plateNumbers.slice(-1);
    const dayOfWeek = date.getDay();

    const restrictedDaysMap: Record<string, number[]> = {
      "1": [1],
      "2": [1],
      "3": [2],
      "4": [2],
      "5": [3],
      "6": [3],
      "7": [4],
      "8": [4],
      "9": [5],
      "0": [5],
    };

    const [hourStr, minuteStr] = time.split(":");
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const totalMinutes = hour * 60 + minute;

    const inMorningRestriction =
      totalMinutes >= 7 * 60 && totalMinutes <= 9 * 60 + 30;
    const inEveningRestriction =
      totalMinutes >= 16 * 60 && totalMinutes <= 19 * 60 + 30;
    const isInRestrictedHour = inMorningRestriction || inEveningRestriction;

    const isRestrictedToday =
      restrictedDaysMap[lastDigit]?.includes(dayOfWeek) ?? false;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    if (isWeekend) {
      Swal.fire({
        icon: "success",
        title: "Weekend",
        text: "It's the weekend. You're allowed to drive.",
      });
    } else if (!isRestrictedToday) {
      Swal.fire({
        icon: "success",
        title: "No Restriction",
        text: "Your vehicle is allowed to circulate today.",
      });
    } else if (isInRestrictedHour) {
      Swal.fire({
        icon: "error",
        title: "Pico y Placa Active",
        text: "You have Pico y Placa today and you're within restricted hours. You cannot drive.",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Outside Restricted Hours",
        text: "You have Pico y Placa today, but you're outside restricted hours. You're allowed to drive.",
      });
    }
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
