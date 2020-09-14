const LoginPage = require('../../pages/auth/login.page');
const StorePage = require('../../pages/store/store.page');
const HomePage = require('../../pages/home/home.page');

let time = moment().format();
let storeName = (time  + " " + Random.string());
let storeCity = Random.city();
let storeNumber = Random.integer6();

describe('Bonus Coupon', () => {
    
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);  
    });

    it('Adds a store', () => {
        HomePage.btnMenuStore.click();
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