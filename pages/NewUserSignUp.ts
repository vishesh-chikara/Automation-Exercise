import { Page, expect, Locator } from "@playwright/test";

export class SignUp {
    private readonly page: Page;

    //Locators 
    private readonly txtName: Locator;
    private readonly txtEmail: Locator;
    private readonly btnSignUp: Locator;
   

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.txtName = page.locator("//input[@placeholder='Name']")
        this.txtEmail = page.locator("//input[@data-qa='signup-email']")
        this.btnSignUp = page.locator('button:has-text("Signup")')
        
    }

    //Actions
    async setName(name: string): Promise<void> {
        await this.txtName.fill(name);
    }

    async setEmail(Email: string): Promise<void> {
        await this.txtEmail.fill(Email);
    }

    async ClicksignUp(): Promise<void> {
        await this.btnSignUp.click();
    }

   

}