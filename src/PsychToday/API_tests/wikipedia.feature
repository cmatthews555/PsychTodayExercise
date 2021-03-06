Feature: Use Wikipedia APIs to query for a page then get the summary of the page 

Background:
* url 'https://en.wikipedia.org'

@functional
Scenario: Query Wikipedia for wanda and vision
    Given path 'w/api.php'
    And params {action:'query', list: 'search', format: 'json', srlimit: 1}
    And param srsearch = 'wanda and vision'
    When method get
    Then status 200
    And match $.query.search[0].title == 'WandaVision'

    * path 'api/rest_v1/page/summary/' + response.query.search[0].title
    * method get
    Then status 200
    And match $.title == 'WandaVision'
    And def pageSummary = response.extract 
    And match pageSummary contains 'WandaVision is an American television miniseries created by Jac Schaeffer'


@negative
Scenario: Assert error details for invalid query params
    Given path 'w/api.php'
    And param action = 'foo'
    When method get
    Then status 200
    And match response contains 'badvalue'
    And match response contains 'Unrecognized value for parameter'

@negative
Scenario: Assert error code for invalid path
    Given path '/thisIsNotAThing'
    When method get
    Then status 404