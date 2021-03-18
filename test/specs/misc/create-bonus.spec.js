const LoginPage = require('../../pages/auth/login.page');
const CouponCreatedPage = require('../../pages/coupon/coupon_created.page') 
const CouponMainPage = require('../../pages/coupon/coupon-main.page') 

let couponName = (today + " " + Random.string());


describe('Bonus Coupon', () => {
    
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);  
    });

    it('Creates a Bonus Coupon', () => {
        CouponMainPage.open();
        CouponMainPage.btnCreateCoupon.click();
        
        CouponCreatedPage.createBonusCoupon(
            couponName, // Coupon name parameter
            '1', // Coupon prio number parameter
            'this is description', // Coupon description parameter
            '10', // Consumer's reward percentage
            '20', // Hunter's reward percentage
            '15', //Breeder's reward percentage
            '5', // Consumer's condition to achieve
            );
    })
})