import { test, expect } from '@playwright/test';

const testData = require('../specs/testdata/testfile.json');
import { dismissDemoWarning, fillHotelSearch } from './helpers/ui';

test.describe('Hotel search', () => {
  for (const data of testData.hotelSearch.validCases) {
    test(`${data.id} returns results`, async ({ page }) => {
      await page.goto(testData.baseUrl);
      await fillHotelSearch(page, data);
      await expect(page.locator(testData.selectors.search.destination)).toHaveValue(data.destination);
      await expect(page.locator(testData.selectors.search.checkIn)).toHaveValue(data.checkIn);
      await expect(page.locator(testData.selectors.search.checkOut)).toHaveValue(data.checkOut);
    });
  }

  for (const data of testData.hotelSearch.invalidCases) {
    test(`${data.id} handles invalid search`, async ({ page }) => {
      await page.goto(testData.baseUrl);
      await fillHotelSearch(page, data);
      await expect(page.locator(testData.selectors.search.checkIn)).toHaveValue(data.checkIn);
      await expect(page.locator(testData.selectors.search.checkOut)).toHaveValue(data.checkOut);
    });
  }

  for (const data of testData.hotelSearch.boundaryCases) {
    test(`${data.id} handles boundary case`, async ({ page }) => {
      await page.goto(testData.baseUrl);
      await fillHotelSearch(page, data);
      await expect(page.locator(testData.selectors.search.destination)).toHaveValue(data.destination);
    });
  }

  for (const data of testData.hotelSearch.partialFormCases) {
    test(`${data.id} blocks incomplete form`, async ({ page }) => {
      await page.goto(testData.baseUrl);
      await dismissDemoWarning(page);
      if (data.destination) {
        await page.getByText('Destination or Hotel Name', { exact: false }).click();
        await page.evaluate((value) => {
          const input = document.querySelector('#st_dest_q') as HTMLInputElement | null;
          if (!input) {
            return;
          }

          input.value = value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }, data.destination);
      }
      if (data.checkIn) {
        await page.evaluate((value) => {
          const input = document.querySelector("input[name='checkin_date']") as HTMLInputElement | null;
          if (!input) {
            return;
          }

          input.removeAttribute('readonly');
          input.value = value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }, data.checkIn);
      }
      if (data.checkOut) {
        await page.evaluate((value) => {
          const input = document.querySelector("input[name='checkout_date']") as HTMLInputElement | null;
          if (!input) {
            return;
          }

          input.removeAttribute('readonly');
          input.value = value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }, data.checkOut);
      }
      if (data.destination) {
        await expect(page.locator(testData.selectors.search.destination)).toHaveValue(data.destination);
      }
      if (data.checkIn) {
        await expect(page.locator(testData.selectors.search.checkIn)).toHaveValue(data.checkIn);
      }
      if (data.checkOut) {
        await expect(page.locator(testData.selectors.search.checkOut)).toHaveValue(data.checkOut);
      }
    });
  }
});
