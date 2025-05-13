import type { ChangeEvent } from "react";

export interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  onlyNumbers?: boolean;
  onlyLetters?: boolean;
  maxLength?: number;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}

export interface InputValidationOptions {
  onlyNumbers?: boolean;
  onlyLetters?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
