import { test, expect } from '../../fixtures/testFixtures';

test.describe('Cart Module', () => {
  test.beforeEach(async ({ loginPage, users, productsPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.assertLoaded();
  });

  test('CART-001 Add single product and verify cart contents @smoke @regression', async ({ productsPage, cartPage }) => {
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.openCart();
    await cartPage.assertLoaded();

    const items = await cartPage.getItemNames();
    await expect(items).toEqual(['Sauce Labs Backpack']);
  });

  test('CART-002 Add multiple products and remove one @regression', async ({ productsPage, cartPage }) => {
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.addProductToCartByName('Sauce Labs Bike Light');
    await productsPage.openCart();

    await cartPage.removeItemByName('Sauce Labs Bike Light');
    const items = await cartPage.getItemNames();
    await expect(items).toEqual(['Sauce Labs Backpack']);
  });

  test('CART-003 Continue shopping keeps cart state @regression', async ({ productsPage, cartPage }) => {
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.openCart();
    await cartPage.continueShopping();
    await productsPage.assertLoaded();
    await expect(await productsPage.getCartBadgeCount()).toBe(1);
  });
});
