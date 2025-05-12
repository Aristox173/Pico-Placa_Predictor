import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Container from "../components/Container";

describe("Container", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("has the container class", () => {
    render(
      <Container>
        <span>Styled content</span>
      </Container>
    );

    const containerDiv = screen.getByText("Styled content").parentElement;
    expect(containerDiv).toHaveClass("container");
  });
});
