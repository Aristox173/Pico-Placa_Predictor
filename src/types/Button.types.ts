export type ButtonProps = {
  label: string;
  icon?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};
