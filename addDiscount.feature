Feature:Add Discount functionality
The user should be able to add discount

Scenario:Verify that we can Add a new discount successfully
  Given the user logged in as an admin user
  When the user navigate to the promotions area
  And the user choose to add a new discount
  And the user fill in the required information for the discount
  And the user save the new discount
  Then the discount should be successfully added
  And the user should see the added discount in the list of discounts

