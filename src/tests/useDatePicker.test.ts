import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useDatePicker from "../hooks/useDatePicker";

describe("useDatePicker hook", () => {
  it("should initialize with the given date", () => {
    const initialDate = new Date("2025-05-13");
    const { result } = renderHook(() => useDatePicker(initialDate));

    expect(result.current.selectedDate).toEqual(initialDate);
    expect(result.current.isCalendarVisible).toBe(false);
  });

  it("should toggle calendar visibility", () => {
    const { result } = renderHook(() => useDatePicker(null));

    act(() => {
      result.current.handleCalendarToggle();
    });

    expect(result.current.isCalendarVisible).toBe(true);

    act(() => {
      result.current.handleCalendarToggle();
    });

    expect(result.current.isCalendarVisible).toBe(false);
  });

  it("should update selectedDate", () => {
    const { result } = renderHook(() => useDatePicker(null));
    const newDate = new Date("2025-12-25");

    act(() => {
      result.current.handleDateChange(newDate);
    });

    expect(result.current.selectedDate).toEqual(newDate);
  });

  it("should expose minDate and maxDate if provided", () => {
    const min = new Date("2025-01-01");
    const max = new Date("2025-12-31");

    const { result } = renderHook(() => useDatePicker(null, min, max));

    expect(result.current.minDate).toEqual(min);
    expect(result.current.maxDate).toEqual(max);
  });
});
