const Page = require('../page');

class CouponCreatedPage extends Page {
    
    /** VIEW COUPON BUTTONS */
    get btnDeleteCoupon () { return $('//app-button[@class="action-delete"]//button[@class="label button-clear"]')}
    get popupBtnDelete () { return $('//button[@class="label button-primary button-warning"]')}
    get popupBtnCancel () { return $('//div[@class="action-container ng-star-inserted"]//button[@class="label button-clear"]')}
    get btnEditCoupon () { return $('//div[@class="button-container edit"]//button[@class="label button-clear"]')}
    get btnPublishCoupon () { return $('//div[@class="button-container publish-container"]//button[@class="label button-primary"]')}
    get popupBtnPublish () { return $('//div[@class="action-container"]//button[@class="label button-primary"]')}
    get checkboxNotification () { return $('//div[@class="checkbox flex-center cboxFillPrimary"]')}

    // CREATE COUPON //
    /** STEP 1 */
    get inputName () { return $('//input[@placeholder="Skriv in kupongnamn"]')}
    get calendar () { return $('//div[@class="date-container flex-cross-center clickable"]')}
    get inputPrioNumber () { return $('//input[@placeholder="Prio nummer"]')}
    get typeBonus () { return $('//div[@class="field-main-wrapper flex-expand"]//div[1]//div[2]//div[1]//app-segment[1]//div[1]//div[1]')}
    get typeCampaign () { return $('//div[@class="field-main-wrapper flex-expand"]//div[1]//div[2]//div[1]//app-segment[1]//div[1]//div[2]')}
    get petDog () { return $('//span[contains(text(),"Hund")]')};
    get petCat () { return $('//span[contains(text(),"Katt")]')};
    get petBoth () { return $('//span[contains(text(),"Både")]')};
    get inputDescription () { return $('//textarea[@placeholder="Skriv in kupongbeskrivning"]')}
    get inputImage () { return $('//input[@type="file"]')}
    get btnProceed () { return $('//button[@class="label button-primary"]')}

    /** STEP 2 */
    get inputConsumerReward () { return $('//input[@formcontrolname="consumerReward"]')};
    get inputHunterReward () { return $('//input[@formcontrolname="hunter"]')};
    get inputBreederReward () { return $('//input[@formcontrolname="breeder"]')};
    get singleProduct () { return $('/html[1]/body[1]/app-root[1]/div[1]/div[2]/app-coupon-create[1]/div[1]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]')}
    get groupProduct () { return $('//span[contains(text(),"Grupp")]')}
    get dropdownProduct () { return $('//div[@class="main-wrapper flex-cross-center"]')}
    get addFirstDropdownItem () {return $('//div[@class="dropdown-container"]//div[1]//div[3]//button[1]')}
    get btnBack() { return $('//app-button[@class="action-back"]//button[@class="label button-clear"]')}

    
    /** STEP 3 */
    get inputConsumerCondition () { return $('//input[@placeholder="Skriv in max poäng"]')}
    
    /** SUMMARY */
    get summaryTitle () { return $('//span[contains(text(),"Förhandsvisa kupong")]')}
    get summaryCouponName () { return $('//div[@class="coupon-title"]')}
    get summaryDescription () { return $('//div[@class="description-container"]')}
    get summaryPetType () { return $('//div[@class="coupon-pet"]')}
    get summaryCouponType () { return $('//div[@class="coupon-validity-type flex-main-between flex-cross-center"]')}
    get summaryConsumerReward () { return $('//div[@class="points-container ng-star-inserted"]//div[1]//div[2]')}
    get summaryBreederReward () { return $('//div[@class="field-main-container"]//div[@class="field-container"]//div[2]//div[2]')}
    get summaryHunterReward () { return $('//div[@class="field-main-container"]//div[3]//div[2]')}
    get summaryConsumerCondition () { return $('//div[@class="points-container"]//div[1]//div[2]')}
    get summaryBreederCondition () { return $('//div[@class="points-container"]//div[2]//div[2]')}
    get summaryHunterCondition () { return $('//div[@class="points-container"]//div[3]//div[2]')}

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

    uploadDefaultImg() {
        let fileUpload = this.inputImage
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        );
        fileUpload.waitForDisplayed();

        let filePath = path.join(__dirname, '../../../data/images/both.png');
        fileUpload.setValue(filePath)

    }
    uploadNewImg() {
        let fileUpload = this.inputImage
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        );
        fileUpload.waitForDisplayed();

        let filePath = path.join(__dirname, '../../../data/images/dog.png');
        fileUpload.setValue(filePath)

    }

    createBonusCoupon (name, prioNum, desc, consuReward, huntReward, breedReward, consuCondition) {
        /** STEP 1 */
        
        this.inputName.setValue(name)
        this.inputPrioNumber.setValue(prioNum)
        this.typeBonus.click();
        this.petBoth.click();
        this.inputDescription.setValue(desc);
        this.uploadDefaultImg();
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 2 */
        this.inputConsumerReward.setValue(consuReward);
        this.inputHunterReward.setValue(huntReward);
        this.inputBreederReward.setValue(breedReward);
        this.groupProduct.click();
        this.dropdownProduct.waitForClickable();
        this.dropdownProduct.click();
        this.addFirstDropdownItem.click();
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 3 */
        this.inputConsumerCondition.setValue(consuCondition);
        this.groupProduct.click();
        this.dropdownProduct.waitForClickable();
        this.dropdownProduct.click();
        this.addFirstDropdownItem.click();
        //browser.pause(3000)
        this.btnProceed.click();

        /** SUMMARY */
        this.summaryTitle.waitForDisplayed()
        expect(this.summaryTitle).toHaveText("Förhandsvisa kupong");
        expect(this.summaryCouponName).toHaveText(name);
        expect(this.summaryDescription).toHaveText(desc);
        expect(this.summaryPetType).toHaveText("För hund och katt");
        expect(this.summaryConsumerReward).toHaveText(consuReward + "% rabatt");
        expect(this.summaryBreederReward).toHaveText(breedReward + "% rabatt");
        expect(this.summaryHunterReward).toHaveText(huntReward + "% rabatt");
        expect(this.summaryConsumerCondition).toHaveText(consuCondition + "/" + consuCondition + " poäng");
        expect(this.summaryBreederCondition).toHaveText("0/0 poäng");
        expect(this.summaryHunterCondition).toHaveText("0/0 poäng");

        this.btnProceed.click()
    }

    validateBonusCoupon (name, prioNum, desc, consuReward, huntReward, breedReward, consuCondition) {
        expect(this.previewCouponName).toHaveText(name);
        expect(this.previewDescription).toHaveText(desc);
        expect(this.previewPetType).toHaveText("För hund och katt");
        expect(this.previewConsumerReward).toHaveText(consuReward + "% rabatt");
        expect(this.previewBreederReward).toHaveText(breedReward + "% rabatt");
        expect(this.previewHunterReward).toHaveText(huntReward + "% rabatt");
        expect(this.previewConsumerCondition).toHaveText(consuCondition + "/" + consuCondition + " poäng");
        expect(this.previewBreederCondition).toHaveText("0/0 poäng");
        expect(this.previewHunterCondition).toHaveText("0/0 poäng");
    }

    editBonusCoupon (name, prioNum, desc, consuReward, huntReward, breedReward, consuCondition) {
        
        /** STEP 1 */
        this.inputName.setValue(name)
        this.inputPrioNumber.setValue(prioNum)
        this.petDog.click(); // Edits from Both into Dog
        this.inputDescription.setValue(desc);
        this.uploadNewImg(); // Edits coupon image
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 2 */
        this.inputConsumerReward.setValue(consuReward);
        this.inputHunterReward.setValue(huntReward);
        this.inputBreederReward.setValue(breedReward);
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 3 */
        this.inputConsumerCondition.setValue(consuCondition);
        //browser.pause(3000)
        this.btnProceed.click();

        /** SUMMARY */
        this.summaryTitle.waitForDisplayed()
        expect(this.summaryTitle).toHaveText("Förhandsvisa kupong");
        expect(this.summaryCouponName).toHaveText(name);
        expect(this.summaryDescription).toHaveText(desc);
        expect(this.summaryPetType).toHaveText("För hund");
        expect(this.summaryConsumerReward).toHaveText(consuReward + "% rabatt");
        expect(this.summaryBreederReward).toHaveText(breedReward + "% rabatt");
        expect(this.summaryHunterReward).toHaveText(huntReward + "% rabatt");
        expect(this.summaryConsumerCondition).toHaveText(consuCondition + "/" + consuCondition + " poäng");
        expect(this.summaryBreederCondition).toHaveText("0/0 poäng");
        expect(this.summaryHunterCondition).toHaveText("0/0 poäng");

        this.btnProceed.click();
        this.summaryCouponName.waitForDisplayed();
    }

/// CAMPAIGN COUPON ///
    createCampaignCoupon (name, prioNum, desc, consuReward, huntReward, breedReward, consuCondition) {
        /** STEP 1 */
        
        this.inputName.setValue(name)
        this.inputPrioNumber.setValue(prioNum)
        this.typeCampaign.click();
        this.petBoth.click();
        this.inputDescription.setValue(desc);
        this.uploadDefaultImg();
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 2 */
        this.inputConsumerReward.setValue(consuReward);
        this.inputHunterReward.setValue(huntReward);
        this.inputBreederReward.setValue(breedReward);
        this.groupProduct.click();
        this.dropdownProduct.waitForClickable();
        this.dropdownProduct.click();
        this.addFirstDropdownItem.click();
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 3 */
        this.inputConsumerCondition.setValue(consuCondition);
        this.groupProduct.click();
        this.dropdownProduct.waitForClickable();
        this.dropdownProduct.click();
        this.addFirstDropdownItem.click();
        //browser.pause(3000)
        this.btnProceed.click();

        /** SUMMARY */
        this.summaryTitle.waitForDisplayed()
        expect(this.summaryTitle).toHaveText("Förhandsvisa kupong");
        expect(this.summaryCouponName).toHaveText(name);
        expect(this.summaryDescription).toHaveText(desc);
        expect(this.summaryPetType).toHaveText("För hund och katt");
        expect(this.summaryConsumerReward).toHaveText(consuReward + "% rabatt");
        expect(this.summaryBreederReward).toHaveText(breedReward + "% rabatt");
        expect(this.summaryHunterReward).toHaveText(huntReward + "% rabatt");
        expect(this.summaryConsumerCondition).toHaveText(consuCondition + "/" + consuCondition + " poäng");
        expect(this.summaryBreederCondition).toHaveText("0/0 poäng");
        expect(this.summaryHunterCondition).toHaveText("0/0 poäng");

        this.btnProceed.click()
    }

    validateBonusCoupon (name, prioNum, desc, consuReward, huntReward, breedReward, consuCondition) {
        expect(this.previewCouponName).toHaveText(name);
        expect(this.previewDescription).toHaveText(desc);
        expect(this.previewPetType).toHaveText("För hund och katt");
        expect(this.previewConsumerReward).toHaveText(consuReward + "% rabatt");
        expect(this.previewBreederReward).toHaveText(breedReward + "% rabatt");
        expect(this.previewHunterReward).toHaveText(huntReward + "% rabatt");
        expect(this.previewConsumerCondition).toHaveText(consuCondition + "/" + consuCondition + " poäng");
        expect(this.previewBreederCondition).toHaveText("0/0 poäng");
        expect(this.previewHunterCondition).toHaveText("0/0 poäng");
    }

    editBonusCoupon (name, prioNum, desc, consuReward, huntReward, breedReward, consuCondition) {
        
        /** STEP 1 */
        this.inputName.setValue(name)
        this.inputPrioNumber.setValue(prioNum)
        this.petDog.click(); // Edits from Both into Dog
        this.inputDescription.setValue(desc);
        this.uploadNewImg(); // Edits coupon image
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 2 */
        this.inputConsumerReward.setValue(consuReward);
        this.inputHunterReward.setValue(huntReward);
        this.inputBreederReward.setValue(breedReward);
        //browser.pause(3000)
        this.btnProceed.click();

        /** STEP 3 */
        this.inputConsumerCondition.setValue(consuCondition);
        //browser.pause(3000)
        this.btnProceed.click();

        /** SUMMARY */
        this.summaryTitle.waitForDisplayed()
        expect(this.summaryTitle).toHaveText("Förhandsvisa kupong");
        expect(this.summaryCouponName).toHaveText(name);
        expect(this.summaryDescription).toHaveText(desc);
        expect(this.summaryPetType).toHaveText("För hund");
        expect(this.summaryConsumerReward).toHaveText(consuReward + "% rabatt");
        expect(this.summaryBreederReward).toHaveText(breedReward + "% rabatt");
        expect(this.summaryHunterReward).toHaveText(huntReward + "% rabatt");
        expect(this.summaryConsumerCondition).toHaveText(consuCondition + "/" + consuCondition + " poäng");
        expect(this.summaryBreederCondition).toHaveText("0/0 poäng");
        expect(this.summaryHunterCondition).toHaveText("0/0 poäng");

        this.btnProceed.click();
        this.summaryCouponName.waitForDisplayed();
    }

    open () {
        return super.open('coupon/list');
    }
}

module.exports = new CouponCreatedPage();
