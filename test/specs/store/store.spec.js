const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const StorePage = require('../../pages/store/store.page');
const Random = require('../../helpers/random')

let storeName = ("Z9" + Random.string());
let storeCity = Random.city();
let storeNumber = Random.integer6();

describe('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        
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

        StorePage.addStore(
            storeName, // Store name parameter
            storeCity, // Store city parameter
            storeNumber, // Store number parameter
        )

        StorePage.storeLocator(storeName).isDisplayed();
    })
})
 
describe('As Admin, I can search the added Store', () => { // BROKEN AND TRASH
    it('Searches for the added store', () => { 
        StorePage.iconSearch.click();
        StorePage.inputSearch.setValue(storeName);
    })
})

describe('As Admin, I can view and validate the added Store\'s details', () => {
    it('Validates added store\'s details', () => {
        StorePage.storeLocator(storeName).click();
        expect(StorePage.title).toHaveText("Återförsäljare " + storeName)
        
        StorePage.validateStore(storeName, storeCity, storeNumber)
    })
})

let storeNameEdited = (storeName + "~Edited")

describe('As Admin, I can edit a Store', () => {
    
    it('Edits store\'s name and city', () => {
        StorePage.btnEditStore.click();
        browser.pause(1000) // produces bug if there's no pause
        
        StorePage.editStore(
            storeNameEdited, // Store name parameter
            storeCity + "~Edited", // Store city parameter
        )

        StorePage.storeLocator(storeNameEdited).isDisplayed();
    })
})

describe('As Admin, I can archive a Store', () => {
    
    it('Archives created store', () => {
        StorePage.iconSearch.click();
        StorePage.inputSearch.setValue(storeNameEdited);
        StorePage.storeLocator(storeNameEdited).waitForDisplayed();
        StorePage.storeLocator(storeNameEdited).click();

        StorePage.btnArchiveStore.click();
        expect(StorePage.popupContentBody).toHaveText("Vill du arkivera denna butik " + storeNameEdited+"?")
        StorePage.popupBtnArchive.click();

    })
    it('Validates that created store is not showing in Active page', () => {
        StorePage.iconSearch.click();
        StorePage.inputSearch.setValue(storeNameEdited);
        StorePage.resultNotFound.isDisplayed();
    })

})

describe('As Admin, I can view the archived Store', () => {
    
    it('Navigates to Archive screen', () => {
        StorePage.tabArchive.click();
        StorePage.storeLocator(storeNameEdited).isDisplayed();
    })
})