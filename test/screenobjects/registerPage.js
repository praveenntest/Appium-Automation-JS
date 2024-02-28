class RegisterPage {
    locators = {
        profileEle : "id:com.ultralesson.ulshopify:id/icon-profile",
        registerEle : "id:com.ultralesson.ulshopify:id/txt-register",
        fullnameEle : "id:com.ultralesson.ulshopify:id/inp-fullname",
        emailEle : "id:com.ultralesson.ulshopify:id/inp-email",
        passwordEle : "id:com.ultralesson.ulshopify:id/inp-password",
        confirmPassEle : "id:com.ultralesson.ulshopify:id/inp-confirm-password",
        mobilenumberEle : "id:com.ultralesson.ulshopify:id/inp-mobile-number",
        regisButtEle : "id:com.ultralesson.ulshopify:id/txt-register",
        registerSuccessEle  : "resource-id:com.ultralesson.ulshopify:id/txt-modal-message",
        closeMessageEle : "id:com.ultralesson.ulshopify:id/btn-modal-cross"


    }

    async register(fullname,email,password,confirmpassword,mobileno){
        await driver.pause(4000);
        await $(this.locators.profileEle).click();
        await $(this.locators.registerEle).click();
        await driver.pause(4000);
        await driver.pause(5000);
        (await $(this.locators.fullnameEle)).addValue(fullname);
        (await $(this.locators.emailEle)).addValue(email);
        (await $(this.locators.passwordEle)).addValue(password);
        (await $(this.locators.confirmPassEle)).addValue(confirmpassword);
        (await $(this.locators.mobilenumberEle)).addValue(mobileno);
        (await $(this.locators.regisButtEle)).click();
        await driver.pause(4000);
    }

    async registerSuccess() {
         
         await $(this.locators.registerSuccessEle).getText();
    }


    async closeMessage() {
        await $(this.locators.closeMessageEle).click();
    }

}

module.exports = new RegisterPage();