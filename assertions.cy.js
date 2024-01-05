class addToCartAssertions {
    checkAlertMessageContainValue(message){
          cy.get(".messages").should("contain", message);
          return this;
      }
  }
  
  export default loginPageAssertions;