import { test, expect } from '@playwright/test';
import data from "../utils/data.json"
import HomePage from '../page/Home.page';
import FundsPage from '../page/Funds.page';
import Login from '../page/Login.page';
import cred from "../utils/credentials.json"


test('E2E', async ({ page }) => {
  await page.goto('https://playwrightpad.in/sandbox/banking');
  const login=new Login(page);
  await login.UserName.fill(cred.username)
  await login.Password.fill(cred.password)
  await login.LoginBTN.click();
  const homePage=new HomePage(page);
  let initialAmount:string=(await homePage.CurrentBalance.innerText()).slice(1,).split('.')[0].split(',').join("");
  await homePage.Funds.click();
  const fundsPage=new FundsPage(page);
  await fundsPage.AddBenificary.click();
  await fundsPage.BenificiaryName.fill(data.BenificaryName);
  await fundsPage.BenificiaryAccountNumber.fill(data.BenificaryAccountNo);
  await fundsPage.selectBenifBank(data.BenificaryBank);
  await fundsPage.SaveBenif.click();
  await fundsPage.trasferOption('External Wire Transfer');
  await fundsPage.benifOption(data.BenificaryName,data.BenificaryBank);
  await fundsPage.enterAmount(data.Amount);
  await fundsPage.InitiateWireBTN.click();
  await fundsPage.otpINP.fill(await fundsPage.OTP.innerText())
  await fundsPage.VerifyBTN.click();
  expect(fundsPage.SuccessMSG)
  await fundsPage.AccountSummary.click();
  let finalAmount:string=(await homePage.CurrentBalance.innerText()).slice(1,).split('.')[0].split(',').join("");
  let isTransfered=0;
  if((Number(initialAmount) - Number(finalAmount))== Number(data.Amount)){
    console.log("Successfully Transfered");
    isTransfered=1;
  }
  else{
    console.log("Error while transfering");
  }
  expect(isTransfered);
  
});

