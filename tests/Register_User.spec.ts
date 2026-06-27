import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { SignUp } from '../pages/NewRegistration';
import { randomData_util } from '../utils/randomData';
import { DataProvider } from '../utils/dataProviders';
import { testConfig } from '../test.config';
import { NewAcc_Info } from '../pages/registraionInfo';


test("to Register a new user ", async ({ page }) => {
  //creating object for TestConfig
  const Config = new testConfig();
  await page.goto(Config.appUrl);
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
  await expect(page.locator('#slider')).toBeVisible();

  

  //creating object for homePage
  const homepage = new HomePage(page);
  await homepage.clickOnSignup();
  await expect(page).toHaveURL("https://automationexercise.com/login");
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  await expect(page.locator('input[data-qa="signup-name"]')).toBeVisible();
  await expect(page.locator('input[data-qa="signup-email"]')).toBeVisible();
  await expect(page.locator('button[data-qa="signup-button"]')).toBeVisible();
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();
  await expect(page.locator('input[data-qa="login-email"]')).toBeVisible();
  await expect(page.locator('input[data-qa="login-password"]')).toBeVisible();
  await expect(page.locator('button[data-qa="login-button"]')).toBeVisible();
  
    
  //Fill details into registration page with random data
  const newSignup = new SignUp(page);
  await expect(page.locator('input[data-qa="signup-name"]')).toBeVisible();
  await newSignup.setName(randomData_util.getName());
  await expect(page.locator('input[data-qa="signup-email"]')).toBeVisible();
  await newSignup.setEmail(randomData_util.getEmail());
  await expect(page.locator('button[data-qa="signup-button"]')).toBeVisible();
  await newSignup.ClicksignUp();
  await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

  //Creating Object for NewAccInfo class
  const MyAc_Info = new NewAcc_Info(page);
  //await MyAc_Info.getConfirmationMsg();
  await MyAc_Info.SelectTitle();
  await expect(page.locator('#id_gender1')).toBeChecked();
  await MyAc_Info.setPassword(randomData_util.getPassword());
  await MyAc_Info.selectDOB('10', 'May', '1998');
  await expect(page.locator('#days')).toHaveValue('10');
  await expect(page.locator('#months')).toHaveValue('5');
  await expect(page.locator('#years')).toHaveValue('1998');
  //await MyAc_Info.ValidateText_addressinfo();
  //await expect(page.locator(':text-is("ADDRESS INFORMATION")')).toBeVisible();


  await MyAc_Info.setFirst_name(randomData_util.getFirst_Name());
  await MyAc_Info.setLast_name(randomData_util.getLast_Name());
  await MyAc_Info.setCompany(randomData_util.get_CompanyName());
  await MyAc_Info.setAdress(randomData_util.get_Address());
  await MyAc_Info.selectCountry('India');
  await MyAc_Info.selectState(randomData_util.get_State());
  await MyAc_Info.selectCity(randomData_util.get_City());
  await MyAc_Info.setPinCde(randomData_util.get_PinCode());
  await MyAc_Info.setMobileNo(randomData_util.get_MobileNo());
  await MyAc_Info.Click_CreateAcc();
await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
await expect(page.locator('a[data-qa="continue-button"]')).toBeVisible();
await expect(page.locator('a[data-qa="continue-button"]')).toHaveText('Continue');

  await page.waitForTimeout(4000);
  await page.close();


});