const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  projectId: 'ghvyej',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // Task to save output to a file
      on('task', {
        saveOutput({ filename, content }) {
          const outputDir = path.join(__dirname, 'cypress', 'output');
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }
          fs.writeFileSync(path.join(outputDir, filename), content);
          return null;
        }
      });

      // Hook into after:spec to capture results automatically
      on('after:spec', (spec, results) => {
        if (!results || !results.tests) return null;

        const testOutputs = results.tests.map(t => {
          const status = t.state || 'unknown';
          return `${t.title.join(' > ')}: ${status}`;
        }).join('\n');

        const filename = `${spec.name.replace('.cy.js','').replace('.spec.js','')}-OUTPUT.txt`;

        fs.writeFileSync(path.join(__dirname, 'cypress', 'output', filename), testOutputs);
        return null;
      });
    },
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/my-tests-[hash].xml",
      toConsole: true,
      overwrite: false  
    } 
  },
});
