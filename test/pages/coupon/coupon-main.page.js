const Page = require('../page');

class CouponMainPage extends Page {
    get title () { return $('//div[@class="header-container"]')}

    /** TABS */
    get tabCreated () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Skapad")]')}
    get tabPublished () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Publicerad")]')}
    get tabHistory () { return $('//div[@class="tab-container flex"]//span[contains(text(),"Historik")]')}
    
    get tabBonus () { return $('//span[@class="body-1"][contains(text(),"Bonus")]')}
    get tabCampaign () { return $('//span[@class="body-1"][contains(text(),"Kampanj")]')}
    
    get btnCreateCoupon () { return $('//button[@class="label button-primary"]')}
    get iconSearch () { return $('//div[@class="action-search icon-container flex-center clickable ng-star-inserted"]//div[@class="icon-svg flex-center"]')}    
    get inputSearch () { return $('//input[@placeholder="Sök kupong"]')}
    
    /** METHODS */
    
    createdCouponLocator (name) {
        return $('//app-coupon-card//span[.="' +name+ '"]');
    }

    open () {
        return super.open('coupon/list');
    }
}

module.exports = new CouponMainPage();
