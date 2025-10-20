// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {

    cy.visit('https://app-lab08.eupry.com/app2/#/easymap');
    cy.get('#username').type(username);
    cy.get('#kc-login').click();
    cy.get('#password').type(password);
    cy.get('#kc-login').click();

});

Cypress.Commands.add("logintostaging", (username, password) => {

    cy.visit('app-staging.eupry.com/app2/#/easymap');
    cy.get('#username').type(username);
    cy.get('#kc-login').click();
    cy.get('#password').type(password);
    cy.get('#kc-login').click();

});


Cypress.Commands.add("staginglogin", (username, password) => {

    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
    cy.get('#username').type(username);
    cy.get('#kc-login').click();
    cy.get('#password').type(password);
    cy.get('#kc-login').click();

});