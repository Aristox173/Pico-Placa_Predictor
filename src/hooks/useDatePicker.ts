import { useState } from "react";

function useDatePicker(
  initialValue: Date | null,
  minDate?: Date,
  maxDate?: Date
) {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialValue);

  const handleCalendarToggle = () => {
    setIsCalendarVisible((prevState) => !prevState);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return {
    isCalendarVisible,
    selectedDate,
    handleCalendarToggle,
    handleDateChange,
    minDate,
    maxDate,
  };
}

export default useDatePicker;
