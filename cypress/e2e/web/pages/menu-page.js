class MenuPage {
    elements = {
        titleCollege: () => cy.get('.text-center.text-h7.font-weight-bold')
    }
    validateTitleHomePage(){
        this.elements.titleCollege().should('to.exist')
    }

    
    
}
export default new MenuPage()