const urlPath = "/index.php?search"

const searchPageElements = {
  searchComponent: () => cy.get('#bodyContent'),
  searchInput: () => cy.get('#ooui-php-1'),
  searchResultTitle: () => cy.get('.mw-search-exists'),
  searchButton: () => cy.get('.oo-ui-actionFieldLayout-button [type="submit"]'),
  searchHeader: () => cy.get('#firstHeading')
}

describe('wikipedia search page', () => {
  beforeEach(() => {
    cy.visit(urlPath);
  })

  it('search component visual test ',  () => {
    cy.wait(250)
    searchPageElements.searchHeader().click()
    searchPageElements.searchComponent().compareSnapshot('search-component', 0.5);
  });

  it('simple search logic test with clicking search button',  () => {
    let testString = 'Test';

    searchPageElements.searchInput().type(`${testString}`)
    searchPageElements.searchButton().click()

    searchPageElements.searchResultTitle()
        .should('have.text',`\nThere is a page named "${testString}" on Wikipedia`)
  });
})
