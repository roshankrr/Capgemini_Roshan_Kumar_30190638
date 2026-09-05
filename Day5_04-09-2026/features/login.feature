Feature: Login Feature
Scenario: Valid Login
Given User opens application
When User enters credentials
Then User should login successfully 

Scenario: Invalid Login
Given User opens application
When User enters invalid credentials
And User clicks on login button
Then User should see error message

