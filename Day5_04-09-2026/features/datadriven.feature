Feature: Data Driven Testing
  This feature is to test the login functionality with multiple users using data driven approach.
Scenario Outline: Login with multiple users
Given User opens application
When User enters "<username>" and "<password>"
Then User should login accordingly "<username>" and "<password>"

Examples:
| username       | password      |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |
| performance_glitch_user  | secret_sauce  |
| error_user  | secret_sauce  |
| visual_user  | secret_sauce  |
| locked_out_user  | secret_sauce  |