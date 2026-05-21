class assessment {

 
    static clickOnMenuOption(option){
        cy.get('.card-body').contains(option).click()
    }

     static selectFormsMenuOption(option, subMenuOption){
        cy.get('.header-text').contains(option).click()
        cy.get('.element-list').contains(subMenuOption).click()
    }

    static fillOutPracticeForm(){
        cy.fixture('form.json').then((formInfo) => {
            cy.get('input#firstName').type(formInfo.firstName)
             cy.get('input#lastName').type(formInfo.lastName)
              cy.get('input#userEmail').type(formInfo.email)
              cy.get('#genterWrapper').find('input[value="Male"]').click()
               cy.get('input#userNumber').type(formInfo.mobile)
               cy.get('input#subjectsInput').type(`${formInfo.subject}{enter}`)
               cy.get('#hobbiesWrapper').find('input').first().click()
               cy.get('#currentAddress').type(formInfo.currentAddress)
               cy.get('#state').find('input').type(`${formInfo.state}{enter}`)
                cy.get('#city').find('input').type(`${formInfo.city}{enter}`)
                cy.get('#uploadPicture').selectFile('cypress/fixtures/pic.jpg', { action: 'drag-drop' })

        })
    }

    static clickOnSubmitButton(){
        cy.get('button#submit').click()
    }

    static verifySubmittedForm() {
        cy.get('.modal-title').contains('Thanks for submitting the form').should('be.visible')
    }

    static veriFySavedInfo() {
        const today = new Date()
        const day = today.toLocaleString('en-US', { day: 'numeric' });
        const month = today.toLocaleString('en-US', { month: 'long' });
        const year = today.toLocaleString('en-US', { year: 'numeric' });
        cy.fixture('form.json').then((formInfo) => {
        cy.get('.table-responsive').find('td').contains(`${formInfo.firstName} ${formInfo.lastName}`)
        .should('be.visible')
        cy.get('.table-responsive').find('td').contains(formInfo.email).should('be.visible')
        cy.get('.table-responsive').find('td').contains('Male').should('be.visible')
        cy.get('.table-responsive').find('td').contains(formInfo.mobile).should('be.visible')
         cy.get('.table-responsive').find('td').contains(`${day} ${month},${year}`).should('be.visible')
        cy.get('.table-responsive').find('td').contains(formInfo.subject).should('be.visible')
        cy.get('.table-responsive').find('td').contains('Sports').should('be.visible')
        cy.get('.table-responsive').find('td').contains('pic.jpg').should('be.visible')
         cy.get('.table-responsive').find('td').contains(formInfo.currentAddress).should('be.visible')
         cy.get('.table-responsive').find('td').contains(`${formInfo.state} ${formInfo.city}`)
        })
    }

}

export default assessment