import { describe, it, vi, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useInputValidation from "../hooks/useInputValidation";

const createMockEvent = (value: string) =>
  ({
    target: { value },
  } as React.ChangeEvent<HTMLInputElement>);

describe("useInputValidation", () => {
  it("should call onChange for valid input without restrictions", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useInputValidation({ onChange }));

    const event = createMockEvent("hello123");
    result.current(event);

    expect(onChange).toHaveBeenCalledWith(event);
  });

  it("should allow only numbers when onlyNumbers is true", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useInputValidation({ onlyNumbers: true, onChange })
    );

    result.current(createMockEvent("123")); // válido
    result.current(createMockEvent("abc")); // inválido

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should allow only letters when onlyLetters is true", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useInputValidation({ onlyLetters: true, onChange })
    );

    result.current(createMockEvent("abc")); // válido
    result.current(createMockEvent("123")); // inválido

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should block input when both rules are true and input is invalid", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useInputValidation({ onlyLetters: true, onlyNumbers: true, onChange })
    );

    result.current(createMockEvent("123abc")); // inválido
    expect(onChange).not.toHaveBeenCalled();
  });
});
