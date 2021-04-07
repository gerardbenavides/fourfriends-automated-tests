const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const StorePage = require('../../pages/store/store.page');

let store = require('../../../data/store-data')
const { credentials } = require('../../../environments/environment-variables')

describe('As Admin, I can login to the web admin portal', () => {
    it('Should login Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(credentials, 'admin')  
    })
})

describe('As Admin, I can add a Store', () => {

    it('Navigate to Store page and validate', () => {
        HomePage.btnMenuStore.click();

        expect(StorePage.title).toHaveText("Återförsäljare");
    })

    it('Adds a store', () => {
        StorePage.btnAddStore.click();
        expect(StorePage.title).toHaveText("Lägg till återförsäljare");

        StorePage.addStore(store)
    })
})
 
describe('As Admin, I can search the added Store', () => { // BROKEN AND TRASH
    it('Searches for the added store', () => { 
        StorePage.storeLocator(store.name).click()
    })
})

describe('As Admin, I can view and validate the added Store\'s details', () => {
    it('Validates added store\'s details', () => {
        StorePage.validateStore(store, false)
    })
})

describe('As Admin, I can edit a Store', () => {
    
    it('Edits store\'s name and city', () => {
        StorePage.btnEditStore.click();
        browser.pause(1000) // produces bug if there's no pause
        
        StorePage.editStore(store)
    })
    it('Validates edited store\'s details', () => {
        StorePage.searchStore(store.nameEdited)
        StorePage.storeLocator(store.nameEdited).click()
        StorePage.validateStore(store, true)
    })
})

describe('As Admin, I can archive a Store', () => {
    
    it('Archives created store', () => {
        StorePage.btnArchiveStore.click();
        expect(StorePage.popupContentBody).toHaveText("Vill du arkivera denna butik " + store.nameEdited+"?")
        StorePage.popupBtnArchive.click();

    })
    it('Validates that created store is not showing in Active page', () => {
        StorePage.iconSearch.click();
        StorePage.inputSearch.setValue(store.nameEdited);
        StorePage.resultNotFound.isDisplayed();
    })

})

describe('As Admin, I can view the archived Store', () => {
    
    it('Navigates to Archive screen', () => {
        StorePage.tabArchive.click();
        StorePage.storeLocator(store.nameEdited).isDisplayed();
    })
})