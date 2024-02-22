const {expect} = require("chai");
describe("Tap Gesture and Validation in UL-Shopify App",()=>{
  it("should tap on the first product using coordinates and validate navigation", async () => {
    await driver.pause(30000);
    const browseAndBuyElement = await $(process.env.PLATFORM === "ANDROID" ? "id:com.ultralesson.ulshopify:id/txt-browse-and-buy" : "~txt-browse-and-buy");
    await browseAndBuyElement.waitForDisplayed({ timeout: 15000 });

    const firstProductLocator = process.env.PLATFORM === "ANDROID" ? "id:com.ultralesson.ulshopify:id/ele-featured-row-card" : '(//XCUIElementTypeOther[@name="ele-featured-row-card"])[1]';
    const firstProductCard = await $$(firstProductLocator)[0];
    await firstProductCard.waitForDisplayed();
    const location = await firstProductCard.getLocation();
    const xCoordinate = location.x + 50; // Adjust for precise tapping within the element
    const yCoordinate = location.y + 50;

     // Execute a tap gesture using coordinates
     await driver
     .action("pointer", {
         parameters: { pointerType: "touch" },
     })
     .move({
         duration: 0,
         x: xCoordinate,
         y: yCoordinate,
     })
     .down({ button: 0 })
     //pause(4000) // Press duration
     .up({ button: 0 })
     .perform();

     const addToCartLocator = process.env.PLATFORM === "ANDROID" ? "id:com.ultralesson.ulshopify:id/txt-add-to-cart" : "~txt-add-to-cart";
     const addToCartButton = await $(addToCartLocator);
     await addToCartButton.waitForDisplayed({ timeout: 10000 });
     expect(await addToCartButton.getText()).to.equal("Add To Cart");

    })

})