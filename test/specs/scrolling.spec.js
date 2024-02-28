describe('Vertical and Horizontal Scrolling using UI Automator',()=>{
    it('Horizontal Scrolling', async()=>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("@All rights reserved to Ultralesson")').click();
    })

    it('Vertical Scrolling',async()=>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
    })

    it("Vertical scrolling on text",async()=>{
        await scrollUntilVisible('android=new UiSelector().text("Your Element Text")');
    })
})

async function scrollUntilVisible(elementLocator, maxScrollAttempts = 10) {
    let isElementVisible = false;
    let scrollAttempts = 0;

    while (!isElementVisible && scrollAttempts < maxScrollAttempts) {
        // Scroll forward horizontally
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // Check if element is visible
        isElementVisible = await $(elementLocator).isDisplayed();

        scrollAttempts++;

        if (!isElementVisible && scrollAttempts < maxScrollAttempts) {
            // Scroll backward if the element is still not visible
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        }
    }

    if (!isElementVisible) {
        console.warn("Element is still not visible after scrolling.");
    }
}
