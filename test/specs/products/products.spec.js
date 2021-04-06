const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const ProductsPage = require('../../pages/products/products.page')

const { credentials } = require('../../../environments/environment-variables')
let product = require('../../../data/product-data')
describe('As Admin, I can login to the web admin portal', () => {
    it('Should login Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(credentials, 'admin')  
    })
})

describe('As Admin, I can add a Single product', () => {

    it('Navigate to Products page and validate', () => {
        HomePage.btnMenuProducts.click();

        expect(ProductsPage.title).toHaveText("Produkter");
        ProductsPage.tabList.click();
    })

    it('Adds a single product', () => {
        ProductsPage.btnAdd.click();
        expect(ProductsPage.title).toHaveText("Lägg till produkt");

        ProductsPage.addProduct(product)
        expect(ProductsPage.title).toHaveText("Produkter");
    })
})

describe('As Admin, I can search and validate a Single product', () => {
    it('Searches and validates created single product', () => {
        ProductsPage.iconSearch.click();
        ProductsPage.inputSearch.setValue(product.name);

        ProductsPage.createdProductLocator(product.name).click();
        ProductsPage.validateProduct(product)

        ProductsPage.btnBack.click();
        })
})

describe('As Admin, I can add a Group of products', () => {
    
    it('Adds a grouped products', () => {

        ProductsPage.tabGroup.click();
        ProductsPage.rowFirstItem.waitForDisplayed();

        ProductsPage.btnAdd.click();
        expect(ProductsPage.headerGroupProduct).toHaveText("Lägger till grupp");

        ProductsPage.checkboxSelectAll.click();
        ProductsPage.inputGroupName.setValue(product.groupName);
        ProductsPage.btnSave.click();
        browser.pause(3000);
        
        ProductsPage.createdGroupLocator(product.groupName).waitForDisplayed();

    })
    
    it('Locates and deletes created group', () => {

        ProductsPage.createdGroupLocator(product.groupName).waitForDisplayed();
        
        ProductsPage.createdGroupLocator(product.groupName).scrollIntoView();
        ProductsPage.createdGroupLocator(product.groupName).click();

        ProductsPage.isGroupExpanded();
        ProductsPage.btnDeleteGroup.waitForDisplayed(product.groupName);
        ProductsPage.btnDeleteGroup.scrollIntoView();
        ProductsPage.btnDeleteGroup.click();
        ProductsPage.popupBtnDelete.click();
        
    })

    it('Validates that group is deleted', () => {

        ProductsPage.iconSearch.click();
        ProductsPage.inputSearchGroup.setValue(product.groupName);
        ProductsPage.resultNotFound.isDisplayed();
    })
})

describe('As Admin, I can Export product list', () => {
    it('Exports product list', () => {
        ProductsPage.tabList.click();
        
        ProductsPage.btnExport.click();
        ProductsPage.popupBtnYes.click();
        browser.pause(2000)    
    })
})

describe('As Admin, I can Import excel file product list', () => {
    it('Imports product list', () => {

        ProductsPage.importFile();
        expect(ProductsPage.popupImportSuccessTitle).toHaveText("Importen lyckades");
        ProductsPage.popupImportBtnOK.click();
    })
})