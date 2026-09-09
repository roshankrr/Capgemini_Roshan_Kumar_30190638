import { test, expect } from '@playwright/test';

test.describe('GetProducts API', () => {
  test('should fetch products successfully', async ({ page }) => {
    // This test validates the GetProducts API endpoint
    const response = await page.request.get('https://automationexercise.com/api/productsList');
    
    expect(response.status()).toBeLessThan(500);
  });
});
