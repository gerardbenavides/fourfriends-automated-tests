const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const ConsumersPage = require('../../pages/consumers/consumers.page');
const consumerInfo = require('../../../data/consumer-info')
const { credentials } = require('../../../environments/environment-variables')

let user = Object.assign({}, consumerInfo)
describe('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        console.log(user)
        LoginPage.open();

        LoginPage.login(credentials, 'admin');
        
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
        console.log("Waiting to export.....")     
    })
})

describe('As Admin, I can add a consumer', () => {

    it('Adds a consumer', () => {
        ConsumersPage.btnAddConsumer.click();

        expect(ConsumersPage.title).toHaveText("Lägg till Kunder");

        ConsumersPage.addConsumer(user)
    })
})
describe('As Admin, I can search and validate registered consumer details', () => {
        it('Searches a consumer', () => {
            ConsumersPage.iconSearch.click();
            ConsumersPage.inputSearch.waitForDisplayed();
            ConsumersPage.inputSearch.setValue(user.email);
        })

        it('Validates consumer is shown on the results and  opens it', () => {
            ConsumersPage.consumerLocator(user.email).waitForDisplayed();
            ConsumersPage.consumerLocator(user.email).click();
            browser.pause(2000)
        })

        it('Validates consumer details', () => {
            ConsumersPage.validateConsumer(user, false)
        })
})

describe('As Admin, I can edit consumer\'s details', () => {
    it('Clicks edit button and validate', () => {
        ConsumersPage.iconEditConsumer.click();
        expect(ConsumersPage.title).toHaveText("Ändra Kunder");
    })

    it('Edits consumer details', () => {
        ConsumersPage.editConsumer(user)
    })

    it('Validates consumer details after being edited', () => {
        ConsumersPage.validateConsumer(user, true)
    })
})

describe('As Admin, I can export the consumer list into excel file', () => {

    it('Exports consumer profile', () => {
        ConsumersPage.btnExport.click();
        browser.pause(3000);  
        console.log("Waiting to export.....")         
    })
})