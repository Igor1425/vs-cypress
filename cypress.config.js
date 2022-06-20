const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://cypress.vivifyscrum-stage.com'
  },
  env: {
    VALID_EMAIL: 'obrenovicigor14.25+r@gmail.com',
    VALID_PASSWORD: 'novasifra123'
  }
});
