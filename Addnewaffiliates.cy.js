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
  
  When("the user choose to add a new affilite", () => {
    cy.get('.btn.btn-primary').click();
  });
  When("the user fill in the required information for the affiliate", () => {
    cy.get('#Address_FirstName').type('lana');
    cy.get("#Address_LastName").type("salameh");
    cy.get("#Address_Email").type("lana123@gmail.com");
    cy.get('#Address_CountryId').select('Albania');
    cy.get("#Address_County").type("palestine");
    cy.get("#Address_City").type("Nablus");
    cy.get("#Address_Address1").type("bla");
    cy.get("#Address_Address2").type("bla");
    cy.get("#Address_ZipPostalCode").type("0123");
    cy.get("#Address_PhoneNumber").type("0599999999");
  });
  When("the user save the new affiliate", () => {
    cy.get('button').contains('Save').click();
  });
  Then("the affiliate should be successfully added", () => {
    cy.get('.alert-success').should('contain', 'The new affiliate has been added successfully.');
  });
  
  Then("the user should see the added affiliate in the list of affiliates", () => {
    cy.get('.card-body').scrollIntoView();
  });