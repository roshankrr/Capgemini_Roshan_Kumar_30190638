import { expect, Page } from '@playwright/test';

export class ProductDetailsPage {
  constructor(private readonly page: Page) {}

  async assertLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory-item\.html\?id=\d+/);
    await expect(this.page.getByRole('button', { name: 'Back to products' })).toBeVisible();
  }

  async getName(): Promise<string> {
    return (await this.page.getByTestId('inventory-item-name').textContent())?.trim() || '';
  }

  async getPrice(): Promise<string> {
    return (await this.page.getByTestId('inventory-item-price').textContent())?.trim() || '';
  }

  async addToCart(): Promise<void> {
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeFromCart(): Promise<void> {
    await this.page.getByRole('button', { name: 'Remove' }).click();
  }

  async backToProducts(): Promise<void> {
    await this.page.getByRole('button', { name: 'Back to products' }).click();
  }
}
