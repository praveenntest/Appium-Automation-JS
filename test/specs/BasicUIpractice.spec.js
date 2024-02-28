const {  expect  } = require('chai');

async function getLocation(selector) {
    const elem = await $(selector)
    const location = await elem.getLocation();
    return location
}


describe("Basic automation",()=>{
    it.only('The basic automation ui', async()=>{
        await driver.pause(4000);
        const location = await getLocation('id:com.ultralesson.ulshopify:id/img-category-Shoes');
        console.log(location);
        console.log('X coordinate:', location.x);
        console.log('Y coordinate:', location.y);
    })

    it("send sms", async()=>{
        await driver.pause(20000)
        await driver.sendSms('831-027-6181', 'Hey lol');
    })
})

