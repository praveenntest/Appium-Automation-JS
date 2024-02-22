const { expect } = require("chai");

describe("Exploring and Validating Search in UL-Shopify App on Android", () => {
    it("should navigate to the explore screen, search, and validate results", async () => {
        await driver.pause(30000)
        // Find and wait for the 'Browse and Buy' element to be displayed
        const browseAndBuyElementById = await $("id:com.ultralesson.ulshopify:id/txt-browse-and-buy");
        await browseAndBuyElementById.waitForDisplayed({ timeout: 15000 });

        // Find the 'Search for More' element and click it
        const searchForMoreElement = await $("id:com.ultralesson.ulshopify:id/txt-search-for-more");
        await searchForMoreElement.click();

        // Find the 'Explore More' element and wait for it to be displayed, then click it
        const exploreMoreElement = await $("id:com.ultralesson.ulshopify:id/inp-search");
        await exploreMoreElement.waitForDisplayed();
        await exploreMoreElement.click();

        // Set the value "Eco" in the 'Explore More' element
        await exploreMoreElement.addValue("Eco");

        // Find the 'Search' button element and click it
        const searchButtonElement = await $("id:com.ultralesson.ulshopify:id/btn-search");
        await searchButtonElement.click();

        // Find the 'Search Results Heading' element and wait for it to be displayed
        const searchResultsHeading = await $("id:com.ultralesson.ulshopify:id/txt-product-display-heading");
        await searchResultsHeading.waitForDisplayed({
            timeout: 10000,
        });

        // Assert that the text of the 'Search Results Heading' matches the expected text
        expect(await searchResultsHeading.getText()).to.be.equal("Your Curated Selection!!");
    });
});