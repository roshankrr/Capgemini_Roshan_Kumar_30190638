import { Given, When, Then } from '@cucumber/cucumber';
import StudentRegestration from '../../pages/StudentRegestration';
import {CustomWorld} from '../../support/world';
let studentReg: StudentRegestration;

Given('User opens the application', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    studentReg = new StudentRegestration(this.page);
    studentReg.openApp('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    console.log("Application is opened");
});

When('User enters {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string}', async function (this:CustomWorld,string, string2, string3, string4, string5, string6, string7, string8, string9, string10, string11) {
  // Write code here that turns the phrase above into concrete actions
    await studentReg.enterDetails(string,string2,string3,string4,string5,string6,string7,string8,string9,string10,string11);
  
});

When('Click to the Login button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    await studentReg.clickLogin();
});

Then('User should be able to register successfully', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  console.log("User is registered successfully");
});