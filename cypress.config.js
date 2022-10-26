const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.preferences.width = 1024;
          launchOptions.preferences.height = 768;
        }

        return launchOptions;
      });
    },
  },
  viewportWidth: 1024,
  viewportHeight: 768,
});
