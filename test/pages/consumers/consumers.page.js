const Page = require('../page')

class ConsumersPage extends Page {
    get title () { return $('//div[@class="header-container"]//div[@class="left-container flex-cross-center"]//div[@class="title"]')}
 
    get tabList () { return $('//div[@class="tab-container flex ng-star-inserted"]//span[contains(text(),"Lista")]')}
    get tabUpgrade () { return $('//div[@class="tab-container flex ng-star-inserted"]//span[contains(text(),"Uppgraderar")]')}
    get btnAddConsumer () { return $('//button[@class="label button-primary"]')}
    get btnExport () { return $('//div[@class="right-container flex-cross-center"]//div[@class="right-container flex-cross-center"]//button[@class="label button-clear"]')}
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
    get inputEditPhoneNumber () { return $('//input[@placeholder="Mobilnummer"]')}
    get petDog () { return $('//span[contains(text(),"Hund")]')}
    get petCat () { return $('//span[contains(text(),"Katt")]')}
    get petBoth () { return $('//span[contains(text(),"Både")]')}
    
    /** View consumer */
    get iconEditConsumer () { return $('//div[@class="card-details ng-star-inserted"]//div[@class="flex-cross-center"]//div[@class="icon-container flex-center clickable ng-star-inserted"]')}
    get previewName () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="header-6"]')}
    get previewEmail () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption"]')}
    get previewAddress () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption address-value"]')}
    get previewCity () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption city-value"]')}
    get previewZipCode () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption zip-value"]')}
    get previewPhoneNumber () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption phone-value"]')}
    get previewPetType () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption pet-value"]')}
    get previewAccountType () { return $('//div[@class="card-details ng-star-inserted"]//span[@class="caption user-value ng-star-inserted"]')}

    
    /** Account upgrade */
    get firstUpgradeRequestCard () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-consumer-list[1]/div[1]/div[2]/div[1]/div[1]/div[2]')}
    get previewCardEmail () { return $('//div[@class="card-details ng-star-inserted"]//div[@class="email-container flex-center"]//span[@class="caption font-medium"]')}
    get btnApproveUpgradeRequest () { return $('//div[@class="action-container"]//button[@class="label button-primary"]//span[contains(text(),"Godkänn")]')}
    get btnDenyUpgradeRequest () { return $('//button[@class="label button-light"]//div[@class="content-wrapper flex-center"]//span[contains(text(),"Neka")]')}
    get popupBtnConfirm () { return $('//div[@class="actions-container flex-main-end"]//button[@class="label button-primary"]')}
    get popupBtnCancel () { return $('//div[@class="action-container ng-star-inserted"]//button[@class="label button-clear"]')}
    get btnSave () { return $('//button[@class="label button-primary"]//span[contains(text(),"Spara")]')}
    
    /** METHODS */
    addConsumer (user, userType) {
        this.inputFirstName.setValue(user.firstName)
        this.inputLastName.setValue(user.lastName)
        this.inputEmail.setValue(user.email)
        this.inputAddress.setValue(user.address)
        this.inputCity.setValue(user.city) 
        this.inputZipcode.setValue(user.zipCode)
        this.inputPhoneNumber.setValue(user.phoneNumber)

        if(user.petType != undefined) {
            switch(user.petType) {
                case "Cat":
                    this.petCat.click()
                    break
                case "Dog":
                    this.petDog.click()
                    break
                case "Both":
                    this.petBoth.click()
                    break
                default:
                    this.petBoth.click()
                    console.log("Pet type is invalid. Selecting Both as default")
                    break
            }
        }
        this.btnSave.click()
    }

    validateConsumer (user, isEdited) {
        switch(isEdited) {
            case false:
                expect(this.previewName).toHaveText(user.firstName + " " + user.lastName)
                expect(this.previewEmail).toHaveText(user.email)
                expect(this.previewAddress).toHaveText(user.address)
                expect(this.previewCity).toHaveText(user.city)
                expect(this.previewZipCode).toHaveText("" + user.zipCode + "")
                expect(this.previewPhoneNumber).toHaveText(user.phoneNumber)
                expect(this.previewPetType).toHaveText("Katt")
                break
            case true:
                expect(this.previewName).toHaveText(user.firstNameEdited + " " + user.lastNameEdited)
                expect(this.previewEmail).toHaveText(user.email)
                expect(this.previewAddress).toHaveText(user.addressEdited)
                expect(this.previewCity).toHaveText(user.cityEdited)
                expect(this.previewZipCode).toHaveText("" + user.zipCodeEdited + "")
                expect(this.previewPhoneNumber).toHaveText(user.phoneNumberEdited)
                expect(this.previewPetType).toHaveText("Katt, Hund")
                break
        }
    }

    editConsumer (user) {
        //0: "Could not convert string to integer: Fowiheh~. Path 'zipCode', line 1, position 159."
        if(user.petTypeEdited != undefined) {
            switch(user.petTypeEdited) {
                case "Cat":
                    this.petCat.click()
                    break
                case "Dog":
                    this.petDog.click()
                    break
                case "Both":
                    this.petBoth.click()
                    break
                default:
                    this.petBoth.click()
                    console.log("Pet type is invalid. Selecting Both as default")
                    break
            }
        }
        this.inputFirstName.setValue(user.firstNameEdited)
        this.inputLastName.setValue(user.lastNameEdited)
        this.inputAddress.setValue(user.addressEdited)
        this.inputCity.setValue(user.cityEdited)
        this.inputZipcode.setValue(user.zipCodeEdited)
        this.inputEditPhoneNumber.setValue(user.phoneNumberEdited)
        this.btnSave.click()
        this.previewName.waitForDisplayed()
    }    
    consumerLocator (email) {
        return $('//div[@class="body-container"]//div[@class="row-container flex-cross-center"]//app-tc[@class="flex email ng-star-inserted"]//span[contains(text(),"' + email +'")]')
    }

    isGroupExpanded () {
        let createdGroup = $('//mat-expansion-panel-header[@aria-expanded="true"]')
        
        createdGroup.waitForDisplayed()
    }
    importFile() {
        let fileUpload = this.btnImport
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        )
        fileUpload.waitForDisplayed()

        let filePath = path.join(__dirname, '../../../data/xlsx/product-list.xlsx')
        fileUpload.setValue(filePath)

    }

    upgradeAccountRequestLocator (email) {
        return $('//div[@class="pending-container flex desktop ng-star-inserted"]//div[@class="card-list-container"]//div[@class="consumer flex-main-between flex-cross-center"]//span[contains(text(),"' +email + '")]')
    }
    open () {
        return super.open('product/list')
    }
}

module.exports = new ConsumersPage()
