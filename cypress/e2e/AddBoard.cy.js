import { myOrgPage } from "../pageObjects/MyOrgPage";

describe('Add Board', ()=>{
        before('Login trough backend', () => {
            cy.loginViaBackend(
             Cypress.env('VALID_EMAIL'),
             Cypress.env('VALID_PASSWORD')
            )
    })
    it('Add a new board', ()=>{
        //Ni jedan mi lokator ne radi, izmenio sam ih dosta ali ih nisam nasao kako treba, tako da nista od testa dalje za mene....
    })
})

