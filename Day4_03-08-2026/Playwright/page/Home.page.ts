import { Locator, Page } from "@playwright/test";


export default class HomePage{

    Funds:Locator;
    page:Page;
    CurrentBalance:Locator;
    constructor( private Page:Page){
        this.page=Page;
        this.Funds=this.page.getByRole('button', { name: 'Funds Transfer' });
        this.CurrentBalance=this.page.locator("div[data-account='checking'] div[class='balance']");
    }
    
}