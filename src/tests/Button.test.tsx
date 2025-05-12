import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button component", () => {
  test("renders with label", () => {
    render(<Button label="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("fires onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not fire onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
