import { expect, Page } from '@playwright/test';

export class ProductsPage {
  constructor(private readonly page: Page) {}

  private title = this.page.getByText('Products', { exact: true });
  private sortDropdown = this.page.getByTestId('product-sort-container');
  private cartBadge = this.page.getByTestId('shopping-cart-badge');

  async assertLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.title).toBeVisible();
  }

  async getInventoryCount(): Promise<number> {
    return this.page.locator('[data-test="inventory-item"]').count();
  }

  async getProductNames(): Promise<string[]> {
    return this.page.getByTestId('inventory-item-name').allTextContents();
  }

  async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> {
    await this.sortDropdown.selectOption(value);
  }

  async addProductToCartByName(productName: string): Promise<void> {
    const item = this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeProductByName(productName: string): Promise<void> {
    const item = this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName });
    await item.getByRole('button', { name: 'Remove' }).click();
  }

  async openProductDetails(productName: string): Promise<void> {
    await this.page.getByRole('link', { name: productName }).first().click();
  }

  async openCart(): Promise<void> {
    await this.page.getByTestId('shopping-cart-link').click();
  }

  async getCartBadgeCount(): Promise<number> {
    if (!(await this.cartBadge.isVisible().catch(() => false))) {
      return 0;
    }
    return Number((await this.cartBadge.textContent()) || '0');
  }

  async openMenu(): Promise<void> {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
  }

  async logout(): Promise<void> {
    await this.openMenu();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }

  async resetAppState(): Promise<void> {
    await this.openMenu();
    await this.page.getByRole('link', { name: 'Reset App State' }).click();
  }
}
