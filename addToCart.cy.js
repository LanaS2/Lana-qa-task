import {
  Given,
  Then,
  When,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import addToCartActions from "../../../../pageObject/addToCart/actions.cy";
import addToCartAssertions from "../../../../pageObject/addToCart/assertions.cy";

const addaction = new addToCartActions();
const addassertion = new addToCartAssertions();

Given("The user navigated to magento website", () => {
  PageObject.visitHomePage();
});

When("The user search for shirt", (productName) => {
  PageObject.searchForProduct(productName);
});
When("The user choose the product X", () => {
  PageObject.chooseProductX();
});
When("The user choose the size and color for product X", (size, colorIndex) => {
  PageObject.chooseSizeAndColor(size, colorIndex);
});
When("The user click on Add to cart button", () => {
  PageObject.clickAddToCart();
});
Then("The product should be added to the cart successfully", (message) => {
  PageObject.checkAlertMessageContainValue(message);
});
