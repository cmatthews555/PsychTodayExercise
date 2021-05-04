Feature: Test the internet according to Heroku

Background: 
* configure driver = { type: 'ie' }

Scenario: The Home button on the Shifting Content -> Menu page returns user to the home page of the-internet
    * driver 'http://the-internet.herokuapp.com/'
    * waitForUrl('http://the-internet.herokuapp.com/')
    * scroll('[href="/shifting_content"]').click()
    * waitForUrl('/shifting_content')
    * click('[href="/shifting_content/menu"]')
    * waitForUrl('/shifting_content/menu')
    * click('[href="/"]')
    * waitForText('body', 'Welcome to the-internet')