export interface TimeInputProps {
  label?: string;
  value: string | null;
  onChange: (value: string | null) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}
