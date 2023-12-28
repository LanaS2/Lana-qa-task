import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

  Given('the user logged in as an admin user', () => {
    cy.visit('https://admin-demo.nopcommerce.com/');
    cy.get('#Email').type('admin@yourstore.com');
    cy.get('#Password').type('admin');
    cy.get('.button-1.login-button').click();
  });
  
  When("the user navigate to the promotions area", () => {
     cy.get("#nopSideBarPusher").click();
     cy.get(".nav-sidebar > li:nth-child(5) > a").click();
     cy.contains('Affiliates').click({force: true});
  });
  
  When("the user choose to add a new camping", () => {
    cy.get('.btn.btn-primary').click();
  });
  When("the user fill in the required information for the camping", () => {
    cy.get("#Name").type("lana");
    cy.get("#Subject").type("lana");
    cy.get("#Body").type("bla bla bla ");
  });
  When("the user save the new camping", () => {
    cy.get('button').contains('Save').click();
  });
  Then("the camping should be successfully added", () => {
    cy.get('.alert-success').should('contain', 'The new camping has been added successfully.');
  });
  
  Then("the user should see the added camping in the list of campings", () => {
    cy.get('.card-body').scrollIntoView();
  });