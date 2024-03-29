


const { XpathUtil } = require('../../utility/xpath/xpathUtils')



class OtpPage {

    locators = {
        otp: 'id:com.ultralesson.ulshopify:id/inp-opt-##PLACEHOLDER##',
        verifyButton: 'id:com.ultralesson.ulshopify:id/txt-verify'
    }

    async getOtpEle(index) {
        return await $(XpathUtil.getPlaceholderReplaced(this.locators.otp, index));
    }

    async enterOtp(otp) {
        const otpElements = [
            await this.getOtpEle(1),
            await this.getOtpEle(2),
            await this.getOtpEle(3),
            await this.getOtpEle(4)
        ];

        for (let i = 0; i < otpElements.length; i++) {
            await otpElements[i].addValue(otp.charAt(i));
        }
        await (await $(this.locators.verifyButton)).waitForDisplayed();
        await $(this.locators.verifyButton).click();
        await driver.pause(30000);
    }
}

module.exports = new OtpPage();