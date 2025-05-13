import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Sidebar from "../components/Sidebar/Sidebar";
import type { SidebarProps } from "../types/Sidebar.types";

const links: SidebarProps["links"] = [
  { path: "/", label: "Predictor", icon: "car.svg" },
  { path: "/about", label: "About", icon: "about.svg" },
];

describe("Sidebar", () => {
  it("renders all SidebarLinks", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar links={links} />
      </MemoryRouter>
    );

    expect(screen.getByText("Predictor")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("toggles collapsed state", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar links={links} />
      </MemoryRouter>
    );

    const title = screen.getByText("PREDICTOR");
    expect(title).toBeInTheDocument();

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    expect(screen.queryByText("PREDICTOR")).toBeNull();
  });

  it("highlights the active link based on route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Sidebar links={links} />
      </MemoryRouter>
    );

    const activeLink = screen.getByText("About").closest("a");
    expect(activeLink).toHaveClass("sidebar__link--active");
  });
});
