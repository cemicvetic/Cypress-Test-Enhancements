// Define a set of actions for the test scenario
const testActions = [
    { action: 'click', selector: '#new-button' },
    { action: 'type', selector: 'input[name="username"]', value: 'JohnDoe' },
    { action: 'type', selector: 'input[name="password"]', value: 'SecurePass123' },
    { action: 'click', selector: 'button[type="login"]' }
];

// Execute each action in the test
testActions.forEach(({ action, selector, value } ) => {
    it(`should perform ${action} on ${selector}`, () => {
        if (action === 'click') {
            cy.get(selector).click();
        } else if (action === 'type') {
            cy.get(selector).type(value);
        }
    });
});
