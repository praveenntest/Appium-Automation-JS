const { expect } = require('chai');
const LoginPage = require('../screenobjects/loginPage')
const OtpPage = require('../screenobjects/otpPage');
const HomePage = require('../screenobjects/HomePage');

describe('My Login Application',()=>{
    it('should display the error message with empty email and password', async()=>{
        await LoginPage.login("","");
        const emailErrMsg = await (await LoginPage.emailInputFieldErrMsg()).getText();
        expect(emailErrMsg).to.equal('Email field cannot be empty');
        const passErrMsg = await (await LoginPage.emptyPassFeildErrMag()).getText();
        expect(passErrMsg).to.equal('Password field cannot be empty')
    })
})
