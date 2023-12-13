/// <reference types="cypress"/ >
it('my test', () => {
cy.visit('https://admin-demo.nopcommerce.com/admin/')
cy.get('.login-button').click();
cy.get("#nopSideBarPusher").click();
cy.get(".nav-sidebar > li:nth-child(2) > a").click();
cy.contains('Products').click({force: true});
cy.get('#SearchProductName').type('phone');
cy.get('#search-products').click();
cy.get('.mastercheckbox').check({ force: true });
cy.get('#delete-selected').click();
cy.get('#delete-selected-action-confirmation-submit-button').click();
});