import { test, expect } from '@playwright/test';

const testData = require('../specs/testdata/testfile.json');

test.describe('Homepage', () => {
  test('homepage renders main travel content', async ({ page }) => {
    await page.goto(testData.baseUrl);
    for (const item of testData.homepage.expectedCategories) {
      await expect(page.getByText(item, { exact: true })).toBeVisible();
    }
    for (const item of testData.homepage.featuredProperties) {
      await expect(page.getByText(item, { exact: true })).toBeVisible();
    }
  });

  test('warning banners are visible', async ({ page }) => {
    await page.goto(testData.baseUrl);
    for (const item of testData.homepage.warningTexts) {
      await expect(page.getByText(item, { exact: false })).toBeVisible();
    }
  });

  test('app promotion is visible', async ({ page }) => {
    await page.goto(testData.baseUrl);
    await expect(page.getByText(testData.homepage.appPromotion.title, { exact: false })).toBeVisible();
    for (const item of testData.homepage.appPromotion.storeLabels) {
      await expect(page.getByText(item, { exact: false })).toBeVisible();
    }
  });

  test('footer links rendered', async ({ page }) => {
    await page.goto(testData.baseUrl);
    for (const item of [...testData.navigation.footerLinks.company, ...testData.navigation.footerLinks.support, ...testData.navigation.footerLinks.explore]) {
      await expect(page.getByRole('link', { name: item, exact: false })).toBeVisible();
    }
  });

  test('static info pages open from footer', async ({ page }) => {
    await page.goto(testData.baseUrl);
    const targets = [
      { label: 'Contact us', path: testData.navigation.pageTargets.contactUs },
      { label: 'About us', path: testData.navigation.pageTargets.aboutUs },
      { label: 'Privacy Policy', path: testData.navigation.pageTargets.privacyPolicy },
      { label: 'Terms of Use', path: testData.navigation.pageTargets.termsOfUse }
    ];

    for (const target of targets) {
      await page.getByRole('link', { name: target.label, exact: false }).click();
      await expect(page).toHaveURL(new RegExp(target.path.replace('/', '\\/')));
      await page.goBack();
    }
  });
});
