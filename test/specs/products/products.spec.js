const HomePage = require('../../pages/home/home.page');
const LoginPage = require('../../pages/auth/login.page');
const ProductsPage = require('../../pages/products/products.page');
const Random = require('../../helpers/random')

let sku = ("9" + Random.integer10());
let ean = ("9" + Random.integer10());
let productName = ("9_" + Random.string());
let productDesc = Random.paragraph();
let groupName = ("7GROUP_" + Random.string());

describe('As Admin, I can login to the web admin portal', () => {
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        
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

        ProductsPage.addProduct(
            sku, // Product SKU parameter
            ean, // Product EAN Code parameter
            productName, // Product Name parameter
            productDesc // Product Description parameter
        )
        expect(ProductsPage.title).toHaveText("Produkter");
    })
})

describe('As Admin, I can search and validate a Single product', () => {
    it('Searches and validates created single product', () => {
        ProductsPage.iconSearch.click();
        ProductsPage.inputSearch.setValue(productName);

        ProductsPage.createdProductLocator(productName).click();
        ProductsPage.validateProduct(
            sku, // Product SKU parameter
            ean, // Product EAN Code parameter
            productName, // Product Name parameter
            productDesc // Product Description parameter
        )

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
        ProductsPage.inputGroupName.setValue(groupName);
        ProductsPage.btnSave.click();
        browser.pause(3000);
        
        ProductsPage.createdGroupLocator(groupName).waitForDisplayed();

    })
    
    it('Searches and deletes created group', () => {

        ProductsPage.createdGroupLocator(groupName).waitForDisplayed();
        
        ProductsPage.createdGroupLocator(groupName).scrollIntoView();
        ProductsPage.createdGroupLocator(groupName).click();

        ProductsPage.isGroupExpanded();
        ProductsPage.btnDeleteGroup.waitForDisplayed(groupName);
        ProductsPage.btnDeleteGroup.scrollIntoView();
        ProductsPage.btnDeleteGroup.click();
        ProductsPage.popupBtnDelete.click();
        

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