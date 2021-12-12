describe('ui: Meter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=meter--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Meter!');
    });
});
