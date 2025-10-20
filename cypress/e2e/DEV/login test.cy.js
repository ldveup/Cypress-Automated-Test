describe('Login Session Timeout Stress Test', () => {
  const ITERATIONS = 19;
  const WAIT_TIME = 121000; // 121 seconds
  const REPEAT_TEST = 10; // Number of times to repeat the full test

  // Ignore uncaught exceptions globally
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Session expired due to inactivity')) {
      return false;
    }
    return false; // ignore all other exceptions if needed
  });

  Cypress._.times(REPEAT_TEST, (repeat) => {
    it(`Full test repetition #${repeat + 1}`, () => {
      cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');

      Cypress._.times(ITERATIONS, (i) => {
        cy.log(`Iteration ${i + 1} of repetition ${repeat + 1}`);

        // Perform login
        cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
        cy.get('#username').type('ldv@eupry.com');
        cy.get('#kc-login').click();
        cy.get('#password').type('Zdravo9095Leo93?');
        cy.get('#kc-login').click();

        // Wait 121 seconds to simulate inactivity
        cy.wait(WAIT_TIME);

        // Trigger mouse movement
        cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
        cy.wait(1000);
      });
    });
  });
});

//describe('Login Session Timeout Stress Test', () => {
//  const ITERATIONS = 19;
//  const WAIT_TIME = 121000; // 121 seconds
//
//  it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    
//    Cypress._.times(ITERATIONS, (i) => {
//      cy.log(`Iteration ${i + 1}`);
//
//      cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//      cy.get('#username').type('ldv@eupry.com');
//      cy.get('#kc-login').click();
//      cy.get('#password').type('Zdravo9095Leo93?');
//      cy.get('#kc-login').click();
//
//      cy.wait(WAIT_TIME);
//
//      cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//      cy.wait(1000);
//      // Ignore uncaught exceptions from the app (don't fail the test)
//      Cypress.on('uncaught:exception', (err, runnable) => {
//      
//      return false;
//});
//
//
//    });
//  });

//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//it(`should perform ${ITERATIONS} logins with inactivity timeout check`, () => {
//  cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//  
//  Cypress._.times(ITERATIONS, (i) => {
//    cy.log(`Iteration ${i + 1}`);
//
//    cy.visit('https://app-staging.eupry.com/monitoring/#/acc/1');
//    cy.get('#username').type('ldv@eupry.com');
//    cy.get('#kc-login').click();
//    cy.get('#password').type('Zdravo9095Leo93?');
//    cy.get('#kc-login').click();
//
//    cy.wait(WAIT_TIME);
//
//    cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
//    cy.wait(1000);
//    // Ignore uncaught exceptions from the app (don't fail the test)
//    Cypress.on('uncaught:exception', (err, runnable) => {
//    
//    return false;
//;
//
//
//  });
//});
//
//
//;
//
//