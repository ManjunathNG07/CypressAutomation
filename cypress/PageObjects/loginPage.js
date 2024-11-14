class Login {
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblText = 'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)'


    launchUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    setUserName(username) {
        cy.get(this.txtUserName, { timeout: 10000 }).should('be.visible').type(username);
    }

    setPassword(password) {
        cy.get(this.txtPassword, { timeout: 10000 }).should('be.visible').type(password);
    }
    clickOnSumbitBtn() {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin(expected) {
        cy.get(this.lblText).should('have.text', expected)
    }


}

export default Login;