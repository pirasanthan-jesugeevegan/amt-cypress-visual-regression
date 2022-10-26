// Use the 'describe' to give your test a name
describe('Home', () => {
  // The 'it' property indicates a certain condition you're expecting
  it('Page ', () => {
    // Navigate to the homepage (make sure it's running)
    cy.visit('http://localhost:3000/');

    // Wait for 2 seconds to load page fully
    cy.wait(2000);

    // Take a screenshot
    cy.compareSnapshot('movie');

    // Navigate to people's page
    cy.visit('http://localhost:3000/people');

    // Wait for 2 seconds to load page fully
    cy.wait(2000);

    // Take a screenshot
    cy.compareSnapshot('People');
  });
});
