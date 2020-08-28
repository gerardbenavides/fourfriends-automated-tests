LoginPage = require('../../pages/auth/login.page');
const CouponCreatedPage = require('../../pages/coupon/coupon_created.page') 
const CouponMainPage = require('../../pages/coupon/coupon_main.page') 
const CouponPublishedPage = require('../../pages/coupon/coupon_published.page')


let couponName = ("Campaign~"+Random.string());

describe('Campaign Coupon', () => {
    
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

    it('Searches the created Campaign Coupon', () => {
        CouponMainPage.tabCampaign.click();
        CouponMainPage.iconSearch.click();
        CouponMainPage.inputSearch.setValue(couponName);
    })

    it('Clicks and previews the created Campaign coupon', () => {        
        CouponMainPage.createdCouponLocator(couponName).isDisplayed();

        CouponMainPage.createdCouponLocator(couponName).click();
        expect(CouponCreatedPage.previewCouponName).toHaveText(couponName)
    })

    it('Validates the created Campaign Coupon\'s details', () => {
        CouponCreatedPage.validateBonusCoupon(
            couponName, // Coupon name parameter
            'this is description for campaign coupon', // Coupon description parameter
            );
        })

    it('Edits the created Campaign Coupon', () => {
        CouponCreatedPage.btnEditCoupon.click();

        CouponCreatedPage.editCampaignCoupon(
            couponName + '~Edited', // Coupon name parameter
            '10', // Coupon prio number parameter
            'This is an updated coupon description', // Coupon description parameter
            '8', // Campaign reward Max Aggregate
            );
    });

    it('Publishes the created Campaign Coupon', () => {

        CouponCreatedPage.btnPublishCoupon.click();
        CouponCreatedPage.popupBtnPublish.waitForClickable();
        CouponCreatedPage.popupBtnPublish.click();

        CouponMainPage.tabBonus.waitForDisplayed();
    })

    it('Validates if Campaign is published', () => {
        
        CouponMainPage.tabPublished.click();

        CouponMainPage.createdCouponLocator(couponName).waitForDisplayed();
        expect(CouponMainPage.createdCouponLocator(couponName)).toHaveText(couponName + "~Edited");

    })

    it('Unpublishes Campaign Coupon', () => {
        CouponMainPage.createdCouponLocator(couponName).click();

        CouponPublishedPage.btnUnpublishCoupon.click();
        CouponPublishedPage.popupBtnUnpublish.click();
        
        CouponMainPage.tabBonus.waitForDisplayed();
    })

    it('Deletes the Campaign Coupon', () => {
        CouponMainPage.tabCreated.click();

        CouponMainPage.createdCouponLocator(couponName).click();

        CouponCreatedPage.btnDeleteCoupon.click();
        CouponCreatedPage.popupBtnDelete.click();

        CouponMainPage.tabBonus.waitForDisplayed();
    })

});


