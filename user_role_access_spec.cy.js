
describe('Testing multiple user accounts or roles', () => {
    //Define a function to perform the common login, logout
    function performTest(user) {
        it(`should perform actions as ${user.role} user`, () => {
          cy.login(user.username, user.password);
          cy.performActions(user.role);
          cy.logout();
        
          });
    }

    // User data for testing 
    const users = [
        {username: 'user1', password: 'password1', role: 'viewer'},
        {username: 'user2', password: 'password2', role: 'user'},
        {username: 'user3', password: 'password3', role: 'manager'},
        {username: 'user4', password: 'password4', role: 'admin'},
      
    ];

    // Loop through each user and perform the test
    users.forEach(performTest);
});