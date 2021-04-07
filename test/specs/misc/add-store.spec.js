const LoginPage = require('../../pages/auth/login.page');
const StorePage = require('../../pages/store/store.page');
const HomePage = require('../../pages/home/home.page');

const { credentials } = require('../../../environments/environment-variables')
const store = require('../../../data/store-data')


describe('Bonus Coupon', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(credentials, 'admin');  
    });

    it('Navigates to store page', () => {
        HomePage.btnMenuStore.click()
        StorePage.btnAddStore.click()
        expect(StorePage.title).toHaveText("Lägg till återförsäljare")
    })
    it('Adds a store', () => {
        StorePage.addStore(store)

    })
    it('LOGS STORE INFO', () => {
        console.log(store.number);
    });
})