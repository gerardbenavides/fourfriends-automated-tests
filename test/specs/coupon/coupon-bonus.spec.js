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
        CouponMainPage.open()
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
        CouponMainPage.createdCouponLocator(coupon.name).waitForDisplayed()
        CouponMainPage.createdCouponLocator(coupon.name).click()
        expect(CouponCreatedPage.previewCouponName).toHaveText(coupon.name)
    })

    it('Should validate the created Bonus Coupon\'s details', () => {
        CouponCreatedPage.validateBonusCoupon(coupon, 'bonus', false)
        })
})
describe('As Admin, I can edit the created Bonus Coupon', () => {
    it('Should edit the created Bonus Coupon', () => {
        CouponCreatedPage.btnEditCoupon.click()
        CouponCreatedPage.editBonusCoupon(coupon, 'bonus')
    })
    it('Should validate the created Bonus Coupon\'s details', () => {
        CouponCreatedPage.validateBonusCoupon(coupon, 'bonus', true)
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

        CouponMainPage.createdCouponLocator(coupon.nameEdited).waitForDisplayed()
        expect(CouponMainPage.createdCouponLocator(coupon.nameEdited)).toHaveText(coupon.nameEdited)
    })
})

describe('As Admin, I can unpublish the created Bonus Coupon', () => {
    it('Should unpublish Bonus Coupon', () => {
        CouponMainPage.createdCouponLocator(coupon.nameEdited).click()

        CouponPublishedPage.btnUnpublishCoupon.click()
        CouponPublishedPage.popupBtnUnpublish.click()
        
        CouponMainPage.tabBonus.waitForDisplayed()
    })
})
describe('As Admin, I can unpublish the created Bonus Coupon', () => {
    it('Should delete the Bonus Coupon', () => {
        CouponMainPage.tabCreated.click()

        CouponMainPage.createdCouponLocator(coupon.nameEdited).click()

        CouponCreatedPage.btnDeleteCoupon.click()
        CouponCreatedPage.popupBtnDelete.click()

        CouponMainPage.tabBonus.waitForDisplayed()
    })
})


