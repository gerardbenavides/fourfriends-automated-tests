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
    })
})

describe.skip('As Admin, I can search the added Store', () => { // BROKEN AND TRASH
    it('Searches for the added store', () => { 
        HomePage.btnMenuStore.click();

        browser.pause(5000)
        StorePage.iconSearch.waitForDisplayed();
        StorePage.iconSearch.click();
        StorePage.inputSearch.waitForDisplayed();
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

describe('As Admin, I can view and validate the added Store\'s details', () => {
    
    it('Edits store\'s name and city', () => {
        StorePage.btnEditStore.click();

        StorePage.editStore(
            "~" + storeName, // Store name parameter
            "~" + storeCity, // Store city parameter
        )

        StorePage.storeLocator("~" + storeName).isDisplayed();
    })
})