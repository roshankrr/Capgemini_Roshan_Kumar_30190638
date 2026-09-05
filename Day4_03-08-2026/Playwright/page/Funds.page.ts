import { Locator, Page } from "@playwright/test";


export default class FundsPage{
    Page:Page;
    TransferType:Locator;
    AddBenificary:Locator;
    BeneficiarySel:Locator;
    BenificiaryName:Locator;
    BenificiaryAccountNumber:Locator;
    BenificiaryBank:Locator;
    SaveBenif:Locator;
    AmountInp:Locator;
    InitiateWireBTN:Locator;
    otpINP:Locator;
    OTP:Locator;
    SuccessMSG:Locator;
    VerifyBTN:Locator;
    AccountSummary:Locator;

    constructor(Page:Page){
        this.Page=Page;
        this.TransferType=Page.locator('#transfer-type');
        this.AddBenificary=Page.getByRole('button', { name: 'Add New' });
        this.BeneficiarySel=Page.locator('#bene-select');
        this.BenificiaryName=Page.getByRole('textbox', { name: 'e.g. John Doe' });
        this.BenificiaryAccountNumber=Page.getByRole('textbox', { name: /e\.g\. 1234567890/i });
        this.BenificiaryBank=Page.locator('#bene-bank');
        this.AmountInp=Page.getByRole('spinbutton', { name: '0.00' });
        this.InitiateWireBTN=Page.getByRole('button', { name: 'Initiate Wire' });
        this.otpINP=Page.getByRole('textbox', { name: 'Enter 6-digit OTP' });
        this.OTP=Page.locator('//strong[@class="otp-display-code"]');
        this.SuccessMSG=Page.locator("//div[@class='transfer-success-msg']");
        this.VerifyBTN=Page.getByRole('button', { name: /Verify/i });
        this.AccountSummary=Page.getByRole('button', { name: 'Accounts Summary' });
        this.SaveBenif=Page.getByRole('button', { name: 'Save Beneficiary' });
    }

    async trasferOption(option:string){
        await this.TransferType.selectOption(option);
    }
    async benifOption(name:string,bank:string){
        await this.BeneficiarySel.selectOption({label:`${name} (${bank})`});
    }
    async enterAmount(amount:string){
       await  this.AmountInp.fill(amount);
    }

    async selectBenifBank(bank:string){
        await this.BenificiaryBank.selectOption(bank);
    }


}