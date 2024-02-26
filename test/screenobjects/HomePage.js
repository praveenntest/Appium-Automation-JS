class HomePage {
    
    locators = {
        profileEle: "id:com.ultralesson.ulshopify:id/icon-profile",
        userNameEle: "id:com.ultralesson.ulshopify:id/txt-username",
        searchForMoreEle: 'id:com.ultralesson.ulshopify:id/txt-search-for-more',
        searchInput: 'id:com.ultralesson.ulshopify:id/inp-search',
        productName: 'id:com.ultralesson.ulshopify:id/txt-product-name',
        searchForMoreEle: 'id:com.ultralesson.ulshopify:id/txt-search-for-more',
        searchButtonEle: 'id:com.ultralesson.ulshopify:id/btn-search'
    }

    async getUserNameEle() {
        return await $(this.locators.userNameEle)
    }

    async getProfileEle() {
        return await $(this.locators.profileEle);
    }

    async getSearchButton() {
        return await $(this.locators.searchButtonEle);
    }



}


module.exports = new HomePage();