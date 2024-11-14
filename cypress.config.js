const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // Initialize Mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
