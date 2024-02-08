describe('Visit browserstack', () => {
  beforeEach('visit', () => {
    cy.visit('/');
  });
  it('verify', () => {
    cy.url().should('include', 'browserstack');
  });
});
