Feature: Test the internet according to Heroku

Background: 
Given configure driver = { type: 'chrome' } //https://intuit.github.io/karate/karate-core/#driver-types
* call read 'locators.json'
* driver internetLandingPage.url
* waitForUrl(internetLandingPage.url)

@functional
Scenario: The Home button on the Shifting Content -> Menu page returns user to the home page of the-internet
    * click(internetLandingPage.shiftingContentLink)
    * waitForUrl('/shifting_content')
    * click(shiftingContentPage.menuLink)
    * waitForUrl('/shifting_content/menu')
    When click(shiftingContentPage.menu.homeLink)
    Then waitForText('body', 'Welcome to the-internet')

@functional
Scenario: The Contact Us button on the Shifting Content -> Menu page shows Not Found
    * click(internetLandingPage.shiftingContentLink)
    * waitForUrl('/shifting_content')
    * click(shiftingContentPage.menuLink)
    * waitForUrl('/shifting_content/menu')
    When click(shiftingContentPage.menu.contactUsLink)
    Then waitForText('h1', 'Not Found')

@functional
Scenario: The English phrase on the Shifting Content -> List page can be found
    * click(internetLandingPage.shiftingContentLink)
    * waitForUrl('/shifting_content')
    When click(shiftingContentPage.listLink)
    * waitForUrl('/shifting_content/list')
    Then waitForText('body', "Important Information")

@smoke
Scenario: Clicking a button on the Challenging DOM reloads the page
    * click(internetLandingPage.challengingDOMLink)
    * waitForUrl('/challenging_dom')
    * def button1ID = attribute(challengingDOMPage.firstButton, 'id')
    * print 'button 1 ID: ', button1ID
    * def button2ID = attribute(challengingDOMPage.secondButton, 'id')
    * print 'button 2 ID: ', button2ID
    * def button3ID = attribute(challengingDOMPage.thirdButton, 'id')
    * print 'button 3 ID: ', button3ID
    When click(challengingDOMPage.firstButton)
    * waitForUrl('/challenging_dom')
    Then match button1ID != attribute(challengingDOMPage.firstButton, 'id')
    * match button2ID != attribute(challengingDOMPage.secondButton, 'id')
    * match button3ID != attribute(challengingDOMPage.thirdButton, 'id')

 @smoke
 Scenario: Assert the dimensions of the table on the Challenging DOM page
    When click(internetLandingPage.challengingDOMLink)
    * waitForUrl('/challenging_dom')
    * waitForResultCount(challengingDOMPage.tableRows, 10)
    Then def trElements = locateAll(challengingDOMPage.tableRows)
    * match karate.sizeOf(trElements) == 10
    * match trElements == '#[]? _.children.length == 7'