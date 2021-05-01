import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import TheInternetPage from '../../../pages/theInternetPage';
import ShiftingContentPage from '../../../pages/shiftingContentPage';



Given(/^I navigate to the landing page of the internet/, () => {
    TheInternetPage.visit();
});

When(/^on the Shifting Content Page click the menu link/, () => {
    ShiftingContentPage.clickMenu();
});

When(/^on the Shifting Content Page click the list link/, () => {
    ShiftingContentPage.clickList();
});

When(/^on the Shifting Content: Menu Element Page click the Home link/, () => {
    TheInternetPage.clickShiftingContent();
    ShiftingContentPage.clickHomeOnMenuPage();
});

Then(/^I should be on the landing page of the internet/, () => {
    cy.contains('Welcome to the-internet').should('be.visible')
    cy.url().should('include', 'http://the-internet.herokuapp.com/')
});