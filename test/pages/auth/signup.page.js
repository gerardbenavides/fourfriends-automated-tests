const Page = require('../page');

class SignupPage extends Page {
    get title () { return $('//div[@class="header-container flex-center"]//span')}
    get tabCustomer () { return $('//span[contains(text(),"Kund")]') }
    get tabStoreManager () { return $('//span[contains(text(),"Butikschef återförsäljare")]') }
    
    /** STEP 1 */
    get inputEmail () { return $('//input[@placeholder="Skriv in E-postadress"]')}
    get inputPassword () { return $('//input[@placeholder="Skriv in lösenord"]')}
    get eyePassword () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[1]/app-signup[1]/div[1]/div[1]/div[2]/div[3]/div[1]/form[1]/div[2]/app-input[1]/div[1]/div[1]')}
    get inputConfirmPassword () { return $('//input[@placeholder="Skriv in lösenord igen"]')}
    get eyeConfirmPassword () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[1]/app-signup[1]/div[1]/div[1]/div[2]/div[3]/div[1]/form[1]/div[3]/app-input[1]/div[1]/div[1]')}
    get btnNext () { return $('//button[@class="label button-primary"]')}
    
    /** STEP 2 */
    get inputFirstName () { return $('//input[@placeholder="Skriv in förnamn"]')};
    get inputLastName () { return $('//input[@placeholder="Skriv in efternamn"]')};
    get petDog () { return $('//span[contains(text(),"Hund")]')};
    get petCat () { return $('//span[contains(text(),"Katt")]')};
    get petBoth () { return $('//span[contains(text(),"Både")]')};
    get btnBack () { return $('//button[@class="label button-clear"]')};

    /** STEP 3 */
    get inputPhoneNumber () { return $('//input[@placeholder="Fyll i mobilnummer"]')};
    get inputAddress () { return $('//input[@placeholder="Fyll i Adress"]')};
    get inputZipCode () { return $('//input[@placeholder="Fyll i postnr"]')};
    get inputCity () { return $('//input[@placeholder="Fyll i ort"]')};
    get labelCheckbox () { return $('//div[@class="checkbox-label"]')};
    get labelCheckboxText () { return "Jag har läst villkoren för tjänster och hantering av personuppgifter och godkänner dessa när jag anmäler mig."}
    get checkbox () { return $('//div[@class="checkbox flex-center cboxFillPrimary"]')}
    get btnCreate () { return $('//button[@class="label button-primary"]')}

    signupConsumer (email,password, fname, lname, phoneNumber, address, zipCode, city) {
        /**Step 1 */
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputConfirmPassword.setValue(password);
        this.btnNext.click(); 

        /**Step 2 */
        this.inputFirstName.setValue(fname)
        this.inputLastName.setValue(lname)
        this.petCat.click();
        this.btnNext.click(); 

        /**Step 3 */
        this.inputPhoneNumber.setValue(phoneNumber);
        this.inputAddress.setValue(address);
        this.inputZipCode.setValue(zipCode);
        this.inputCity.setValue(city);
        this.labelCheckbox.click();

        expect(this.labelCheckbox).toHaveText(this.labelCheckboxText);

        this.btnCreate.click();
    }

    open () {
        return super.open('auth/signup');
    }
}

module.exports = new SignupPage();
