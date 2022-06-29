class MyOrgPage {
    get novaOrg() {
        return cy.get('a[class="vs-c-list__item has-caret"')
    }
    get addBoard() {
        return cy.get('li[title="Add new Board"]');
    }
    get selectOrg() {
        return cy.get('input[autocomplete="off"]')
    }
    get boardTitle() {
        return cy.get('input[placeholder="Enter title..."]')
    }
    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }
    get selectScrum() {
        return cy.get('span[name="type_scrum"]')
    }
    get finishBtn() {
        return cy.get('button').contains('Finish')
    }
    get errMsg(){
        return cy.get('p').contains("You don't have permission to do this, your free trial period has ended.")
    }
    clickNovaOrglink() {
        this.novaOrgLink()[0].click
    }
    clickAddBoardLink() {
        this.clickaddBoardLink()[0].click
    }
    clickBoardTitleLink() {
        this.clickboardTitleLink().click
    }
    clicNextBtnLink() {
        this.clicnextBtnLink().click
    }
    clickSelectScrum() {
        this.selectScrumLink().click
    }
    clickFinishBtnLink() {
        this.clickfinishBtnLink().click
    }

}

export const myOrgPage = new MyOrgPage()