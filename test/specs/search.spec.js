const SearchPage = require('../screenobjects/SearchPage');
const { expect } = require('chai');
const LoginPage = require('../screenobjects/loginPage')
const OtpPage = require('../screenobjects/otpPage');
const HomePage = require('../screenobjects/HomePage');

describe('Search functionality', () => {

    beforeEach(async () =>{
        await driver.activateApp("com.ultralesson.ulshopify"); 
        await driver.pause(20000)
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
        (await HomePage.getSearchButton()).click()
    })
 
    afterEach(async ()=>{
        await driver.terminateApp("com.ultralesson.ulshopify");
        await driver.pause(2000)
    })

    it('should perform a search', async() => {
        await SearchPage.setSearchKeyword('shirt')
        await SearchPage.clickSearchButton();
        await driver.pause(5000)        
    });

    it('should navigate back', async() => {
        await SearchPage.clickBackButton();
        await driver.pause(20000)
    });

    it('should validate input', async() => {
        await SearchPage.setSearchKeyword('');
        await SearchPage.clickSearchButton();
        await driver.pause(20000)
    });

    it('should verify search button state', async () => {
        const isSearchButtonEnabled = await SearchPage.isSearchButtonEnabled();
    });
});
