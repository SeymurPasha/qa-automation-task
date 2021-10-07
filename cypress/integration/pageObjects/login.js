class login {
    userName() {
     return  cy.get('input[name=username]')
    }
    password() {
     return  cy.get('input[name=password]')
    }
    loginBtn() {
     return  cy.get('input[type=submit]')
    }
}

export default login