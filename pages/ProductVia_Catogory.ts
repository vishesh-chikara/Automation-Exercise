import { Page, expect, Locator } from "@playwright/test";


export class ProductViaCategory {
    private readonly page: Page;
    //Locators
    private readonly clickOnCategory_btn: Locator;
    private readonly clickOnSubCategory_btn: Locator;
    private readonly select_brand: Locator;
    private readonly Open_ViewProduct: Locator; 
    private readonly AddToCart_btn: Locator;
    private readonly ViewCart_btn: Locator;
    private readonly proceedCheckout_btn: Locator;
    private readonly RegisterLogin_btn: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.clickOnCategory_btn = page.getByRole('link', { name: 'Women' });
        this.clickOnSubCategory_btn = page.getByRole('link', { name: 'Dress' });
        this.select_brand = page.getByRole('link', { name: 'Polo' });
        this.Open_ViewProduct = page.locator('a').filter({ hasText: 'View Product' }).first()
        this.AddToCart_btn = page.getByRole('button', { name: 'Add to cart' });
        this.ViewCart_btn = page.getByText('View Cart')
        this.proceedCheckout_btn = page.getByText('Proceed To Checkout');
        this.RegisterLogin_btn = page.locator('u:has-text("Register / Login")');
    }

    //Actions
    async clickOnCategory(): Promise<void> {
        await this.clickOnCategory_btn.click();
    }       

    async clickOnSubCategory(): Promise<void> {
        await this.clickOnSubCategory_btn.click();
    }

    async selectBrand(): Promise<void> {
        await this.select_brand.click();
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

};