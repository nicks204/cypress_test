Feature: Create Project

    As a logged in User
    I want to create the Project

    Background:
        Given user open the login Page
        When user enter a username "nikunjshah204@gmail.com"
        And user enter a password "infosys123"
        And user click the sign-in button

    Scenario: Create Project
        When User Navigates to Project Menu
        And User clicks on the New Project button
        And User enters the Name "TestName1" descriotion "Some Description" and Click Add button
        Then Project should be create successfully