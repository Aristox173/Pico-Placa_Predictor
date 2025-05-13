import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TimeInput from "../components/TimeInput";

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  value: () => ({
    measureText: () => ({ width: 100 }),
  }),
});

describe("TimeInput component", () => {
  it("renders label when provided", () => {
    render(
      <TimeInput label="Select Time" value="08:00 AM" onChange={() => {}} />
    );
    expect(screen.getByText("Select Time")).toBeInTheDocument();
  });

  it("renders with initial value", () => {
    render(<TimeInput value="09:30 AM" onChange={() => {}} />);
    expect(screen.getByDisplayValue("9")).toBeInTheDocument();
    expect(screen.getByDisplayValue("30")).toBeInTheDocument();
  });

  it("calls onChange when time changes", () => {
    const handleChange = vi.fn();
    render(<TimeInput value="08:00 AM" onChange={handleChange} />);

    const minuteInput = screen.getByDisplayValue("0");
    fireEvent.change(minuteInput, { target: { value: "30" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("is disabled when disabled is true", () => {
    render(<TimeInput value="08:00 AM" onChange={() => {}} disabled={true} />);
    const hourInput = screen.getByDisplayValue("8");
    const minuteInput = screen.getByDisplayValue("0");
    expect(hourInput).toBeDisabled();
    expect(minuteInput).toBeDisabled();
  });

  it("shows error message when error is true", () => {
    render(
      <TimeInput
        value="08:00 AM"
        onChange={() => {}}
        error
        errorMessage="Time is required"
      />
    );
    expect(screen.getByText("Time is required")).toBeInTheDocument();
  });
});
