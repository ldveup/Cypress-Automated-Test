it('AT.D-2-Celsius', function() {

  // Login - insert your user credentials 
  cy.logintostaging('ldv@eupry.com','Zdravo9095Leo93!');

  cy.get('input[id="Location ID"]').type('2427');
  cy.get('#Mapping\\ name\\ \\*').type('Cypress Mapping');

  // Give alias to popover trigger
  cy.get('#reka-popover-trigger-v-4').as('popoverTrigger');

  // Click popover - open calendar
  cy.get('#reka-popover-trigger-v-3').click();

  // Select Year if an earlier year is needed
  //cy.get('#reka-popover-content-v-8 button.w-\\[40\\%\\]').click();
  //cy.contains('2025').click();

  // Select Month
  cy.get('button[aria-label="Select month"]').click();
  cy.contains('April').click();

  // Select Day
  //cy.get('#reka-popover-content-v-8 > div').find('button[data-value="2025-04-11"]').click();
  cy.get('button[data-slot="calendar-cell-trigger"][data-value="2025-04-11"]').click();


  cy.get('#Mapping\\ name\\ \\*').click(); // Click outside to close calendar

  // Select Acceptance temp
  cy.get('#Acceptance\\ low\\ °C').type('27');
  cy.get('#Acceptance\\ high\\ °C').type('29');

  // Include Elements in Data Report

    cy.get('#Include\\ mean\\ values').then(($el) => {
      // If the checkbox is disabled, click on Graph to enable it
      if ($el.is(':disabled') || $el.attr('aria-disabled') === 'true') {
        cy.get('#Graph').click(); 
      }
    });

  cy.get('#Include\\ mean\\ values').click({force: true}); // Include Mean Values
  cy.get('#Include\\ MKT\\ \\(Mean\\ Kinetic\\ Temperature\\)').click({force: true}); // Include MKT (Mean Kinetic Temperature)

    cy.get('#Highest\\ values').then(($el) => {
      // If the checkbox is disabled, click on Hot and Cold spots to enable it
      if ($el.is(':disabled') || $el.attr('aria-disabled') === 'true') {
        cy.get('#Hot\\ and\\ cold\\ spots').click(); 
      }
    });

  cy.get('#Highest\\ values').click({force: true}); // Include Highest Values
  cy.get('#Lowest\\ values').click({force: true}); // Include Lowest Values
  cy.get('#Highest\\ average').click({force: true}); // Include Highest average
  cy.get('#Lowest\\ average').click({force: true}); // Include Lowest average


  cy.get('#Threshold\\ for\\ potential\\ hot\\/cold\\ spots\\ ±°C\\ OR\\ Threshold\\ for\\ potential\\ high\\/low\\ spots\\ ±\\%RH').then(($input) => {
    if ($input.is(':disabled') || $input.attr('aria-disabled') === 'true') {
      cy.get('#Potential\\ hot\\ and\\ cold\\ spots').click(); // Include Potencial Hot and Cold Spots
    }
  });

  cy.get('#Table\\ of\\ excursions').click({force: true}); // Include Table of excursions

  // Generate Data
  cy.contains('button', 'Generate data').click({force: true});

  cy.wait(15000);


// SUMMARY TABLE - Verify that the selected elements are present in the Summary Table
cy.get('#app > div.shadow-xs.rounded-sm > div.shadow-xs.rounded-sm.bg-primary-white.mx-16.mt-4 > div:nth-child(3) > div:nth-child(2) > div.w-full.relative.flex.flex-col.h-full.overflow-auto.text-gray-700.bg-white.rounded-sm.border.border-border > div > table > thead')
  .within(() => {
    cy.contains('th', 'Min').should('exist');
    cy.contains('th', 'Mean').should('exist');
    cy.contains('th', 'Max').should('exist');
    cy.contains('th', 'Delta').should('exist');
    cy.contains('th', 'MKT').should('exist');
    cy.contains('th', 'Homogeneity').should('exist');
    cy.contains('th', 'Standard deviation').should('exist');
  });

  // Save MKT value in Celsius
it('Salva MKT value', () => {
  cy.get('td[data-slot="table-cell"].font-bold').invoke('text').then((text) => {
      const mktNumber = parseFloat(text.replace('°C', '').trim());
      Cypress.env('mktValue_Celsius', mktNumber); 
    });
});

// Graph - Verify that the graph is displayed with correct unit (°C)
cy.get('#app > div.shadow-xs.rounded-sm > div.shadow-xs.rounded-sm.bg-primary-white.mx-16.mt-4 > div:nth-child(3) > div:nth-child(2) > div.w-full.relative.flex.flex-col.h-full.overflow-auto.text-gray-700.bg-white.rounded-sm.border.border-border > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', '°C');



// Tables of placements
  cy.contains('div', 'Measurement points ordered by highest single measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Highest
  cy.contains('div', 'Measurement points ordered by lowest single measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Lowest
  cy.contains('div', 'Measurement points ordered by highest average measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Highest Average
  cy.contains('div', 'Measurement points ordered by lowest average measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Lowest Average

// Excursions Table
  cy.contains('div', 'Excursions').parents('div').find('table[data-slot="table"]').should('exist'); // Excursions Table

// Logout 
  cy.contains('button', 'Log out').click();
 
});

it('AT.D-2-Fahreneit', function() {

  // Login - insert your user credentials 
  cy.logintostaging('ldv@eupry.com','Zdravo9095Leo93!');

  cy.get('input[id="Location ID"]').type('2427');
  cy.get('#Mapping\\ name\\ \\*').type('Cypress Mapping');

  // Give alias to popover trigger
  cy.get('#reka-popover-trigger-v-4').as('popoverTrigger');

  // Click popover - open calendar
  cy.get('#reka-popover-trigger-v-3').click();

  // Select Year if an earlier year is needed
  //cy.get('#reka-popover-content-v-8 button.w-\\[40\\%\\]').click();
  //cy.contains('2025').click();

  // Select Month
  cy.get('button[aria-label="Select month"]').click();
  cy.contains('April').click();

  // Select Day
  //cy.get('#reka-popover-content-v-8 > div').find('button[data-value="2025-04-11"]').click();
  cy.get('button[data-slot="calendar-cell-trigger"][data-value="2025-04-11"]').click();

  cy.get('#Mapping\\ name\\ \\*').click(); // Click outside to close calendar

  // Select Fahreneit
  cy.get('#Fahrenheit').click();

  // Select Acceptance temp
  cy.get('#Acceptance\\ low\\ °F').type('80');
  cy.get('#Acceptance\\ high\\ °F').type('84');

  // Include Elements in Data Report

    cy.get('#Include\\ mean\\ values').then(($el) => {
      // If the checkbox is disabled, click on Graph to enable it
      if ($el.is(':disabled') || $el.attr('aria-disabled') === 'true') {
        cy.get('#Graph').click(); 
      }
    });

  cy.get('#Include\\ mean\\ values').click({force: true}); // Include Mean Values
  cy.get('#Include\\ MKT\\ \\(Mean\\ Kinetic\\ Temperature\\)').click({force: true}); // Include MKT (Mean Kinetic Temperature)


    cy.get('#Highest\\ values').then(($el) => {
      // If the checkbox is disabled, click on Hot and Cold spots to enable it
      if ($el.is(':disabled') || $el.attr('aria-disabled') === 'true') {
        cy.get('#Hot\\ and\\ cold\\ spots').click(); 
      }
    });

  cy.get('#Highest\\ values').click({force: true}); // Include Highest Values
  cy.get('#Lowest\\ values').click({force: true}); // Include Lowest Values
  cy.get('#Highest\\ average').click({force: true}); // Include Highest average
  cy.get('#Lowest\\ average').click({force: true}); // Include Lowest average


  cy.get('#Threshold\\ for\\ potential\\ hot\\/cold\\ spots\\ ±°C\\ OR\\ Threshold\\ for\\ potential\\ high\\/low\\ spots\\ ±\\%RH').then(($input) => {
    if ($input.is(':disabled') || $input.attr('aria-disabled') === 'true') {
      cy.get('#Potential\\ hot\\ and\\ cold\\ spots').click(); // Include Potencial Hot and Cold Spots
    }
  });

  cy.get('#Table\\ of\\ excursions').click({force: true}); // Include Table of excursions

  // Generate Data
  cy.contains('button', 'Generate data').click({force: true});

  cy.wait(15000);


// SUMMARY TABLE - Verify that the selected elements are present in the Summary Table
cy.get('#app > div.shadow-xs.rounded-sm > div.shadow-xs.rounded-sm.bg-primary-white.mx-16.mt-4 > div:nth-child(3) > div:nth-child(2) > div.w-full.relative.flex.flex-col.h-full.overflow-auto.text-gray-700.bg-white.rounded-sm.border.border-border > div > table > thead')
  .within(() => {
    cy.contains('th', 'Min').should('exist');
    cy.contains('th', 'Mean').should('exist');
    cy.contains('th', 'Max').should('exist');
    cy.contains('th', 'Delta').should('exist');
    cy.contains('th', 'MKT').should('exist');
    cy.contains('th', 'Homogeneity').should('exist');
    cy.contains('th', 'Standard deviation').should('exist');
  });

// Check MKT value in Celsius and Fahreneit correspondence
it('Verifica MKT in Fahrenheit', () => {
  const mktValue_Celsius = Cypress.env('mktValue_Celsius');
  const mktValue_Fahrenheit = (mktValue_Celsius * 9/5) + 32;

  cy.get('td[data-slot="table-cell"].font-bold').invoke('text').then((text) => {
      const cellValue = parseFloat(text.replace('°F', '').trim());
      expect(cellValue).to.be.closeTo(mktValue_Fahrenheit, 0.01); // margin of error 0.01
    });
});

// Graph - Verify that the graph is displayed with correct unit (°F)
cy.get('#app > div.shadow-xs.rounded-sm > div.shadow-xs.rounded-sm.bg-primary-white.mx-16.mt-4 > div:nth-child(3) > div:nth-child(2) > div.w-full.relative.flex.flex-col.h-full.overflow-auto.text-gray-700.bg-white.rounded-sm.border.border-border > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', '°F');



// Tables of placements
  cy.contains('div', 'Measurement points ordered by highest single measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Highest
  cy.contains('div', 'Measurement points ordered by lowest single measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Lowest
  cy.contains('div', 'Measurement points ordered by highest average measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Highest Average
  cy.contains('div', 'Measurement points ordered by lowest average measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Lowest Average

// Excursions Table
  cy.contains('div', 'Excursions').parents('div').find('table[data-slot="table"]').should('exist'); // Excursions Table

// Logout 
  cy.contains('button', 'Log out').click();

});


it('AT.D-2-Humidity', function() {

  // Login - insert your user credentials 
  cy.logintostaging('ldv@eupry.com','Zdravo9095Leo93!');

  cy.get('input[id="Location ID"]').type('2427');
  cy.get('#Mapping\\ name\\ \\*').type('Cypress Mapping');

  // Give alias to popover trigger
  cy.get('#reka-popover-trigger-v-4').as('popoverTrigger');

  // Click popover - open calendar
  cy.get('#reka-popover-trigger-v-3').click();

  // Select Year if an earlier year is needed
  //cy.get('#reka-popover-content-v-8 button.w-\\[40\\%\\]').click();
  //cy.contains('2025').click();

  // Select Month
  cy.get('button[aria-label="Select month"]').click();
  cy.contains('April').click();

  // Select Day
  //cy.get('#reka-popover-content-v-8 > div').find('button[data-value="2025-04-11"]').click();
  cy.get('button[data-slot="calendar-cell-trigger"][data-value="2025-04-11"]').click();

  cy.get('#Mapping\\ name\\ \\*').click(); // Click outside to close calendar

  // Select Humidity
  cy.get('#Humidity').click();

  // Select Acceptance range
  cy.get('#Acceptance\\ low\\ \\%RH').type('30');
  cy.get('#Acceptance\\ high\\ \\%RH').type('55');

  // Include Elements in Data Report

    cy.get('#Include\\ mean\\ values').then(($el) => {
      // If the checkbox is disabled, click on Graph to enable it
      if ($el.is(':disabled') || $el.attr('aria-disabled') === 'true') {
        cy.get('#Graph').click(); 
      }
    });

  cy.get('#Include\\ mean\\ values').click({force: true}); // Include Mean Values
  cy.get('#Include\\ MKT\\ \\(Mean\\ Kinetic\\ Temperature\\)').click({force: true}); // Include MKT (Mean Kinetic Temperature)


    cy.get('#Highest\\ values').then(($el) => {
      // If the checkbox is disabled, click on Hot and Cold spots to enable it
      if ($el.is(':disabled') || $el.attr('aria-disabled') === 'true') {
        cy.get('#Hot\\ and\\ cold\\ spots').click(); 
      }
    });

  cy.get('#Highest\\ values').click({force: true}); // Include Highest Values
  cy.get('#Lowest\\ values').click({force: true}); // Include Lowest Values
  cy.get('#Highest\\ average').click({force: true}); // Include Highest average
  cy.get('#Lowest\\ average').click({force: true}); // Include Lowest average


  cy.get('#Threshold\\ for\\ potential\\ hot\\/cold\\ spots\\ ±°C\\ OR\\ Threshold\\ for\\ potential\\ high\\/low\\ spots\\ ±\\%RH').then(($input) => {
    if ($input.is(':disabled') || $input.attr('aria-disabled') === 'true') {
      cy.get('#Potential\\ hot\\ and\\ cold\\ spots').click(); // Include Potencial Hot and Cold Spots
    }
  });

  cy.get('#Table\\ of\\ excursions').click({force: true}); // Include Table of excursions

  // Generate Data
  cy.contains('button', 'Generate data').click({force: true});

  cy.wait(15000);


// SUMMARY TABLE - Verify that the selected elements are present in the Summary Table
cy.get('#app > div.shadow-xs.rounded-sm > div.shadow-xs.rounded-sm.bg-primary-white.mx-16.mt-4 > div:nth-child(3) > div:nth-child(2) > div.w-full.relative.flex.flex-col.h-full.overflow-auto.text-gray-700.bg-white.rounded-sm.border.border-border > div > table > thead')
  .within(() => {
    cy.contains('th', 'Min').should('exist');
    cy.contains('th', 'Mean').should('exist');
    cy.contains('th', 'Max').should('exist');
    cy.contains('th', 'Delta').should('exist');
    cy.contains('th', 'MKT').should('exist');
    cy.contains('th', 'Homogeneity').should('exist');
    cy.contains('th', 'Standard deviation').should('exist');
  });

// Graph - Verify that the graph is displayed with correct unit (%RH)
cy.get('#app > div.shadow-xs.rounded-sm > div.shadow-xs.rounded-sm.bg-primary-white.mx-16.mt-4 > div:nth-child(3) > div:nth-child(2) > div.w-full.relative.flex.flex-col.h-full.overflow-auto.text-gray-700.bg-white.rounded-sm.border.border-border > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', '%RH');



// Tables of placements
  cy.contains('div', 'Measurement points ordered by highest single measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Highest
  cy.contains('div', 'Measurement points ordered by lowest single measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Lowest
  cy.contains('div', 'Measurement points ordered by highest average measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Highest Average
  cy.contains('div', 'Measurement points ordered by lowest average measurement').parents('div').find('table[data-slot="table"]').should('exist'); // By Lowest Average

// Excursions Table
  cy.contains('div', 'Excursions').parents('div').find('table[data-slot="table"]').should('exist'); // Excursions Table

// Logout 
  cy.contains('button', 'Log out').click();

});