describe('Blog app', function () {

    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            username: 'test',
            password: 'user'
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user) 
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function () {
        cy.contains('Bloglist')
    })

    it('user can login', function () {
        cy.contains('login').click()
        cy.get('#usernameInput').type('pila')
        cy.get('#passwordInput').type('gorda')
        cy.get('#loginButton').click()
        cy.contains('Welcome')
    })

    it('login fails with wrong password', function() {
        cy.contains('log in').click()
        cy.get('#usernameInput').type('pila')
        cy.get('#passwordInput').type('errada')
        cy.get('#loginButton-button').click()
        cy.get('.message').should('contain', 'Wrong credentials')

        cy.get('html').should('not.contain', 'Welcome')
    })

    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({ username: 'test', password: 'user' })
        })

        it('a new blog can be posted', function() {
            cy.contains('new blog').click()
            cy.get('#inputTitle').type('a blog')
            cy.get('#inputAuthor').type('cypress')
            cy.get('#inputUrl').type('url')
            cy.contains('Post').click()
            cy.contains('was successfully added')
        })
    })
})