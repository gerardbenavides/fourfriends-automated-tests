const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const UsersPage = require('../../pages/users/users.page');
const Random = require('../../helpers/random');
const ProfilePage = require('../../pages/home/profile.page');

let firstName = Random.firstName();
let lastName = Random.lastName();
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
            firstName,
            lastName,
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
})
