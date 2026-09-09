import { expect, type Page } from '@playwright/test';

const testData = require('../../specs/testdata/testfile.json');

export class HotelSearchPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto(testData.baseUrl);
  }

  async search(data: { destination: string; checkIn: string; checkOut: string; guests: number; rooms: number; nationality: string }) {
    const destination = this.page.locator(testData.selectors.search.destination);
    if (await destination.count()) {
      await destination.fill(data.destination);
    }

    const checkIn = this.page.locator(testData.selectors.search.checkIn);
    if (await checkIn.count()) {
      await checkIn.fill(data.checkIn);
    }

    const checkOut = this.page.locator(testData.selectors.search.checkOut);
    if (await checkOut.count()) {
      await checkOut.fill(data.checkOut);
    }

    const guestButton = this.page.locator(testData.selectors.search.guests);
    if (await guestButton.count()) {
      await guestButton.click();
    }

    const roomButton = this.page.locator(testData.selectors.search.rooms);
    if (await roomButton.count()) {
      await roomButton.click();
    }

    const submit = this.page.locator(testData.selectors.search.submit);
    if (await submit.count()) {
      await submit.click();
    }
  }

  async expectPropertyResults() {
    await expect(this.page.locator(testData.selectors.hotelCard)).toBeVisible();
  }

  async openFirstProperty() {
    await this.page.getByText(testData.bookingFlow.propertySelection[0], { exact: true }).click();
  }
}
