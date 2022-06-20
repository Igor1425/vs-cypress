class LoginPage{
    get loginPageTitle(){
        return cy.get('h1')
    }
    get emailField(){
        return cy.get('input[type="email"]')
    }

    get passwordField(){
        return cy.get('input[type="password"]')
    }
    get submitBtn(){
        return cy.get('button[type="submit"]')
    }
    get backHomeBtn(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com"]')
    }
    get orLoginWith(){
        return cy.get('p[class="vs-u-gap--bottom vs-u-gap--top vs-c-auth-modal__body-text vs-u-text--center"]')
    }
    get errMsg(){
        return cy.get('span[class="el-form-item__error"]')
    }
}
export const loginPage = new LoginPage ()