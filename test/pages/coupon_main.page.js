const Page = require('./page');

class CouponMainPage extends Page {
    get title () { return $('//div[@class="header-container"]')}
    get btnCreateCoupon () { return $('//button[@class="label button-primary"]')}
    get iconSearch () { return $('//div[@class="action-search icon-container flex-center clickable ng-star-inserted"]//div[@class="icon-svg flex-center"]')}    
    get inputSearch () { return $('//input[@placeholder="Sök kupong"]')}
    
    /** METHODS */

    open () {
        return super.open('coupon/list');
    }
}

module.exports = new CouponMainPage();
