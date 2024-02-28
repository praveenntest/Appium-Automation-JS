 const { expect } = require('chai');
 describe("Category Title Validation in ul-shopify App", ()=>{
    it("should fetch and validate category titles on the home page", async ()=>{
        await driver.pause(30000)
        // Wait for the 'Browse and Buy' element to be displayed as an indication that the home screen has loaded
        const browseAndBuyElementById = await $("id:com.ultralesson.ulshopify:id/txt-browse-and-buy");
        await browseAndBuyElementById.waitForDisplayed({ timeout: 15000 });
        const categoryTitlesElements = await $$("id:com.ultralesson.ulshopify:id/txt-title");
        const categoryTitles = [];
        //iterate an array to hold the text of each category title
        for(const element of categoryTitlesElements){
            const titleText = await element.getText()
            categoryTitles.push(titleText);
        }
        console.log(categoryTitles)
        //validate the asserations
        expect(categoryTitles).to.have.members(["Clothing","Shoes","Furniture"])     
    })
 })