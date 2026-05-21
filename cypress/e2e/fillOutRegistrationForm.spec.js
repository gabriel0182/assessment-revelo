import assessment from "../support/pageObject/assessment"

describe('Fill out the registration form and verify the submitted info', () => {
	before(() => {
		cy.visit(Cypress.config('baseUrl'))
	})
	it('I navigate to the forms page', () => {
		assessment.clickOnMenuOption('Forms')
	})

	it('I navigate to the Practice Form ', () => {
		assessment.selectFormsMenuOption('Forms', 'Practice Form')
		
	})

	it('I fill out and send the Form ', () => {
	    assessment.fillOutPracticeForm()
		assessment.clickOnSubmitButton()
		assessment.verifySubmittedForm()
		assessment.veriFySavedInfo()	
	})
})