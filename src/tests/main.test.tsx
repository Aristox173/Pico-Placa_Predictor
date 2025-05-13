import { vi, test, expect } from "vitest";

vi.mock("../App.tsx", () => ({
  default: () => "MockedApp",
}));

import "../main.tsx";

test("should render App inside #root", () => {
  const root = document.getElementById("root");
  expect(root?.innerHTML).toContain("MockedApp");
});
