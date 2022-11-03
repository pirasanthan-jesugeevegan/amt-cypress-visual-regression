const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand({ scale: true, errorThreshold: 0.01 });

Cypress.Commands.add('ignoredElements', (ignoredElementsQuerySelector) => {
  cy
    // wait for content to be ready
    .get(appContentQuerySelector)
    // hide ignored elements
    .then(($app) => {
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          $app.find(ignoredElementsQuerySelector).css('visibility', 'hidden');
          resolve();
          // add a very small delay to wait for the elements to be there, but you should
          // make sure your test already handles this
        }, 300);
      });
    });
});
