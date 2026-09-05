import { expect, Page } from '@playwright/test';

export class LoginPage {

constructor(
private page: Page
) {}


// locators 

private txtUser = '#user-name';

private txtPass = '#password';

private btnLogin ='#login-button';

async openApp() {

await this.page.goto(

'https://www.saucedemo.com/');

}

async enteringCred() {

console.log(
'Entering credentials');

// Example
await this.page.fill('input[name="user-name"]','standard_user');
await this.page.fill("//input[@id='password']",'secret_sauce');


}

async enteringInvalidCred() {

console.log(
'Entering invalid credentials');
await this.page.fill('input[name="user-name"]','invalid_user');
await this.page.fill("//input[@id='password']",'invalid_password');
}



async login() {
    console.log("Logging in with default credentials");
    await this.page.click('input[name="login-button"]');
    await expect(this.page.locator('div[class="app_logo"]')).toBeVisible();
}
async loginFailed() {
    console.log("Logging in with default credentials");
    await this.page.click('input[name="login-button"]');
    await expect(this.page.locator('div[class="app_logo"]')).not.toBeVisible();
}

async loginwithmultipleusers(username: string, password : string){

    await this.page.fill(this.txtUser,username);

    await this.page.fill(this.txtPass,password);

    await this.page.click(this.btnLogin);

}

async verifyLoginSuccess(username:string,password:string){
    if(username === 'locked_out_user' && password === 'secret_sauce'){
        await expect(this.page.locator('div[class="app_logo"]')).not.toBeVisible();
    }
    else{
        await expect(this.page.locator('div[class="app_logo"]')).toBeVisible();
    }
}

}

