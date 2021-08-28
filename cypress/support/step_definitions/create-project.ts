import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../pages/home-page";

And("User enters the Name {string} descriotion {string} and Click Add button", (name: string, description: string) => {
    homePage.enterProjectDetails(name, description);
});


When("User Navigates to Project Menu", () => {
    homePage.clickProjectMenu();
});

And("User clicks on the New Project button", () => {
    homePage.clickAddProject();
});

And("User extends the Created Project and click on New Simulation", () => {
    homePage.ExtendCreatedProject();
    homePage.ClickNewSimulation();
});

And("User enters the Simulation name {string} and click Next", (simname: string) => {
    homePage.enterSimuationDetails(simname);
});



Then("Project should be create successfully", () => {
    homePage.projectCreated();
});