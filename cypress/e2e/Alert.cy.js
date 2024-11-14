describe('Alerts', () => {

    it.skip('Js Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })

        //alert window autoamtically closed by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    it('Js Confirm Alert-ok button ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        //cypress automactically closed alert window by using ok button-default
        cy.get("#result").should('have.text','You clicked: Ok')
    })

    it('Js Confirm Alert-cancle button ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm',()=>false)//cypress closes alert window using cancle button
        cy.get("#result").should('have.text','You clicked: Cancel')
    })

    it.skip('Js prompt Alert ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
      //  cy.on('window:prompt',()=>false)
        cy.get("#result").should('have.text','You entered: null')
    })

    it.only('athetication Alert ', () => {
              //approch1
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
        //                                                                 {username:'admin'
        //                                                                 ,password:"admin"}
        //                                                             });
        // cy.get("div[class='example'] p").should('have.contain',"Congratulations!")

      //approch2
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
      cy.get("div[class='example'] p").should('have.contain',"Congratulations!")
    })



})