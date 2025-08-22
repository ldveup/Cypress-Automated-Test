
// Generate a Cypress test that Try to insert non-numerical text in Location ID field, try to set end date before start date and see that the error message 'End date must be after start date' is shown, Try to switch from Celsius to Fahreneit to Humidity to Celsius, try to set acceptance low temperature higher than Acceptance high temperature and see that the error message 'Acceptance low must be below acceptance high' is shown, select Humidity and see that Internal only button is not available


it('View Data', function() {
  cy.visit('https://app-lab08.eupry.com/app2/#/easymap');
  
  // Inserisce l'username
    cy.get('#username').type('ldv@eupry.com');
    cy.get('#kc-login').click();
    cy.get('#password').type('Zdravo9095Leo93?');
    cy.get('#kc-login').click();

// Location ID must accept only numerical input
    cy.get('input[id="Location ID"]').type('qwrtyuiopåasdfghjklæø*@§!"#€%&/()=?`$)');
    cy.get('input[id="Location ID"]').should('have.value', '');
    cy.get('input[id="Location ID"]').type('2427');
    cy.get('input[id="Location ID"]').should('have.value', '2427');

// Set end date before start date and check error message  
    cy.get('#reka-popover-trigger-v-3 > div').click();
    cy.get('#reka-popover-content-v-8 > div').find('button[data-value="2025-08-11"]').click();
    cy.get('#reka-popover-trigger-v-3 > div').click();
    cy.get('#end-date-select > div > div.text-xs.text-destructive-foreground.mt-2').should('have.text', 'End date must be after start date');

// Select Fahreneit, Humidity, and Celsius
    cy.get('#Fahrenheit').click();
    cy.get('label[for="Acceptance low °F"]').should('contain.text', '°F');
    cy.get('label[for="Acceptance high °F"]').should('contain.text', '°F');

    cy.get('#Humidity').click();
    cy.get('label[for="Acceptance low %RH"]').should('contain.text', '%RH');
    cy.get('label[for="Acceptance high %RH"]').should('contain.text', '%RH');

    cy.get('#Celsius').click();
    cy.get('label[for="Acceptance low °C"]').should('contain.text', '°C');
    cy.get('label[for="Acceptance high °C"]').should('contain.text', '°C');

// Set acceptance low temperature higher than acceptance high temperature and check error message
    cy.get('input[id="Acceptance low °C"]').type('30');
    cy.get('input[id="Acceptance high °C"]').type('20');
    cy.get('div.mt-2.text-xs.text-destructive-foreground').should('contain.text', 'Acceptance low must be below acceptance high');

// Select Humidity and check that 'Internal only' button is not available
    cy.get('#Humidity').click();
    cy.get('#Internal\\ only').should('have.attr', 'aria-disabled', 'true');

});       

