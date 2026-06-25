import { Page, expect, Locator } from "@playwright/test";

export class AddProduct {
    private readonly page: Page;    
    //Locators
    private readonly SearchProduct: Locator;
    private readonly clickOnSearch_btn: Locator;
    private readonly Open_ViewProduct: Locator; 
    private readonly AddToCart_btn: Locator;
    private readonly ViewCart_btn: Locator;
    private readonly proceedCheckout_btn: Locator;
    private readonly RegisterLogin_btn: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.SearchProduct = page.locator("//input[@id='search_product']");
        this.clickOnSearch_btn = page.locator("//button[@id='submit_search']");
        this.Open_ViewProduct = page.locator('a').filter({ hasText: 'View Product' }).first()
        this.AddToCart_btn = page.getByRole('button', { name: 'Add to cart' });
        this.ViewCart_btn = page.getByText('View Cart')
        this.proceedCheckout_btn = page.getByText('Proceed To Checkout');
        this.RegisterLogin_btn = page.locator('u:has-text("Register / Login")')
    }

    //Actions
    async searchProduct(productName: string): Promise<void> {
        await this.SearchProduct.fill(productName);
    }  

    async clickOnSearchButton(): Promise<void> {
        await this.clickOnSearch_btn.click();
    }

    async openViewProduct(): Promise<void> {
        await this.Open_ViewProduct.click();
    }

    async addToCart(): Promise<void> {
        await this.AddToCart_btn.click();
    }

    async viewCart(): Promise<void> {
        await this.ViewCart_btn.click();
    }

    async proceedToCheckout(): Promise<void> {
        await this.proceedCheckout_btn.click();
    }

    async registerLogin(): Promise<void> {
        await this.RegisterLogin_btn.click();
    }
}