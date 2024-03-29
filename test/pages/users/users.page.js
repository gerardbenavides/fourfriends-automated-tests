const Page = require('../page');

class UsersPage extends Page {
    get title () { return $('//div[@class="header-container"]//div[@class="left-container flex-cross-center"]//div[@class="title"]')}
    get btnInviteUser () { return $('//button[@class="label button-primary"]')}
    get tabPending () { return $('//div[@class="left-container flex-cross-center"]//div[@class="tab-container flex"]//span[contains(text(),"Väntar")]')}
    get tabActive () { return $('//div[@class="left-container flex-cross-center"]//div[@class="tab-container flex"]//span[contains(text(),"Aktiv")]')}
    get tabArchive () { return $('//div[@class="left-container flex-cross-center"]//div[@class="tab-container flex"]//span[contains(text(),"Arkiv")]')}
    get iconSearch () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-user-list[1]/div[1]/div[1]/app-header[1]/div[1]/div[1]/div[2]/div[1]/div[1]')}
    get inputSearch () { return $('//input[@placeholder="Sök användare"]')}
    get resultNotFound () { return $('//div[@class="placeholder-container flex-center ng-star-inserted"]//span[@class="header-6"]')}
    get firstRowItem () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-user-list[1]/div[1]/div[2]/div[1]/div[3]/app-table[1]/div[1]/div[1]/div[2]/div[1]/app-tr[1]/div[1]/div[1]/div[1]')}
    get btnBack () { return $('//div[@class="left-container flex-cross-center clickable"]')}

    /** Invite user */
    get inputFirstName () { return $('//input[@placeholder="Skriv in förnamn"]')}
    get inputLastName () { return $('//input[@placeholder="Skriv in efternamn"]')}
    get inputEmail () { return $('//input[@placeholder="Skriv in E-postadress"]')}
    get dropdownUserType () { return $('//div[@class="value flex-cross-center body-2 clickable"]')}
    get dropdownAdminSelector () { return $('//div[@class="dropdown-container body-2"]//span[contains(text(),"Admin")]')}
    get dropdownStoreManagerSelector () { return $('//div[@class="dropdown-container body-2"]//span[contains(text(),"Butikschef återförsäljare")]')}
    get dropdownCashierSelector () { return $('//div[@class="dropdown-container body-2"]//span[contains(text(),"Kassapersonal")]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}
    get inputStoreNumber () { return $('//input[@placeholder="Kundnummer"]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}

    /** Mailinator */
    get inputMailinatorEmail () { return $('//input[@id="addOverlay"]')}
    get btnGo () { return $('//button[@id="go-to-public"]')}
    get emailSubject () { return $('//a[@class="ng-binding"][contains(text(),"Du har en inbjudan till FourFriends webbportal!")]')}
    get btnActivateAccount () { return $('//a[contains(text(),"AKTIVERA KONTO")]')}
    
    /** Activate account */
    get inputPassword () { return $('//input[@placeholder="Lösenord"]')}
    get btnActivate () { return $('//button[@class="label button-primary"]//span[contains(text(),"Aktivera")]')}


    /** Preview user */
    get previewName () { return $('//div[@class="name-container"]//span[@class="header-5"]')}
    get previewEmail () { return $('//div[@class="email-container"]//span[@class="caption font-medium"]')}
    get btnArchiveUser () { return $('//div[@class="right-container flex-cross-center"]//button[@class="label button-clear"]//span[contains(text(),"Arkiv")]')}
    get popupBtnArchive () { return $('//app-dialog-confirm[@class="ng-star-inserted"]//button[@class="label button-primary button-warning"]')}
    
    /** METHODS */

    inviteAdminUser(firstName, lastName, email) {
        this.btnInviteUser.click();
        expect(this.title).toHaveText("Bjud in användare");

        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName)
        this.inputEmail.setValue(email);
        this.dropdownUserType.waitForDisplayed();
        this.dropdownUserType.click();
        this.dropdownAdminSelector.click()
        
        this.btnSave.click();
        browser.pause(1000)
    }
    inviteStoreManagerUser(firstName, lastName, email, storeNumber) {
        this.btnInviteUser.click();
        expect(this.title).toHaveText("Bjud in användare");

        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName)
        this.inputEmail.setValue(email);
        this.dropdownUserType.waitForDisplayed();
        this.dropdownUserType.click();
        this.dropdownStoreManagerSelector.click()
        this.inputStoreNumber.setValue(storeNumber);
        
        this.btnSave.click();
        browser.pause(1000)
    }

    inviteCashierUser(firstName, lastName, email) {
        this.btnInviteUser.click();
        expect(this.title).toHaveText("Bjud in användare");

        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName)
        this.inputEmail.setValue(email);
        this.dropdownUserType.waitForDisplayed();
        this.dropdownUserType.click();
        browser.pause(1000)

        this.dropdownCashierSelector.click()

        this.btnSave.click();
        browser.pause(1000)
    }
    validateInvitedUser(email) {
        this.iconSearch.click();
        this.inputSearch.setValue(email);
        
        let invitedUserLocator = $('//div[@class="pending-container desktop flex ng-star-inserted"]//span[@class="email body-2 font-medium"][contains(text(),"' +email+ '")]')
        
        invitedUserLocator.waitForExist({ timeout: 10000 });

        
    }
    navigateToMailinator() {
        browser.url('https://www.mailinator.com/')
    }

    getInvitationLink () {
        browser.switchToFrame($('#msg_body'));
        let getInvitationLink = this.btnActivateAccount.getAttribute('href');
        let invitationLink = getInvitationLink.replace('www.mailinator.com/v3', "");

        return invitationLink;
    }
    validateActivationEmail (email) {
        let textDescription = $('//span[@class="body-1"]//b[contains(text(),"' +email+ '")]')
        
        textDescription.isDisplayed();
    }
    archiveUser(email) {
        this.iconSearch.click();
        this.inputSearch.setValue(email);
        browser.pause(1000);
        this.firstRowItem.click();

        expect(this.previewEmail).toHaveText(email);
        this.btnArchiveUser.click();
        this.popupBtnArchive.waitForDisplayed();
        this.popupBtnArchive.click();   
    }
    validateUserIsArchived(email) { 
        this.tabArchive.click();
        this.iconSearch.click();
        this.inputSearch.setValue(email);
        browser.pause(1000);
        this.firstRowItem.click();

        expect(this.previewEmail).toHaveText(email);
        this.btnBack.click();
    }


    open () {
        return super.open('store/list');
    }
}

module.exports = new UsersPage();
