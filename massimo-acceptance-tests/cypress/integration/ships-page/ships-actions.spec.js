const globalVariables = require('../../fixtures/global-data.json')
describe("Visit ships pages to interact", () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login(globalVariables.email, globalVariables.password);
        cy.wait(5000);
    });

    it("Should navigate between ships pages", () => {
        cy.get('.pagination-next > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible');
        cy.get(':nth-child(1) > .panel-body > .img-fluid').should('be.visible');

        cy.get('.pagination-next > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible');
        cy.get(':nth-child(1) > .panel-body > .img-fluid').should('be.visible');

        cy.get('.pagination-next > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible');
        cy.get(':nth-child(1) > .panel-body > .img-fluid').should('be.visible');

        cy.get('.pagination-previous > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible');
        cy.get(':nth-child(1) > .panel-body > .img-fluid').should('be.visible');

        cy.get('.pagination-previous > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible');
        cy.get(':nth-child(1) > .panel-body > .img-fluid').should('be.visible');

        cy.get('.pagination-previous > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible');
        cy.get(':nth-child(1) > .panel-body > .img-fluid').should('be.visible');
    });

    it("Should show ships details", () => {
        cy.get('body').scrollIntoView({ offset: { top: '500', left: 0 } });
        cy.get(':nth-child(3) > .panel-heading > .panel-title').then(($title) => {
            cy.get(':nth-child(3) > .panel-body > .img-fluid').click();
            const title = $title.text();
            cy.contains(title);
        });
        cy.get('.btn').click();
    });
});