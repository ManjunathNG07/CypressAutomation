import 'cypress-iframe'
describe('Handling iframe', () => {
    it('Approach01', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            .click() // Click to focus inside the iframe
            .type('{selectAll}{backspace}') // Select all and delete the existing text
            .type('Welcome'); // Type the new text
    });

    it('Approach02-by using custom command ', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.getIframe('#mce_0_ifr').type('{selectAll}{backspace}').type("welcome {cmd+a}")

    });

    it.only('Approach03-by pulgin ', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr')//load the frame
        cy.iframe('#mce_0_ifr').type('{selectAll}{backspace}')


    });
});
