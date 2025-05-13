import { useState } from "react";
import Swal from "sweetalert2";
import { HOLIDAYS, RESTRICTED_DAYS_MAP } from "../constants/";

export const usePicoPlacaPredictor = () => {
  const [plateLetters, setPlateLetters] = useState("");
  const [plateNumbers, setPlateNumbers] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState("08:00");

  const isFormValid =
    plateLetters.trim().length === 3 &&
    plateNumbers.trim().length === 4 &&
    time.trim() !== "" &&
    date !== null;

  const handlePredict = () => {
    const dayMonth = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    });

    const holiday = HOLIDAYS[dayMonth];
    if (holiday) {
      return Swal.fire({
        icon: "info",
        title: "Holiday",
        text: `Pico y Placa does not apply today — it's ${holiday}. You're allowed to drive.`,
      });
    }

    const lastDigit = plateNumbers.slice(-1);
    const dayOfWeek = date.getDay();

    const [hourStr, minuteStr] = time.split(":");
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const totalMinutes = hour * 60 + minute;

    const inMorning = totalMinutes >= 7 * 60 && totalMinutes <= 9 * 60 + 30;
    const inEvening = totalMinutes >= 16 * 60 && totalMinutes <= 19 * 60 + 30;

    const isRestrictedToday =
      RESTRICTED_DAYS_MAP[lastDigit]?.includes(dayOfWeek);
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    if (isWeekend) {
      return Swal.fire({
        icon: "success",
        title: "Weekend",
        text: "It's the weekend. You're allowed to drive.",
      });
    }

    if (!isRestrictedToday) {
      return Swal.fire({
        icon: "success",
        title: "No Restriction",
        text: "Your vehicle is allowed to circulate today.",
      });
    }

    if (inMorning || inEvening) {
      return Swal.fire({
        icon: "error",
        title: "Pico y Placa Active",
        text: "You have Pico y Placa today and you're within restricted hours. You cannot drive.",
      });
    }

    return Swal.fire({
      icon: "warning",
      title: "Outside Restricted Hours",
      text: "You have Pico y Placa today, but you're outside restricted hours. You're allowed to drive.",
    });
  };

  return {
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
  };
};
