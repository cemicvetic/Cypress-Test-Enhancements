// Define a structure for different screen sizes
const screenSizes = [
    { type: 'LargeScreen', width: 1920, height: 1080 },
    { type: 'MediumScreen', width: 1024, height: 768 },
    { type: 'SmallScreen', width: 480, height: 320 }
];



// Test the application's responsiveness across different screen sizes
describe('Responsive Design Tests', () => {
    screenSizes.forEach(({ type, width, height }) => {
        it(`should display correctly on a ${type}`, () => {
            cy.viewport(width, height);
            cy.visit('/');
            cy.get('.responsive-content').should('be.visible');
        });
    });
});
