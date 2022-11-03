describe('Visual Regression', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
  });
  it('Take screenshot of All pages', () => {
    // Take a screenshot
    const pages = ['movie', 'people'];
    for (const page of pages) {
      page === 'people' && cy.get('a[href="/people"]').click() && cy.wait(2000);
      cy.compareSnapshot(page, {
        capture: 'fullPage',
        errorThreshold: 0.01,
      });
    }
  });
  it('Take screenshot of an element', () => {
    // Take a screenshot of a card
    const pages = ['movie', 'people'];

    for (const page of pages) {
      if (page === 'people') {
        cy.get('a[href="/people"]').click();
        cy.wait(5000);
        cy.get('[test-id="person_anne-hathaway"]')
          .scrollIntoView()
          .should('be.visible')
          .compareSnapshot('card-person_anne-hathaway');
      } else {
        cy.get('[test-id="movie_10681"]')
          .scrollIntoView()
          .should('be.visible')
          .compareSnapshot('card-movie_10681');
      }
    }
  });
});
