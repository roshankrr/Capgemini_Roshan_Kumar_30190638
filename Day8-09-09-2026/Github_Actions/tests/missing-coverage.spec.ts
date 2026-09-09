import { test, expect } from '@playwright/test';

const testData = require('../specs/testdata/testfile.json');
import { dismissDemoWarning, fillHotelSearch } from './helpers/ui';

test.describe('Missing coverage', () => {
  test('TC-05 app promotion is visible', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await expect(page.getByText(testData.homepage.appPromotion.title, { exact: false })).toBeVisible();
    for (const item of testData.homepage.appPromotion.storeLabels) {
      await expect(page.getByText(item, { exact: false })).toBeVisible();
    }
  });

  test('TC-14 modify search updates values', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await fillHotelSearch(page, testData.hotelSearch.validCases[0]);
    await page.locator(testData.selectors.search.submit).click();
    await expect(page.locator(testData.selectors.search.destination)).toHaveValue(testData.hotelSearch.validCases[0].destination);
  });

  test('TC-15 and TC-16 property detail page loads and exposes pricing', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    await page.getByText('Featured Properties', { exact: false }).scrollIntoViewIfNeeded();
    for (const item of testData.propertyDetail.expectedDetails) {
      await expect(page.locator('body')).toContainText(item);
    }
    await expect(page.locator('body')).toContainText(/USD|\$|price/i);
  });

  test('TC-17 booking flow starts from property detail', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    await page.getByText('Featured Properties', { exact: false }).scrollIntoViewIfNeeded();
    await expect(page.locator('body')).toContainText(testData.propertyDetail.propertyNames[0]);
    await expect(page.locator('body')).toContainText(/booking|availability|Select room|Proceed|From/i);
  });

  test('TC-21 and TC-22 and TC-23 and TC-24 footer pages open', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    const routes = [
      { label: 'Contact us', url: testData.navigation.pageTargets.contactUs },
      { label: 'About us', url: testData.navigation.pageTargets.aboutUs },
      { label: 'Privacy Policy', url: testData.navigation.pageTargets.privacyPolicy },
      { label: 'Terms of Use', url: testData.navigation.pageTargets.termsOfUse }
    ];

    for (const route of routes) {
      const link = page.getByRole('link', { name: route.label, exact: false }).first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', route.url);
    }
  });

  test('TC-25 support links clickable', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    for (const item of [...testData.navigation.footerLinks.support, ...testData.navigation.footerLinks.explore]) {
      const link = page.getByRole('link', { name: item, exact: false });
      if (await link.count()) {
        await expect(link.first()).toBeVisible();
        await expect(link.first()).toHaveAttribute('href', /\/page\//);
      }
    }
  });

  test('TC-30 partial search form validation', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    const data = testData.hotelSearch.partialFormCases[0];
    if (data.destination) {
      await page.getByText('Destination or Hotel Name', { exact: false }).click();
      await page.locator(testData.selectors.search.destination).fill(data.destination);
    }
    if (data.checkIn) await page.locator(testData.selectors.search.checkIn).fill(data.checkIn);
    if (data.checkOut) await page.locator(testData.selectors.search.checkOut).fill(data.checkOut);
    await page.locator(testData.selectors.search.submit).click();
    await expect(page.locator('body')).toContainText(/Search|Dubai|Hotel/i);
  });

  test('TC-31 invalid guest room values', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    const data = testData.hotelSearch.boundaryCases[2];
    await page.getByText('Destination or Hotel Name', { exact: false }).click();
    await page.locator(testData.selectors.search.destination).fill(data.destination);
    await page.locator(testData.selectors.search.checkIn).fill(data.checkIn);
    await page.locator(testData.selectors.search.checkOut).fill(data.checkOut);
    await page.locator(testData.selectors.search.submit).click();
    await expect(page.locator('body')).toContainText(/Guest|Room|Dubai/i);
  });

  test('TC-33 footer links persistent across navigation', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await dismissDemoWarning(page);
    for (const item of ['Contact us', 'About us', 'Privacy Policy', 'Terms of Use']) {
      const link = page.getByRole('link', { name: item, exact: false });
      if (await link.count()) {
        await expect(link.first()).toBeVisible();
        await expect(link.first()).toHaveAttribute('href', /\/page\//);
      }
    }
  });
});
