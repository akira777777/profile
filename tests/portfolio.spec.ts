import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Tests", () => {
  test("Localization - RU default and EN switcher", async ({ page }) => {
    // Visit home page (RU default)
    await page.goto("/");
    await expect(page).toHaveTitle(/Артём Михайлов/);
    
    // Look for RU header descriptor
    const heroTitleRu = page.locator("h1");
    await expect(heroTitleRu).toContainText("Артём Михайлов");

    // Click language switcher (EN)
    const switcher = page.locator("a[aria-label='English version']");
    await expect(switcher).toBeVisible();
    await switcher.click();

    // Verify redirect to /en and content changes to English
    await page.waitForURL("**/en");
    await expect(page).toHaveTitle(/Artem Mikhailov/);
    const heroTitleEn = page.locator("h1");
    await expect(heroTitleEn).toContainText("Artem Mikhailov");
  });

  test("Theme Toggle - light and dark modes", async ({ page }) => {
    await page.goto("/");
    
    // Default theme should be dark (has 'dark' class on html)
    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);

    // Toggle theme to light
    const themeToggle = page.locator("button[title='Переключить тему']");
    await expect(themeToggle).toBeVisible();
    await themeToggle.click();

    // 'dark' class should be removed
    await expect(html).not.toHaveClass(/dark/);

    // Toggle theme back to dark
    await themeToggle.click();
    await expect(html).toHaveClass(/dark/);
  });

  test("Terminal Console commands", async ({ page }) => {
    await page.goto("/");

    const terminalInput = page.locator("input[placeholder*='Введите команду']");
    await expect(terminalInput).toBeVisible();

    // Run help command
    await terminalInput.fill("help");
    await terminalInput.press("Enter");

    // Verify output
    const terminalLogs = page.locator("#terminal-section");
    await expect(terminalLogs).toContainText("Доступные команды");

    // Run crt command and verify active classes are applied
    await terminalInput.fill("crt");
    await terminalInput.press("Enter");
    
    const glowCard = page.locator("#terminal-section .crt-active");
    await expect(glowCard).toBeVisible();

    // Run clear command and verify logs are cleared
    await terminalInput.fill("clear");
    await terminalInput.press("Enter");
    await expect(terminalLogs).not.toContainText("Доступные команды");
  });
});
