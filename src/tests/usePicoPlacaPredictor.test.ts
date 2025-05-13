import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { usePicoPlacaPredictor } from "../hooks/usePicoPlacaPredictor";

// Mock Swal
vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn(),
  },
}));

describe("usePicoPlacaPredictor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should mark form as invalid with default values", () => {
    const { result } = renderHook(() => usePicoPlacaPredictor());
    expect(result.current.isFormValid).toBe(false);
  });

  it("should mark form as valid with proper inputs", () => {
    const { result } = renderHook(() => usePicoPlacaPredictor());

    act(() => {
      result.current.setPlateLetters("PBA");
      result.current.setPlateNumbers("1234");
      result.current.setTime("08:00");
    });

    expect(result.current.isFormValid).toBe(true);
  });
});
