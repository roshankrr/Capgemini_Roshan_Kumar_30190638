import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';
import {CustomWorld} from '../../support/world';
let login:LoginPage;

Given('User opens application',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  login = new LoginPage(this.page);
  await login.openApp();
});

When('User enters credentials', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await login.enteringCred();
});

Then('User should login successfully',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await login.login();
});

When('User enters invalid credentials', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await login.enteringInvalidCred();
});

When('User clicks on login button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await login.loginFailed();
});

Then('User should see error message', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  console.log("Error message from User");
}   
)

When ('User enters {string} and {string}', async function (this:CustomWorld,username:string,password:string) {
  // Write code here that turns the phrase above into concrete actions
  await login.loginwithmultipleusers(username,password);
})

Then('User should login accordingly {string} and {string}',async function (this:CustomWorld,username:string,password:string) {
  // Write code here that turns the phrase above into concrete actions
  await login.verifyLoginSuccess(username,password);
});