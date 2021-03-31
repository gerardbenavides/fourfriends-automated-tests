const LoginPage = require('../../pages/auth/login.page')
const CouponCreatedPage = require('../../pages/coupon/coupon-created.page') 
const CouponMainPage = require('../../pages/coupon/coupon-main.page') 
const CouponPublishedPage = require('../../pages/coupon/coupon-published.page')

const { credentials } = require('../../../environments/environment-variables')
const coupon = require('../../../data/coupon-data')

describe('As Admin, I can create a Bonus Coupon && As Admin, I can preview the summary Bonus Coupon to be created', () => {
    
    it('Should login Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(credentials, 'admin')  
    })

    it('Should create a Bonus Coupon', () => {
        CouponMainPage.btnCreateCoupon.waitForClickable()
        CouponMainPage.btnCreateCoupon.click()
        
        CouponCreatedPage.createCoupon(coupon, 'bonus')
    })
})

describe('As Admin, I can search the created Bonus Coupon', () => {
    it('Should search the created Bonus Coupon', () => {
        CouponMainPage.iconSearch.click()
        CouponMainPage.inputSearch.setValue(coupon.name)
    })

    it('Should click and previews the created coupon', () => {
        CouponMainPage.couponLocator(coupon.name).waitForDisplayed()
        CouponMainPage.couponLocator(coupon.name).click()
        expect(CouponCreatedPage.previewCouponName).toHaveText(coupon.name)
    })

    it('Should validate the created Bonus Coupon\'s details', () => {
        CouponCreatedPage.validateCoupon(coupon, 'bonus', false)
        })
})
describe('As Admin, I can edit the created Bonus Coupon', () => {
    it('Should edit the created Bonus Coupon', () => {
        CouponCreatedPage.btnEditCoupon.click()
        CouponCreatedPage.editCoupon(coupon, 'bonus')
    })
    it('Should validate the created Bonus Coupon\'s details', () => {
        CouponCreatedPage.validateCoupon(coupon, 'bonus', true)
        })
    })

describe('As Admin, I can publish the created Bonus Coupon', () => {
    it('Should publish the created Bonus Coupon', () => {

        CouponCreatedPage.btnPublishCoupon.click()
        CouponCreatedPage.popupBtnPublish.waitForClickable()
        CouponCreatedPage.popupBtnPublish.click()

        CouponMainPage.tabBonus.waitForDisplayed()
    })

    it('Should validate if Bonus Coupon is published', () => {
        
        CouponMainPage.tabPublished.click()

        CouponMainPage.couponLocator(coupon.nameEdited).waitForDisplayed()
        expect(CouponMainPage.couponLocator(coupon.nameEdited)).toHaveText(coupon.nameEdited)
    })
})

describe('As Admin, I can unpublish the created Bonus Coupon', () => {
    it('Should unpublish Bonus Coupon', () => {
        CouponMainPage.couponLocator(coupon.nameEdited).click()

        CouponPublishedPage.btnUnpublishCoupon.click()
        CouponPublishedPage.popupBtnUnpublish.click()
        
        CouponMainPage.tabBonus.waitForDisplayed()
    })
})
describe('As Admin, I can unpublish the created Bonus Coupon', () => {
    it('Should delete the Bonus Coupon', () => {
        CouponMainPage.tabCreated.click()

        CouponMainPage.couponLocator(coupon.nameEdited).click()

        CouponCreatedPage.btnDeleteCoupon.click()
        CouponCreatedPage.popupBtnDelete.click()

        CouponMainPage.tabBonus.waitForDisplayed()
    })
})


