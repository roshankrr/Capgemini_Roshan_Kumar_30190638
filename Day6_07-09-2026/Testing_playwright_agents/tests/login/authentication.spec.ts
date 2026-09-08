import { test, expect } from '../../fixtures/testFixtures';

test.describe('Authentication Module', () => {
  test('LOGIN-001 Valid login with standard user @smoke @regression', async ({ loginPage, productsPage, users }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.assertLoaded();
  });

  test('LOGIN-002 Invalid username and password @regression', async ({ loginPage, users }) => {
    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(await loginPage.getErrorText()).toContain('Username and password do not match');
  });

  test('LOGIN-003 Empty credentials validation @smoke @regression', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.clickLogin();
    await expect(await loginPage.getErrorText()).toContain('Username is required');
  });

  test('LOGIN-004 Locked out user cannot login @regression', async ({ loginPage, users }) => {
    await loginPage.goto();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(await loginPage.getErrorText()).toContain('locked out');
  });

  test('LOGIN-005 Logout and direct URL access blocked @smoke @regression', async ({ page, loginPage, productsPage, users }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.assertLoaded();
    await productsPage.logout();
    await loginPage.assertLoaded();

    await page.goto('/inventory.html');
    await expect(await loginPage.getErrorText()).toContain("You can only access '/inventory.html' when you are logged in.");
  });
});
