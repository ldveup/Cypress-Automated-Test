// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Buffer to store outputs for the current spec
const testOutput = [];

// Helper command to add output for a test
Cypress.Commands.add('logOutput', (message) => {
  testOutput.push(message);
});

// After all tests in the spec, write output to a file
after(() => {
  const filename = `${Cypress.spec.name.replace('.cy.js','').replace('.spec.js','')}-OUTPUT.txt`;
  const content = testOutput.join('\n');
  // Use cy.then to safely call cy.task in after hook
  cy.then(() => cy.task('saveOutput', { filename, content }));
});
