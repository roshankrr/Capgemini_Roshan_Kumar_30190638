import { test, expect } from '../../fixtures/testFixtures';
import { parseCurrency, round2 } from '../../utils/currency';

test.describe('Checkout Module', () => {
  test.beforeEach(async ({ loginPage, users, productsPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.assertLoaded();
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.addProductToCartByName('Sauce Labs Bike Light');
    await productsPage.openCart();
  });

  test('CHECKOUT-001 Complete checkout with valid customer information @smoke @regression', async ({ cartPage, checkoutPage, validCheckoutInfo, productsPage }) => {
    await cartPage.checkout();
    await checkoutPage.assertStepOneLoaded();

    await checkoutPage.fillCustomerInformation(
      validCheckoutInfo.firstName,
      validCheckoutInfo.lastName,
      validCheckoutInfo.postalCode,
    );
    await checkoutPage.continue();

    await checkoutPage.assertOverviewLoaded();

    const itemTotal = parseCurrency(await checkoutPage.getItemTotalText());
    const tax = parseCurrency(await checkoutPage.getTaxText());
    const grandTotal = parseCurrency(await checkoutPage.getGrandTotalText());
    await expect(grandTotal).toBe(round2(itemTotal + tax));

    await checkoutPage.finish();
    await checkoutPage.assertCompleteLoaded();
    await checkoutPage.backHome();
    await productsPage.assertLoaded();
  });

  test('CHECKOUT-002 First name required validation @regression', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.assertStepOneLoaded();
    await checkoutPage.continue();
    await expect(await checkoutPage.getErrorText()).toContain('First Name is required');
  });

  test('CHECKOUT-003 Last name required validation @regression', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.assertStepOneLoaded();
    await checkoutPage.fillCustomerInformation('John', '', '10001');
    await checkoutPage.continue();
    await expect(await checkoutPage.getErrorText()).toContain('Last Name is required');
  });

  test('CHECKOUT-004 Postal code required validation @regression', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.assertStepOneLoaded();
    await checkoutPage.fillCustomerInformation('John', 'Doe', '');
    await checkoutPage.continue();
    await expect(await checkoutPage.getErrorText()).toContain('Postal Code is required');
  });
});
