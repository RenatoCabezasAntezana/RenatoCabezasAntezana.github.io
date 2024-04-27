class LoginPage {
    elements = {
        username: () => cy.get('#input-27'),
        password: () => cy.get('#input-28'),
        buttonLogin: () => cy.get('[type="button"] span').eq(1),
    }
    
    navigateInteligenio(environment){
        cy.visit(Cypress.env(environment).web)
    }
    writeCredentials(username,password){
        this.elements.username().type(username)
        this.elements.password().type(password)
    }
    clickButtonLogin(){
        this.elements.buttonLogin().click() 
    }
}
export default new LoginPage()