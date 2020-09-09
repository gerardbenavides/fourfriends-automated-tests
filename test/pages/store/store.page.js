const Page = require('../page');

class StorePage extends Page {
    get title () { return $('//div[@class="header-container"]//div[@class="left-container flex-cross-center"]//div[@class="title"]')}
    get btnAddStore () { return $('//button[@class="label button-primary"]')}
    get tabActive () { return $('//div[@class="left-container flex-cross-center"]//div[@class="tab-container flex"]//span[contains(text(),"Aktiv")]')}
    get tabArchive () { return $('//div[@class="left-container flex-cross-center"]//div[@class="tab-container flex"]//span[contains(text(),"Arkiv")]')}
    get iconSearch () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-store-list[1]/div[1]/div[1]/app-header[1]/div[1]/div[1]/div[2]/div[1]/div[1]')}
    get inputSearch () { return $('//input[@placeholder="Sök återförsäljare"]')}
    get resultNotFound () { return $('//div[@class="placeholder-container flex-center ng-star-inserted"]//span[@class="header-6"]')}
    
    get inputStoreName () { return $('//input[@placeholder="Skriv in återförsäljare"]')}
    get inputStoreCity () { return $('//input[@placeholder="Skriv in location"]')}
    get inputStoreNumber () { return $('//input[@placeholder="Skriv in kundnummer."]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}

    /** View Store */
    get btnEditStore () { return $('//div[@class="button-container edit"]//app-button')}
    get btnArchiveStore () { return $('//div[@class="right-container flex-cross-center"]//app-button[@class="action-delete"]')}
    get popupContentBody () { return $('//app-dialog-confirm//div[@class="subtitle-container ng-star-inserted"]')}
    get popupBtnArchive () { return $('//app-dialog-confirm//button[@class="label button-primary button-warning"]')}
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
        //browser.pause(1000)
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
