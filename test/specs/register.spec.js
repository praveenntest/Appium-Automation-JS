const { expect } = require('chai');
const RegisterPage = require('../screenobjects/registerPage');
const OtpPage = require('../screenobjects/otpPage')

describe('My Register Application', ()=>{
    it('should register with valid details', async ()=>{
        await driver.pause(20000)
        await RegisterPage.register('B Praveen yaeak','praeveednnaaey4i@gmail.com','Dedesie434@123','Dedesie434@123','8310236181');
        await OtpPage.enterOtp('0000');
        //await driver.pause(20000)
        // const browserAndBuyElementById = await $("resource-id:com.ultralesson.ulshopify:id/txt-modal-message")
        // await browserAndBuyElementById.waitForDisplayed({timeout : 10000})
        // expect(await browserAndBuyElementById.getText()).to.equal("Registration is successful")
        // const successMessage = await RegisterPage.registerSuccess();
        // expect(successMessage).to.contain('Registration is successful');
        const imagelocator = await $("id:com.ultralesson.ulshopify:id/img-modal");
        await imagelocator.isDisplayed();
        await RegisterPage.closeMessage();
        await driver.pause(30000)
       



    })
})
