import { Page, test, expect } from "@playwright/test";

import { randomData_util } from '../utils/randomData';
import { DataProvider } from '../utils/dataProviders';
import { testConfig } from '../test.config';
import { AddProduct } from '../pages/addProduct';
import { HomePage } from '../pages/HomePage';
import { ProductViaCategory } from '../pages/ProductVia_Catogory';

test("to validate the Product Search via Category ", async ({ page }) => {
    //creating object for TestConfig
    const Config = new testConfig();
    await page.goto(Config.appUrl); 

    //creating object for homePage
    const homepage = new HomePage(page);
    await homepage.clickProduct();      

    //creating object for ProductViaCategory
    const productViaCategory = new ProductViaCategory(page);
    await expect(page).toHaveURL("https://automationexercise.com/products");    

    await productViaCategory.clickOnCategory();
    await productViaCategory.clickOnSubCategory();
    await productViaCategory.selectBrand();
    await productViaCategory.openViewProduct();
    await productViaCategory.addToCart();
    await productViaCategory.viewCart();
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await productViaCategory.proceedToCheckout();
    await productViaCategory.registerLogin();
    await expect(page).toHaveURL("https://automationexercise.com/login");

    await page.waitForTimeout(3000);
    await page.close();
  
});