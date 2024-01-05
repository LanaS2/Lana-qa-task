import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CreateAccountPageActions from "../../../../pageObject/createAccount/actions.cy";
import CreateAccountPageAssertions from "../../../../pageObject/createAccount/assertions.cy";
const firstName = "lana";
const lastName = "salameh";
const email = "lanasalameh" + Math.floor(Math.random() * 100) + "@gmail.com";
const password = "test@123%622";
const confirmPassword = "test@123%622";

Given("The user navigated to create account page", () => {
  CreateAccountPage.visit();
});

When("Type {string} in the field", (fieldName) => {
  switch (fieldName) {
    case "firstName":
      CreateAccountPage.typeFirstName(firstName);
      break;
    case "lastName":
      CreateAccountPage.typeLastName(lastName);
      break;
    case "email":
      CreateAccountPage.typeEmail(email);
      break;
    case "password":
      CreateAccountPage.typePassword(password);
      break;
    case "confirmPassword":
      CreateAccountPage.typeConfirmPassword(confirmPassword);
      break;
  }
});

When("Clicks on Create an account button", () => {
  CreateAccountPage.clickCreateAccountButton();
});

Then("The Account should be created successfully", () => {
  CreateAccountPage.verifyAccountCreationSuccess();
});