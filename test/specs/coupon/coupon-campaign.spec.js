const LoginPage = require('../../pages/auth/login.page');
const CouponCreatedPage = require('../../pages/coupon/coupon-created.page') 
const CouponMainPage = require('../../pages/coupon/coupon-main.page') 
const CouponPublishedPage = require('../../pages/coupon/coupon-published.page')


const { credentials } = require('../../../environments/environment-variables')
const coupon = require('../../../data/coupon-data')

describe('As Admin, I can create a Campaign Coupon && As Admin, I can preview the summary Campaign Coupon to be created', () => {
    
    it('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(credentials, 'admin');  
    });

    it('Creates a Campaign Coupon', () => {
        CouponMainPage.btnCreateCoupon.waitForClickable()
        CouponMainPage.btnCreateCoupon.click()
        
        CouponCreatedPage.createCoupon(coupon, 'campaign')
    })
})

describe('As Admin, I can search the created Campaign Coupon', () => {
        it('Searches the created Campaign Coupon', () => {
        CouponMainPage.searchCoupon(coupon.name);
    })
    it('Clicks and previews the created Campaign coupon', () => {        
        expect(CouponMainPage.couponLocator(coupon.name)).toBeDisplayed();

        CouponMainPage.couponLocator(coupon.name).click();
        expect(CouponCreatedPage.previewCouponName).toHaveText(coupon.name)
    })

    it('Validates the created Campaign Coupon\'s details', () => {
        CouponCreatedPage.validateCoupon(coupon, 'campaign', false);
        })
})
describe('As Admin, I can edit the created Campaign Coupon', () => {
    it('Edits the created Campaign Coupon', () => {
        CouponCreatedPage.btnEditCoupon.click();

        CouponCreatedPage.editCoupon(coupon, 'campaign');
    });
})
describe('As Admin, I can publish the created Campaign Coupon', () => {
    it('Publishes the created Campaign Coupon', () => {

        CouponCreatedPage.btnPublishCoupon.click();
        CouponCreatedPage.popupBtnPublish.waitForClickable();
        CouponCreatedPage.popupBtnPublish.click();

        CouponMainPage.tabBonus.waitForDisplayed();
    })

    it('Validates if Campaign is published', () => {
        CouponMainPage.tabPublished.click();
        CouponMainPage.tabCampaign.click();

        CouponMainPage.couponLocator(coupon.nameEdited).waitForDisplayed();
        //expect(CouponMainPage.couponLocator(coupon.name)).toHaveText(coupon.name + "~");

    })
})
describe('As Admin, I can unpublish the created Campaign Coupon', () => {
    it('Unpublishes Campaign Coupon', () => {
        CouponMainPage.couponLocator(coupon.nameEdited).click();

        CouponPublishedPage.btnUnpublishCoupon.click();
        CouponPublishedPage.popupBtnUnpublish.click();
        
        CouponMainPage.tabBonus.waitForDisplayed();
    })
})

describe('As Admin, I can delete the created Campaign Coupon', () => {
    it('Deletes the Campaign Coupon', () => {
        CouponMainPage.tabCreated.click();

        CouponMainPage.couponLocator(coupon.nameEdited).click();

        CouponCreatedPage.btnDeleteCoupon.click();
        CouponCreatedPage.popupBtnDelete.click();

        CouponMainPage.tabBonus.waitForDisplayed();
    })

});


