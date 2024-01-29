class Cart {
    cartContainsItem(item) {
        cy.get(`[data-test="remove-${item}"]`).should('be.visible');
    }

    proceedToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }
}
export default Cart;