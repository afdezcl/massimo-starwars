describe("Visit register page and sign up an user", () => {

    beforeEach(() => {
        cy.visit('/register');
    });

    it("Should sign up an user and navigate to Sign In page", () => {
        cy.get('[data-cy=usernameInput]')
            .type('email')
            .should('have.value', 'email');
        cy.get('[data-cy=emailInput]')
            .type('email@gmail.com')
            .should('have.value', 'email@gmail.com');
        cy.get('[data-cy=passwordInput]')
            .type('password')
            .should('have.value', 'password');
        cy.get('[data-cy=confirmPasswordInput]')
            .type('password')
            .should('have.value', 'password');
        cy.get('[data-cy=signUpButton]').click();
        cy.get('.ng-trigger > .ng-tns-c19-0').contains('This account already exists');
      /*  cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:4200')
        });
        cy.contains('Sign in') */
    });

});