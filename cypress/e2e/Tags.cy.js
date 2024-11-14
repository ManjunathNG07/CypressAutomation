describe('MyTestSuite', () => {
//back //forword  //reload
    it('Tags ', () => {
        cy.visit('https://demo.opencart.com/')

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)').click()

        cy.go('back');

        cy.go('forward')

        cy.go(-1);
        cy.go(1)

        cy.reload()


        


    })

})