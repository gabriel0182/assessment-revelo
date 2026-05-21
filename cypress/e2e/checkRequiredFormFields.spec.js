import assessment from "../support/pageObject/assessment"

describe('Check the required field on the Practice Form', () => {
	before(() => {
		cy.visit('/')
	})
	it('I navigate to the forms page', () => {
		assessment.clickOnMenuOption('Forms')
	})

	it('I navigate to the Practice Form ', () => {
		assessment.selectFormsMenuOption('Forms', 'Practice Form')
		
	})

	it('I click on the submit button without filling any field', () => {
		assessment.clickOnSubmitButton()	
        assessment.checkRequiredFields()
	})
})
