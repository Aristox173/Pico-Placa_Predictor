import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageHeader from "../components/PageHeader";

describe("PageHeader", () => {
  it("renders title and subtitle when provided", () => {
    render(<PageHeader title="Test Title" subtitle="Test Subtitle" />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Test Title" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "Test Subtitle" })
    ).toBeInTheDocument();
  });

  it("does not render h1 or h2 if props are missing", () => {
    render(<PageHeader title={undefined} subtitle={undefined} />);

    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
  });

  it("has the proper container class", () => {
    render(<PageHeader title="Only Title" />);

    const wrapper = screen.getByRole("heading", { level: 1 }).parentElement;
    expect(wrapper).toHaveClass("page-header");
  });
});
