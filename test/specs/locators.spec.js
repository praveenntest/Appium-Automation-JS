const chai = require('chai');
const expect = chai.expect;

const { driver } = require("@wdio/globals");



describe("Android Locator Strategies", () => {
    it("should identify elements using various locator strategies", async () => {
        
        6
        // Wait for elements to be displayed (Temporary solution)
        await driver.pause(20000);
        
        

        //Resource id
        const browserAndBuyElementById = await $("id:com.ultralesson.ulshopify:id/txt-browse-and-buy")
        await browserAndBuyElementById.waitForDisplayed({timeout : 10000})
        //const browserAndBuyTextById = await browserAndBuyElementById.getText();
        //console.log(`Text of 'Browser and Buy' element using Resource ID locator: ${browserAndBuyTextById}`)
        expect(await browserAndBuyElementById.getText()).to.equal("Browse & Buy!")
        
        //Class Name locator Strategy
        const textViewElementByClassName = await $("android.widget.TextView");
        await textViewElementByClassName.waitForDisplayed({timeout : 10000})
        //const textViewTextByClassName = await textViewElementByClassName.getText();
        //console.log(`Text of class name locator : ${textViewTextByClassName}`)
        expect(await textViewElementByClassName.getText()).to.equal("Browse & Buy!")

        // Xpath locator strategy
        const browseAndBuyElementByXpath = await $(
            "//android.widget.TextView[@resource-id='com.ultralesson.ulshopify:id/txt-browse-and-buy']"
        );
        await browseAndBuyElementByXpath.waitForDisplayed({ timeout: 10000 });
        //const browseAndBuyTextByXpath = await browseAndBuyElementByXpath.getText();
        //console.log(`Text of 'Browse and Buy' element using Xpath locator: ${browseAndBuyTextByXpath}`);
        expect(await browseAndBuyElementByXpath.getText()).to.equal("Browse & Buy!");

       // UiAutomator locator strategy
       const browseAndBuyElementByUiAutomator = await $(
        `android=new UiSelector().text("Browse & Buy!").className("android.widget.TextView")`
    );
    await browseAndBuyElementByUiAutomator.waitForDisplayed({ timeout: 10000 });
    //const browseAndBuyTextByUiAutomator = await browseAndBuyElementByUiAutomator.getText();
    //console.log(`Text of 'Browse and Buy' element using UiAutomator locator: ${browseAndBuyTextByUiAutomator}`);
    expect(await browseAndBuyElementByUiAutomator.getText()).to.equal("Browse & Buy!");


    })

})