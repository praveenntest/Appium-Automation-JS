const { driver } = require("@wdio/globals");
describe("Android App Operations", () => {
    it("should perform app operations successfully", async () => {
        console.log("App launch successful");
        await driver.pause(5000);

        await driver.terminateApp("com.ultralesson.ulshopify");
        console.log("App terminated");

        await driver.pause(5000);
        await driver.activateApp("com.ultralesson.ulshopify");
        console.log("App activated");

        await driver.pause(5000);
        await driver.removeApp("com.ultralesson.ulshopify");
        console.log("App removed");
    });
});