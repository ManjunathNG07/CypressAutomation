import Login from "../PageObjects/loginPage";

describe('Page Object Pattern', () => {
    let userdata;

    before(() => {
        cy.fixture('orangehrm').then((data) => {
            userdata = data;
        });
    });

    it('POM test', () => {
        const login = new Login();
        login.launchUrl();
        login.setUserName(userdata.userName);
        login.setPassword(userdata.password);
        login.clickOnSumbitBtn();
        login.verifyLogin(userdata.expected);
    });
});
