const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const ConsumersPage = require('../../pages/consumers/consumers.page');
const Random = require('../../helpers/random')

let firstName = Random.firstName();
let lastName = Random.lastName();
let email = Random.email();
let address = Random.address();
let zipCode = Random.zipCode();
let city = Random.city();
let phoneNumber = Random.phoneNumber();
let petType = "Cat"; // Pet type parameter, only accepts "Cat", "Dog", "Both"

describe('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        
    })
})

describe('As Admin, I can export the consumer list into excel file', () => {
    
    it('Navigate to Consumers page and validate', () => {
        HomePage.btnMenuConsumers.click();

        expect(ConsumersPage.title).toHaveText("Kund");
    })

    it('Exports consumer list', () => {
        ConsumersPage.btnExport.click();
        browser.pause(3000);        
    })
})

describe('As Admin, I can add a consumer', () => {

    it('Adds a consumer', () => {
        ConsumersPage.btnAddConsumer.click();

        expect(ConsumersPage.title).toHaveText("Lägg till Kunder");

        ConsumersPage.addConsumer(
            firstName, // First name parameter
            lastName, // Last name parameter
            email, // Email parameter
            address, // Address parameter
            city, // City parameter
            zipCode, // Zip code parameter
            phoneNumber, // Phone number parameter
            petType, // Pet type parameter, only accepts "Cat", "Dog", "Both"
        )

    })

})
describe('As Admin, I can search and validate registered consumer details', () => {
        it('Searches a consumer', () => {
            ConsumersPage.iconSearch.click();
            ConsumersPage.inputSearch.waitForDisplayed();
            ConsumersPage.inputSearch.setValue(email);
        })

        it('Validates consumer is shown on the results and  opens it', () => {
            ConsumersPage.consumerLocator(email).waitForDisplayed();
            ConsumersPage.consumerLocator(email).click();
            browser.pause(2000)
        })

        it('Validates consumer details', () => {
            
            ConsumersPage.validateConsumer(
                firstName, // First name parameter
                lastName, // Last name parameter
                email, // Email parameter
                address, // Address parameter
                city, // City parameter
                zipCode, // Zip Code parameter
                phoneNumber, // Phone number parameter
                petType, // Pet type parameter, only accepts "Cat", "Dog", "Both"
            )
        })
})

let firstNameEdited = (firstName + "~");
let lastNameEdited = (lastName + "~");
let addressEdited = (address + "~");
let zipCodeEdited = (zipCode + 999);
let cityEdited = (city + "~");
let phoneNumberEdited = (phoneNumber + 999);
let petTypeEdited = "Dog"; // Pet type parameter, only accepts "Cat", "Dog", "Both"

describe('As Admin, I can edit consumer\'s details', () => {
    it('Clicks edit button and validate', () => {
        ConsumersPage.iconEditConsumer.click();
        expect(ConsumersPage.title).toHaveText("Ändra Kunder");
    })

    it('Edits consumer details', () => {
        ConsumersPage.editConsumer(
            firstNameEdited, // First name parameter
            lastNameEdited, // Last name parameter
            addressEdited, // Address parameter
            cityEdited, // City parameter
            zipCodeEdited, // Zip code parameter
            phoneNumberEdited, // Phone number parameter
            petTypeEdited, // Pet type parameter, only accepts "Cat", "Dog", "Both"
        )
    })

    it('Validates consumer details after being edited', () => {
        ConsumersPage.validateConsumer(
            firstNameEdited, // First name parameter
            lastNameEdited, // Last name parameter
            email, // Email parameter
            addressEdited, // Address parameter
            cityEdited, // City parameter
            zipCodeEdited, // Zip code parameter
            phoneNumberEdited, // Phone number parameter
            petTypeEdited, // Pet type parameter, only accepts "Cat", "Dog", "Both"
        )
    })
})

describe('As Admin, I can export the consumer list into excel file', () => {

    it('Exports consumer profile', () => {
        ConsumersPage.btnExport.click();
        browser.pause(3000);        
    })
})