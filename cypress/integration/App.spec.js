describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with Fall CS courses', () => {
    cy.visit ('/');cy.get('[data-cy=Networking]').should('contain', 'Networking');
  });

  it('Disables the AI course when ML is selected as they are at the same time', () => {
        cy.visit ('/');
        cy.get('[data-cy=Networking]').click();
        cy.get('[data-cy=ML]').should('be.disabled');
      });
});
