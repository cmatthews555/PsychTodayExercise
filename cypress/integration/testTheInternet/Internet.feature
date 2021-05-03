@feature-tag
Feature: The Internet according to Heroku

    I want to test certain features of the-internet

    @end2end
    Scenario: The Home button on the Shifting Content -> Menu page returns user to the home page of the-internet
        Given I navigate to the landing page of the-internet
        When I click the Home link on the Shifting Content: Menu Element Page
        Then I should be on the landing page of the internet

    @end2end
    Scenario: The Contact Us button on the Shifting Content -> Menu page shows Not Found
        Given I navigate to the landing page of the-internet
        When I click the Contact Us link on the Shifting Content: Menu Element Page
        Then I should see the text "Not Found" on screen

    @end2end
    Scenario: The English phrase on the Shifting Content -> List page can be found
        Given I navigate to the landing page of the-internet
        When I click the List link on the Shifting Content Page
        Then I should see the text "Important Information You\'re Looking For" on screen

    @end2end
    Scenario: Clicking a button on the Challenging DOM reloads the page
        Given I navigate to the landing page of the-internet
        And I click the Challenging DOM link on the landing page of the-internet
        When I click the "first" button on the Challenging DOM page
        Then I can tell that the Challenging DOM page reloaded

    @end2end
    Scenario: Assert the dimensions of the table on the Challenging DOM page
        Given I navigate to the landing page of the-internet
        When I click the Challenging DOM link on the landing page of the-internet
        Then The table has 10 rows of 7 columns each