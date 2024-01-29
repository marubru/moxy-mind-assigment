class CheckoutComplete {
    orderWasCompleted() {
        cy.get('.complete-header').should('be.visible');
    }
}
export default CheckoutComplete;