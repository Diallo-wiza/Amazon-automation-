/**
* @author <boubacar-siddy.diallo@wizacha.com>
* @copyright Copyright (c) Wizacha
* @license Proprietary
*/


describe('Amazon interface login', () => {
    context('Navigation', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(1440,1100)
            //cy.viewport('iphone-6') follow this link https://docs.cypress.io/api/commands/viewport#Syntax in order to choose the screen you want to test
            cy.visit('/');
            cy.get('#nav-link-accountList').trigger('mouseover');
            cy.get('#nav-flyout-ya-newCust > a').click({force:true});
          })

        it('Login and vendor creation', () => {
            cy.get('#ap_customer_name').click().type('Boubacar');
            cy.get('#ap_email').click().type('boubacar_test@gmail.com');
            cy.get('#ap_password').click().type('SiddyGN224!');
            cy.get('#ap_password_check').click().type('SiddyGN224!');
            //cy.get('#continue').click();
            
        })
    })
})