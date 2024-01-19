// Array of test cases with inputs and expected outputs
const testCases = [
    { input: 'input1', expectedOutput: 'output1' },
    { input: 'input2', expectedOutput: 'output2' },
    { input: 'input3', expectedOutput: 'output3' }
];

// Iterate over each test case using Cypress's `it` function
testCases.forEach(({ input, expectedOutput }) => {
    it(`should type ${input} and expect ${expectedOutput}`, () => {
        cy.get('#input').type(input);
        cy.get('#submit').click();
        cy.get('#output').should('have.text', expectedOutput);
    });
});