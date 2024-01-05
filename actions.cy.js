class CreateAccountPageActions {
    visit() {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
    }
  
    typeFirstName(firstName) {
      cy.get("#firstname").clear().type(firstName);
    }
  
    typeLastName(lastName) {
      cy.get("#lastname").clear().type(lastName);
    }
  
    typeEmail(email) {
      cy.get("#email_address").clear().type(email);
    }
  
    typePassword(password) {
      cy.get("#password").clear().type(password);
    }
  
    typeConfirmPassword(confirmPassword) {
      cy.get("#password-confirmation").clear().type(confirmPassword);
    }
  
    clickCreateAccountButton() {
      cy.get(".submit.primary").click();
    }
}
export default new CreateAccountPageActions();