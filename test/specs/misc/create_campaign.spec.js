const LoginPage = require('../../pages/auth/login.page');
const CouponCreatedPage = require('../../pages/coupon/coupon_created.page') 
const CouponMainPage = require('../../pages/coupon/coupon_main.page') 

let time = moment().format();
let couponName = (Random.string() + " " + time);


describe('Bonus Coupon', () => {
    
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);  
    });

    it('Creates a Campaign Coupon', () => {
        CouponMainPage.open();
        CouponMainPage.btnCreateCoupon.click();
        
        CouponCreatedPage.createCampaignCoupon(
            couponName, // Coupon name parameter
            '1', // Coupon prio number parameter
            'this is description for campaign coupon', // Coupon description parameter
            '1', // Campaign reward Max Aggregate
            );
    })
})