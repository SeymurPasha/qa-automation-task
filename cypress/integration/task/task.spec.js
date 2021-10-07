/// <reference types="cypress" />
import Login from '../pageObjects/login'
import Errors from '../pageObjects/errorMessages'

describe('QA Automation test task', () => {
 
  beforeEach(() => {
    cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
  })

  it('Fill in the “Username” and “Password” input fields and click the “LogIn” button', () => {
    
    const login = new Login()
    login.userName().type(Cypress.env('username'))
    login.password().type(Cypress.env('password'))
    login.loginBtn().click()
  })


  it('Use an assertion library and verify that all the elements are present on the page', () => {
    
    const login = new Login()
    const errors = new Errors()
    
    login.userName()
    login.password()
    login.loginBtn()

    errors.message().should('have.length', 2)

    cy.wait(1000)
  })

  it('Verify that all the error messages appear', () => {

    const errors = new Errors()
    const login = new Login()

    login.loginBtn().click()
    errors.message().first().should('have.text', 'Please enter username.')
    errors.message().last().should('have.text', 'Please enter your password.')
    cy.wait(1000)

    login.userName().type(Cypress.env('username'))
    login.password().type(Cypress.env('password'))
    login.loginBtn().click()

    errors.message().first().should('have.text', 'No account found with that username.')

    cy.wait(1000)
  })

  it('Create a test-case that will fail because of unsuccessful login', () => {
    
    const errors = new Errors()
    const login = new Login()
    login.userName().type(Cypress.env('username'))
    login.password().type(Cypress.env('password'))
    login.loginBtn().click()
    
    errors.message().first().should('have.length', 0)

    cy.wait(1000)
  })


})