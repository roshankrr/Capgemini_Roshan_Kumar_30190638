# TEST_PLAN

## Project
- Project Name: SauceDemo QA Validation and Automation Program
- Application Under Test: https://www.saucedemo.com/
- Objective: Validate core e-commerce journeys and provide production-ready Playwright automation.

## Scope
- Functional testing
- UI/UX validation
- Negative and boundary testing
- Integration flow testing
- Smoke and regression testing
- Accessibility baseline checks
- Cross-browser coverage
- High-level performance and security checks

## Out of Scope
- Backend API contract verification
- Real payment gateway testing
- Large-scale stress testing

## Application Understanding (Verified)
- Pages: login, inventory, product details, cart, checkout step one, checkout step two, checkout complete.
- Auth behavior: required for protected routes; logout blocks direct /inventory.html access.
- Product behavior: 6 products visible with image/name/description/price; sort options available.
- Cart behavior: add/remove updates cart badge and line items.
- Checkout behavior: first name, last name, postal code required; overview shows item total, tax, total; completion page confirms order.

## Features to Be Tested
- Login
- Product listing and sorting
- Product details
- Add/remove products
- Shopping cart
- Checkout and completion
- Logout and menu navigation
- UI labels/messages/states

## Business Rules
- Authentication required for protected inventory route.
- Required checkout fields must be enforced.
- Total should match item total + tax.
- Cart count should reflect selected items.

## Cross-Browser Matrix
- Chrome (primary)
- Firefox
- Edge
- Safari/WebKit

## Smoke Suite
- LOGIN-001, LOGIN-003
- PRODUCT-001, PRODUCT-004
- CART-001
- CHECKOUT-001
- REG-001

## Regression Suite
- All smoke tests plus LOGIN-002/004/005, PRODUCT-002/003, CART-002/003, CHECKOUT-002/003/004

## Accessibility Checks
- Keyboard navigation and focus order
- Accessible names for controls
- Error text discoverability
- Contrast baseline

## Performance Checks
- Login page load baseline
- Inventory route transition baseline
- Checkout completion baseline

## Security Checks
- Protected URL access when logged out
- Session invalidation after logout
- Input validation robustness
- URL manipulation checks across cart/checkout pages

## Test Data Strategy
- Users: standard_user, locked_out_user, invalid user set
- Checkout data: valid, missing first name, missing last name, missing postal code
- Product sets: single item, multi-item, remove scenarios

## Risk Analysis
- High risk: auth/session, totals calculation, cart state consistency
- Challenges: browser timing differences, shared state
- Mitigation: independent tests, deterministic setup, retries, trace artifacts

## Entry Criteria
- Environment reachable
- Test users available
- Stable build deployed

## Exit Criteria
- Smoke suite pass on target browsers
- No open blocker/critical defects
- Regression pass target met with approved risk exceptions

## Defect Management
- Severity: S1 to S4
- Priority: P0 to P3
- Lifecycle: New -> Triaged -> Assigned -> In Progress -> Fixed -> Retest -> Closed/Reopen
- Defect report fields: steps, expected vs actual, env, severity/priority, evidence
