Feature:check add to cart functionality
  Scenario: Verify that user can add a product to the cart
    Given The user navigated to the Magento website
    When The user searches for a shirt
    And The user choose the product X
    And The user choose the size and color for product X
    And The user click on Add to cart button
    Then The product should be added to the cart successfully
    