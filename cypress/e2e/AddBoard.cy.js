import { myOrgPage } from "../pageObjects/MyOrgPage";


describe('Add Board', () => {
    before('Login trough backend', () => {

        cy.loginViaBackend(
            Cypress.env('VALID_EMAIL'),
            Cypress.env('VALID_PASSWORD')
        ).then(() => {
            cy.visit('https://cypress.vivifyscrum-stage.com/my-organizations')
        })

    })
    it('Add a new board', () => {
        myOrgPage.addBoard.first().click(),
            myOrgPage.selectOrg.first().should('contain.value', 'novaOrg'),
            cy.wait(3000),
            myOrgPage.boardTitle.type('Novi'),
            myOrgPage.nextBtn.click(),
            myOrgPage.selectScrum.first().click(),
            myOrgPage.nextBtn.click(),
            myOrgPage.nextBtn.click(),
            myOrgPage.nextBtn.click(),
            myOrgPage.finishBtn.click()
            cy.wait(3000)
            myOrgPage.errMsg.should('have.text', "You don't have permission to do this, your free trial period has ended.")

    })
})
