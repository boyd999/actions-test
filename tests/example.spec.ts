const { test, expect } = require("@playwright/test");

test("should have the correct title", async ({ page }) => {
  // The goto path is relative because we will set a baseURL
  await page.goto("/");
  await expect(page).toHaveTitle("Simple App");
});
