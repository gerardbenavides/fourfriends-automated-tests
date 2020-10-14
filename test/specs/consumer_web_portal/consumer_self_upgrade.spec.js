const HomePage = require('../../pages/home/home.page');
const SignupPage = require('../../pages/auth/signup.page');
const LoginPage = require('../../pages/auth/login.page');
const ConsumerProfilePage = require('../../pages/home/profile_consumer.page');
const ConsumersPage = require('../../pages/consumers/consumers.page');

let email = Random.email();
let firstName = Random.firstName();
let lastName = Random.lastName();
let phoneNumber = Random.phoneNumber();
let address = Random.address();
let zipCode = Random.zipCode();
let city = Random.city();

describe('As a consumer, I can register an account on web portal', () => {

    it('Clicks Customer and Store Manager tabs', () => {
        SignupPage.open()
        SignupPage.tabStoreManager.click();
        SignupPage.tabCustomer.click(); 
    })

    it('Self-register as consumer', () => {
        
        SignupPage.signupConsumer (
        email, // Email parameter
        process.env.STAGING_ADMIN_PASS, // Password and Confirm Password parameter
        firstName, // First name parameter
        lastName, // Last name parameter
        phoneNumber, // Phone number parameter
        address, // Address parameter
        zipCode, // Zip code parameter
        city // City parameter
        )
    })

})

describe('As a consumer, I can login on web portal', () => {
    
    it('Logs in created consumer account', () => {
        LoginPage.login(email, process.env.STAGING_ADMIN_PASS);
    })
})

describe('As a consumer, I can request a Dog Breeder account upgrade', () => {
    let dogBreederName = Random.firstName();
    let dogBreed = Random.string();
    let quantity = 5;

    it('Clicks upgrade button', () => {
        ConsumerProfilePage.btnUpgrade.click();
        ConsumerProfilePage.tabDogBreeder.waitForDisplayed();
    })
    it('Requests a Dog Breeder account upgrade', () => {
        ConsumerProfilePage.tabDogBreeder.click();
        ConsumerProfilePage.upgradeToDogBreeder(
            dogBreederName, // Dog breeder parameter
            dogBreed, // Breed parameter
            quantity // Quantity parameter
        )
    })
    it('Logs out consumer', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })
    
    it('Accepts the upgrade request as an Admin', () => {
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        HomePage.btnMenuConsumers.click();
        ConsumersPage.tabUpgrade.click();

        ConsumersPage.upgradeAccountRequestLocator(email).click();
        expect(ConsumersPage.previewCardEmail).toHaveText(email);
        ConsumersPage.btnApproveUpgradeRequest.click();
        ConsumersPage.popupBtnConfirm.click();
        ConsumersPage.firstUpgradeRequestCard.waitForDisplayed();
        browser.pause(3000);
    })

    it('Logs out admin', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })
    
    it('Consumer validates account if successfully upgraded', () => {
        LoginPage.login(email, process.env.STAGING_ADMIN_PASS);
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Hunduppfödarkonto")
    })

})

describe('As a consumer, I can request a Cat Breeder account upgrade', () => {
    let catBreederName = Random.firstName();
    let catBreed = Random.string();
    let quantity = 5;

    it('Clicks upgrade button', () => {
        ConsumerProfilePage.btnUpgrade.click();
        ConsumerProfilePage.tabCatBreeder.waitForDisplayed();
    })
    it('Requests a Dog Breeder account upgrade', () => {
        ConsumerProfilePage.tabCatBreeder.click();
        ConsumerProfilePage.upgradeToCatBreeder(
            catBreederName, // Cat breeder parameter
            catBreed, // Breed parameter
            quantity // Quantity parameter
        )
    })
    it('Logs out consumer', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })
    
    it('Accepts the upgrade request as an Admin', () => {
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        HomePage.btnMenuConsumers.click();
        ConsumersPage.tabUpgrade.click();

        ConsumersPage.upgradeAccountRequestLocator(email).click();
        expect(ConsumersPage.previewCardEmail).toHaveText(email);
        ConsumersPage.btnApproveUpgradeRequest.click();
        ConsumersPage.popupBtnConfirm.waitForDisplayed();
        ConsumersPage.popupBtnConfirm.click();
        ConsumersPage.firstUpgradeRequestCard.waitForDisplayed();
        browser.pause(3000);
    })

    it('Logs out admin', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })
    
    it('Consumer validates account if successfully upgraded', () => {
        LoginPage.login(email, process.env.STAGING_ADMIN_PASS);
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Kattuppfödarkonto")
    })
})


describe('As a consumer, I can request a Hunter account upgrade', () => {
    let breed = Random.string();
    let quantity = 5;

    it('Clicks upgrade button', () => {
        ConsumerProfilePage.btnUpgrade.click();
        ConsumerProfilePage.tabHunter.waitForDisplayed();
    })
    it('Requests a Hunter account upgrade', () => {
        ConsumerProfilePage.tabHunter.click();
        ConsumerProfilePage.upgradeToHunter(
            breed, // Breed parameter
            quantity // Quantity parameter
        )
    })
    it('Logs out consumer', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })
    it('Accepts the upgrade request as an Admin', () => {
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        HomePage.btnMenuConsumers.click();
        ConsumersPage.tabUpgrade.click();

        ConsumersPage.upgradeAccountRequestLocator(email).click();
        expect(ConsumersPage.previewCardEmail).toHaveText(email);
        ConsumersPage.btnApproveUpgradeRequest.click();
        ConsumersPage.popupBtnConfirm.waitForDisplayed();
        ConsumersPage.popupBtnConfirm.click();
        ConsumersPage.firstUpgradeRequestCard.waitForDisplayed();
        browser.pause(3000);
    })
    it('Logs out admin', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })
    it('Consumer validates account if successfully upgraded', () => {
        LoginPage.login(email, process.env.STAGING_ADMIN_PASS);
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Jägarkonto")
    })
    it('Logs out consumer', () => {
        HomePage.logout();
        LoginPage.inputEmail.waitForDisplayed();
    })

})