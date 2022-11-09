const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,

    retries: {
      runMode: 2,
      openMode: 0,
    },

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,

    baseUrl: "https://en.wikipedia.org/w",

    setupNodeEvents(on, config) {
      require('cypress-image-diff-js/dist/plugin')(on, config);
    }
  },
});
