const HomePage = require('../../pages/home/home.page')
const SignupPage = require('../../pages/auth/signup.page')
const LoginPage = require('../../pages/auth/login.page')
const ConsumerProfilePage = require('../../pages/home/profile_consumer.page')
const ConsumersPage = require('../../pages/consumers/consumers.page')
const user = require('../../../data/consumer-info')
const { credentials } = require('../../../environments/environment-variables')

describe('As a consumer, I can register an account on web portal', () => {
    it('Should click Customer and Store Manager tabs', () => {
        console.log(user)
        SignupPage.open()
    })

    it('Should self-register as consumer', () => {
        SignupPage.signup(user, 'consumer')
    })
})

describe('As a consumer, I can login on web portal', () => {
    it('Should login created consumer account', () => {
        LoginPage.login(user, 'consumer')
    })
})

describe('As a consumer, I can request a Dog Breeder account upgrade', () => {

    it('Should click upgrade button', () => {
        ConsumerProfilePage.btnUpgrade.click()
        ConsumerProfilePage.tabDogBreeder.waitForDisplayed()
    })
    it('Should request a Dog Breeder account upgrade', () => {
        ConsumerProfilePage.tabDogBreeder.click()
        ConsumerProfilePage.upgradeToDogBreeder(user)
    })
    it('Should logout consumer', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
    
    it('Should accept the upgrade request as an Admin', () => {
        LoginPage.login(credentials, 'admin')
        HomePage.btnMenuConsumers.click()
        ConsumersPage.tabUpgrade.click()

        ConsumersPage.upgradeAccountRequestLocator(user.email).click()
        expect(ConsumersPage.previewCardEmail).toHaveText(user.email)
        ConsumersPage.btnApproveUpgradeRequest.click()
        ConsumersPage.popupBtnConfirm.click()
        ConsumersPage.firstUpgradeRequestCard.waitForDisplayed()
    })

    it('Should logout admin', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
    
    it('Should validate consumer account if successfully upgraded', () => {
        LoginPage.login(user, 'consumer')
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Hunduppfödarkonto")
    })

})

describe('As a consumer, I can request a Cat Breeder account upgrade', () => {

    it('Should click upgrade button', () => {
        ConsumerProfilePage.btnUpgrade.click()
        ConsumerProfilePage.tabCatBreeder.waitForDisplayed()
    })
    it('Should request a Dog Breeder account upgrade', () => {
        ConsumerProfilePage.tabCatBreeder.click()
        ConsumerProfilePage.upgradeToCatBreeder(user)
    })
    it('Should logout consumer', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
    
    it('Should accept the upgrade request as an Admin', () => {
        LoginPage.login(credentials, 'admin')
        HomePage.btnMenuConsumers.click()
        ConsumersPage.tabUpgrade.click()

        ConsumersPage.upgradeAccountRequestLocator(user.email).click()
        expect(ConsumersPage.previewCardEmail).toHaveText(user.email)
        ConsumersPage.btnApproveUpgradeRequest.click()
        ConsumersPage.popupBtnConfirm.waitForDisplayed()
        ConsumersPage.popupBtnConfirm.click()
        ConsumersPage.firstUpgradeRequestCard.waitForDisplayed()
    })

    it('Should logout admin', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
    
    it('Should validate consumer account if successfully upgraded', () => {
        LoginPage.login(user, 'consumer')
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Kattuppfödarkonto")
    })
})


describe('As a consumer, I can request a Hunter account upgrade', () => {

    it('Should click upgrade button', () => {
        ConsumerProfilePage.btnUpgrade.click()
        ConsumerProfilePage.tabHunter.waitForDisplayed()
    })
    it('Shoiuld request a Hunter account upgrade', () => {
        ConsumerProfilePage.tabHunter.click()
        ConsumerProfilePage.upgradeToHunter(user)
    })
    it('Should logout consumer', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
    it('Should accept the upgrade request as an Admin', () => {
        LoginPage.login(credentials, 'admin')
        HomePage.btnMenuConsumers.click()
        ConsumersPage.tabUpgrade.click()

        ConsumersPage.upgradeAccountRequestLocator(user.email).click()
        expect(ConsumersPage.previewCardEmail).toHaveText(user.email)
        ConsumersPage.btnApproveUpgradeRequest.click()
        ConsumersPage.popupBtnConfirm.waitForDisplayed()
        ConsumersPage.popupBtnConfirm.click()
    })
    it('Should logout admin', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
    it('Should validate consumer account if successfully upgraded', () => {
        LoginPage.login(user, 'consumer')
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Jägarkonto")
    })
    it('Should logout consumer', () => {
        HomePage.logout()
        LoginPage.inputEmail.waitForDisplayed()
    })
})