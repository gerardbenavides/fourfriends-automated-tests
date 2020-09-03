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

describe('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        
    })
})

describe('As Admin, I can add a consumer', () => {

    it('Navigate to Store page and validate', () => {
        HomePage.btnMenuConsumers.click();

        expect(ConsumersPage.title).toHaveText("Kund");
    })

    it('Adds a consumer', () => {
        ConsumersPage.btnAddConsumer.click();

        expect(ConsumersPage.title).toHaveText("Lägg till Kunder");

        
        ConsumersPage.addConsumer(
            firstName,
            lastName, 
            email,
            address,
            zipCode,
            city,
            phoneNumber,
        )

    })

})
describe('As Admin, I can search and validate registered consumer details', () => {
        it('Searches a consumer', () => {
            ConsumersPage.iconSearch.click();
            ConsumersPage.inputSearch.waitForDisplayed();
            ConsumersPage.inputSearch.setValue(email);
        })

        it('Validates consumer is shown on the results', () => {
            ConsumersPage.consumerLocator(email).waitForDisplayed();
            ConsumersPage.consumerLocator(email).click();
            browser.pause(2000)
        })
})