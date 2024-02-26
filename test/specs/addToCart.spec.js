const { expect } = require('chai');
const LoginPage = require('../screenobjects/loginPage')
const OtpPage = require('../screenobjects/otpPage');
const HomePage = require('../screenobjects/HomePage');
const ProductPage = require('../screenobjects/productPage');

describe('Add the product to cart',()=>{
    it("Add to cart the item and check asseration whether item is added in cart", async()=>{
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
        (await HomePage.getSearchButton()).click()
        await driver.pause(20000)
    })
})
