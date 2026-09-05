import { chromium } from "@playwright/test";
import creds from "./utils/credentials.json"
async function globalSetup(){

    console.log('Global Setup started');

    let browser = await chromium.launch();

    let page = await browser.newPage();

    await page.goto('https://playwrightpad.in/sandbox/banking');

    await page.getByRole('textbox', { name: 'Enter username' }).fill(creds.username);

    await page.getByPlaceholder('Enter password').fill(creds.password);

    await page.getByRole('button', { name: 'LOGIN' }).click();

    await page.waitForLoadState('networkidle');


    // save authentication

    await page.context().storageState({

        path:
        'auth.json'

});

console.log(await page.context().cookies());
console.log(await page.evaluate(()=>{
    return {
        localStorage:{...localStorage},sessionStorage:{...sessionStorage}
    }
}));

console.log('Global Setup Completed');

}

export default globalSetup;

