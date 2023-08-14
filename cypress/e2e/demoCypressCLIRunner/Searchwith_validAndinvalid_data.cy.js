describe('Search  with valid and Invalid data' , () => {
    beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    })
    it('Searches for the valid text  "Apple" and  verify the results', () => {
     // Enter the search data and submit the form
      cy.get('[name="search"]').eq(0).type('Apple')
      cy.get('.type-text').click()
      // Verify the search results
      cy.url().should('include', 'search=Apple')
      cy.contains('Search - Apple').should('be.visible')
      cy.get('.product-layout').should('have.length.gt', 0)
    })
    it('Displays message with no search results for invalid search term', () => {
      // Enter search term and verify returns no results and submit form
      cy.get('[name="search"]').eq(0).type('xyz')
      cy.get('.type-text').click()
      // Verify message for no search results
      cy.contains('There is no product that matches the search criteria.').should('be.visible')
    })
   })
   