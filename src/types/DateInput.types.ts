export interface DateInputProps {
  label?: string;
  value: Date | null;
  onChange?: (date: Date) => void;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  showMonthYearPicker?: boolean;
}
