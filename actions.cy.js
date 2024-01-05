class addToCartActions {
    visitHomePage() {
      cy.visit("https://magento.softwaretestingboard.com/");
      return this;
    }
  
    searchForProduct(productName) {
      cy.get("#search").type(`${productName} {enter}`);
      return this;
    }
  
    chooseProductX() {
      cy.get(".product-items li").first().click();
      return this;
    }
  
    chooseSizeAndColor(size, colorIndex) {
      cy.wait(1500);
      cy.get(".swatch-attribute.size").contains(size).click();
      cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click();
      return this;
    }
  
    clickAddToCart() {
      cy.get("#product-addtocart-button").click();
      return this;
    }
  }
  
  export default new addToCartActions();
  