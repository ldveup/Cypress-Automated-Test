// Write a test that tries to do a SQL injection to the login page of eupry Moniitoringng
describe('SQL Injection Test', () => {
  it('should attempt SQL injection on login', () => {
    cy.visit('https://app.eupry.com/monitoring');
    

    cy.get('#username').type("' OR '1'='1");
    cy.get('#kc-login').click();
    cy.get('#password').type("' OR '1'='1");
    cy.get('#kc-login').click();
    cy.contains('Invalid username or password').should('exist');
  });
});
  /* ==== End Cypress Studio ==== */
//  This test attempts to perform a SQL injection attack on the login page of eupry Monitoringng. It inputs a common SQL injection string into both the username and password fields and submits the form. The test then checks for an error message indicating that the login was unsuccessful, which is expected behavior for a secure application. This test is designed to ensure that the application is resilient against SQL injection attack
// attempts and does not allow unauthorized access through such vulnerabilities.

// Add some more attempts
// to perform SQL injection attacks with different payloads
describe('Additional SQL Injection Attempts', () => {
  it('should try different SQL injection payloads', () => {
    cy.visit('https://app.eupry.com/monitoring');
    
    // Attempt with a different SQL injection payload
    cy.get('#username').type("' OR '1'='1' -- ");
    cy.get('#kc-login').click();

    cy.get('#password').type("' OR '1'='1' -- ");
    cy.get('#kc-login').click();
    cy.contains('Invalid username or password').should('exist');
    cy.get('#reset-login > span').click();


    // Another attempt with a different payload
    cy.get('#username').clear().type("' OR '1'='1' /*");
    cy.get('#kc-login').click();
    cy.get('#password').clear().type("' OR '1'='1' /*");
    cy.get('#kc-login').click();
    cy.contains('Invalid username or password').should('exist');
  });
});

// This additional test suite includes more attempts to perform SQL injection attacks with different payloads. Each attempt clears the previous input and submits the form again, checking for the same error message to ensure that the application remains secure against various SQL injection techniques.
// This test is designed to ensure that the application is resilient against SQL injection attack attempts and does not allow unauthorized access through such vulnerabilities.

// Add more extreme SQL injection attempts
describe('Extreme SQL Injection Attempts', () => {
    it('should try extreme SQL injection payloads', () => {
        cy.visit('https://app.eupry.com/monitoring');
        
        // Extreme SQL injection attempt
        cy.get('#username').type("' OR '1'='1' UNION SELECT * FROM users -- ");
        cy.get('#kc-login').click();
        cy.get('#password').type("' OR '1'='1' UNION SELECT * FROM users -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
        cy.get('#reset-login > span').click();

    
        // Another extreme attempt
        cy.get('#username').clear().type("' OR '1'='1' AND (SELECT COUNT(*) FROM users) > 0 -- ");
        cy.get('#kc-login').click();
        cy.get('#password').clear().type("' OR '1'='1' AND (SELECT COUNT(*) FROM users) > 0 -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
    });
    }
);
// This test suite includes extreme SQL injection attempts that try to exploit the application further. Each attempt
// clears the previous input and submits the form again, checking for the same error message to ensure that the application remains secure against these more aggressive SQL injection techniques.

//Add additional extreme SQL Injection attempts
describe('Additional Extreme SQL Injection Attempts', () => {
    it('should try additional extreme SQL injection payloads', () => {
        cy.visit('https://app.eupry.com/monitoring');
        
        // Additional extreme SQL injection attempt
        cy.get('#username').type("' OR '1'='1' AND (SELECT * FROM information_schema.tables) -- ");
        cy.get('#kc-login').click();
        cy.get('#password').type("' OR '1'='1' AND (SELECT * FROM information_schema.tables) -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
        cy.get('#reset-login > span').click();

    
        // Another additional extreme attempt
        cy.get('#username').clear().type("' OR '1'='1' AND (SELECT * FROM information_schema.columns) -- ");
        cy.get('#kc-login').click();
        cy.get('#password').clear().type("' OR '1'='1' AND (SELECT * FROM information_schema.columns) -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
    });
});
// This test suite includes additional extreme SQL injection attempts that try to exploit the application further. Each attempt
// clears the previous input and submits the form again, checking for the same error message to ensure
// that the application remains secure against these more aggressive SQL injection techniques.

// Add even more extreme SQL Injection attempts
describe('Even More Extreme SQL Injection Attempts', () => {
    it('should try even more extreme SQL injection payloads', () => {
        cy.visit('https://app.eupry.com/monitoring');
        
        // Even more extreme SQL injection attempt
        cy.get('#username').type("' OR '1'='1' AND (SELECT * FROM users WHERE 'a'='a') -- ");
        cy.get('#kc-login').click();
        cy.get('#password').type("' OR '1'='1' AND (SELECT * FROM users WHERE 'a'='a') -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
        cy.get('#reset-login > span').click();

    
        // Another even more extreme attempt
        cy.get('#username').clear().type("' OR '1'='1' AND (SELECT COUNT(*) FROM users WHERE 'a'='b') > 0 -- ");
        cy.get('#kc-login').click();
        cy.get('#password').clear().type("' OR '1'='1' AND (SELECT COUNT(*) FROM users WHERE 'a'='b') > 0 -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
    });
}
);
// This test suite includes even more extreme SQL injection attempts that try to exploit the application further.
// Each attempt clears the previous input and submits the form again, checking for the same error message
// to ensure that the application remains secure against these more aggressive SQL injection techniques.

// Add some more but keep the same structure as above and make more realistic attempts
describe('Realistic SQL Injection Attempts', () => {
    it('should try realistic SQL injection payloads', () => {
        cy.visit('https://app.eupry.com/monitoring');
        
        // Realistic SQL injection attempt
        cy.get('#username').type("' OR '1'='1' AND username IS NOT NULL -- ");
        cy.get('#kc-login').click();
        cy.get('#password').type("' OR '1'='1' AND password IS NOT NULL -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
        cy.get('#reset-login > span').click();

    
        // Another realistic attempt
        cy.get('#username').clear().type("' OR '1'='1' AND (SELECT COUNT(*) FROM users WHERE username = 'admin') > 0 -- ");
        cy.get('#kc-login').click();
        cy.get('#password').clear().type("' OR '1'='1' AND (SELECT COUNT(*) FROM users WHERE password = 'admin') > 0 -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
    });
});
// This test suite includes realistic SQL injection attempts that mimic common attack patterns.
// Each attempt clears the previous input and submits the form again, checking for the same error message
// to ensure that the application remains secure against these realistic SQL injection techniques.  

// Add some brute force attempts to the SQL Injection test
describe('Brute Force SQL Injection Attempts', () => {
    it('should try brute force SQL injection payloads', () => {
        cy.visit('https://app.eupry.com/monitoring');
        
        // Brute force SQL injection attempt
        cy.get('#username').type("' OR '1'='1' -- ");
        cy.get('#kc-login').click();
        cy.get('#password').type("' OR '1'='1' -- ");
        cy.get('#kc-login').click();
        cy.contains('Invalid username or password').should('exist');
        cy.get('#reset-login > span').click();

    
        // Another brute force attempt
        for (let i = 0; i < 9; i++) {
            cy.get('#username').type(`' OR '1'='${i}' -- `);
            cy.get('#kc-login').click();
            cy.get('#password').type(`' OR '1'='${i}' -- `);
            cy.get('#kc-login').click();
            cy.contains('Invalid username or password').should('exist');
            cy.get('#reset-login > span').click();
        }
    });
});
// This test suite includes brute force SQL injection attempts that try to exploit the application by iterating through
// different values. Each attempt clears the previous input and submits the form again, checking for the same error message
// to ensure that the application remains secure against these brute force SQL injection techniques.  