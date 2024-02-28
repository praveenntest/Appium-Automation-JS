const { expect } = require("chai");
describe("Android Element Interaction and Asserations", () => {
    it("should validate the 'welcome back !!' element", async () =>{
        await driver.pause(20000);
        const browseAndBuyElementById = await $("id:com.ultralesson.ulshopify:id/txt-browse-and-buy");
        await browseAndBuyElementById.waitForDisplayed({ timeout: 15000 });

        const welcomeback = await $("id:com.ultralesson.ulshopify:id/txt-welcome-back")
        await welcomeback.waitForDisplayed({ timeout: 15000 });

        expect(await welcomeback.isDisplayed()).to.be.true;
        expect(await welcomeback.getText()).to.equal("Welcome Back!!");
        expect(await welcomeback.getAttribute("class")).to.be.equal("android.widget.TextView")

        const size = await welcomeback.getSize();
        console.log(`Element Size -     Width: ${size.width}, Height: ${size.height}`);
        expect(size.width).to.be.above(0);
        expect(size.height).to.be.above(0);
    })
})