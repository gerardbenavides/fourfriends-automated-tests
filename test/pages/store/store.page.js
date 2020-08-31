const Page = require('../page');

class StorePage extends Page {
    get title () { return $('//div[@class="header-container"]//div[@class="left-container flex-cross-center"]//div[@class="title"]')}
    get btnAddStore () { return $('//button[@class="label button-primary"]')}
    get iconSearch () { return ('//div[@class="action-search icon-container flex-center clickable ng-star-inserted"]//div[@class="icon-svg flex-center"]')}
    get inputSearch () { return ('//input[@placeholder="Sök återförsäljare"]')}
    
    get inputStoreName () { return $('//input[@placeholder="Skriv in återförsäljare"]')}
    get inputStoreCity () { return $('//input[@placeholder="Skriv in location"]')}
    get inputStoreNumber () { return $('//input[@placeholder="Skriv in kundnummer."]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}


    /** View Store */
    get btnEditStore () { return $('//div[@class="button-container edit"]//app-button')}
    get previewStoreName () { return $('//div[@class="name-container"]//span')}
    get previewStoreNumber () { return $('//div[@class="contact-container"]//span')}
    get previewStoreCity () { return $('//div[@class="content-wrapper flex-main-center"]//div[@class="label-container"]//span')}
    
    /** METHODS */

    addStore(name, city, number) {
        this.inputStoreName.setValue(name);
        this.inputStoreCity.setValue(city);
        this.inputStoreNumber.setValue(number);
        this.btnSave.click();
    }

    validateStore(name, city, number) {
        expect(this.previewStoreName).toHaveText(name);
        expect(this.previewStoreCity).toHaveText(city);
        expect(this.previewStoreNumber).toHaveText("Kundnummer. " + number);
    }

    editStore(name, city) {
        this.inputStoreName.setValue(name);
        this.inputStoreCity.setValue(city);
        this.btnSave.click();
    }

    storeLocator (name) {
        return $('//div[@class="row-container flex-cross-center"]//span[contains(text(),"' +name+ '")]')
    }
    open () {
        return super.open('store/list');
    }
}

module.exports = new StorePage();
