import type { ChangeEvent } from "react";
import type { InputValidationOptions } from "../types/Input.types";

function useInputValidation({
  onlyNumbers,
  onlyLetters,
  onChange,
}: InputValidationOptions) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (onlyNumbers && !/^\d*$/.test(value)) return;

    if (onlyLetters && !/^[a-zA-Z\s]*$/.test(value)) return;

    onChange(e);
  };

  return handleChange;
}

export default useInputValidation;
