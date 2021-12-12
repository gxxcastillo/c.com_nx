describe('ui: Image component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=image--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Image!');
    });
});
