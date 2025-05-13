import "../styles/Button.css";
import React from "react";
import type { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const fullClassName = `button button--${variant}${
    disabled ? " button--disabled" : ""
  }`;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={fullClassName}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="icon" className="button__icon" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
