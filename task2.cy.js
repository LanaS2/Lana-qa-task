/// <reference types="cypress"/ >

it("my_test",()=>{
    cy.visit("https://magento.softwaretestingboard.com/checkout/cart/#shipping");
    
    //logo selector
    cy.get(".logo")

    //cart selector
    cy.get(".showcart")

    //search box selecctor
    cy.get("#search")

    //sale selector
    cy.get(".navigation > ul > li:last-child > a[role=menuitem]")

    //what's new selector
    cy.get(".navigation > ul > li:first-child > a[role=menuitem]")

    //women selector
    cy.get(".navigation > ul > li:nth-child(2) > a[role=menuitem]")

    //men selector
    cy.get(".navigation > ul > li:nth-child(3) > a[role=menuitem]")

    //gear selector 
    cy.get(".navigation > ul > li:nth-child(4) > a[role=menuitem]")

    // training selector 
    cy.get(".navigation > ul > li:nth-child(5) > a[role=menuitem]")

    //shopping card title selector 
    cy.get(".base")

    //cart empty selector
    cy.get(".cart-empty")

    //Write for us selector 
    cy.get(".links .widget ul li:first-child a")

    //Subscribe to our mailing list selector 
    cy.get(".links .widget ul li:nth-child(2) a")

    //Contact us selector
    cy.get(".links .widget ul li:nth-child(3) a")

    //Hire a Sofware Testing/QA Company selector 
    cy.get(".links .widget ul li:nth-child(4) a")

    //footer selector 
    cy.get(".copyright")

    //Search Terms selector
    cy.get('ul.footer.links li:first-child a')
    
    //Privacy and Cookie Policy selector 
    cy.get('ul.footer.links li:nth-child(2) a')

    //Advanced Search selector
    cy.get('ul.footer.links li:nth-child(3) a')

    //Orders and Returns selector
    cy.get('ul.footer.links li:nth-child(4) a')
    });