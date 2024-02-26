const { expect } = require('chai');
const LoginPage = require('../screenobjects/loginPage')
const OtpPage = require('../screenobjects/otpPage');
//const HomePage = require('../screenobjects/HomePage');
const LogOut = require('../screenobjects/logOutPage');

describe('My Login application', () => {
    it('should login and logout', async () => {
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
        await LogOut.logout();     
    })
})