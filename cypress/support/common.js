import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageObjects/loginPage';
import Messages from '../pageObjects/messages';

When('I navigate to url', () => {
    const loginPage = new LoginPage();
    loginPage.navigateToUrl();
  });

And('I login with {string} and {string}', (userName, password) => {
    const loginPage = new LoginPage();
    loginPage.loginToApp(userName, password);
});

Then('Error message is shown', () => {
    const messages = new Messages();
    messages.errorMsgShown();
})