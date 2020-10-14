const SignupPage = require('../../pages/auth/signup.page');
const LoginPage = require('../../pages/auth/login.page');
const ConsumerProfilePage = require('../../pages/home/profile_consumer.page');

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
    console.log(email);
})