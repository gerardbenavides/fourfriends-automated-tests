const LoginPage = require('../../pages/auth/login.page');
const CouponPublishedPage = require('../../pages/coupon/coupon-published.page') 
const CouponMainPage = require('../../pages/coupon/coupon-main.page') 

const { credentials } = require('../../../environments/environment-variables')

describe('Unpublishes all coupons in Published > Bonus page', () => {

    it('Should login Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(credentials, 'admin')  
    })

    it('Unpublishes all Bonus Coupons', () => {
        CouponMainPage.tabPublished.click();
        CouponMainPage.tabBonus.click();
        
        let coupon = $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-coupon-list[1]/div[1]/div[2]/app-coupon-grid[1]/div[1]/div[1]/app-coupon-card[1]')
        coupon.waitForDisplayed();
        
        let couponCount = $$('//app-coupon-card//div[@class="main-container"]').length; 

        //console.log("THE COUNT IS " + couponCount);

        for (let index = 0; index < couponCount ; index++) {

            coupon.click();
            CouponPublishedPage.btnUnpublishCoupon.waitForDisplayed();
            CouponPublishedPage.btnUnpublishCoupon.click();
            CouponPublishedPage.popupBtnUnpublish.click();
            CouponMainPage.title.waitForDisplayed();
        }
        
        
    })
})