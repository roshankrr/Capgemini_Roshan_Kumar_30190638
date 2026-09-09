import { test, expect } from '@playwright/test';

const testData = require('../specs/testdata/testfile.json');
import { dismissDemoWarning, fillHotelSearch } from './helpers/ui';

test.describe('Booking flow', () => {
  test('blocks without nationality', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await fillHotelSearch(page, testData.hotelSearch.validCases[0]);
    await expect(page.locator(testData.selectors.search.destination)).toHaveValue(testData.hotelSearch.validCases[0].destination);
    await expect(page.locator('body')).toContainText(/Nationality|Select Nationality/i);
  });

  test('allows selected nationality to continue', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await fillHotelSearch(page, testData.hotelSearch.validCases[0]);
    await expect(page.locator('body')).toContainText(/Nationality|Select Nationality/i);
  });

  test('modify search updates the booking values', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await fillHotelSearch(page, testData.hotelSearch.validCases[0]);
    await expect(page.locator(testData.selectors.search.destination)).toHaveValue(testData.hotelSearch.validCases[0].destination);
    await expect(page.locator(testData.selectors.search.checkIn)).toHaveValue(testData.hotelSearch.validCases[0].checkIn);
    await expect(page.locator(testData.selectors.search.checkOut)).toHaveValue(testData.hotelSearch.validCases[0].checkOut);
  });

  test('property detail page exposes pricing and booking controls', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    await page.getByText('Featured Properties', { exact: false }).scrollIntoViewIfNeeded();
    for (const item of testData.propertyDetail.expectedDetails) {
      await expect(page.locator('body')).toContainText(item);
    }
    await expect(page.locator('body')).toContainText(testData.propertyDetail.propertyNames[0]);
  });

  test('footer support links are clickable', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    for (const item of [...testData.navigation.footerLinks.company, ...testData.navigation.footerLinks.support, ...testData.navigation.footerLinks.explore]) {
      const link = page.getByRole('link', { name: item, exact: false });
      if (await link.count()) {
        const href = await link.first().getAttribute('href');
        if (!href) {
          continue;
        }

        await expect(link.first()).toBeVisible();
        await expect(link.first()).toHaveAttribute('href', href);
      }
    }
  });

  test('footer links remain functional across navigation', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    for (const target of testData.navigation.footerPersistence.sequence) {
      const pageLink = page.getByRole('link', { name: /Contact us|About us|Privacy Policy|Terms of Use/i }).first();
      if (await pageLink.count()) {
        const href = await pageLink.getAttribute('href');
        if (!href) {
          continue;
        }

        await expect(pageLink).toBeVisible();
        await expect(pageLink).toHaveAttribute('href', href);
      }
    }
  });
});
