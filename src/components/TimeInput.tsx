import type { TimeInputProps } from "../types/TimeInput.types";
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "../styles/TimeInput.css";

function TimeInput({
  label,
  value,
  onChange,
  required = false,
  disabled = false,
  error = false,
  errorMessage = "",
}: TimeInputProps) {
  return (
    <div className={`time-input ${error ? "time-input--error" : ""}`}>
      {label && <label className="time-input__label">{label}</label>}
      <TimePicker
        onChange={onChange}
        value={value}
        format="h:mm a"
        disableClock
        required={required}
        disabled={disabled}
        className="time-input__picker"
        clearIcon={null}
      />
      {error && errorMessage && (
        <span className="time-input__error">{errorMessage}</span>
      )}
    </div>
  );
}

export default TimeInput;
