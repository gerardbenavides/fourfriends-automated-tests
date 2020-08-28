const LoginPage = require('../../pages/auth/login.page');
const CouponCreatedPage = require('../../pages/coupon/coupon_created.page') 
const CouponMainPage = require('../../pages/coupon/coupon_main.page') 
const CouponPublishedPage = require('../../pages/coupon/coupon_published.page')


let couponName = Random.string();

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
        CouponMainPage.title.waitForDisplayed();
    })

    it('Searches the created Bonus Coupon', () => {
        CouponMainPage.iconSearch.click();
        CouponMainPage.inputSearch.setValue(couponName);
    })

    it('Clicks and previews the created coupon', () => {
        //let createdCouponLocator = $('//span[@class="body-1"][contains(text(),"' +couponName+ '")]');
        
        CouponMainPage.createdCouponLocator(couponName).isDisplayed();

        CouponMainPage.createdCouponLocator(couponName).click();
        expect(CouponCreatedPage.previewCouponName).toHaveText(couponName)
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

        CouponMainPage.tabBonus.waitForDisplayed();
    })

    it('Validates if Bonus Coupon is published', () => {
        
        CouponMainPage.tabPublished.click();

        CouponMainPage.createdCouponLocator(couponName).waitForDisplayed();
        expect(CouponMainPage.createdCouponLocator(couponName)).toHaveText(couponName + "~Edited");

    })

    it('Unpublishes Bonus Coupon', () => {
        CouponMainPage.createdCouponLocator(couponName).click();

        CouponPublishedPage.btnUnpublishCoupon.click();
        CouponPublishedPage.popupBtnUnpublish.click();
        
        CouponMainPage.tabBonus.waitForDisplayed();
    })

    it('Deletes the Bonus Coupon', () => {
        CouponMainPage.tabCreated.click();

        CouponMainPage.createdCouponLocator(couponName).click();

        CouponCreatedPage.btnDeleteCoupon.click();
        CouponCreatedPage.popupBtnDelete.click();

        CouponMainPage.tabBonus.waitForDisplayed();
    })

});


