const Page = require('../page');

class ConsumersPage extends Page {
    get title () { return $('//div[@class="header-container"]//div[@class="left-container flex-cross-center"]//div[@class="title"]')}
 

    get tabList () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Lista")]')}
    get tabGroup () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Grupper")]')}
    get btnAddConsumer () { return $('//button[@class="label button-primary"]')}
    get iconSearch () { return $('//div[@class="action-search icon-container flex-center clickable ng-star-inserted"]')}
    get inputSearch () { return $('//input[@placeholder="Sök kund"]')}
    
    /** Add consumer */

    get inputFirstName () { return $('//input[@placeholder="Skriv in förnamn"]')}
    get inputLastName () { return $('//input[@placeholder="Skriv in efternamn"]')}
    get inputEmail () { return $('//input[@placeholder="Skriv in E-postadress"]')}
    get inputAddress () { return $('//input[@placeholder="Skriv adress"]')}
    get inputZipcode () { return $('//input[@placeholder="Fyll i postnr"]')}
    get inputCity () { return $('//input[@placeholder="Fyll i ort"]')}
    get inputPhoneNumber () { return $('//input[@placeholder="Fyll i mobilnummer"]')}
    get petDog () { return $('//span[contains(text(),"Hund")]')};
    get petCat () { return $('//span[contains(text(),"Katt")]')};
    get petBoth () { return $('//span[contains(text(),"Både")]')};

    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}
    

    /** METHODS */
    
        
    addConsumer (fname, lname, email, address, zip, city, phoneNumber) {
        this.inputFirstName.setValue(fname);
        this.inputLastName.setValue(lname);
        this.inputEmail.setValue(email);
        this.inputAddress.setValue(address);
        this.inputZipcode.setValue(zip);
        this.inputCity.setValue(city);
        this.inputPhoneNumber.setValue(phoneNumber);
        this.petCat.click();
        browser.pause(3000)
        this.btnSave.click();
    }

    consumerLocator (email) {
        return $('//div[@class="body-container"]//div[@class="row-container flex-cross-center"]//app-tc[@class="flex email ng-star-inserted"]//span[contains(text(),"' + email +'")]')
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

module.exports = new ConsumersPage();
