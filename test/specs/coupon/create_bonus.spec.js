const CouponCreatedPage = require('../../pages/coupon_created.page') 

let couponName = Random.string();

describe('Create Bonus Coupon', () => {

    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);  
    });

    it('Creates a Bonus Coupon', () => {
        CouponCreatedPage.open();
        CouponCreatedPage.btnCreateCoupon.click();
        
        CouponCreatedPage.createBonusCoupon(
            couponName, // Coupon name parameter
            '1', // Coupon prio number parameter
            'this is description', // Coupon description parameter
            '10', // Consumer's reward percentage
            '20', // Hunter's reward percentage
            '15', //Breeder's reward percentage
            '5', // Consumer's condition to achieve
            );
        
        CouponCreatedPage.title.waitForDisplayed();
    })

    it('Clicks and previews the created coupon', () => {
        let createdCouponLocator = $('//span[contains(text(),"' +couponName+ '")]');

        createdCouponLocator.click();
        expect(CouponCreatedPage.summaryCouponName).toHaveText(couponName)
    })

    it('Validates the created Bonus Coupon\'s details', () => {
        CouponCreatedPage.validateBonusCoupon(
            couponName, // Coupon name parameter
            '1', // Coupon prio number parameter
            'this is description', // Coupon description parameter
            '10', // Consumer's reward percentage
            '20', // Hunter's reward percentage
            '15', //Breeder's reward percentage
            '5', // Consumer's condition to achieve
            );
        
    })

});


