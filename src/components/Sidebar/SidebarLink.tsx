import { Link } from "react-router-dom";
import "../../styles/SidebarLink.css";

type Props = {
  to: string;
  icon: string;
  label: string;
  isActive: boolean;
  collapsed: boolean;
};

export default function SidebarLink({
  to,
  icon,
  label,
  isActive,
  collapsed,
}: Props) {
  return (
    <Link
      to={to}
      className={`sidebar__link${isActive ? " sidebar__link--active" : ""}`}
    >
      <img src={`/icons/${icon}`} alt={label} className="sidebar__link-icon" />
      {!collapsed && <span className="sidebar__link-label">{label}</span>}
    </Link>
  );
}
