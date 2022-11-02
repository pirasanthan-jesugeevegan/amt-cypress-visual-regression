const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.preferences.width = 1280;
          launchOptions.preferences.height = 800;
        }

        return launchOptions;
      });
    },
  },
  viewportWidth: 1280,
  viewportHeight: 800,
});
