class CreateAccountPageAssertions {
    verifyAccountCreationSuccess() {
        cy.url().should("eq", "https://magento.softwaretestingboard.com/customer/account/");
        cy.get(".page-title").should("contain", "My Account");
      }
    
      verifyErrorMessage(msg) {
        cy.get("[role=alert]").should("contain", msg);
      }
  }
  
  export default CreateAccountPageAssertions;