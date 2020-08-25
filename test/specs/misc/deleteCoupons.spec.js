describe('Create Bonus Coupon', () => {

    it.only('Logs in Netzon Admin with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);  
    });

    it.only('Delete Created Bonus Coupons', () => {
        
        for (let index = 0; index < 20; index++) {
            let card = $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-coupon-list[1]/div[1]/div[2]/app-coupon-grid[1]/div[1]/div[1]')

            card.click();
            CouponCreatedPage.btnDeleteCoupon.waitForDisplayed();
            CouponCreatedPage.btnDeleteCoupon.click();
            CouponCreatedPage.popupDelete.click();
            CouponCreatedPage.title.waitForDisplayed();
        }
        
        
    })
})