import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import * as common from '../../support/common';
import HomePage from '../../pageObjects/homePage';
import Cart from '../../pageObjects/cartPage';
import CheckoutYourInfo from '../../pageObjects/checkoutYourInfo';
import CheckoutOverview from '../../pageObjects/checkoutOverview';
import CheckoutComplete from '../../pageObjects/checkoutComplete';

const checkoutInfo = {
    firstName : 'Maria',
    lastName : 'Bruncakova',
    zipCode : '00000', 
}

Then('Add {string} item to cart', (item) => {
    const homePage = new HomePage();
    homePage.addToCart(item);
})

And('Proceed to cart', () => {
    const homePage = new HomePage();
    homePage.proceedToCart();
})

And('Cart contains {string} item', (item) => {
    const cartPage = new Cart();
    cartPage.cartContainsItem(item);
})

And('Proceed to checkout', () => {
    const cartPage = new Cart();
    cartPage.proceedToCheckout();
})

And('Fill checkout info', () => {
    const checkoutYourInfo = new CheckoutYourInfo();
    checkoutYourInfo.fillUserInfo(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.zipCode)
})

And('Finish order', () => {
    const checkoutOverview = new CheckoutOverview();
    checkoutOverview.clickOnFinish();
})

And('Order was completed', () => {
    const checkoutComplete = new CheckoutComplete();
    checkoutComplete.orderWasCompleted();
})