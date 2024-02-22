// module.exports = async function swipe(element, maxScrollAttempts = 5) {
//     // Function implementation here
// };




const swipe = async (element, maxScrollAttempts = 5) => {
    let elementFound = false;
    for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
        // Check if the element is visible
        if (await element.isDisplayed()) {
            elementFound = true;
            break; // Element is found, exit the loop
        }
    
        // Define swipe start and end coordinates for a scroll
        const startX = 700; // X-coordinate (horizontal position)
        const startY = 600; // Starting Y-coordinate (top of the screen)
        const endY = 200; // Ending Y-coordinate (bottom of the screen)
    
        // Define the action sequence for the swipe
        await driver
            .action("pointer", {
                parameters: {
                    pointerType: "touch",
                },
            })
            .move({ duration: 0, x: startX, y: startY })
            .down({ button: 0 })
            .move({ duration: 600, x: startX, y: endY })
            .up({ button: 0 })
            .perform();
    }
};