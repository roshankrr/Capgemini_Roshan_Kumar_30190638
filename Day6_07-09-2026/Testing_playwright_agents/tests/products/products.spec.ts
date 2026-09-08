import { test, expect } from '../../fixtures/testFixtures';

test.describe('Products Module', () => {
  test.beforeEach(async ({ loginPage, users, productsPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.assertLoaded();
  });

  test('PRODUCT-001 Product list visibility and count @smoke @regression', async ({ productsPage }) => {
    await expect(await productsPage.getInventoryCount()).toBe(6);

    const productNames = await productsPage.getProductNames();
    await expect(productNames).toContain('Sauce Labs Backpack');
    await expect(productNames).toContain('Sauce Labs Bike Light');
  });

  test('PRODUCT-002 Sorting options reorder products correctly @regression', async ({ productsPage }) => {
    await productsPage.sortBy('za');
    const zToA = await productsPage.getProductNames();
    await expect(zToA[0]).toBe('Test.allTheThings() T-Shirt (Red)');

    await productsPage.sortBy('lohi');
    const lowToHigh = await productsPage.getProductNames();
    await expect(lowToHigh[0]).toBe('Sauce Labs Onesie');

    await productsPage.sortBy('hilo');
    const highToLow = await productsPage.getProductNames();
    await expect(highToLow[0]).toBe('Sauce Labs Fleece Jacket');
  });

  test('PRODUCT-003 Product details page shows expected content @regression', async ({ productsPage, productDetailsPage }) => {
    await productsPage.openProductDetails('Sauce Labs Backpack');
    await productDetailsPage.assertLoaded();
    await expect(await productDetailsPage.getName()).toBe('Sauce Labs Backpack');
    await expect(await productDetailsPage.getPrice()).toBe('$29.99');
  });

  test('PRODUCT-004 Add and remove updates cart badge @smoke @regression', async ({ productsPage }) => {
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await expect(await productsPage.getCartBadgeCount()).toBe(1);

    await productsPage.removeProductByName('Sauce Labs Backpack');
    await expect(await productsPage.getCartBadgeCount()).toBe(0);
  });
});
