class LoginPage{

    elements = {
        userNameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginBtn: '[data-test="login-button"]',
    }

    navigateToUrl() {
        cy.visit('https://www.saucedemo.com');
        cy.get(this.elements.loginBtn).should('be.visible');
    }

    loginToApp(userName, password) {
        cy.get(this.elements.userNameField).type(userName);
        cy.get(this.elements.passwordField).type(password);
        cy.get(this.elements.loginBtn).click();
    }
}

export default LoginPage;
