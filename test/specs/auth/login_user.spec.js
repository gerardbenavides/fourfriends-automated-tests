const HomePage = require('../../pages/home/home.page')
const LoginPage = require('../../pages/auth/login.page')
const ProfilePage = require('../../pages/home/profile.page')
const { credentials } = require('../../../environments/environment-variables')

describe('Logs in all Netzon admin users ', () => {

    it('Should validate if user is in Login page', () => {
        LoginPage.open()
        expect(LoginPage.leftPanel).toHaveText("Välkommen!")

    })

    it('Should login Netzon Admin with valid credentials', () => {
        LoginPage.login(credentials, 'admin')
        HomePage.btnMenuProfile.click()

        expect(ProfilePage.profileName).toHaveText("Netzon Administrator")
        HomePage.logout()

    })

    it('Should login Netzon SM with valid credentials', () => {
        LoginPage.login(credentials, 'manager')
        HomePage.btnMenuProfile.click()

        expect(ProfilePage.profileName).toHaveText("Netzon Store Manager")
        HomePage.logout()
    })

    it('Should login Netzon Cashier with valid credentials', () => {
        LoginPage.login(credentials, 'cashier')
        HomePage.btnMenuProfile.click()

        expect(ProfilePage.profileName).toHaveText("Netzon Cashier")
        HomePage.logout()
    })

})


