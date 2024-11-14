describe('Check UI Elements', () => {

    it('Checking Radio Buttons', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").should('be.visible')
        cy.get("input#male").should('be.enabled')
        cy.get("input#male").should('have.attr', 'type', 'radio')

        //Selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

    })

    it('Checking Ckeckboxs', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of element
        //   cy.get("input#sunday").should('be.visible')

        //Selecting checkbox
        //  cy.get("input#sunday").check().should('be.checked')

        //Unselecting checkbox
        // cy.get("input#sunday").uncheck().should('not.be.checked')

        //selcting multiple elements
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //selecting first and last element
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')


    })


})