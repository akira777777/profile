import { describe, expect, it } from "vitest";
import { isLocale, locales, defaultLocale, localeLabels, localeNames } from "./config";

describe("i18n Config", () => {
  it("should have correct locales configuration", () => {
    expect(locales).toContain("ru");
    expect(locales).toContain("en");
    expect(locales.length).toBe(2);
    expect(defaultLocale).toBe("ru");
  });

  it("should validate locales correctly", () => {
    expect(isLocale("ru")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("")).toBe(false);
  });

  it("should have correct labels and names mapping", () => {
    expect(localeLabels.ru).toBe("RU");
    expect(localeLabels.en).toBe("EN");
    expect(localeNames.ru).toBe("Русский");
    expect(localeNames.en).toBe("English");
  });
});
