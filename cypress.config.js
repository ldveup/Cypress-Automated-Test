const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  projectId: 'ghvyej',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // Optional: custom task
      on('task', {
        saveOutput({ filename, content }) {
          try {
            const outputDir = path.join(__dirname, 'cypress', 'output');
            if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
            fs.writeFileSync(path.join(outputDir, filename), content);
            return null;
          } catch (err) {
            console.error('Error writing output file:', err);
            return null;
          }
        }
      });
    },
    reporter: "junit",
    reporterOptions: {
      mochaFile: "cypress/results/output-[hash].xml",
      toConsole: true,
      overwrite: true
    } 
  },
});
