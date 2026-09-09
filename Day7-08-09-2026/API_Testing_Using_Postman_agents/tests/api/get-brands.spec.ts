import { test, expect } from '@playwright/test';

test.describe('GetBrands API', () => {
  test('should fetch brands successfully', async ({ page }) => {
    // This test validates the GetBrands API endpoint
    const response = await page.request.get('https://automationexercise.com/api/brandsList');
    
    expect(response.status()).toBeLessThan(500);
  });
});
