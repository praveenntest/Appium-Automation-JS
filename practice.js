//Asseration 

const { assert } = require("chai");

const elem1 = await $('#elem');
await expect(elem1).toBeDisplayed() //toBeDisplayed element

const elem2 = await $('#someElem')
await expect(elem2).toExist();
 
//lry to this we have 
//toBePresent() toBeExisting() toBePresent()

it('should demonstrate the addValue command', async() =>{
    let input = await $('.innput');
    await input.addValue('test')
    await input.addValue(123)

    const value = await input.getValue();
    console.log(value)

    //assert(value === 'test123')

    await input.clearValue();
    const value2 = await input.getValue();
    assert(value2 === '') //true

    
})





