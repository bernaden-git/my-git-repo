import login from "./loginpage";

describe('LoginPage',()=> {
    //NON POM
    it("csslocators", () => {
        cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
        cy.get('#username').type("bernalumangyao@gmail.com")
        cy.get('#password').type("Linkbearna456*")
        cy.get('.login__form_action_container [aria-label="Sign in"]').click()

        //cy.get('.ember-view block[href="/in/berna-lumangyao/"').contains("Bernaden Lumangyao")
        cy.xpath('/html/body/div[5]/div[3]/div/div/div[2]/div/div/div/div/div[1]/div[2]/a/div[2]').contains("Bernaden Lumangyao")
    })

    //POM
    it.only("LoginPageTest", () => {
        cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")

        const ln = new login();  
            ln.setUserName("bernalumangyao@gmail.com");
            ln.setPassword("Linkbearna456*");
            ln.clickSubmit();
            ln.verifyLogin();

    })
})

