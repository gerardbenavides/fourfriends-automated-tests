const HomePage = require('../../pages/home/home.page')
const LoginPage = require('../../pages/auth/login.page')
const ConsumersPage = require('../../pages/consumers/consumers.page')

const user = require('../../../data/consumer-data')
const { credentials } = require('../../../environments/environment-variables')

describe('As Admin, I can login to the web admin portal', () => {
    it('Should login Netzon Admin with valid credentials', () => {
        LoginPage.open()

        LoginPage.login(credentials, 'admin')
        
    })
})

describe('As Admin, I can export the consumer list into excel file', () => {
    
    it('Should navigate to Consumers page and validate', () => {
        HomePage.btnMenuConsumers.click()

        expect(ConsumersPage.title).toHaveText("Kund")
    })

    it('Should export consumer list', () => {
        ConsumersPage.btnExport.click()
        ConsumersPage.btnExport.waitForDisplayed()  
    })
})

describe('As Admin, I can add a consumer', () => {

    it('Should add a consumer', () => {
        ConsumersPage.btnAddConsumer.click()

        expect(ConsumersPage.title).toHaveText("Lägg till Kunder")

        ConsumersPage.addConsumer(user)
    })
})
describe('As Admin, I can search and validate registered consumer details', () => {
        it('Should search a consumer', () => {
            ConsumersPage.iconSearch.click()
            ConsumersPage.inputSearch.waitForDisplayed()
            ConsumersPage.inputSearch.setValue(user.email)
        })

        it('Should validate consumer is shown on the results and  opens it', () => {
            ConsumersPage.consumerLocator(user.email).waitForDisplayed()
            ConsumersPage.consumerLocator(user.email).click()
            browser.pause(2000)
            debug
        })

        it('Should validate consumer details', () => {
            ConsumersPage.validateConsumer(user, false)
        })
})

describe('As Admin, I can edit consumer\'s details', () => {
    it('Should click edit button and validate', () => {
        ConsumersPage.iconEditConsumer.click()
        expect(ConsumersPage.title).toHaveText("Ändra Kunder")
    })

    it('Should edit consumer details', () => {
        ConsumersPage.editConsumer(user)
    })

    it('Should consumer details after being edited', () => {
        ConsumersPage.validateConsumer(user, true)
    })
})

describe('As Admin, I can export the consumer list into excel file', () => {

    it('Should export consumer profile', () => {
        ConsumersPage.btnExport.click()
        ConsumersPage.btnExport.waitForDisplayed()        
    })
})