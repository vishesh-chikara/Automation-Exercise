import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { SignUp } from '../pages/NewUserSignUp';
import { randomData_util } from '../utils/randomData';
import { DataProvider } from '../utils/dataProviders';
import { testConfig } from '../test.config';
import { NewAcc_Info } from '../pages/newAccountInfo';


test("to validate Signup ", async ({ page }) => {
  //creating object for TestConfig
  const Config = new testConfig();
  await page.goto(Config.appUrl);
  

  //creating object for homePage
  const homepage = new HomePage(page);
  await homepage.clickOnSignup();

  //Fill details into registration page with random data
  const newSignup = new SignUp(page);
  await newSignup.setName(randomData_util.getName());
  await newSignup.setEmail(randomData_util.getEmail());
  await newSignup.ClicksignUp();

  //Creating Object for NewAccInfo class
  const MyAc_Info = new NewAcc_Info(page);
  //await MyAc_Info.getConfirmationMsg();
  await MyAc_Info.SelectTitle();
  await MyAc_Info.setPassword(randomData_util.getPassword());
  await MyAc_Info.selectDOB('10', 'May', '1998');

 //await MyAc_Info.ValidateText_addressinfo();
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

  await page.waitForTimeout(4000);
  await page.close();


});