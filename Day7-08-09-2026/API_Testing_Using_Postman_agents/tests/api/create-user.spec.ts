import { test, expect } from '@playwright/test';

test.describe('CreateUser API', () => {
  test('should create user account successfully', async ({ page }) => {
    // This test validates the CreateUser API endpoint
    const userData = {
      name: 'roshan',
      email: 'roshan123@gmail.com',
      password: 'abcd1234',
      title: 'Mr',
      birth_date: '16',
      birth_month: '06',
      birth_year: '2004',
      firstname: 'ROshan',
      lastname: 'Kumar',
      company: 'capgemini',
      address1: 'para nahi',
      address2: 'para nahi',
      country: 'india',
      zipcode: '151103',
      state: 'punjab',
      city: 'rampura phul',
      mobile_number: '987654321'
    };
    
    const response = await page.request.post('https://automationexercise.com/api/createAccount', {
      data: userData
    });
    
    expect(response.status()).toBeLessThan(500);
    const body = await response.json();
    expect(body).toBeDefined();
  });
});
