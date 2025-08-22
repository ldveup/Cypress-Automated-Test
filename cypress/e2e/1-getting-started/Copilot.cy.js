// Cypress test che apre Eupry Monitoring e faccia login con le credenziali
it('EM-Test', function() {
  // Visita la pagina di login di Eupry Monitoring
  cy.visit('https://app.eupry.com/monitoring');
  
  // Inserisce l'username
    cy.get('#username').type('ldv@eupry.com');
    // Premi il pulsante di Login
    cy.get('#kc-login').click();
    // Attende che la pagina di login sia caricata
    // Inserisce la password
    cy.get('#password').type('Zdravo9095Leo93?');
    // Clicca sul pulsante di login
    cy.get('#kc-login').click();
    // Comando per accettare i Cookies
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    // Attende che la pagina di monitoraggio sia caricata
    cy.url().should('include', '/monitoring');
    // Verifica che il titolo della pagina sia corretto
    cy.title().should('include', 'Eupry Monitoring');
    
});
    // ==== End Cypress Studio ====


  
