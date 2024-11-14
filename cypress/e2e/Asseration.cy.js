

describe('Asserations', () => {

    it('implicit asseration', () => {
        cy.visit("https://portalpreprodvapt.opendr.com/")
        //   cy.url().should('include','opendr.com')
        //   cy.url().should('eq','https://portalpreprodvapt.opendr.com/')
        //   cy.url().should('contain','opendr')

        // cy.url().should('include', 'opendr.com')
        //     .should('eq', 'https://portalpreprodvapt.opendr.com/')
        //     .should('contain', 'opendr')
        //     .should('not.contain','advsfsfs')

        cy.url().should('include', 'opendr.com')
            .and('eq', 'https://portalpreprodvapt.opendr.com/')
            .and('contain', 'opendr')


        cy.title().should('include', 'Healthcare. Online.')
            .and('eq', 'Healthcare. Online. Real-Time.')
            .and('contain', 'Online')



        cy.get('.logo > img').should('be.visible')
            .and('exist')


        cy.xpath("//a").should('have.length', '26')


        cy.get("a[href='/signin']").click()
        cy.get("#username").type("shak@vtestcorp.com")
        cy.get("#username").should('have.value', 'shak@vtestcorp.com')
    })

    it('explicit asseration1 ', () => {
        cy.visit("https://portalpreprodvapt.opendr.com/")
        cy.get("a[href='/signin']").click()
        cy.get("#username").type("shak@vtestcorp.com")
        cy.get("div[class='input-icon'] input[placeholder='Password']").type("Vtest@1234")
        cy.get('[type="submit"]').first().click();

        let expText = 'Shak VAPT'

        cy.get("span[class='username'] strong").then((x) => {
            let actText = x.text()
            //BDD style
            expect(actText).to.equal(expText)
            // expect(actText).to.not.equal(expText)

            //TDD style
            assert.equal(actText, expText)
            // assert.notEqual(actText,expText)

        })

    })
})