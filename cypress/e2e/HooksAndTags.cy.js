describe('MyTestSuite', () => {


    //hooks
    //before   //after  //beforeEach   //afterEach
    //Tags    //skip //only
    before(() => {
        cy.log('**********  lanuch App *************')
    })

    after(() => {
        cy.log('**********  close App *************')
    })

    beforeEach(() => {
        cy.log('**********  login *************')
    })

    afterEach(() => {
        cy.log('**********  logout *************')
    })

    it('search', () => {
        cy.log('**********  search *************')
    })

    it('add to cart', () => {
        cy.log('**********  add to cart *************')
    })

    it('Buy', () => {
        cy.log('**********  Buy *************')
    })
})