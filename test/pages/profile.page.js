const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    //
    
    get profileName () { return $('//div[@class="name-container flex-center"]')}
    get userEmail () { return $('//div[@class="email-container flex-center"]') }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('account/info');
    }
}

module.exports = new ProfilePage();
