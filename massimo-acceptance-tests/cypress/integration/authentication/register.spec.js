import chance from 'chance';
const globalVariables = require('../../fixtures/global-data.json')
describe("Visit register page and sign up an user", () => {

    beforeEach(() => {
        cy.visit('/register');
    });

    it("Should sign up an user and navigate to Sign In page", () => {
        const username = chance().string();
        const email = chance().email();
        const password = chance().string({ length: 8 });
        cy.get('[data-cy=usernameInput]')
            .type(username)
            .should('have.value', username);
        cy.get('[data-cy=emailInput]')
            .type(email)
            .should('have.value', email);
        cy.get('[data-cy=passwordInput]')
            .type(password)
            .should('have.value', password);
        cy.get('[data-cy=confirmPasswordInput]')
            .type(password)
            .should('have.value', password);
        cy.get('[data-cy=signUpButton]').click();
        cy.get('.ng-trigger > .ng-tns-c19-0').contains('Registered succesfully');
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:4200/')
        });
        cy.contains('Sign in');
    });


    it("Should NOT sign up an user because it already exits", () => {
        cy.get('[data-cy=usernameInput]')
            .type(globalVariables.username)
            .should('have.value', globalVariables.username);
        cy.get('[data-cy=emailInput]')
            .type(globalVariables.email)
            .should('have.value', globalVariables.email);
        cy.get('[data-cy=passwordInput]')
            .type(globalVariables.password)
            .should('have.value', globalVariables.password);
        cy.get('[data-cy=confirmPasswordInput]')
            .type(globalVariables.password)
            .should('have.value', globalVariables.password);
        cy.get('[data-cy=signUpButton]').click();
        cy.get('.ng-trigger > .ng-tns-c19-0').contains('This account already exists');
    });

});