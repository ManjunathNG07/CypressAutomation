import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
describe("Mouse Operation", () => {

    it('MouseHover', () => {
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
            .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')
    });

    it('Right click', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get('.context-menu-icon-copy > span').should('be.visible');
        // //Appproch 02
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    });

    it('Double click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick')
        cy.frameLoaded("#iframeResult");
        //approach 01- trigger
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        // cy.iframe('#iframeResult').find('#demo').should('have.text','Hello World')

        //approach 02-dblClick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#demo').should('have.text', 'Hello World')

    });

    it('DragAndDrop using plugin', () => {
        cy.visit('https://practice.expandtesting.com/drag-and-drop')
        cy.wait(3000)
        cy.get('#column-a').drag('#column-b')
        cy.wait(5000)

    });

    it.only('Scrolling Page', () => {
        cy.visit('https://history.state.gov/countries/all')
        cy.get("a[href='/countries/india']").scrollIntoView({duration:2000})
        cy.get("a[href='/countries/india']").should('be.visible')

        cy.get("section[class='hsg-grid hsg-footer-bottom'] h4:nth-child(1)").scrollIntoView()

    });
})