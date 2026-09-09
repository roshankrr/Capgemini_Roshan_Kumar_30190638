# Test Cases

## 1. Homepage and Travel Discovery

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-01 | Homepage loads successfully | Browser is open and internet access is available | 1. Navigate to https://phptravels.net/ 2. Observe the page layout | The homepage loads without error and displays the main travel branding and hero content | P0 | Yes |
| TC-02 | Key travel categories are visible | User is on the homepage | 1. Review the navigation and hero area | Stays, Flights, Visa, and Trip Planner or equivalent primary travel modules are visible | P0 | Yes |
| TC-03 | Featured hotel cards appear | User is on the homepage | 1. Scroll through the main content area | Featured property cards are displayed with names, prices, and discount indicators | P0 | Yes |
| TC-04 | Demo environment warning is visible | User is on the homepage or a booking page | 1. Observe the page notices and banners | An important notice is displayed informing that pricing may be simulated and that real payments are not supported | P0 | Yes |
| TC-05 | Mobile app promotion is visible | User is on the homepage | 1. Review the lower/secondary sections of the homepage | App download callouts or mobile app support information are visible | P2 | Yes |
| TC-06 | Footer navigation is accessible | User is on the homepage | 1. Scroll to the footer 2. Check each link group | Company, support, and legal links are visible and properly grouped | P1 | Yes |

## 2. Hotel Search Functionality

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-07 | Valid hotel search returns results | User is on the homepage | 1. Enter a valid destination or hotel name 2. Choose valid check-in and check-out dates 3. Set guest count and room count 4. Submit search | Results page or results area displays matching hotels/properties | P0 | Yes |
| TC-08 | Search accepts minimum valid guest and room selection | User is on the homepage | 1. Set 1 guest and 1 room 2. Submit valid destination and dates | Search is accepted and valid results are shown | P1 | Yes |
| TC-09 | Search accepts higher occupancy values | User is on the homepage | 1. Set multiple guests and multiple rooms 2. Submit valid data | Search is accepted and results respect capacity selection | P1 | Yes |
| TC-10 | Search fails for empty destination/hotel name | User is on the homepage | 1. Leave destination empty 2. Submit search | Search is blocked or a validation message is shown | P0 | Yes |
| TC-11 | Invalid date range is rejected | User is on the homepage | 1. Select checkout earlier than check-in 2. Submit search | The system warns or prevents the invalid date range | P0 | Yes |
| TC-12 | Edge-case destination input is handled correctly | User is on the homepage | 1. Enter long strings and special characters in destination field 2. Submit search | The system handles input safely and either validates or returns a controlled response | P2 | Yes |
| TC-13 | No-result search is handled gracefully | User is on the homepage | 1. Enter a destination or hotel that has no results 2. Submit search | A safe empty-state response or no-results message is shown | P2 | Yes |

## 3. Search Modification and Booking Flow

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-14 | User can modify search criteria | User has a hotel search or detail page loaded | 1. Click modify search 2. Change destination/date/guest values 3. Apply update | Updated results reflect the new values | P1 | Yes |
| TC-15 | Hotel detail page loads correctly | User selected a hotel from results or homepage | 1. Click a hotel card or relevant property | Property detail page loads with property information | P0 | Yes |
| TC-16 | Hotel detail page exposes pricing and property information | User is on hotel detail page | 1. Observe the page content | Property name, location, price, and booking-related elements are present | P0 | Yes |
| TC-17 | Booking flow begins from property detail | User is on hotel detail page | 1. Attempt to continue booking | The booking process begins or moves toward booking preparation | P0 | Yes |
| TC-18 | Nationality selection is required | User is in the booking flow | 1. Continue without selecting nationality | The system blocks progress and requests nationality selection | P0 | Yes |
| TC-19 | Nationality selection allows continuation | User is in the booking flow | 1. Select a nationality 2. Continue | Booking progression continues without nationality blocker | P0 | Yes |
| TC-20 | Same-day check-in/check-out is handled | User is on search form | 1. Enter same-day check-in and same-day check-out values or a very short stay | The system responds appropriately with validation or accepted handling | P2 | Yes |

## 4. Navigation and Information Pages

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-21 | Contact page opens from footer | User is on homepage | 1. Click Contact Us | Contact page loads successfully | P2 | Yes |
| TC-22 | About us page opens from footer | User is on homepage | 1. Click About us | About page loads successfully | P2 | Yes |
| TC-23 | Privacy policy page opens | User is on homepage | 1. Click Privacy Policy | Privacy policy page loads successfully | P1 | Yes |
| TC-24 | Terms of use page opens | User is on homepage | 1. Click Terms of Use | Terms page loads successfully | P1 | Yes |
| TC-25 | Support links are clickable | User is on homepage or support section | 1. Click support-related links | The correct support page or destination opens | P2 | Yes |

## 5. Demo and Production Warning Validation

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-26 | Pricing warning is prominent | User is on homepage or booking area | 1. Review system notices | Warning clearly states that pricing may not reflect real-world rates | P0 | Yes |
| TC-27 | API credential warning is displayed | User is on homepage or booking area | 1. Review onboarding/demo notice | The system indicates live supplier data requires API keys | P0 | Yes |
| TC-28 | Payment caution is visible | User is on homepage or booking area | 1. Review warning text | The system warns against using real payment methods or cards in this demo environment | P0 | Yes |
| TC-29 | Data reset warning is visible | User is on homepage or booking area | 1. Review warning text | The system warns that data may reset and should not be treated as persistent data | P2 | Yes |

## 6. Negative and Regression Coverage

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-30 | Search with partially filled booking form is blocked | User is on hotel search form | 1. Fill only some required fields 2. Submit | The form indicates missing required values and prevents submission | P0 | Yes |
| TC-31 | Search with invalid guest/room combination is handled | User is on hotel search form | 1. Enter impossible or inconsistent guest/room values | The system responds with validation or correction guidance | P1 | Yes |
| TC-32 | Booking flow does not continue without mandatory nationality | User is in property booking flow | 1. Attempt to progress without nationality selection | A block or prompt is displayed and no unsafe progression occurs | P0 | Yes |
| TC-33 | Footer links remain functional across page navigation | User has visited multiple pages | 1. Navigate between pages 2. Open footer links again | Footer links continue to work consistently | P2 | Yes |

## 7. Summary Coverage

The above cases cover the key requirement areas derived from the PHPTRAVELS demo flow:
- homepage discovery
- hotel search and validation
- modify search and booking selection
- nationality gate in the booking flow
- footer navigation and information pages
- demo environment warnings and non-production restrictions
