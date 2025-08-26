it('XXX Title XXX', function() {

  cy.visit('https://app-lab08.eupry.com/app2/#/easymap');
  
  // Login
  cy.get('#username').type('ldv@eupry.com');
  cy.get('#kc-login').click();
  cy.get('#password').type('Zdravo9095Leo93?');
  cy.get('#kc-login').click();



});     