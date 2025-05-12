import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App routing", () => {
  it("should render the home page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /pico y placa predictor/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/check if your vehicle can circulate/i)
    ).toBeInTheDocument();
  });
});
