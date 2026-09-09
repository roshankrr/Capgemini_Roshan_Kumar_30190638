import { expect, type Page } from '@playwright/test';

const testData = require('../../specs/testdata/testfile.json');

export class HomePage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto(testData.baseUrl);
  }

  async expectMainContent() {
    for (const item of testData.homepage.expectedCategories) {
      await expect(this.page.getByText(item, { exact: true })).toBeVisible();
    }
    for (const item of testData.homepage.featuredProperties) {
      await expect(this.page.getByText(item, { exact: true })).toBeVisible();
    }
  }

  async expectWarnings() {
    for (const item of testData.homepage.warningTexts) {
      await expect(this.page.getByText(item, { exact: false })).toBeVisible();
    }
  }

  async expectFooterLinks() {
    for (const item of [...testData.navigation.footerLinks.company, ...testData.navigation.footerLinks.support, ...testData.navigation.footerLinks.explore]) {
      await expect(this.page.getByRole('link', { name: item, exact: false })).toBeVisible();
    }
  }
}
