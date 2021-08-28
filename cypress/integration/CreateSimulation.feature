Feature: Create Project

    As a logged in User
    I want to create the Project

    Background:
        Given user open the login Page
        When user enter a username "nikunjshah204@gmail.com"
        And user enter a password "infosys123"
        And user click the sign-in button

    Scenario: Create Simulation
        When User Navigates to Project Menu
        And User clicks on the New Project button
        And User enters the Name "TestName2" descriotion "Some Description" and Click Add button
        And User extends the Created Project and click on New Simulation
        And User enters the Simulation name "SimName" and click Next
        Then New Simulation should get created
