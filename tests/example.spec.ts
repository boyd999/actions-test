const { test, expect } = require("@playwright/test");

// Test Case 1: Verify the initial page title (good to keep)
test("should have the correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Simple App");
});

// Test Case 2: Verify that a new item can be added to the list
test("should add a new item to the list", async ({ page }) => {
  await page.goto("/");

  // Find the input field and the add button
  const todoInput = page.locator("#todo-input");
  const addButton = page.locator("#add-button");

  // Type a new to-do item and click the button
  const newItem = "Buy groceries";
  await todoInput.fill(newItem);
  await addButton.click();

  // Check that the new item appears in the list
  const listItem = page.locator("#todo-list li");
  await expect(listItem).toHaveText(newItem);
});

// Test Case 3: Verify the input field is cleared after adding an item
test("should clear the input field after adding an item", async ({ page }) => {
  await page.goto("/");

  const todoInput = page.locator("#todo-input");
  const addButton = page.locator("#add-button");

  await todoInput.fill("Learn Playwright");
  await addButton.click();

  // Check that the input field is now empty
  await expect(todoInput).toHaveValue("");
});

// Test Case 4: Verify that multiple items can be added
test("should allow adding multiple items", async ({ page }) => {
  await page.goto("/");

  const todoInput = page.locator("#todo-input");
  const addButton = page.locator("#add-button");

  const item1 = "First item";
  const item2 = "Second item";

  // Add the first item
  await todoInput.fill(item1);
  await addButton.click();

  // Add the second item
  await todoInput.fill(item2);
  await addButton.click();

  // Check that both items are correctly displayed in the list
  const listItems = page.locator("#todo-list li");
  await expect(listItems).toHaveCount(2);
  await expect(listItems.nth(0)).toHaveText(item1);
  await expect(listItems.nth(1)).toHaveText(item2);
});
