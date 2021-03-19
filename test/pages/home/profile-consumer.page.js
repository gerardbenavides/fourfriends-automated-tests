const Page = require('../page')

class ProfilePage extends Page {
    get title () { return ('//div[@class="header-container"]//div[@class="title"]//span[@class="header-5 font-medium"]')}
    get profileName () { return $('//div[@class="name-container flex-start-center"]//span[@class="header-6"]')}
    get userEmail () { return $('//div[@class="email-container flex-start-center"]//span[@class="caption"]') }
    get userAddress () { return $('//div[@class="address-container"]//span[@class="caption address-value"]') }
    get userCity () { return $('//div[@class="city-wrapper"]//span[@class="caption city-value"]')}
    get userZipCode () { return $('//div[@class="zip-container"]//span[@class="caption zip-value"]')}
    get userPhoneNumber () { return $('//div[@class="mobile-container"]//span[@class="caption mobile-value"]')}
    get userAccountType() { return $('//div[@class="user-container"]//span[@class="caption user-value ng-star-inserted"]')}
    get iconEditProfile () { return $('//div[@class="flex-cross-center"]//div[@class="icon-container flex-center clickable"]')}
    get btnUpgrade() { return $('//div[@class="main-wrapper flex-main-between"]//button[@class="label button-primary"]')}
    
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


    /** Uprade account */

    get tabConsumer () { return $('//div[@class="segment-container flex"]//span[contains(text(),"Kund")]')};
    get tabDogBreeder () { return $('//div[@class="segment-container flex"]//span[contains(text(),"Hunduppfödarkonto")]')};
    get tabCatBreeder () { return $('//div[@class="segment-container flex"]//span[contains(text(),"Kattuppfödarkonto")]')};
    get tabHunter () { return $('//div[@class="segment-container flex"]//span[contains(text(),"Jägare")]')};
    get inputBreederName () { return $('//input[@placeholder="Skriv uppfödarnamn"]')}
    get inputRace () { return $('//input[@placeholder="Skriv in ras"]')}
    get inputQuantity () { return $('//input[@placeholder="Antal"]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}

    /** METHODS */

    validateConsumerDetails (user, isEdited) {
        switch (isEdited) {
            case false:
                expect(this.profileName).toHaveTextContaining(user.firstName)
                expect(this.userEmail).toHaveText(user.email)
                expect(this.userAddress).toHaveText(user.address)
                expect(this.userCity).toHaveText(user.city)
                expect(this.userZipCode).toHaveText("" + user.zipCode + "")
                expect(this.userPhoneNumber).toHaveText(user.phoneNumber) 
                break
            case true:
                expect(this.profileName).toHaveTextContaining(user.firstNameEdited)
                expect(this.userEmail).toHaveText(user.email)
                expect(this.userAddress).toHaveText(user.addressEdited)
                expect(this.userCity).toHaveText(user.cityEdited)
                expect(this.userZipCode).toHaveText("" + user.zipCodeEdited + "")
                expect(this.userPhoneNumber).toHaveText(user.phoneNumberEdited) 
                break
        }
        
    }

    editConsumerDetails (user) {
        this.inputFirstName.setValue(user.firstNameEdited)
        this.inputLastName.setValue(user.lastNameEdited)
        this.petBoth.click()
        this.inputPhoneNumber.setValue(user.phoneNumberEdited)
        this.inputAddress.setValue(user.addressEdited)
        this.inputZipCode.setValue(user.zipCodeEdited)
        this.inputCity.setValue(user.cityEdited)
        this.btnSave.click()

        this.btnUpgrade.waitForDisplayed()

    }

    uploadCert() {
        let fileUpload = $('//input[@type="file"]')
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        )
        fileUpload.waitForDisplayed()

        let filePath = path.join(__dirname, '../../../data/images/both.png')
        fileUpload.setValue(filePath)
    }

    upgradeToDogBreeder(user) {
        this.inputBreederName.setValue(user.firstName)
        this.inputRace.setValue(user.dogBreed)
        this.inputQuantity.setValue(user.quantity)
        this.uploadCert()
        this.btnSave.click()        

        this.userEmail.waitForExist({ timeout: 10000 })
        browser.pause(1000)
    }
    
    upgradeToCatBreeder(user) {
        this.inputBreederName.setValue(user.firstName)
        this.inputRace.setValue(user.catBreed)
        this.inputQuantity.setValue(user.quantity)
        this.uploadCert()
        this.btnSave.click()
        
        this.userEmail.waitForExist({ timeout: 10000 })
        browser.pause(1000)
    }

    upgradeToHunter(user) {
        this.inputRace.setValue(user.hunter)
        this.inputQuantity.setValue(user.quantity)
        this.uploadCert()
        this.btnSave.click()
        
        this.userEmail.waitForExist({ timeout: 10000 })
        browser.pause(1000)
    }

    open () {
        return super.open('account/info')
    }
}

module.exports = new ProfilePage()
