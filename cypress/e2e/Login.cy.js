import { loginPage } from '../pageObjects/LoginPage'
import { navigation } from '../pageObjects/navigation'

describe('login', () => {
  let vEmail = 'obrenovicigor14.25+r@gmail.com'
  let vPassword = 'novasifra123'
  before('Home Page', () => {
    cy.visit('https://cypress-api.vivifyscrum-stage.com/'),
      navigation.menuBtn.click(),
      navigation.loginBtn.click(),
      cy.url().should('include', '/login')
  })
  it('Login with valid credentials', () => {
    loginPage.loginPageTitle.should('have.text', 'Log in with your existing account'),
      loginPage.emailField.clear(),
      loginPage.emailField.type(vEmail),
      loginPage.passwordField.clear(),
      loginPage.passwordField.type(vPassword),
      loginPage.submitBtn.click()
    cy.url().should('include', '/my-organizations')
  })
})