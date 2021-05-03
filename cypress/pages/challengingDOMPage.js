
// page object locators
const FIRST_BUTTON = '.button:nth-of-type(1)';
const SECOND_BUTTON = '.button:nth-of-type(2)';
const THIRD_BUTTON = '.button:nth-of-type(3)';
const TABLE_BODY_LOCATOR = 'tbody';


// class variables
let firstButtonId = '';
let secondButtonId = '';
let thirdButtonId = '';


class ChallengingDOMPage {

    constructor() {
        return new ChallengingDOMPage
    }

    static clickButton(buttonToClick) {
        switch (buttonToClick) {
            case 'first':
                cy.get(FIRST_BUTTON).click()
                break;
            case 'second':
                cy.get(SECOND_BUTTON).click()
                break;
            case 'third':
                cy.get(THIRD_BUTTON).click()
                break;
            default:
                cy.get(FIRST_BUTTON).click()
        }

    }

    static getButtonIds() {
        let idArray = []
        cy.get(FIRST_BUTTON).then(($firstButton) => {
            firstButtonId = $firstButton.attr("id")
            idArray.push(firstButtonId)
        })

        cy.get(SECOND_BUTTON).then(($secondButton) => {
            secondButtonId = $secondButton.attr("id")
            idArray.push(secondButtonId)
        })

        cy.get(THIRD_BUTTON).then(($thirdButton) => {
            thirdButtonId = $thirdButton.attr("id")
            idArray.push(thirdButtonId)
        })
        console.log(idArray)
        return idArray
    }

    static getTableRowsAlias() {
        cy.get(TABLE_BODY_LOCATOR).find('tr').as('tableRows')
        return cy.get('@tableRows')
    }

}

export default ChallengingDOMPage;