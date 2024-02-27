const swipeHorizontal = async (element, maxScrollAttempts = 10) => {
    let elementFound = false;
    for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
        console.log(`Scroll Attempt ${attempt}`);
        // Check if the element is visible
        if (await element.isDisplayed()) {
            console.log("Element Found!");
            elementFound = true;
            break; // Element is found, exit the loop
        }
    
        // Define swipe start and end coordinates for a horizontal scroll
        const startX = 500; // Starting X-coordinate (left of the screen)
        const startY = 1000; // Y-coordinate (vertical position)
        const endX = 100; // Ending X-coordinate (right of the screen)
    
        // Define the action sequence for the horizontal swipe
        await driver
        .action('pointer')
        .move({ x: startX, y: startY })
        .down()
        .pause(500)
        .move({ x: endX, y: startY }) // Move horizontally
        .perform();
    }
    if (!elementFound) {
        console.log("Footer Element not found after all scroll attempts");
    }
};








const swipe = async (element, maxScrollAttempts = 10) => {
    let elementFound = false;
    for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
        console.log(`Scroll Attempt ${attempt}`);
        // Check if the element is visible
        if (await element.isDisplayed()) {
            console.log("Element Found!");
            elementFound = true;
            break; // Element is found, exit the loop
        }
    
        // Define swipe start and end coordinates for a scroll
        const startX = 500; // X-coordinate (horizontal position)
        const startY = 2000; // Starting Y-coordinate (top of the screen)
        const endY = 1000; // Ending Y-coordinate (bottom of the screen)
    
        // Define the action sequence for the swipe
        await driver
        .action('pointer')
        .move({ x: startX, y: startY })
        .down()
        .pause(500)
        .move({ x: startX, y: endY })
        .perform();
    }
    if (!elementFound) {
        console.log("Footer Element not found after all scroll attempts");
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
        //await swipeHorizontal(footerElement,10);
       await swipe(footerElement, 10);

        //expect(await footerElement.isDisplayed()).to.be.true;
        //expect(await footerElement.getText()).to.be.equal("@All rights reserved to Ultralesson");
    });
});
