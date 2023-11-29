/// <reference types="cypress"/ >

describe('Creating an Account Page', () => {
    it('should display all fields and buttons', () => {
         cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get('#firstname').should('be.visible')
        cy.get('#lastname').should('be.visible')
        cy.get('#email_address').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#password-confirmation').should('be.visible')
        cy.get('button[title="Create an Account"]').should('be.visible')
    });
    it.only('should create an account successfully', () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get('#firstname').type('Lana',{delay:200});
        cy.get('#lastname').type('Salameh',{delay:200});
        cy.get('#email_address').type('lanasalameh123@gmail.com',{delay:200});
        cy.get('#password').type('Password123',{delay:200});
        cy.get('#password-confirmation').type('Password123',{delay:200});
        cy.get('button[title="Create an Account"]').click();
    });
});
