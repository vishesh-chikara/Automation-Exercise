import { Page, Locator, expect } from '@playwright/test'

export class HomePage {
    private readonly page: Page;

    //Locators
    private readonly SignUp_Login: Locator;
    private readonly clickOnProduct: Locator;


    //constructor
    constructor(page: Page) {
        this.page = page;
        this.SignUp_Login = page.locator("a[href='/login']");
        this.clickOnProduct = page.locator("a[href='/products']");
    }

    //Action Method
    //Check homePage Exist or not ?
    async isHomepageExist() {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    //Click on SignUp
    async clickOnSignup() {
        try {
            await this.SignUp_Login.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }

    //Click on Product 
    async clickProduct() {
        try {
            await this.clickOnProduct.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }
}