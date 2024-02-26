class LoginPage {

    locators = {
        profileEle: "id:com.ultralesson.ulshopify:id/icon-profile",
        loginButton: "id:com.ultralesson.ulshopify:id/txt-login",
        emailInputField: "id:com.ultralesson.ulshopify:id/inp-email",
        passwordInputField: "id:com.ultralesson.ulshopify:id/inp-password",
        emptyEmailField:"id:com.ultralesson.ulshopify:id/txt-email-field-cannot-be-empty",
        emptyPassFeild:"id:com.ultralesson.ulshopify:id/txt-password-field-cannot-be-empty",
        invalidEmailFeild:"id:com.ultralesson.ulshopify:id/txt-email-format-is-incorrect" 
    }

    async login(username, password) {
        await driver.pause(4000);
        if((await $(this.locators.profileEle)).isDisplayed()) {
        await $(this.locators.profileEle).click();
        }
        (await $(this.locators.loginButton)).click();
        await driver.pause(4000);  
        (await $(this.locators.emailInputField)).addValue(username);
        (await $(this.locators.passwordInputField)).addValue(password);
        (await $(this.locators.loginButton)).click();
        await driver.pause(4000);
    } 

    async emailInputFieldErrMsg(){
        return $(this.locators.emptyEmailField);
    }
    async emptyPassFeildErrMag(){
        return $(this.locators.emptyPassFeild);
    }
    async invalidEmailFeildErrMsg(){
        return $(this.locators.invalidEmailFeild);
    }
}


// export default new LoginPage()
module.exports = new LoginPage();