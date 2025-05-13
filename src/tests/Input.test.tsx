import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../components";

describe("Input component", () => {
  const defaultProps = {
    name: "testInput",
    value: "",
    onChange: vi.fn(),
  };

  it("renders with label and placeholder", () => {
    render(
      <Input {...defaultProps} label="Name" placeholder="Enter your name" />
    );

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const onChange = vi.fn();
    render(<Input {...defaultProps} onChange={onChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });

    expect(onChange).toHaveBeenCalled();
  });

  it("does not allow non-numeric input when onlyNumbers is true", () => {
    const onChange = vi.fn();
    render(<Input {...defaultProps} onChange={onChange} onlyNumbers />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "abc" } });

    expect(onChange).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: "123" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("does not allow non-letter input when onlyLetters is true", () => {
    const onChange = vi.fn();
    render(<Input {...defaultProps} onChange={onChange} onlyLetters />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123" } });

    expect(onChange).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: "abc" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("disables input when disabled is true", () => {
    render(<Input {...defaultProps} disabled />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("shows error message when error is true", () => {
    render(<Input {...defaultProps} error errorMessage="Campo obligatorio" />);

    expect(screen.getByText("Campo obligatorio")).toBeInTheDocument();
  });
});
