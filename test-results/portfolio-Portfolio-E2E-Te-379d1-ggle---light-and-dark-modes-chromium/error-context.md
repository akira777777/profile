# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> Theme Toggle - light and dark modes
- Location: tests\portfolio.spec.ts:25:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Portfolio E2E Tests", () => {
  4  |   test("Localization - RU default and EN switcher", async ({ page }) => {
  5  |     // Visit home page (RU default)
  6  |     await page.goto("/");
  7  |     await expect(page).toHaveTitle(/Артём Михайлов/);
  8  |     
  9  |     // Look for RU header descriptor
  10 |     const heroTitleRu = page.locator("h1");
  11 |     await expect(heroTitleRu).toContainText("Артём Михайлов");
  12 | 
  13 |     // Click language switcher (EN)
  14 |     const switcher = page.locator("a[aria-label='English version']");
  15 |     await expect(switcher).toBeVisible();
  16 |     await switcher.click();
  17 | 
  18 |     // Verify redirect to /en and content changes to English
  19 |     await page.waitForURL("**/en");
  20 |     await expect(page).toHaveTitle(/Artem Mikhailov/);
  21 |     const heroTitleEn = page.locator("h1");
  22 |     await expect(heroTitleEn).toContainText("Artem Mikhailov");
  23 |   });
  24 | 
  25 |   test("Theme Toggle - light and dark modes", async ({ page }) => {
> 26 |     await page.goto("/");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  27 |     
  28 |     // Default theme should be dark (has 'dark' class on html)
  29 |     const html = page.locator("html");
  30 |     await expect(html).toHaveClass(/dark/);
  31 | 
  32 |     // Toggle theme to light
  33 |     const themeToggle = page.locator("button[title='Переключить тему']");
  34 |     await expect(themeToggle).toBeVisible();
  35 |     await themeToggle.click();
  36 | 
  37 |     // 'dark' class should be removed
  38 |     await expect(html).not.toHaveClass(/dark/);
  39 | 
  40 |     // Toggle theme back to dark
  41 |     await themeToggle.click();
  42 |     await expect(html).toHaveClass(/dark/);
  43 |   });
  44 | 
  45 |   test("Terminal Console commands", async ({ page }) => {
  46 |     await page.goto("/");
  47 | 
  48 |     const terminalInput = page.locator("input[placeholder*='Введите команду']");
  49 |     await expect(terminalInput).toBeVisible();
  50 | 
  51 |     // Run help command
  52 |     await terminalInput.fill("help");
  53 |     await terminalInput.press("Enter");
  54 | 
  55 |     // Verify output
  56 |     const terminalLogs = page.locator("#terminal-section");
  57 |     await expect(terminalLogs).toContainText("Доступные команды");
  58 | 
  59 |     // Run crt command and verify active classes are applied
  60 |     await terminalInput.fill("crt");
  61 |     await terminalInput.press("Enter");
  62 |     
  63 |     const glowCard = page.locator("#terminal-section .crt-active");
  64 |     await expect(glowCard).toBeVisible();
  65 | 
  66 |     // Run clear command and verify logs are cleared
  67 |     await terminalInput.fill("clear");
  68 |     await terminalInput.press("Enter");
  69 |     await expect(terminalLogs).not.toContainText("Доступные команды");
  70 |   });
  71 | });
  72 | 
```