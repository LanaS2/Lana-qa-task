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
     cy.contains('Discounts').click({force: true});
  });
  
  When("the user choose to add a new discount", () => {
    cy.get('.btn.btn-primary').click();
  });
  
  When("the user fill in the required information for the discount", () => {
    cy.get('#Name').type('New Discount');
    cy.get(".k-formatted-value.k-input").type("15");
  });
  
  When("the user save the new discount", () => {
    cy.get('button').contains('Save').click();
  });
  
  Then("the discount should be successfully added", () => {
    cy.get('.alert-success').should('contain', 'The new discount has been added successfully.');
  });
  
  Then("the user should see the added discount in the list of discounts", () => {
    cy.get('.card-body').scrollIntoView();

  });
  
  