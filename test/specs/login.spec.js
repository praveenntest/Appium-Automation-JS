const { expect } = require('chai');
const LoginPage = require('../screenobjects/loginPage')
const OtpPage = require('../screenobjects/otpPage');
const HomePage = require('../screenobjects/HomePage');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
        const userNameText = await (await HomePage.getUserNameEle()).getText();
        expect(userNameText).to.equal('Jack Sparrow');
    })
})