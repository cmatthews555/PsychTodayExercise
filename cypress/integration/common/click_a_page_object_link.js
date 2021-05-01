

class TheInternetPage {
  static visit() {
    cy.visit(url);
  }

  static type(query) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query);
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