import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/DateInput.css";

import useDatePicker from "../hooks/useDatePicker";
import type { DateInputProps } from "../types/DateInput.types";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function DateInput({
  label,
  value,
  onChange,
  required = false,
  minDate,
  maxDate,
}: DateInputProps) {
  const {
    isCalendarVisible,
    selectedDate,
    handleCalendarToggle,
    handleDateChange,
  } = useDatePicker(value, minDate, maxDate);

  const handleDateChangeWrapper = (value: Value) => {
    if (value instanceof Date) {
      handleDateChange(value);
      onChange?.(value);
      handleCalendarToggle();
    }
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="date-input">
      {label && <label className="date-input__label">{label}</label>}
      <div className="date-input__wrapper">
        <input
          type="text"
          className="date-input__field"
          value={selectedDate ? formatDate(selectedDate) : ""}
          onClick={handleCalendarToggle}
          readOnly
          required={required}
        />
        {isCalendarVisible && (
          <div className="date-input__calendar">
            <Calendar
              onChange={(value) => handleDateChangeWrapper(value)}
              value={selectedDate}
              minDate={minDate}
              maxDate={maxDate}
              selectRange={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DateInput;
