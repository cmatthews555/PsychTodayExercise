# PsychTodayExercise
UI tests against [the-internet](http://the-internet.herokuapp.com/) using Cucumber, Cypress and the page object model. 

# Overview
The scenarios are described in Gherkin in the .feature file. These files are what our business partners would review which helps everyone
    have a shared understanding of what the feature should do

The steps are implemented in the .steps.js files. At this steps level we should assert values and call page object methods. The manipulation of page elements should be
    done through page object methods

The pages and their objects are described and defined in the page files. These are normal javascript classes that hold the locators and methods for interacting
    with elements on a page. These classes should only define and interact with elements, assertions at the page level should be kept to a minimum.

# Installation
1. Install Cypress `npm install cypress --save-dev`
2. Install Cucumber preprocessor `npm install --save-dev cypress-cucumber-preprocessor`

# Run the tests
- `npm run cy:run:chrome` - run in Chrome
- `npm run cy:run:edge` - run in Edge
- `npm run test` - run headless
- `npm run cypress:open` - open the Cypress test runner and choose the feature file

# Thoughts on this approach
The benefits of the Cypress + Cucumber + page object model include
* single place for maintaining element locators (this is a huge benefit, especially once there are a lot of locators)
* getters and setters for elements on the page mean the step definitions can focus on using the elements, not finding them
* separation of responsibilities make it easier to handle large applications
* Cucumber features can serve as documentation to share with stakeholders
* tags allow supreme flexibility in which tests to run
* is NOT Selenium
* cross browser testing

The downside of page objects include
* avoiding assertions at the page level can be tricky/cumbersome, especially with Cypress. Note how I had to return an alias in the ChallengingDOMPage.js
* the page classes add another point of failure, as opposed to when the locators and the actions are in the same place
* to use all of the features of Cypress requires the Dashboard which has a free tier, but after that costs money. [Cypress Dashboard](https://docs.cypress.io/guides/dashboard/introduction)

# To run in CI
GitLab integrates with Cypress, and the instructions look pretty simple. Otherwise, this can be run from the command line once the needed node modules are installed on the CI server. [Cypress CI](https://docs.cypress.io/guides/continuous-integration/introduction#Examples)

# Historical results / tracking
I'd sugest leaning on Jenkins/GitLab for historical execution, but ideally our test suite is so fast that we don't need too much history. With a fast suite of tests we can run the tests so frequently that we have confidence in the stability of "master" and the opportunity for "code drift" is reduced the more often we run the tests.
