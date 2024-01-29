class Messages {
    errorMsgShown() {
        cy.get('[data-test="error"]').should('be.visible');
    }
}
export default Messages;