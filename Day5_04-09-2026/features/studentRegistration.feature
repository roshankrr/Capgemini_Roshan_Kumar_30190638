Feature:Student should be able to fill the registration form successfully
Scenario Outline: Student Registration
Given User opens the application
When User enters "<firstName>" and "<email>" and "<gender>" and "<mobileNumber>" and "<dateOfBirth>" and "<subjects>" and "<hobbies>" and "<picture>" and "<currentAddress>" and "<state>" and "<city>"
And Click to the Login button
Then User should be able to register successfully

Examples:
| firstName | email | gender | mobileNumber | dateOfBirth | subjects | hobbies | picture | currentAddress | state | city |
| John Doe | johndoe@example.com | Male | 9876543210 | 1990-01-01 | Science | Reading | ./MyData.md | 123 Main St, Cityville | Uttar Pradesh | Agra |
| Rosh Doe | roshdoe@example.com | Male | 9876543210 | 1990-01-01 | Science | Reading | ./MyData.md | 123 Main St, Cityville | Uttar Pradesh | Agra |
| Josh Doe | joshdoe@example.com | Male | 9876543210 | 1990-01-01 | Science | Reading | ./MyData.md | 123 Main St, Cityville | Uttar Pradesh | Agra |
| Mosh Doe | moshdoe@example.com | Male | 9876543210 | 1990-01-01 | Science | Reading | ./MyData.md | 123 Main St, Cityville | Uttar Pradesh | Agra |
| Fros Doe | frosdoe@example.com | Male | 9876543210 | 1990-01-01 | Science | Reading | ./MyData.md | 123 Main St, Cityville | Uttar Pradesh | Agra |
