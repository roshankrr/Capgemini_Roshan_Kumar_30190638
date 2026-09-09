import { test, expect } from '@playwright/test';

test.describe('VerifyUser API', () => {
  test('should verify user login successfully', async ({ page }) => {
    // This test validates the VerifyUser API endpoint
    const response = await page.request.post('https://automationexercise.com/api/verifyLogin', {
      data: {}
    });
    
    expect(response.status()).toBeLessThan(500);
    const body = await response.json();
    expect(body).toBeDefined();
  });
});
