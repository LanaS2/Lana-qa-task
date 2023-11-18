/// <reference types="cypress"/ >

it("my_test",()=>{
    cy.visit("https://demo.productionready.io/#/login");

    //need an account selector
    cy.contains('Need an account?')

    // sign in selector
    cy.get('.btn.btn-lg.btn-primary.pull-xs-right')

    //email selector
    cy.get('input[type="email"]')

    //password selector 
    cy.get('input[type="password"]')

    //sing up header selector 
    cy.get('.auth-page h1')
    //--------------------------------------------------------

    cy.visit("https://demo.productionready.io/#/")

    //logo selector
    cy.get('a.navbar-brand')

    //Home selector
    cy.get('li.nav-item > a.nav-link.active[ui-sref="app.home"]')

    //sign up selector 
    cy.get('li.nav-item > a.nav-link[ui-sref="app.register"]')

    //conduit header selector 
    cy.get('.banner h1')

    //A place to share your knowledge selector
    cy.get('.banner p')

    //Global feed selector 
    cy.get('li.nav-item > a.nav-link.active').contains('Global Feed')

    //Popular tag selector
    cy.get('.sidebar p')

    //codebaseShow selectore
    cy.get('div.tag-list').find('a.tag-default.tag-pill').contains('codebaseShow')

    // deserunt selectore
    cy.get('div.tag-list').find('a.tag-default.tag-pill').contains('deserunt')

    //lovers selector
    cy.get('favorite-btn[article="$ctrl.article"]').eq(0)

    // read more selector 
    cy.get('.article-preview a.preview-link').find('span:contains("Read more...")').first()

    //-----------------------------------------------

    cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863")
    
    //header selector
    cy.get('div.banner').find('h1:contains("If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!")')

    //Text selector 
    cy.get('.article-content').find('p');

    //Favorit article selector
    cy.get('button.btn.btn-sm.btn-outline-primary').first()

    //Follow selector
    cy.get('button.btn.btn-sm.action-btn.ng-binding.btn-outline-secondary').eq(0)

    //publisher name selector
    cy.get('.info a').eq(0)

    //publishing date selector 
    cy.get('.date').eq(0)

    //profile selector
    cy.get('.article-meta').find('a[ui-sref="app.profile.main({ username:$ctrl.article.author.username })"]').eq(0)

    //rerum selector 
    cy.get('.article-content > .col-xs-12 > ul.tag-list > li:contains("rerum")')

    // quae selector 
    cy.get('.article-content > .col-xs-12 > ul.tag-list > li:contains("quae")')
});