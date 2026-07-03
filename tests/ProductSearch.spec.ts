import { Page, test, expect } from "@playwright/test";

import { randomData_util } from '../utils/randomData';
import { DataProvider } from '../utils/dataProviders';
import { testConfig } from '../test.config';
import { AddProduct } from '../pages/addProduct';
import { HomePage } from '../pages/HomePage';

test("to validate Product Search ", async ({ page }) => {
    //creating object for TestConfig
    const Config = new testConfig();
    await page.goto(Config.appUrl);

    //creating object for homePage
    const homepage = new HomePage(page);
    await homepage.clickProduct();

    //creating object for AddProduct
    const addProduct = new AddProduct(page);
    await expect(page).toHaveURL("https://automationexercise.com/products");
    await addProduct.searchProduct("Tshirt");
    await addProduct.clickOnSearchButton();
    await addProduct.openViewProduct();
    await addProduct.addToCart();
    await addProduct.viewCart();
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await addProduct.proceedToCheckout();
    await addProduct.registerLogin();
    await expect(page).toHaveURL("https://automationexercise.com/login");

    await page.waitForTimeout(3000);
    await page.close();



});