

const URL = "http://the-internet.herokuapp.com/";
const SHIFTING_CONTENT_LINK = '[href="/shifting_content"]';

class TheInternetPage {
  static visit() {
    cy.visit(URL);
  }

  static clickShiftingContent() {
    cy.get(SHIFTING_CONTENT_LINK).click();
  }

  static pressSearch() {
    // cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
    //   .click();
    cy.get(SEARCH_BUTTON).first().click();
    return new GoogleResultsPage();
  }

  static pressFeelLucky() {
    cy.get(FEEL_LUCKY_BUTTON).first().click();
  }
}

export default TheInternetPage;