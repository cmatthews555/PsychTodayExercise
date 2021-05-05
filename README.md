# PsychTodayExercise

UI tests against [the-internet](http://the-internet.herokuapp.com/) using only Cypress.

# Overview
The tests are in "the_internet_spec.js" and use the syntax provided by [Mocha](https://mochajs.org/). Cypress also has some other tools bundled into it to make testing easier - [Bundled Tools](https://docs.cypress.io/guides/references/bundled-tools#Mocha).

# Installation
1. Install Cypress `npm install cypress --save-dev`

# Run the tests
* `npm run cy:run:chrome` - run in Chrome
* `npm run cy:run:edge` - run in Edge
* `npm run test` - run headless
* `npm run cypress:open` - open the Cypress test runner and choose the feature file

# Thoughts on this approach

The benefits of pure Cypress include
* tests can be broken up logically into files as we see fit
* most javascript developers should be familiar with the Mocha syntax
* page definitions and actions are defined in one place
* is NOT Selenium
* cross browser testing
* robust community support

Some drawbacks of pure Cypress include 
* not easy to read the tests for non-technical teammates
* organizing a large amount of tests could get messy very quickly

# To run in CI
GitLab integrates with Cypress, and the instructions look pretty simple. Otherwise, this can be run from the command line once the needed node modules are installed on the CI server. [Cypress CI](https://docs.cypress.io/guides/continuous-integration/introduction#Examples)

# Historical results / tracking
I'd sugest leaning on Jenkins/GitLab for historical execution, but ideally our test suite is so fast that we don't need too much history. With a fast suite of tests we can run the tests so frequently that we have confidence in the stability of "master" and the opportunity for "code drift" is reduced the more often we run the tests.
