// Set up an array of page paths with their expected headers
const pageTests = [
    { path: '/', expectedHeader: 'Home Page Header' },
    { path: '/about', expectedHeader: 'About Page Header' },
    { path: '/contact', expectedHeader: 'Contact Page Header' }
];

// Iterate through each page test
  pageTests.forEach(({ path, expectedHeader }) => {
    it(`should navigate to ${path} and check the header`, () => {
        cy.visit(path);
        cy.get('h1').should('have.text', expectedHeader);
    });
});
