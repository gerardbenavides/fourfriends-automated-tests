const CouponCreatedPage = require('../../pages/coupon_created.page') 
const CouponMainPage = require('../../pages/coupon_main.page') 

let couponName = Random.string();

describe('Create Bonus Coupon', () => {

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
        CouponMainPage.title.waitForDisplayed();
    })

    it('Searches the created Bonus Coupon', () => {
        CouponMainPage.iconSearch.click();
        CouponMainPage.inputSearch.setValue(couponName);
    })

    it('Clicks and previews the created coupon', () => {
        let createdCouponLocator = $('//span[@class="body-1"][contains(text(),"' +couponName+ '")]');
        //let createdCouponLocator = $('//span[@class="body-1"][contains(text(),"C917G4I8Z4FC311")]');
        
        createdCouponLocator.waitForDisplayed();
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

    it('Edits the created Bonus Coupon', () => {
        CouponCreatedPage.btnEditCoupon.click();

        CouponCreatedPage.editBonusCoupon(
            couponName + '~Edited', // Coupon name parameter
            '10', // Coupon prio number parameter
            'This is an updated coupon description', // Coupon description parameter
            '15', // Consumer's reward percentage
            '25', // Hunter's reward percentage
            '20', //Breeder's reward percentage
            '10', // Consumer's condition to achieve
            );
    });
    it('Publishes the created Bonus Coupon', () => {

        CouponCreatedPage.btnPublishCoupon.click();
        CouponCreatedPage.popupBtnPublish.waitForClickable();
        CouponCreatedPage.popupBtnPublish.click();

        CouponCreatedPage.tabBonus.waitForDisplayed();
    })
});


