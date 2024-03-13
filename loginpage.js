class login
{
    setUserName(username)
    {
        cy.get('#username').type(username);

    }
    
    setPassword(password)
    {
        cy.get('#password').type(password);

    }


    clickSubmit()
    {
        cy.get('.login__form_action_container [aria-label="Sign in"]').click();
    }

    verifyLogin()
    {
        cy.xpath('/html/body/div[5]/div[3]/div/div/div[2]/div/div/div/div/div[1]/div[2]/a/div[2]').contains("Bernaden Lumangyao");
    }
}

export default login;
//adding sample comment here