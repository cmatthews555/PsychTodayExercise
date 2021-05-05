Feature: demonstrate API testing using https://jsonplaceholder.typicode.com

Background:
    * url 'https://jsonplaceholder.typicode.com'

@functional
Scenario: Create a new post on json placeholder
    * path 'posts'
    * request {title: 'Alicia', body: '3 hour drive', id: 'aKeys1'}
    * method post
    * status 201
    * match response.title == 'Alicia'

@negative
Scenario: Send a post to invalid json placeholder path
    * path 'postsforme'
    * request {title: 'Alicia', body: '3 hour drive', id: 'aKeys1'}
    * method post
    * status 404

@negative
Scenario: Get an invalid post from json placeholder
    * path 'posts/xanadu'
    * method get
    * status 404

@negative
Scenario: Get an invalid nested resource from json placeholder
    * path 'posts/1/notForReal'
    * method get
    * status 404

@negative
Scenario: Get an empty response for nonexistent query param value from json placeholder
    * path '/comments'
    * param email = "33"
    * method get
    * status 200
    * match response == []