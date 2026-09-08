import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  private usernameInput = this.page.getByRole('textbox', { name: 'Username' });
  private passwordInput = this.page.getByRole('textbox', { name: 'Password' });
  private loginButton = this.page.getByRole('button', { name: 'Login' });
  private errorMessage = this.page.locator('[data-test="error"]');

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async assertLoaded(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
    await expect(this.page).toHaveURL(/saucedemo\.com\/?$/);
  }

  async getErrorText(): Promise<string> {
    await expect(this.errorMessage).toBeVisible();
    return (await this.errorMessage.textContent())?.trim() || '';
  }
}
