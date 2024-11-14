
describe('CSS selectors', () => {


    it('Css selector 1', () => {
      cy.visit("https://portalpreprodvapt.opendr.com/")
      cy.get("a[href='/signin']").click()
      cy.get("#username").type("shak@vtestcorp.com")
      cy.get("div[class='input-icon'] input[placeholder='Password']").type("Vtest@1234")
      cy.get('[type="submit"]').first().click();
     //cy.get("span[class='username'] strong").contains('Shak VAPT')

      cy.xpath("//a[normalize-space()='Add Practice']").click()

    })
})