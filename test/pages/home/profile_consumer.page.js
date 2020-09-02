const Page = require('../page');

class ProfilePage extends Page {
    get title () { return ('//div[@class="header-container"]//div[@class="title"]//span[@class="header-5 font-medium"]')}
    get profileName () { return $('//div[@class="name-container flex-start-center"]//span[@class="header-6"]')}
    get userEmail () { return $('//div[@class="email-container flex-start-center"]//span[@class="caption"]') }
    get userAddress () { return $('//div[@class="address-container"]//span[@class="caption address-value"]') }
    get userCity () { return $('//div[@class="city-wrapper"]//span[@class="caption city-value"]')}
    get userZipCode () { return $('//div[@class="zip-container"]//span[@class="caption zip-value"]')}
    get userPhoneNumber () { return $('//div[@class="mobile-container"]//span[@class="caption mobile-value"]')}
    get iconEditProfile () { return $('//div[@class="flex-cross-center"]//div[@class="icon-container flex-center clickable"]')}
    
    /** Edit Profile */

    get inputFirstName () { return $('//input[@placeholder="Skriv in förnamn"]')};
    get inputLastName () { return $('//input[@placeholder="Skriv in efternamn"]')};
    get petDog () { return $('//span[contains(text(),"Hund")]')};
    get petCat () { return $('//span[contains(text(),"Katt")]')};
    get petBoth () { return $('//span[contains(text(),"Både")]')};
    get inputPhoneNumber () { return $('//input[@placeholder="Mobilnummer"]')};
    get inputAddress () { return $('//input[@placeholder="Skriv adress"]')};
    get inputZipCode () { return $('//input[@placeholder="Fyll i postnr"]')};
    get inputCity () { return $('//input[@placeholder="Fyll i ort"]')};
    get btnSave () { return $('//button[@class="label button-primary"]')}

    /** METHODS */

    validateConsumerDetails (name,email,address,city,zipCode,phoneNumber) {
        expect(this.profileName).toHaveText(name)
        expect(this.userEmail).toHaveText(email)
        expect(this.userAddress).toHaveText(address)
        expect(this.userCity).toHaveText(city)
        expect(this.userZipCode).toHaveText(zipCode)
        expect(this.userPhoneNumber).toHaveText(phoneNumber)
    }

    editConsumerDetails (fname, lname, phoneNumber, address, zipCode, city) {

        this.inputFirstName.setValue(fname)
        this.inputLastName.setValue(lname)
        this.petBoth.click();
        this.inputPhoneNumber.setValue(phoneNumber);
        this.inputAddress.setValue(address);
        this.inputZipCode.setValue(zipCode);
        this.inputCity.setValue(city);
        this.btnSave.click();

    }
    open () {
        return super.open('account/info');
    }
}

module.exports = new ProfilePage();
