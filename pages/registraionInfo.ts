import { Page, expect, Locator } from "@playwright/test";

export class NewAcc_Info  {
    private readonly page: Page;

    //locators
        private readonly txtConfirmation : Locator;
        private readonly CheckTitle : Locator ;
        private readonly txtpassword : Locator ;
        private readonly DayOfDOB : Locator ;
        private readonly MonthOfDOB : Locator ;
        private readonly YearOfDOB : Locator ;
        private readonly txtAddressinfo : Locator;
        private readonly txtFirstName  : Locator ;
        private readonly txtLastName : Locator ;
        private readonly txtCompany : Locator ;
        private readonly txtAddress : Locator ;
        private readonly DropdownCountry : Locator;
        private readonly txtState : Locator;
        private readonly txtCity : Locator ;
        private readonly txtZipCode : Locator ;
        private readonly txtMobile : Locator ;
        private readonly ClickCreateAccount : Locator ;

//Creating Constructor
    constructor (page : Page)
    {
        this.page =page ;
         this.txtConfirmation = page.locator(':text-is("ENTER ACCOUNT INFORMATION")');
        this.CheckTitle = page.locator('#id_gender1');
        this.txtpassword = page.locator('#password');
        this.DayOfDOB = page.locator('#days');
        this.MonthOfDOB =  page.locator('#months');
        this.YearOfDOB = page.locator('#years');
        this.txtAddressinfo = page.locator(':text-is("ADDRESS INFORMATION")');
        this.txtFirstName = page.locator('#first_name');
        this.txtLastName = page.locator('#last_name');
        this.txtCompany = page.locator('#company');
        this.txtAddress = page.locator('#address1');
        this.DropdownCountry = page.locator('#country');
        this.txtState = page.locator('#state');
        this.txtCity = page.locator('#city');
        this.txtZipCode = page.locator('#zipcode');
        this.txtMobile = page.locator('#mobile_number');
        this.ClickCreateAccount =page.getByRole('button', { name: 'Create Account' });
    }

    //Actions
    async getConfirmationMsg(): Promise<string> {
        return await this.txtConfirmation.textContent() ?? '';
    }

      async SelectTitle(): Promise<void> {
        await this.CheckTitle.check();
    }

     async setPassword(password: string): Promise<void> {
        await this.txtpassword.fill(password);
    }

     async selectDOB(day: string, month: string, year: string): Promise<void> {
         await this.DayOfDOB.selectOption({ label: day });
        await this.MonthOfDOB.selectOption({ label: month });
        await this.YearOfDOB.selectOption({ label: year });
    }

    async ValidateText_addressinfo(): Promise<string> {
        return await this.txtAddressinfo.textContent() ?? '';
    }
 async setFirst_name(F_name: string): Promise<void> {
        await this.txtFirstName.fill(F_name);
 }
     async setLast_name(L_name: string): Promise<void> {
        await this.txtLastName.fill(L_name);
 }
         async setCompany(CompanyName: string): Promise<void> {
        await this.txtCompany.fill(CompanyName);
 }
       async setAdress(P_Address: string): Promise<void> {
        await this.txtAddress.fill(P_Address);
       }

        async selectCountry(Country: string): Promise<void> {
        await this.DropdownCountry.selectOption({label : Country});
       }

       async selectState(State: string): Promise<void> {
        await this.txtState.fill(State);
       }

       async selectCity(City: string): Promise<void> {
        await this.txtCity.fill(City);
       }

        async setPinCde(PinCode: string): Promise<void> {
        await this.txtZipCode.fill(PinCode);
       }

        async setMobileNo(Mobile_no: string): Promise<void> {
        await this.txtMobile.fill(Mobile_no);
       }

       async Click_CreateAcc(): Promise<void> {
        await this.ClickCreateAccount.click();
       }
}