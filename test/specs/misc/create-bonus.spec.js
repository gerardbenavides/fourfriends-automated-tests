const LoginPage = require('../../pages/auth/login.page');
const CouponCreatedPage = require('../../pages/coupon/coupon-created.page') 
const CouponMainPage = require('../../pages/coupon/coupon-main.page') 

const { credentials } = require('../../../environments/environment-variables')
const coupon = require('../../../data/coupon-data')


describe('Bonus Coupon', () => {
    
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