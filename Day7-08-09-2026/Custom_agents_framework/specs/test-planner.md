# PHPTRAVELS Test Planner

## Application Overview

PHPTRAVELS demo travel booking site focused on hotel search, property discovery, nationality gating, and demo-environment warnings.

## Test Scenarios

### 1. Home and booking flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage displays key travel services and featured stays

**File:** `tests/homepage/homepage-displays-key-travel-services-and-featured-stays.spec.ts`

**Steps:**
  1. Open the PHPTRAVELS homepage in a fresh browser session.
    - expect: The page loads successfully.
    - expect: The homepage displays key travel categories such as Stays, Flights, Visa, and Trip Planner.
    - expect: Featured hotel/property cards are visible with pricing and discount information.
  2. Review the header/footer and primary booking area.
    - expect: The hotel search form is visible.
    - expect: The mobile app callout and support links are present.
    - expect: The demo environment warning is visible.

#### 1.2. Hotel search works with valid booking inputs

**File:** `tests/booking/hotel-search-works-with-valid-booking-inputs.spec.ts`

**Steps:**
  1. Enter a valid destination or hotel name, choose valid check-in and check-out dates, and set guest and room counts.
    - expect: The search form accepts the input.
    - expect: A list of matching hotel/property results is displayed.
  2. Verify the result list shows property names, price, and discount information.
    - expect: Each result card includes price details and at least one identifying property descriptor.
    - expect: The user can select a property to continue.

#### 1.3. User can modify the search after initial selection

**File:** `tests/booking/user-can-modify-search-after-initial-selection.spec.ts`

**Steps:**
  1. Open a hotel detail or search results page and click the modify search control.
    - expect: The search form is editable.
    - expect: The current values are pre-populated.
  2. Change the destination, dates, or guest counts and apply the updated search.
    - expect: The updated results reflect the new search criteria.
    - expect: The booking form uses the new values.

#### 1.4. Property details page exposes booking details and booking actions

**File:** `tests/booking/property-details-page-exposes-booking-details-and-booking-actions.spec.ts`

**Steps:**
  1. Select a featured hotel from the homepage or results page.
    - expect: The property detail page opens.
    - expect: The page shows location and availability or booking-related content.
  2. Inspect the property information and the booking-related controls.
    - expect: The user can review pricing and property context.
    - expect: The page supports a next-step booking flow.

#### 1.5. Nationality selection is required before continuing the booking flow

**File:** `tests/booking/nationality-selection-is-required-before-continuing-the-booking-flow.spec.ts`

**Steps:**
  1. Initiate a booking flow from a property detail page.
    - expect: The system prompts for nationality selection or similar pre-booking information.
  2. Attempt to proceed without selecting nationality.
    - expect: The system blocks continuation and requests the missing selection.
  3. Select a nationality and continue.
    - expect: The booking process moves forward without blocking on nationality.

#### 1.6. Footer navigation links work to company, support, and legal pages

**File:** `tests/navigation/footer-navigation-links-work-to-company-support-and-legal-pages.spec.ts`

**Steps:**
  1. Open the footer section on the homepage or a relevant page.
    - expect: Company, support, and legal links are visible.
  2. Click a representative link such as Contact Us, About Us, Privacy Policy, or Terms of Use.
    - expect: The target page loads successfully.
    - expect: The page content matches the selected information category.

#### 1.7. Demo environment warnings are clearly shown

**File:** `tests/notifications/demo-environment-warnings-are-clearly-shown.spec.ts`

**Steps:**
  1. Review the homepage and booking pages for system notices.
    - expect: The site clearly states that pricing may be simulated and not real-world pricing.
  2. Check the wording about API credentials and sandbox-only payments.
    - expect: The user is warned that live supplier data requires API keys and that real cards or payments must not be used.

#### 1.8. Validation guards block invalid booking inputs

**File:** `tests/validation/validation-guards-block-invalid-booking-inputs.spec.ts`

**Steps:**
  1. Attempt an empty or incomplete hotel search.
    - expect: The system prevents search submission or shows a clear validation message.
  2. Use invalid date combinations such as checkout before check-in.
    - expect: The system alerts the user or rejects the invalid date range.
  3. Test edge inputs like long destination strings or special characters.
    - expect: The UI handles the input safely and either validates or returns proper results.

#### 1.9. Boundary scenarios are handled for occupancy and search flexibility

**File:** `tests/booking/boundary-scenarios-are-handled-for-occupancy-and-search-flexibility.spec.ts`

**Steps:**
  1. Run a minimum occupancy search with one guest and one room.
    - expect: The system accepts the values and returns valid results.
  2. Run a larger occupancy search with multiple guests and rooms.
    - expect: The form accepts the inputs and the results reflect the selected capacity.
  3. Test same-day check-in and checkout or an unusually limited date range.
    - expect: The system provides a sensible response or validation message.
