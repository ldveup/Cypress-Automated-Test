it('EM-Test', function() {
  
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
cy.url().should('include', '/easymap');
// Verifica che il titolo della pagina sia corretto
cy.title().should('include', 'EasyMap');  

});

// visit https://app-lab08.eupry.com/app2/#/easymap and insert emai'ldv@eupry.com' then insert the password 'Zdravo9095Leo93?'


