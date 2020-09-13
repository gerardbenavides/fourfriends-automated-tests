const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const UsersPage = require('../../pages/users/users.page');
const Random = require('../../helpers/random');
const ProfilePage = require('../../pages/home/profile.page');
const StorePage = require('../../pages/store/store.page')

let invitedAdminFirstName = Random.firstName();
let invitedAdminLastName = Random.lastName();
let invitedAdminEmail = Random.email();

describe('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        
    })
})

describe('As Admin, I can invite an Admin user', () => {

    it('Navigates to Users page and validate', () => {
        HomePage.btnMenuUsers.click();

        expect(UsersPage.title).toHaveText("Användare");
    })

    it('Invites an Admin user', () => {
 
        UsersPage.inviteAdminUser(
            invitedAdminFirstName,
            invitedAdminLastName,
            invitedAdminEmail,
        )

        UsersPage.tabPending.isDisplayed();
        UsersPage.validateInvitedUser(invitedAdminEmail);
    })
})

describe('As the invited Admin, I can accept the invitation', () => {

    it('Navigates to Mailinator and validate', () => {
        UsersPage.navigateToMailinator();

    })
    it('Inputs invited admin\'s email', () => {
        UsersPage.inputMailinatorEmail.setValue(invitedAdminEmail);
        UsersPage.btnGo.click();
    })
    it('Opens email content', () => {
        UsersPage.emailSubject.click();

    })

    it('Navigates to invitation link', () => {
        let invitationLink = UsersPage.getInvitationLink();
        browser.url(invitationLink);
        })

    it('Sets password and activates account', () => {
        UsersPage.validateActivationEmail(invitedAdminEmail);
        UsersPage.inputPassword.setValue(process.env.STAGING_ADMIN_PASS);
        UsersPage.btnActivate.click();
        })
    it('Validates if invited admin is successfully activated', () => {
        HomePage.btnMenuProfile.isDisplayed();
        HomePage.btnMenuProfile.click();
        expect(ProfilePage.userEmail).toHaveText(invitedAdminEmail);
        })
    it('Logs out Admin user', () => {
        HomePage.logout();
        })
})

describe.only('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        
    })
})

let storeName = ("Z9" + Random.string());
let storeCity = Random.city();
let storeNumber = Random.integer6();
let invitedSMFirstName = Random.firstName();
let invitedSMLastName = Random.lastName();
let invitedSMEmail = Random.email();

describe.only('As Admin, I can invite an Store Manager user and assign to a Store', () => {

    it('Adds a store', () => {
        HomePage.btnMenuStore.click();
        expect(StorePage.title).toHaveText("Återförsäljare");

        StorePage.btnAddStore.click();
        expect(StorePage.title).toHaveText("Lägg till återförsäljare");

        StorePage.addStore(
            storeName, // Store name parameter
            storeCity, // Store city parameter
            storeNumber, // Store number parameter
        )

        StorePage.storeLocator(storeName).isDisplayed();
    })

    it('Navigates to Users page and validate', () => {
        HomePage.btnMenuUsers.click();
        expect(UsersPage.title).toHaveText("Användare");
    })

    it('Invites a Store Manager user', () => {
 
        UsersPage.inviteStoreManagerUser(
            invitedSMFirstName,
            invitedSMLastName,
            invitedSMEmail,
            storeNumber,
        )

        UsersPage.tabPending.isDisplayed();
        UsersPage.validateInvitedUser(invitedSMEmail);
    })
})

describe.only('As the invited SM, I can accept the invitation', () => {

    it('Navigates to Mailinator and validate', () => {
        UsersPage.navigateToMailinator();

    })
    it('Inputs invited Store Manager\'s email', () => {
        UsersPage.inputMailinatorEmail.setValue(invitedSMEmail);
        UsersPage.btnGo.click();
    })
    it('Opens email content', () => {
        UsersPage.emailSubject.click();
    })

    it('Navigates to invitation link', () => {
        let invitationLink = UsersPage.getInvitationLink();
        browser.url(invitationLink);
        })

    it('Sets password and activates account', () => {
        UsersPage.validateActivationEmail(invitedSMEmail);
        UsersPage.inputPassword.setValue(process.env.STAGING_ADMIN_PASS);
        UsersPage.btnActivate.click();
        })
    it('Validates if invited Store Manager is successfully activated', () => {
        HomePage.btnMenuProfile.isDisplayed();
        HomePage.btnMenuProfile.click();
        expect(ProfilePage.userEmail).toHaveText(invitedSMEmail);
        })
})

let invitedCashierFirstName = Random.firstName();
let invitedCashierLastName = Random.lastName();
let invitedCashierEmail = Random.email();

describe.only('As the invited SM, I can invite a cashier', () => {

    it('Navigates to Users page and validate', () => {
        HomePage.btnMenuUsers.click();
        expect(UsersPage.title).toHaveText("Användare");
    })

    it('Invites a Cashier user', () => {
 
        UsersPage.inviteCashierUser(
            invitedCashierFirstName,
            invitedCashierLastName,
            invitedCashierEmail,
        )

        UsersPage.tabPending.isDisplayed();
        UsersPage.validateInvitedUser(invitedCashierEmail);
    })
})

describe.only('As the invited Cashier, I can accept the invitation', () => {

    it('Navigates to Mailinator and validate', () => {
        UsersPage.navigateToMailinator();

    })
    it('Inputs invited Cashier\'s email', () => {
        UsersPage.inputMailinatorEmail.setValue(invitedCashierEmail);
        UsersPage.btnGo.click();
    })
    it('Opens email content', () => {
        UsersPage.emailSubject.click();
    })

    it('Navigates to invitation link', () => {
        let invitationLink = UsersPage.getInvitationLink();
        browser.url(invitationLink);
        })

    it('Sets password and activates account', () => {
        UsersPage.validateActivationEmail(invitedCashierEmail);
        UsersPage.inputPassword.setValue(process.env.STAGING_ADMIN_PASS);
        UsersPage.btnActivate.click();
        })
    it('Validates if invited Cashier is successfully activated', () => {
        HomePage.btnMenuProfile.isDisplayed();
        HomePage.btnMenuProfile.click();
        expect(ProfilePage.userEmail).toHaveText(invitedCashierEmail);
        })
})