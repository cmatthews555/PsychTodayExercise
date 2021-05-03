# PsychTodayExercise

UI tests against [the-internet](http://the-internet.herokuapp.com/) using Cucumber, Cypress and the page object model. 

The scenarios are described in Gherkin in the .feature file. These files are what our business partners would review which helps everyone
    have a shared understanding of what the feature should do

The steps are implemented in the .steps.js files. At this steps level we should assert values and call page object methods. The manipulation of page elements should be
    done through page object methods

The pages and their objects are described and defined in the page files. These are normal javascript classes that hold the locators and methods for interacting
    with elements on a page. These classes should only define and interact with elements, assertions at the page level should be kept to a minimum.

The benefits of the page object model include 
    - single place for maintaining element locators (this is a huge benefit, especially once there are a lot of locators)
    - getters and setters for elements on the page mean the step definitions can focus on using the elements, not finding them
    - separation of responsibilities make it easier to handle large applications

The downside of page objects include
    - avoiding assertions at the page level can be tricky/cumbersome, especially with Cypress. Note how I had to return an alias in the ChallengingDOMPage.js
    - the page classes add another point of failure, as opposed to when the locators and the actions are in the same place