class Navigation{
    get mainTitle(){
        return cy.get('h1')
    }
    get homePageDescription(){
        return cy.get('p[class="vsp-u-gap--bottom-xxl"]')
    }
    get startFreeTrail(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/pricing"]')
    }
    get insights(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/insights"]')
    }
    get features(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/features"]')
    }
    get howItWorks(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/how-it-works"]')
    }
    get about(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/about"]')
    }
    get contact(){
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/contact-us"]')
    }
    get downloadApp(){
        return cy.get('a[class="vsp-u-text-uppercase vsp-c-btn--nowrap "]')
    }
    get menuBtn(){
        return cy.get('svg[class="vsp-c-icon"]')
    }
    get loginBtn(){
        return cy.get('a[class="vsp-u-text-uppercase"]')
    }
    clickstartFreeTrail(){
        this.startFreeTrail().click
    }
    clickfeatures(){
        this.features().click
    }
    clickhowItWorks(){
        this.howItWorks().click
    }
    clickabout(){
        this.about().click
    }
    clickcontact(){
        this.contact().click
    }
    clickdownLoadApp(){
        this.downloadApp().click
    }
    clickloginBtn(){
        this.loginBtn().click
    }
}
export const navigation = new Navigation ()