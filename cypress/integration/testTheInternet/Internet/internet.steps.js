import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import TheInternetPage from '../../../pages/theInternetPage';
import ShiftingContentPage from '../../../pages/shiftingContentPage';
import ChallengingDOMPage from '../../../pages/challengingDOMPage';



Given(/^I navigate to the landing page of the-internet/, () => {
    TheInternetPage.visit();
});

When(/^I click the List link on the Shifting Content Page/, () => {
    TheInternetPage.clickShiftingContent();
    ShiftingContentPage.clickList();
});

When(/^I click the Home link on the Shifting Content: Menu Element Page/, () => {
    TheInternetPage.clickShiftingContent();
    ShiftingContentPage.clickHomeOnMenuPage();
});

When(/^I click the Contact Us link on the Shifting Content: Menu Element Page/, () => {
    TheInternetPage.clickShiftingContent();
    ShiftingContentPage.clickContactUsOnMenuPage();
});

Then(/^I should be on the landing page of the internet/, () => {
    cy.contains('Welcome to the-internet').should('be.visible')
    cy.url().should('include', 'http://the-internet.herokuapp.com/')
});

When(/^I click the Challenging DOM link on the landing page of the-internet/, () => {
    TheInternetPage.clickChallengingDOM();
});

When('I click the {string} button on the Challenging DOM page', (whichButton) => {
    let initialIDs = ChallengingDOMPage.getButtonIds();
    cy.wrap(initialIDs).as('initialIds')
    ChallengingDOMPage.clickButton(whichButton);
});

When('I can tell that the Challenging DOM page reloaded', () => {
    let currentIDs = ChallengingDOMPage.getButtonIds();
    // using aliases can be tricky, need to be sure to document where they come from
    // @initialIds is set in the step (I click the {string} button on the Challenging DOM page)
    cy.get('@initialIds').should('not.equal', currentIDs)
});

Then('The table has {int} rows of {int} columns each', (rows, columns) => {
    ChallengingDOMPage.getTableRowsAlias() // this method creates the alias @tableRows
    cy.get('@tableRows').its('length').should('equal', rows)
    cy.get('@tableRows').each(function ($tr, _index, _children) {
        cy.wrap($tr).children().should('have.length', columns)
    })
});