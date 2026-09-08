# SauceDemo Comprehensive Test Plan

## Application Overview

Comprehensive test planning for SauceDemo covering authentication, product discovery, cart, checkout, navigation, negative cases, and regression/smoke subsets.

## Test Scenarios

### 1. Authentication and Session

**Seed:** `tests/seed.spec.ts`

#### 1.1. Valid and invalid login paths

**File:** `tests/login/authentication.spec.ts`

**Steps:**
  1. Open SauceDemo login page with blank state.
    - expect: Login form with Username, Password, and Login button is visible.
  2. Submit valid standard user credentials.
    - expect: User is redirected to inventory page and Products header is visible.
  3. Submit invalid credentials and empty credentials in separate runs.
    - expect: Relevant error banners appear with expected message text.
    - expect: User remains on login page.

#### 1.2. Locked user and logout session enforcement

**File:** `tests/login/authentication.spec.ts`

**Steps:**
  1. Login as locked_out_user with valid password.
    - expect: Access is denied with lockout message.
  2. Login as standard user, then logout from menu.
    - expect: User returns to login page.
  3. Directly open /inventory.html after logout.
    - expect: User is redirected/blocked and error explains login is required.

### 2. Catalog, Cart, and Checkout

**Seed:** `tests/seed.spec.ts`

#### 2.1. Inventory and sorting validation

**File:** `tests/products/products.spec.ts`

**Steps:**
  1. Login and observe inventory grid.
    - expect: Six products are displayed with names, prices, images, and descriptions.
  2. Cycle all sort options.
    - expect: Product order changes correctly for name and price sort modes.

#### 2.2. Cart and checkout completion

**File:** `tests/checkout/checkout.spec.ts`

**Steps:**
  1. Add one and multiple products to cart.
    - expect: Cart badge reflects item count and cart lines match selected items.
  2. Proceed to checkout with missing required fields.
    - expect: Field-specific validation messages appear for first name, last name, and postal code.
  3. Complete checkout with valid data.
    - expect: Overview totals are shown and completion page confirms order submission.

### 3. Smoke and Regression Gates

**Seed:** `tests/seed.spec.ts`

#### 3.1. Smoke gate

**File:** `tests/regression/critical-path.spec.ts`

**Steps:**
  1. Run @smoke tagged suite.
    - expect: Critical business flow is green before deeper regression starts.

#### 3.2. Regression gate

**File:** `tests/regression/critical-path.spec.ts`

**Steps:**
  1. Run @regression tagged suite across supported browsers.
    - expect: No blocker regressions in authentication, products, cart, or checkout.
