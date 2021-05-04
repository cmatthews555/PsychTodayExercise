Feature: demonstrate API testing using https://jsonplaceholder.typicode.com

Background:
    * url 'https://jsonplaceholder.typicode.com'

Scenario: Create a new post on json placeholder
    * path 'posts'
    * request {title: 'Alicia', body: '3 hour drive', id: 'aKeys1'}
    * method post
    * status 201
    * match response.title == 'Alicia'