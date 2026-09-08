import { test, expect } from '../../fixtures/testFixtures';

test('REG-001 End-to-end login to order completion flow @smoke @regression', async ({ page, loginPage, users, productsPage, cartPage, checkoutPage, validCheckoutInfo }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await productsPage.assertLoaded();

  await productsPage.addProductToCartByName('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.assertLoaded();
  await cartPage.checkout();

  await checkoutPage.fillCustomerInformation(
    validCheckoutInfo.firstName,
    validCheckoutInfo.lastName,
    validCheckoutInfo.postalCode,
  );
  await checkoutPage.continue();
  await checkoutPage.finish();
  await checkoutPage.assertCompleteLoaded();

  await expect(page.getByRole('button', { name: 'Back Home' })).toBeVisible();
});
