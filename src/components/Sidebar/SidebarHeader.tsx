import "../../styles/SidebarHeader.css";
import type { SidebarHeaderProps } from "../../types/SidebarHeader.types";

export default function SidebarHeader({
  collapsed,
  toggle,
}: SidebarHeaderProps) {
  return (
    <div className="sidebar__header">
      {!collapsed && <span className="sidebar__title">PREDICTOR</span>}
      <button onClick={toggle} className="sidebar__toggle-button">
        <img
          src={
            collapsed
              ? "/icons/double_arrow_right.svg"
              : "/icons/double_arrow_left.svg"
          }
          alt="Toggle"
          className="sidebar__toggle-icon"
        />
      </button>
    </div>
  );
}
