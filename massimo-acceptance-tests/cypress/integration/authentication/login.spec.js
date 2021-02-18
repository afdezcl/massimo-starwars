import chance from 'chance';
const globalVariables = require('../../fixtures/global-data.json')
describe("Visit login page and sign in an user", () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it("Should sign in and navigate to ships page", () => {
        cy.get('[data-cy=emailInput]')
            .type(globalVariables.email)
            .should('have.value', globalVariables.email);
        cy.get('[data-cy=passwordInput]')
            .type(globalVariables.password)
            .should('have.value', globalVariables.password);
        cy.get('[data-cy=signInButton]').click();
        cy.get('.ng-trigger > .ng-tns-c19-0').contains('Welcome');
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:4200/ships')
        });
        expect(localStorage.getItem('JWT_TOKEN')).to.be.null;
    });

    it("Should NOT sign in and show alert", () => {
        const password = chance().string({ length: 8 });
        cy.get('[data-cy=emailInput]')
            .type(globalVariables.email)
            .should('have.value', globalVariables.email);
        cy.get('[data-cy=passwordInput]')
            .type(password)
            .should('have.value', password);
        cy.get('[data-cy=signInButton]').click();
        cy.get('.ng-trigger > .ng-tns-c19-0').contains('Email or password was not correct');
    });

    it("Should sign in and logout", () => {
        cy.login(globalVariables.email, globalVariables.password);
        cy.get('#dropdownMenuButton').click();
        cy.get('.dropdown-menu > :nth-child(2)').click();
        expect(localStorage.getItem('JWT_TOKEN')).to.be.null;
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:4200/')
        });
    });

});