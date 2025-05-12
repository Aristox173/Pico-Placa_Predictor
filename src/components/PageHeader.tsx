import "../styles/PageHeader.css";
import type { PageHeaderProps } from "../types/PageHeader.types";

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-header">
      {title && <h1 className="page-header__title">{title}</h1>}
      {subtitle && <h2 className="page-header__subtitle">{subtitle}</h2>}
    </div>
  );
}
