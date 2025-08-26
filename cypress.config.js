const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ghvyej',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
      reporter: "junit",
      reporterOptions: {
      mochaFile: "results/my-tests-[hash].xml",  // nome file personalizzato
      toConsole: true,                           // stampa in console
      overwrite: false  
     } 
  },
});
