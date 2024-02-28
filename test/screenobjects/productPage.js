class ProductPage {
    locators = {
        productItem : ""
    }

    async firstProductitem(){
        return (await $(this.locators.productItem[0])).click()
    }
}

module.exports = new ProductPage();

