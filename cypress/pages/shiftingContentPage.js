
// page object locators
const SHIFTING_CONTENT_LIST_LINK = '[href="/shifting_content/list"]';
const SHIFTING_CONTENT_MENU_LINK = '[href="/shifting_content/menu"]'
const CONTACT_US_LINK = '[href="/contact-us/"]';
const HOME_LINK = '[href="/"]'

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
    ShiftingContentPage.clickMenu()
    cy.get(HOME_LINK).click()
  }

  static clickContactUsOnMenuPage(){
    ShiftingContentPage.clickMenu()
    cy.get(CONTACT_US_LINK).click()
  }
}

export default ShiftingContentPage;