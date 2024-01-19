// Put all your configurations in one place
const configs = [
    { environment: 'prod', baseUrl: 'https://example.com', user: 'user1', password: 'password1' },
    { environment: 'qa', baseUrl: 'https://qa.example.com', user: 'user2', password: 'password2' }
];

// To create test suites, iterate over each configuration
configs.forEach((config) => {
    describe(`My App (${config.environment})`, () => {
        beforeEach(() => {
            cy.visit(config.baseUrl);
            cy.login(config.user, config.password);
        });

        it('should perform actions based on configuration', () => {
            // Configure test actions based on the configuration
        });
    });
});