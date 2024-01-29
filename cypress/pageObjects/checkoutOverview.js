class CheckoutOverview {
    clickOnFinish() {
        cy.get('[data-test="finish"]').click();
    }
}
export default CheckoutOverview;