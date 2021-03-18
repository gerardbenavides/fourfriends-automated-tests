const Page = require('../page');

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnMenuProducts() {return $('//div[@class="nav-items flex-expand"]//span[contains(text(),"Produkter")]')}
    get btnMenuStore() {return $('//div[@class="nav-items flex-expand"]//span[contains(text(),"Återförsäljare")]')}
    get btnMenuUsers() {return $('//div[@class="nav-items flex-expand"]//span[contains(text(),"Användare")]')}
    get btnMenuConsumers() { return $('//div[@class="nav-items flex-expand"]//span[contains(text(),"Kunder")]')}

    get btnMenuProfile () { return $('//div[@class="logout-container nav-items"]//div[1]//span')}
    get btnMenuLogout () { return $('//span[contains(text(),"Logga ut")]')}
    get btnActionOK () {return $('//div[@class="action-container"]//button[@class="label button-primary"]')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    logout () {
        this.btnMenuLogout.click(); 
        this.btnActionOK.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
