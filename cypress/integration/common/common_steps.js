import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Then('I should see the text {string} on screen', (visibleText) => {
  cy.contains(visibleText).should('be.visible')
});