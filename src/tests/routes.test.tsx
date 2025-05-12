import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import RoutesConfig from "../routes/routes";

describe("RoutesConfig", () => {
  it("renders the PredictorPage on '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RoutesConfig />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /pico y placa predictor/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/check if your vehicle can circulate/i)
    ).toBeInTheDocument();
  });

  it("renders the AboutPage on '/about'", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <RoutesConfig />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/learn more about the developer/i)
    ).toBeInTheDocument();
  });
});
