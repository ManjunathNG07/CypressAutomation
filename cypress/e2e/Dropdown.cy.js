describe('handle Dropdown ', () => {

    // it('dropdown with select ', () => {
    //     cy.visit("https://testautomationpractice.blogspot.com/")
    //     cy.get("#country")
    //         .select('germany')
    //         .should('have.value', 'germany')

    // })

    // it('dropdown without select ', () => {
    //     cy.visit("https://toponwardticket.com/dummy-ticket/")
    //     cy.get(".select2-selection__arrow").first().click()
    //     cy.get("input[aria-label='Search']").type('Bangalore').type('{enter}')
    //     cy.get(".select2-selection__rendered").first().should('have.text','Bangalore - India ( BLR )')
    // })


    it.skip('Autosuggestion Dropdown ', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('delhi')
        cy.get(".suggestion-title").contains('Delhi University').click()
    })

    it('Dynamic Dropdown ', () => {
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type('cypress automation')
        cy.wait(3000)
        cy.get('div.lnnVSe>div>span').each(($el, index ,$list)=>{
            if($el.text()== 'cypress automation')
               {
                cy.wrap($el).click()
               }

        })

        cy.get('div[role="presentation"]>span').should('have.value','cypress automation')
    })

})