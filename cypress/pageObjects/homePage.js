class HomePage {
    addToCart(item) {
        cy.get(`[data-test="add-to-cart-${item}"]`).click();
        cy.get('.shopping_cart_badge').should('have.text','1');
        cy.get(`[data-test="remove-${item}"]`).should('be.visible');
    }

    proceedToCart() {
        cy.get('.shopping_cart_link').click();
    }
}
export default HomePage;