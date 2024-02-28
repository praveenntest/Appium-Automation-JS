class SearchPage {
    get searchInput() { return $('#inp-search'); }
    get searchButton() { return $('#btn-search'); }
    get backButton() { return $('#btn-back'); }

    async setSearchKeyword(keyword) {
        await this.searchInput.setValue(keyword);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }

    async clickBackButton() {
        await this.backButton.click();
    }

    async isSearchButtonEnabled() {
        return await this.searchButton.isEnabled();
    }
}

module.exports = new SearchPage();
