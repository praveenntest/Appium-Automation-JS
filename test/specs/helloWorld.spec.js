const { driver } = require("@wdio/globals");
describe('My First Test', ()=>{
    it('should print hello world',()=>{
        console.log("Hello World")
    })
})