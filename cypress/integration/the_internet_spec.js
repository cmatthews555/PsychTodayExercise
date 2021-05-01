/// <reference types="cypress" />

describe('Explore the shifting content link on the-internet', () => {
    // declare constants
    const SHIFTING_CONTENT_LINK = '[href="/shifting_content"]';
    const clickNavLinkOnShiftingContent = (hrefValue, expectedURLPathFragment) => {
        cy.get(hrefValue).click()
        cy.url().should('include', expectedURLPathFragment)
    }

    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
    })

    it('Assert Home button behavior on shifting content link menu', () => {
        cy.get(SHIFTING_CONTENT_LINK).click()
        clickNavLinkOnShiftingContent('[href="/shifting_content/menu"]', 'shifting_content/menu')
        // clicking the 'Home' menu item should redirect to the home page of the-internet
        cy.get('[href="/"]').click()
        cy.contains('Welcome to the-internet').should('be.visible')
    })

    it('Assert Contact Us button behavior on shifting content link menu', () => {
        cy.get(SHIFTING_CONTENT_LINK).click()
        clickNavLinkOnShiftingContent('[href="/shifting_content/menu"]', 'shifting_content/menu')
        // clicking the 'Contact Us' menu item should show 'Not Found'
        cy.get('[href="/contact-us/"]').click()
        cy.get('h1').should('not.have.text', 'Welcome to the-internet')
        cy.contains('Not Found').should('be.visible')
    })

    it('Assert the static content exists in the shifting content link list', () => {
        cy.get(SHIFTING_CONTENT_LINK).click()
        clickNavLinkOnShiftingContent('[href="/shifting_content/list"]', 'shifting_content/list')
        // this is the only phrase on the page in English
        cy.contains('Important Information You\'re Looking For').should('be.visible')
    })
})

describe('Explore the challenging DOM link on the-internet', () => {
    // declare constants
    const clickChallengingDOMLink = () => {
        cy.get('[href="/challenging_dom"]').click()
        cy.url().should('include', 'challenging_dom')
    }
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
    })

    it('Assert clicking a button reloads the page', () => {
        clickChallengingDOMLink()
        // save the buttons as aliases for later
        cy.get('.button:nth-of-type(1)').as('firstButton')
        cy.get('.button:nth-of-type(2)').as('secondButton')
        cy.get('.button:nth-of-type(3)').as('thirdButton')

        // click the first button to reload the entire page
        cy.get('@firstButton').then(($firstButton) => {
            const initialFirstButtonId = $firstButton.attr("id")
            let initialSecondButtonId = ''
            let initialThirdButtonId = ''
            cy.get('@secondButton').then(($secondButton) => {
                initialSecondButtonId = $secondButton.attr("id")
            })
            cy.get('@thirdButton').then(($thirdButton) => {
                initialThirdButtonId = $thirdButton.attr("id")
            })

            cy.get('@firstButton').click()

            cy.get('@firstButton').then(($firstButtonAfterClick) => {
                const firstButtonIDAfterClick = $firstButtonAfterClick.attr("id")
                expect(initialFirstButtonId).not.to.eq(firstButtonIDAfterClick)
            })

            cy.get('@secondButton').then(($secondButtonAfterClick) => {
                const secondButtonIDAfterClick = $secondButtonAfterClick.attr("id")
                expect(initialSecondButtonId).not.to.eq(secondButtonIDAfterClick)
            })

            cy.get('@thirdButton').then(($thirdButtonAfterClick) => {
                const thirdButtonIDAfterClick = $thirdButtonAfterClick.attr("id")
                expect(initialThirdButtonId).not.to.eq(thirdButtonIDAfterClick)
            })
        })

    })

    it('Assert count of child elements of the table on the challenging DOM', () => {
        clickChallengingDOMLink()
        // should have 10 rows
        cy.get('tbody').children().should('have.length', 10)
        // each row should have 7 columns
        cy.get('tbody').children().each(function ($tr, _index, _children) {
            cy.wrap($tr).children().should('have.length', 7)
        })
    })
})