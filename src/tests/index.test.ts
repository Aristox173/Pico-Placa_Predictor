import * as Components from "../components";
import * as Hooks from "../hooks";
import * as Pages from "../pages";

describe("components/index exports", () => {
  it("should export all expected components", () => {
    expect(Components.Button).toBeDefined();
    expect(Components.Container).toBeDefined();
    expect(Components.Input).toBeDefined();
    expect(Components.DateInput).toBeDefined();
    expect(Components.TimeInput).toBeDefined();
    expect(Components.PageHeader).toBeDefined();
    expect(Components.Sidebar).toBeDefined();
    expect(Components.SidebarHeader).toBeDefined();
    expect(Components.SidebarLink).toBeDefined();
  });
});

describe("hooks/index exports", () => {
  it("should export useSidebarLinks", () => {
    expect(Hooks.useSidebarLinks).toBeDefined();
    expect(Hooks.useInputValidation).toBeDefined();
    expect(Hooks.useDatePicker).toBeDefined();
  });
});

describe("pages/index exports", () => {
  it("should export all page components", () => {
    expect(Pages.AboutPage).toBeDefined();
    expect(Pages.PredictorPage).toBeDefined();
  });
});
