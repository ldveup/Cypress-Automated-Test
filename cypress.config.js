const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  projectId: 'ghvyej',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // Safe task to write output files
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
      mochaFile: "results/my-tests-[hash].xml",
      toConsole: true,
      overwrite: false  
    } 
  },
});
