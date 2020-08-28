const Page = require('../page');

class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    //
    
    get profileName () { return $('//div[@class="name-container flex-start-center"]')}
    get userEmail () { return $('//div[@class="email-container flex-start-center"]') }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('account/info');
    }
}

module.exports = new ProfilePage();
