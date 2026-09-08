import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  private firstNameInput = this.page.getByRole('textbox', { name: 'First Name' });
  private lastNameInput = this.page.getByRole('textbox', { name: 'Last Name' });
  private postalCodeInput = this.page.getByRole('textbox', { name: 'Zip/Postal Code' });
  private continueButton = this.page.getByRole('button', { name: 'Continue' });
  private finishButton = this.page.getByRole('button', { name: 'Finish' });
  private errorMessage = this.page.locator('[data-test="error"]');

  async assertStepOneLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
    await expect(this.page.getByText('Checkout: Your Information', { exact: true })).toBeVisible();
  }

  async fillCustomerInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue(): Promise<void> {
    await this.continueButton.click();
  }

  async getErrorText(): Promise<string> {
    await expect(this.errorMessage).toBeVisible();
    return (await this.errorMessage.textContent())?.trim() || '';
  }

  async assertOverviewLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-two.html/);
    await expect(this.page.getByText('Checkout: Overview', { exact: true })).toBeVisible();
  }

  async getItemTotalText(): Promise<string> {
    return (await this.page.getByText(/Item total:/).textContent())?.trim() || '';
  }

  async getTaxText(): Promise<string> {
    return (await this.page.getByText(/Tax:/).textContent())?.trim() || '';
  }

  async getGrandTotalText(): Promise<string> {
    return (await this.page.getByText(/Total:/).textContent())?.trim() || '';
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
  }

  async assertCompleteLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete.html/);
    await expect(this.page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
  }

  async backHome(): Promise<void> {
    await this.page.getByRole('button', { name: 'Back Home' }).click();
  }
}
