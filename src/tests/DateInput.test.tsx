import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DateInput from "../components/DateInput";

describe("DateInput component", () => {
  const defaultDate = new Date(2025, 4, 13);

  it("renders the input with formatted date", () => {
    render(
      <DateInput label="Select Date" value={defaultDate} onChange={() => {}} />
    );
    const input = screen.getByDisplayValue("13/05/2025");
    expect(input).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<DateInput label="Fecha" value={defaultDate} onChange={() => {}} />);
    expect(screen.getByText("Fecha")).toBeInTheDocument();
  });

  it("shows calendar on input click", () => {
    render(<DateInput label="Fecha" value={defaultDate} onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.click(input);

    expect(screen.getByText("May 2025")).toBeInTheDocument();
  });

  it("calls onChange with selected date", () => {
    const handleChange = vi.fn();
    render(<DateInput value={defaultDate} onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.click(input);

    const dayButton = screen.getByText("15");
    fireEvent.click(dayButton);

    expect(handleChange).toHaveBeenCalled();
    const calledWith = handleChange.mock.calls[0][0];
    expect(calledWith instanceof Date).toBe(true);
  });
});
