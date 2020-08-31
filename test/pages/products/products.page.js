const Page = require('../page');

class ProductsPage extends Page {
    get title () { return $('//div[@class="header-container"]//div[@class="left-container flex-cross-center"]//div[@class="title"]')}


    get tabList () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Lista")]')}
    get tabGroup () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Grupper")]')}
    get btnAdd () { return $('//button[@class="label button-primary"]')}
    get btnImport () { return $('//input[@type="file"]')}
    get popupImportSuccessTitle () { return $('//app-dialog-confirm//div[@class="title-container flex-cross-center"]')}
    get popupImportBtnOK () { return $('//app-dialog-confirm//button//span[contains(text(),"OK")]')}
    get btnExport () { return $('//app-button[@class="action-export ng-star-inserted"]')}
    get iconSearch () { return $('//body/app-root/div[@class="app-main-container flex"]/div[@class="outlet-container flex-expand active-navbar"]/app-product-list[@class="ng-star-inserted"]/div[@class="main-container"]/div[@class="header-container"]/app-header/div[@class="main-container"]/div[@class="main-wrapper flex-main-between"]/div[@class="right-container flex-cross-center"]/div[@class="right-container flex-cross-center"]/div[@class="action-search icon-container flex-center clickable ng-star-inserted"]/*[1]')}
    get inputSearch () { return $('//input[@placeholder="Sök produkt"]')}
    get inputSearchGroup () { return $('//input[@placeholder="Sök produktgrupp"]')}
    get resultNotFound () { return $('//div[@class="placeholder-container flex-center ng-star-inserted"]//span[@class="header-6"]')}
    get btnBack () { return $('//div[@class="icon-container flex-center"]')}
    get popupBtnYes() { return $('//div[@class="action-container"]//button[@class="label button-primary"]')}
 
    /** Add product */

    get inputSKU () { return $('//input[@placeholder="Skriv in artnr"]')}
    get inputEAN () { return $('//input[@placeholder="Skriv in EAN"]')}
    get inputProductName () { return $('//input[@placeholder="Skriv in produktnamn"]')}
    get inputProductDesc () { return $('//textarea[@placeholder="Skriv in produktbeskrivning"]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}
    
    /** View product */

    get productSKU () { return $('//div[@class="id-container"]')}
    get productEAN () { return $('//div[@class="ean-container"]')}
    get productName () { return $('//div[@class="label-container"]//span[@class="body-1"]')}
    get productDesc () { return $('//div[@class="description-container"]')}
    
    /** Add group */
    get headerGroupProduct () { return $('//div[@class="group-name flex-expand"]//span[@class="header-6 font-medium"][contains(text(),"Lägger till grupp")]')}
    get checkboxSelectAll () { return $('//app-checkbox[@class="ng-untouched ng-valid ng-dirty"]//div[@class="checkbox flex-center cboxFillPrimary"]')}
    get inputGroupName () { return $('//input[@placeholder="Skriv in gruppnamn"]')}
    get btnDeleteGroup () { return $('//app-button[@class="action-delete"]')}
    get popupBtnDelete () { return $('//button[@class="label button-primary button-warning"]')}
    get rowFirstItem () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-product-list[1]/div[1]/div[2]/div[2]/mat-accordion[1]/mat-expansion-panel[1]/mat-expansion-panel-header[1]')}
    
    /** METHODS */
    
        
    addProduct (sku, ean, name, desc) {
        this.inputSKU.setValue(sku)
        this.inputEAN.setValue(ean)
        this.inputProductName.setValue(name)
        this.inputProductDesc.setValue(desc)
        //browser.pause(5000)
        this.btnSave.click();
    }

    validateProduct (sku, ean, name, desc) {
        expect(this.productSKU).toHaveText("Produktnr: " + sku)
        expect(this.productEAN).toHaveText("EAN: " + ean)
        expect(this.productName).toHaveText(name)
        expect(this.productDesc).toHaveText(desc)
    }

    createdProductLocator (name) {
        return $('//div[@class="row-container flex-cross-center"]//app-tc[@class="flex product-name"]//span[contains(text(),"' +name+ '")]')
    }

    createdGroupLocator (name) {
        return $('//div[@class="group-name flex-expand"]//span[contains(text(),"' +name+ '")]')
    }

    isGroupExpanded (name) {
        let createdGroup = $('//mat-expansion-panel-header[@aria-expanded="true"]')
        
        createdGroup.waitForDisplayed();
    }
    importFile() {
        let fileUpload = this.btnImport
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        );
        fileUpload.waitForDisplayed();

        let filePath = path.join(__dirname, '../../../data/xlsx/product-list.xlsx');
        fileUpload.setValue(filePath)

    }
    open () {
        return super.open('product/list');
    }
}

module.exports = new ProductsPage();
