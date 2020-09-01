const HomePage = require('../../pages//home/home.page');
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

describe('Create consumer account', () => {

    SignupPage.open()
    it('Clicks Customer and Store Manager tabs', () => {

        SignupPage.tabStoreManager.click();
        SignupPage.tabCustomer.click();
    })

    it('Step 1: Inputs required fields', () => {
        
        SignupPage.inputEmail.setValue(email);
        SignupPage.inputPassword.setValue(process.env.STAGING_ADMIN_PASS);
        SignupPage.eyePassword.click();
        SignupPage.inputConfirmPassword.setValue(process.env.STAGING_ADMIN_PASS);
        SignupPage.eyeConfirmPassword.click();
        SignupPage.btnNext.click();  
    })

    it('Step 2: Inputs required fields', () => {
        
        SignupPage.inputName(firstName, lastName);
        SignupPage.petCat.click();
        SignupPage.petBoth.click();
        SignupPage.petDog.click();
        SignupPage.btnNext.click(); 
    })

    it('Step 3: Inputs required fields', () => {
        
        SignupPage.inputPhoneNumber.setValue(phoneNumber);
        SignupPage.inputAddress.setValue(address);
        SignupPage.inputZipCode.setValue(zipCode);
        SignupPage.inputCity.setValue(city);
        SignupPage.labelCheckbox.click();

        expect(SignupPage.labelCheckbox).toHaveText(SignupPage.labelCheckboxText);

        SignupPage.btnCreate.click();
    })

    it('Logs in created consumer account', () => {

        LoginPage.login(email, process.env.STAGING_ADMIN_PASS);

        /**Validates created consumer's account profile details */
        expect(ConsumerProfilePage.profileName).toHaveText(firstName + " " + lastName);
        expect(ConsumerProfilePage.userEmail).toHaveText(email);

        HomePage.logout();
    })
})
