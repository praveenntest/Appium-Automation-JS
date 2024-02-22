//const {swipe} = require("../../utility/swipe.js");

//const { swipes } = require("../../utility/swipe")

const swipe = async (element, maxScrollAttempts = 5) => {
    let elementFound = false;
    for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
        // Check if the element is visible
        if (await element.isDisplayed()) {
            elementFound = true;
            break; // Element is found, exit the loop
        }
    
        // Define swipe start and end coordinates for a scroll
        const startX = 480; // X-coordinate (horizontal position)
        const startY = 200; // Starting Y-coordinate (top of the screen)
        const endY = 800; // Ending Y-coordinate (bottom of the screen)
    
        // Define the action sequence for the swipe
        await driver
            .action("pointer", {
                parameters: {
                    pointerType: "touch",
                },
            })
            .move({ duration: 0, x: startX, y: startY })
            .down({ button: 0 })
            .move({ duration: 1000, x: startX, y: endY })
            .up({ button: 0 })
            .perform();
    }
};


const {expect} = require("chai");
describe("Swipe Gestures", () => {
    it("should scroll until the footer element is visible on a mobile app and validate the footer text", async () => {
        await driver.pause(30000)
        // Wait for the Browse and Buy element to ensure the home screen is fully loaded
        const browseAndBuyLocator =
            process.env.PLATFORM === "ANDROID"
                ? "id:com.ultralesson.ulshopify:id/txt-browse-and-buy"
                : "~txt-browse-and-buy";
        const browseAndBuyElement = await $(browseAndBuyLocator);
        await browseAndBuyElement.waitForDisplayed({ timeout: 15000 });

        // Define the element you want to scroll to (in this case, ~txt-footer)
        const footerLocator =
            process.env.PLATFORM === "ANDROID" ? "//*[@text='@All rights reserved to Ultralesson']" : "~txt-footer";
        const footerElement = await $(footerLocator);
        // Use the swipe utility function to perform the swipe
        await swipe(footerElement, 6);

        expect(await footerElement.isDisplayed()).to.be.true;
        expect(await footerElement.getText()).to.be.equal("@All rights reserved to Ultralesson");
    });
});
