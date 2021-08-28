Feature: Login to Application

    As a valid user
    I want to log in to the Application

    @smoke
    Scenario Outline: Valid Login
        Given user open the login Page
        When user enter a username "<userName>"
        And user enter a password "<password>"
        And user click the sign-in button
        Then user should be able to login

        Examples:
            | userName                | password   |
            | nikunjshah204@gmail.com | infosys123 |
