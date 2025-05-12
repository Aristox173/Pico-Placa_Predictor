import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SidebarHeader from "../components/Sidebar/SidebarHeader";

describe("SidebarHeader", () => {
  it("renders the title when not collapsed", () => {
    render(<SidebarHeader collapsed={false} toggle={() => {}} />);
    expect(screen.getByText("PREDICTOR")).toBeInTheDocument();
  });

  it("does not render the title when collapsed", () => {
    render(<SidebarHeader collapsed={true} toggle={() => {}} />);
    expect(screen.queryByText("PREDICTOR")).toBeNull();
  });

  it("calls toggle when the button is clicked", () => {
    const mockToggle = vi.fn();
    render(<SidebarHeader collapsed={false} toggle={mockToggle} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it("shows the correct icon depending on collapsed state", () => {
    const { rerender } = render(
      <SidebarHeader collapsed={true} toggle={() => {}} />
    );
    const imgCollapsed = screen.getByRole("img");
    expect(imgCollapsed).toHaveAttribute(
      "src",
      "/icons/double_arrow_right.svg"
    );

    rerender(<SidebarHeader collapsed={false} toggle={() => {}} />);
    const imgExpanded = screen.getByRole("img");
    expect(imgExpanded).toHaveAttribute("src", "/icons/double_arrow_left.svg");
  });
});
