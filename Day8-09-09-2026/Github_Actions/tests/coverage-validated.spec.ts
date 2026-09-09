import { test, expect } from '@playwright/test';
const testData = require('../specs/testdata/testfile.json');

test.describe('Coverage validation', () => {
  test('data-driven scenarios map to JSON cases', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await expect(page).toHaveTitle(/PHPTRAVELS/i);
    await expect(page.getByText(testData.homepage.expectedCategories[0], { exact: true })).toBeVisible();
    await expect(page.getByText(testData.homepage.featuredProperties[0], { exact: true })).toBeVisible();
    for (const warning of testData.homepage.warningTexts) {
      await expect(page.getByText(warning, { exact: false })).toBeVisible();
    }
  });
});
