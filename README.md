# PsychTodayExercise

UI tests against [the-internet](http://the-internet.herokuapp.com/) using only Cypress.

The tests are in "the_internet_spec.js" and use the syntax provided by [Mocha](https://mochajs.org/). Cypress also has some other tools bundled into it to make testing easier - [Bundled Tools](https://docs.cypress.io/guides/references/bundled-tools#Mocha).

The benefits of pure Cypress include
* tests can be broken up logically into files as we see fit
* most javascript developers should be familiar with the Mocha syntax
* page definitions and actions are defined in one place

Some drawbacks of pure Cypress include 
* not easy to read the tests for non-technical teammates
* organizing a large amount of tests could get messy very quickly
