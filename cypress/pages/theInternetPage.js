
//page object locators
const URL = "http://the-internet.herokuapp.com/";
const SHIFTING_CONTENT_LINK = '[href="/shifting_content"]';
const CHALLENGING_DOM_LINK = '[href="/challenging_dom"]';

class TheInternetPage {
  static visit() {
    cy.visit(URL);
    cy.url().should('include', 'the-internet')
  }

  static clickShiftingContent() {
    cy.get(SHIFTING_CONTENT_LINK).click();
    cy.url().should('include', 'shifting_content')
  }

    static clickChallengingDOM() {
    cy.get(CHALLENGING_DOM_LINK).click();
    cy.url().should('include', 'challenging_dom')
  }
}

export default TheInternetPage;