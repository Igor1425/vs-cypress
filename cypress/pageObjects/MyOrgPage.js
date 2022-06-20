class MyOrgPage{
    get novaOrg(){
        return cy.get('a[class="vs-c-list__item has-caret"')
    }
    get addBoard(){
        return cy.get('div[class="vs-c-media"]').last(0);
    }
    get selectOrg(){
        return cy.get('input[autocomplete="off"]')
    }
    get boardTitle(){
        return cy.get('input[type="text"]')
    }
    get nextBtn(){
        return cy.get('button[class="el-button vs-c-button-focus el-button--success el-button--large"]')
    }
    get selectScrum(){
        return cy.get('span[class="vs-c-radio-check"]')
    }
    get finishBtn(){
        return cy.get('button[class="el-button vs-c-button-focus el-button--success el-button--large"]')
    }
    clickNovaOrglink(){
        this.novaOrgLink().click
    }
    clickAddBoardLink(){
        this.clickaddBoardLink().click
    }
    clickBoardTitleLink(){
        this.clickboardTitleLink().click
    }
    clicNextBtnLink(){
        this.clicnextBtnLink().click
    }
    clickSelectScrum(){
        this.selectScrumLink().click
    }
    clickFinishBtnLink(){
        this.clickfinishBtnLink().click
    }

}

export const myOrgPage = new MyOrgPage()