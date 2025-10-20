
it('XXX Title XXX', function() {

  // Login - insert your user credentials
  //cy.visit('https://app-lab08.eupry.com/app2/#/easymap');
  //cy.get('#username').type('ldv@eupry.com');
  //cy.get('#kc-login').click();
  //cy.get('#password').type('Zdravo9095Leo93?');
  //cy.get('#kc-login').click();
  
  cy.login('ldv@eupry.com','Zdravo9095Leo93?');

  // Give alias to popover trigger
  cy.get('#reka-popover-trigger-v-2').as('popoverTrigger');

  // Click popover - open calendar
  cy.get('@popoverTrigger').find('.eupry-icon-wrapper').click();
  
  // Select Year if an earlier year is needed
  //cy.get('#reka-popover-content-v-8 button.w-\\[40\\%\\]').click();
  //cy.contains('2025').click();

  // Select Month
  cy.get('#reka-popover-content-v-8 button.w-\\[60\\%\\]').click();
  cy.contains('April').click();
  
  // Select Day
  cy.get('#reka-popover-content-v-8 > div').find('button[data-value="2025-04-11"]').click();

});     