# PsychTodayExercise

Karate implementation of the technical exercise for Psychology Today. 

# Overview
Karate is an all in one framework that provides API testing AND UI testing, along with performance tests and cross browser testing.
[Karate](https://github.com/intuit/karate) 

# Installation
To install Karate download the 1.0.1 zip file from [here](https://github.com/intuit/karate/releases)
Extract that zip file into your desired directory and that's IT!

# Run the tests
Once the directory is cloned the feature files can be run from VS Code via the VS Code extension Karate Runner 
OR
From the command line just as easily
`java -jar karate.jar -T 3 -t src/PsychToday`

# Thoughts on this approach
Benefits of Karate
- easy to install via standalone jar
- robust community, designed by testers for testers
- plenty of baked in tools like Cucumber
- better alternative to [selenium](https://hackernoon.com/the-world-needs-an-alternative-to-selenium-so-we-built-one-zrk3j3nyr) 
- tags, command line execution and the standalone jar mean it will be VERY easy to set up continuous integration

Drawbacks of Karate
- Feature files are not easy to read, they are scripts not Gherkin

# To run in CI
No matter what CI tool we use Karate makes CI pretty simple. Install the jar file on the server, run the tests via the command line, drink coffee. We would use the
tags to control the level of testing (regression, smoke, etc) AND the browsers (we could add a hook file to load the appropriate driver based on tag) AND since the tests can run in parallel the execution should be fairly quick. 

# Historical results / tracking
I'd sugest leaning on Jenkins/GitLab for historical execution, but ideally our test suite is so fast that we don't need too much history. With a fast suite of tests we can run the tests so frequently that we have confidence in the stability of "master" and the opportunity for "code drift" is reduced the more often we run the tests.