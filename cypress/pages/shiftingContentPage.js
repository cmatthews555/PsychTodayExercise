

const SHIFTING_CONTENT_MENU_LINK = '[href="/shifting_content/menu"]';
const SHIFTING_CONTENT_LIST_LINK = '[href="/shifting_content/list"]';

class ShiftingContentPage {
  static clickMenu() {
    cy.get(SHIFTING_CONTENT_MENU_LINK).click();
    cy.url().should('include', 'shifting_content/menu')
  }

  static clickList() {
    cy.get(SHIFTING_CONTENT_LIST_LINK).click();
    cy.url().should('include', 'shifting_content/list')
  }

  static clickHomeOnMenuPage() {
    cy.get(SHIFTING_CONTENT_MENU_LINK).click();
    cy.url().should('include', 'shifting_content/menu')
    cy.get('[href="/"]').click()
  }
}

export default ShiftingContentPage;