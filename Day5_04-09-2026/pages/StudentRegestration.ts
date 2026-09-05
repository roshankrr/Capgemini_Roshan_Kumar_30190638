import { Locator, Page } from "@playwright/test";


export default class{
    constructor (private page: Page){}

    Name:Locator = this.page.locator('#name');
    Email:Locator = this.page.locator('#email')
    Gender:Locator = this.page.locator('#gender');
    Mobile:Locator = this.page.locator('#mobile')
    DOB:Locator = this.page.locator('#dob');
    Subject:Locator = this.page.locator('#subjects');
    Hobbies:Locator = this.page.locator('//div[7]//div[1]//div[1]//div[1]//input[1]'); //needs additional label
    Picture:Locator = this.page.getByLabel('Picture:');
    Address:Locator = this.page.getByPlaceholder('Currend Address')
    State:Locator = this.page.locator('#state');
    City:Locator = this.page.locator('#city');
    LoginBTN:Locator = this.page.locator('input[type="submit"]');

    async openApp(url:string){
        await this.page.goto(url);
    }

    async enterDetails(name:string,email:string,gender:string,mobile:string,dob:string,subject:string,hobbies:string,picture:string,address:string,state:string,city:string){
        await this.Name.fill(name);
        await this.Email.fill(email);
        await this.Gender.click();
        await this.Mobile.fill(mobile);
        await this.DOB.fill(dob);
        await this.Subject.fill(subject);
        await this.Hobbies.click();
        await this.Picture.setInputFiles(picture);
        await this.Address.fill(address);
        await this.State.selectOption(state);
        await this.City.selectOption(city);
    }

    async clickLogin(){
        await this.LoginBTN.click();
    }

}