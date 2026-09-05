import { Locator, Page } from "@playwright/test";



export default class Login{
        Page:Page
        UserName:Locator
        Password:Locator
        LoginBTN:Locator
        constructor(page:Page){
            this.Page=page;
            this.UserName=this.Page.getByRole('textbox', { name: 'Enter username' })
            this.Password=this.Page.getByPlaceholder('Enter password')
            this.LoginBTN=this.Page.getByRole('button', { name: 'LOGIN' })
        }
}