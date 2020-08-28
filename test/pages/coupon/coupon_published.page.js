const Page = require('../page');

class CouponPublishedPage extends Page {
    
    /** VIEW COUPON BUTTONS */
    get btnDeleteCoupon () { return $('//app-button[@class="action-delete"]//button[@class="label button-clear"]')}
    get btnUnpublishCoupon () { return $('//button//span[contains(text(),"UNPUBLISH")]')}
    get popupBtnUnpublish () { return $('//button//span[contains(text(),"Avpublicera")]')}
    get popupBtnCancel () { return $('//button//span[contains(text(),"Återställ")]')}
    
    /** PREVIEW COUPON */
    get previewCouponName () { return $('//div[@class="coupon-title"]')}
    get previewPetType () { return $('//div[@class="coupon-pet"]')}
    get previewCouponType () { return $('//div[@class="coupon-validity-type flex-main-between flex-cross-center"]')}
    get previewDescription () { return $('//div[@class="description-container"]')}
    get previewConsumerReward () { return $('//div[@class="points-container ng-star-inserted"]//div[1]//div[2]')}
    get previewBreederReward () { return $('//div[@class="field-main-container"]//div[@class="field-container"]//div[2]//div[2]')}
    get previewHunterReward () { return $('//div[@class="field-main-container"]//div[3]//div[2]')}
    get previewConsumerCondition () { return $('//div[@class="field-main-container ng-star-inserted"]//div[@class="points-container ng-star-inserted"]//div[1]//div[2]')}
    get previewBreederCondition () { return $('//div[@class="field-main-container ng-star-inserted"]//div[@class="points-container ng-star-inserted"]//div[2]//div[2]')}
    get previewHunterCondition () { return $('//div[@class="field-main-container ng-star-inserted"]//div[@class="points-container ng-star-inserted"]//div[3]//div[2]')}
    
   /** METHODS */

    open () {
        return super.open('coupon/list');
    }
}

module.exports = new CouponPublishedPage();
