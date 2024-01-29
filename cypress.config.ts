const { defineConfig } = require('cypress')

module.exports = defineConfig({
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: false,
    step_definitions: './cypress/e2e/login/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile:false,
    chromeWebSecurity: false,

  },
})