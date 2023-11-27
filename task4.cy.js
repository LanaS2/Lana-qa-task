/// <reference types="cypress"/ >

it("my_test",()=>{
   cy.visit("https://magento.softwaretestingboard.com/") 
   cy.get('#search').type("shirt {enter}",{delay:500})
   cy.get(".page-products .product-item-info").eq(0).click({delay:200})
   cy.get(".swatch-option").contains('M').click({delay:100})
   cy.get('.swatch-option[option-label="Purple"]').click({delay:100});
   cy.get('#qty').clear({delay:200}).type(3,{delay:200})
   cy.get('#product-addtocart-button').click()
});