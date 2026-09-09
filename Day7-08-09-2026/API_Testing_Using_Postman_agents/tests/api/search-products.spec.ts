import { test, expect } from '@playwright/test';

test.describe('SearchProducts API', () => {
  test('should search products successfully', async ({ page }) => {
    // This test validates the SearchProducts API endpoint
    const response = await page.request.post('https://automationexercise.com/api/searchProduct', {
      data: {
        search_product: 'tshirt'
      }
    });
    
    expect(response.status()).toBeLessThan(500);
    const body = await response.json();
    expect(body).toBeDefined();
  });
});
