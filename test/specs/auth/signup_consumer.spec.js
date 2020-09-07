const HomePage = require('../../pages//home/home.page');
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

    SignupPage.open()

    it('Clicks Customer and Store Manager tabs', () => {

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

describe('As a consumer, I can view and validate my details in Profile', () => {
    
    it('Validates consumer details in Profile', () => {
        
        ConsumerProfilePage.validateConsumerDetails(
        firstName + " " + lastName, // Name parameter
        email, // Email parameter
        address, // Address parameter
        city, // City parameter
        zipCode, // Zip code parameter
        phoneNumber // Phone number parameter
        )
    })

})

let firstNameEdited = (firstName + "~");
let lastNameEdited = (lastName + "~");
let phoneNumberEdited = (phoneNumber + "999");
let addressEdited = (address + "~");
let zipCodeEdited = (zipCode + "999");
let cityEdited = (city + "~");

describe('As a consumer, I can edit my details in Profile', () => {
    
    it('Clicks edit button', () => {
        
        ConsumerProfilePage.iconEditProfile.click();
    })

    it('Edits consumer details', () => {
        
        ConsumerProfilePage.editConsumerDetails(
            firstNameEdited,
            lastNameEdited,
            phoneNumberEdited,
            addressEdited,
            zipCodeEdited,
            cityEdited
        )
    })

    it('Validates consumer\'s updated details in Profile', () => {
        
        ConsumerProfilePage.validateConsumerDetails(
        firstNameEdited + " " + lastNameEdited, // Name parameter
        email, // Email parameter
        addressEdited, // Address parameter
        cityEdited, // City parameter
        zipCodeEdited, // Zip code parameter
        phoneNumberEdited // Phone number parameter
        )
    })

})


describe('As a consumer, I can request an Dog Breeder account upgrade', () => {
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
    
    it('Validates consumer account if successfully upgraded', () => {
        LoginPage.login(email, process.env.STAGING_ADMIN_PASS);
        
        expect(ConsumerProfilePage.userAccountType).toHaveText("Hunduppfödarkonto")
    })

})