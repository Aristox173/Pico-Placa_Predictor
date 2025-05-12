import { vi } from "vitest";

vi.mock("../App.tsx", () => ({
  default: () => "MockedApp",
}));

import "../main.tsx";

test("debe renderizar App en #root", () => {
  const root = document.getElementById("root");
  expect(root?.innerHTML).toContain("MockedApp");
});
